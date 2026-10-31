// Run: node --test tests/team-directory.test.cjs
// Optional independent membership reconciliation:
// NCAA_DIRECTORY_SNAPSHOT=/path/to/ncaa-response.json node --test tests/team-directory.test.cjs
const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const source = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const decode = s => s.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&amp;/g, '&');
function element(value = '') {
  return {
    value, textContent: '', options: [], listeners: {},
    classList: { toggle() {} }, style: {},
    addEventListener(event, handler) { this.listeners[event] = handler; },
    set innerHTML(markup) {
      this.markup = markup;
      this.options = [...markup.matchAll(/<option value="([^"]*)">([^<]*)<\/option>/g)]
        .map(m => ({ value: decode(m[1]), text: decode(m[2]) }));
    },
    get innerHTML() { return this.markup || ''; },
    get outerHTML() { return `<div>${this.textContent}</div>`; }
  };
}
async function load() {
  const elements = new Map();
  for (const id of [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1])) elements.set(id, element());
  for (const [id, value] of Object.entries({ pace: '68', adv: '3', first: '48', venue: 'home' })) elements.get(id).value = value;
  const pill = element();
  const fetches = [];
  const context = vm.createContext({
    document: {
      getElementById: id => elements.get(id),
      querySelector: () => pill,
      querySelectorAll: () => [],
      createElement: () => element()
    },
    fetch: async url => {
      fetches.push(url);
      assert.equal(url, './data/daily.json', 'Membership must not depend on a remote API');
      return { ok: true, json: async () => ({ date: '2026-10-30', updated_at: 'test', status: 'ok', games: [{ away: 'Memphis', home: 'Iowa State', away_score: 70, home_score: 75, state: 'Final' }] }) };
    }
  });
  vm.runInContext(fs.readFileSync(path.join(root, 'data/teams.js'), 'utf8'), context);
  vm.runInContext(fs.readFileSync(path.join(root, 'data/ratings.js'), 'utf8'), context);
  vm.runInContext(source, context);
  await new Promise(resolve => setImmediate(resolve));
  const directory = JSON.parse(vm.runInContext('JSON.stringify(NCAA_D1_DIRECTORY)', context));
  const ratings = JSON.parse(vm.runInContext('JSON.stringify(TEAMS)', context));
  return { context, directory, ratings, elements, fetches, pill };
}
test('2026–27 directory contains 365 distinct NCAA programs and no invented ratings', async () => {
  const { directory, ratings } = await load();
  assert.equal(directory.academicYear, 2027);
  assert.equal(directory.teams.length, 365);
  assert.equal(new Set(directory.teams.map(t => t.ncaaId)).size, 365);
  assert.equal(new Set(directory.teams.map(t => t.name)).size, 365);
  for (const team of directory.teams) {
    assert.ok(Number.isInteger(team.ncaaId) && team.name && team.officialName && team.conference);
    assert.deepEqual(Object.keys(team).sort(), ['conference', 'name', 'ncaaId', 'officialName']);
  }
  assert.ok(directory.teams.some(t => t.ncaaId === 11740 && t.name === 'West Florida'));
  assert.ok(!directory.teams.some(t => /Saint Francis|St\. Francis/.test(t.officialName)));
  assert.equal(ratings.length, 365);
  for (const rated of ratings) assert.ok(directory.teams.some(t => t.name === rated.name), rated.name);
  if (process.env.NCAA_DIRECTORY_SNAPSHOT) {
    const official = JSON.parse(fs.readFileSync(process.env.NCAA_DIRECTORY_SNAPSHOT, 'utf8'));
    assert.equal(official.length, 365);
    assert.ok(official.every(t => t.academicYear === 2027 && t.division === 1));
    assert.deepEqual(directory.teams.map(t => t.ncaaId).sort((a, b) => a - b), official.map(t => t.orgId).sort((a, b) => a - b));
    for (const team of directory.teams) {
      const member = official.find(t => t.orgId === team.ncaaId);
      assert.equal(team.officialName, member.nameOfficial);
      assert.equal(team.conference, member.conferenceName.trim());
    }
  }
});
test('every program appears exactly once in both dropdowns with correct rating status', async () => {
  const { directory, ratings, elements, pill } = await load();
  const rated = new Set(ratings.map(t => t.name));
  const expected = directory.teams.map(t => t.name).sort((a, b) => a.localeCompare(b));
  for (const id of ['away', 'home']) {
    const options = elements.get(id).options;
    assert.deepEqual(options.map(o => o.value), expected);
    for (const option of options) assert.equal(option.text, option.value + (ratings.find(t => t.name === option.value)?.source === 'torvik' ? ' · supplemental' : rated.has(option.value) ? '' : ' · unrated'));
  }
  assert.equal(pill.textContent, '365 rated · 365 listed');
  assert.match(elements.get('directoryStatus').textContent, /365 NCAA Division I/);
});
test('all 730 team selections calculate or show unavailable ratings without fabricating scores', async () => {
  const { directory, ratings, elements, context } = await load();
  const rated = new Set(ratings.map(t => t.name));
  for (const id of ['away', 'home']) {
    for (const team of directory.teams) {
      elements.get('away').value = 'Memphis';
      elements.get('home').value = 'Iowa State';
      elements.get(id).value = team.name;
      elements.get(id).listeners.input();
      if (rated.has(team.name)) {
        assert.ok(Number.isFinite(Number(elements.get('total').textContent)), `${id}: ${team.name}`);
        if (ratings.find(t => t.name === team.name).source === 'torvik') assert.match(elements.get('coverageWarning').textContent, /Supplemental Bart Torvik/);
        else assert.equal(elements.get('coverageWarning').textContent, '');
      } else {
        for (const metric of ['awayscore', 'homescore', 'spread', 'total', 'half', 'halfspread', 'awaytotal', 'hometotal', 'spreadedge', 'totaledge']) assert.equal(elements.get(metric).textContent, '—');
        assert.ok(elements.get('coverageWarning').textContent.includes(team.name));
      }
    }
  }
  elements.get('away').value = 'Memphis';
  elements.get('home').value = 'Iowa State';
  vm.runInContext('calculate()', context);
  assert.equal(elements.get('awayscore').textContent, '71.6');
  assert.equal(elements.get('homescore').textContent, '85.0');
  assert.equal(elements.get('total').textContent, '156.6');
});
test('rankings and the daily scoreboard still initialize', async () => {
  const { elements, fetches } = await load();
  assert.equal((elements.get('ratingrows').innerHTML.match(/<tr>/g) || []).length, 365);
  assert.equal(elements.get('count').textContent, '365 of 365 rated teams');
  assert.deepEqual(fetches, ['./data/daily.json']);
  assert.match(elements.get('daily-status').textContent, /Schedule date: 2026-10-30/);
  assert.match(elements.get('daily-games').innerHTML, /Memphis 70 @ Iowa State 75 · Final/);
});

test('all ratings are finite, identified, and traceable to a published source', async () => {
  const { directory, ratings, context } = await load();
  const metadata = JSON.parse(vm.runInContext('JSON.stringify(NCAA_D1_RATINGS)', context));
  assert.equal(new Set(ratings.map(t => t.ncaaId)).size, 365);
  assert.equal(new Set(ratings.map(t => t.name)).size, 365);
  assert.equal(ratings.filter(t => t.source === 'highlights').length, 358);
  assert.equal(ratings.filter(t => t.source === 'torvik').length, 7);
  for (const rating of ratings) {
    assert.ok(Number.isFinite(rating.off) && rating.off > 0);
    assert.ok(Number.isFinite(rating.def) && rating.def > 0);
    assert.ok(metadata.sources[rating.source]?.url.startsWith('https://'));
    assert.equal(directory.teams.find(t => t.ncaaId === rating.ncaaId)?.name, rating.name);
  }
  if (process.env.HIGHLIGHTS_RATINGS_SNAPSHOT) {
    const aliases = { 'New Orleans': 'LSU New Orleans', 'San José State': 'San Jose State' };
    const rows = JSON.parse(fs.readFileSync(process.env.HIGHLIGHTS_RATINGS_SNAPSHOT, 'utf8'));
    const published = new Map(rows.map(t => [aliases[t.name] || t.name, t]));
    for (const team of ratings.filter(t => t.source === 'highlights')) {
      assert.equal(team.off, published.get(team.name)?.off);
      assert.equal(team.def, published.get(team.name)?.def);
    }
  }
});
test('missing source data still produces no fabricated projection', async () => {
  const { elements, context } = await load();
  vm.runInContext("TEAMS.splice(TEAMS.findIndex(t => t.name === 'West Florida'), 1)", context);
  elements.get('away').value = 'West Florida';
  elements.get('away').listeners.input();
  for (const id of ['awayscore', 'homescore', 'total', 'spread']) assert.equal(elements.get(id).textContent, '—');
  assert.match(elements.get('coverageWarning').textContent, /Ratings unavailable for West Florida/);
});
