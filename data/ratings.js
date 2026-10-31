// Published, sourced preseason estimates. No fallback ratings or team tempos are invented.
const NCAA_D1_RATINGS = {
  "season": "2026–27",
  "retrievedAt": "2026-10-31T02:34:19.355541+00:00",
  "ratingType": "Published preseason estimates; not observed 2026–27 results",
  "units": "Points per 100 possessions",
  "sources": {
    "highlights": {
      "name": "Highlights",
      "url": "https://www.highlights.mainmarket.com/college-basketball-efficiency-ratings",
      "count": 358,
      "notes": "Published 2026–27 preseason ratings based on prior-season results. The source lists 359 schools; Saint Francis is excluded because it no longer competes in Division I. Existing 191 offensive/defensive values match this source exactly. Conference labels from this source are not used."
    },
    "torvik": {
      "name": "Bart Torvik",
      "url": "https://barttorvik.com/trankpre.php?year=2027",
      "dataUrl": "https://barttorvik.com/2027_team_results.csv",
      "count": 7,
      "notes": "Supplemental published 2027 preseason adjusted efficiencies for the seven current programs absent from Highlights. CSV values rounded to one decimal, checked against the published preseason table. These are a different rating model, not calibrated to Highlights; matchups using them are explicitly labeled."
    }
  },
  "teams": [
    {
      "ncaaId": 2,
      "name": "Abilene Christian",
      "off": 103.7,
      "def": 108.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 721,
      "name": "Air Force",
      "off": 100.2,
      "def": 112.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 5,
      "name": "Akron",
      "off": 114.4,
      "def": 106.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 8,
      "name": "Alabama",
      "off": 118.3,
      "def": 105.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 6,
      "name": "Alabama A&M",
      "off": 105.3,
      "def": 112.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 7,
      "name": "Alabama State",
      "off": 103.2,
      "def": 111.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 17,
      "name": "Alcorn State",
      "off": 101.3,
      "def": 113.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 23,
      "name": "American University",
      "off": 107.2,
      "def": 109.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 27,
      "name": "App State",
      "off": 106.9,
      "def": 107.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 29,
      "name": "Arizona",
      "off": 117.4,
      "def": 99.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 28,
      "name": "Arizona State",
      "off": 110.8,
      "def": 106.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 31,
      "name": "Arkansas",
      "off": 118.0,
      "def": 105.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 30,
      "name": "Arkansas State",
      "off": 109.5,
      "def": 108.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 2678,
      "name": "Arkansas-Pine Bluff",
      "off": 105.0,
      "def": 113.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 725,
      "name": "Army",
      "off": 104.4,
      "def": 113.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 37,
      "name": "Auburn",
      "off": 116.0,
      "def": 107.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 43,
      "name": "Austin Peay",
      "off": 108.2,
      "def": 107.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 47,
      "name": "Ball State",
      "off": 103.3,
      "def": 108.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 51,
      "name": "Baylor",
      "off": 115.4,
      "def": 107.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 52,
      "name": "Bellarmine",
      "off": 112.0,
      "def": 116.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 14927,
      "name": "Belmont",
      "off": 114.6,
      "def": 107.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 61,
      "name": "Bethune-Cookman",
      "off": 105.2,
      "def": 109.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 62,
      "name": "Binghamton",
      "off": 103.2,
      "def": 115.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 66,
      "name": "Boise State",
      "off": 112.4,
      "def": 105.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 67,
      "name": "Boston College",
      "off": 105.2,
      "def": 104.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 68,
      "name": "Boston University",
      "off": 110.2,
      "def": 113.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 71,
      "name": "Bowling Green",
      "off": 108.0,
      "def": 105.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 72,
      "name": "Bradley",
      "off": 110.0,
      "def": 107.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 80,
      "name": "Brown",
      "off": 102.9,
      "def": 107.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 81,
      "name": "Bryant",
      "off": 101.9,
      "def": 112.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 83,
      "name": "Bucknell",
      "off": 102.7,
      "def": 111.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 86,
      "name": "Buffalo",
      "off": 110.6,
      "def": 111.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 87,
      "name": "Butler",
      "off": 111.8,
      "def": 107.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 77,
      "name": "BYU",
      "off": 116.9,
      "def": 104.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 90,
      "name": "Cal Poly",
      "off": 107.9,
      "def": 110.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 94,
      "name": "Cal State Bakersfield",
      "off": 104.1,
      "def": 112.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 97,
      "name": "Cal State Fullerton",
      "off": 107.7,
      "def": 109.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 101,
      "name": "Cal State Northridge",
      "off": 108.0,
      "def": 108.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 107,
      "name": "California",
      "off": 110.8,
      "def": 105.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 30135,
      "name": "California Baptist",
      "off": 107.5,
      "def": 104.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 115,
      "name": "Campbell",
      "off": 109.0,
      "def": 110.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 116,
      "name": "Canisius",
      "off": 101.5,
      "def": 111.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 1004,
      "name": "Central Arkansas",
      "off": 108.1,
      "def": 108.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 127,
      "name": "Central Connecticut",
      "off": 106.1,
      "def": 111.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 129,
      "name": "Central Michigan",
      "off": 106.6,
      "def": 111.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 1014,
      "name": "Charleston",
      "off": 108.3,
      "def": 108.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 48,
      "name": "Charleston Southern",
      "off": 107.0,
      "def": 109.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 458,
      "name": "Charlotte",
      "off": 110.4,
      "def": 110.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 693,
      "name": "Chattanooga",
      "off": 107.1,
      "def": 112.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 136,
      "name": "Chicago State",
      "off": 103.2,
      "def": 113.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 140,
      "name": "Cincinnati",
      "off": 108.9,
      "def": 101.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 147,
      "name": "Clemson",
      "off": 112.3,
      "def": 102.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 148,
      "name": "Cleveland State",
      "off": 108.1,
      "def": 116.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 149,
      "name": "Coastal Carolina",
      "off": 104.6,
      "def": 107.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 153,
      "name": "Colgate",
      "off": 108.4,
      "def": 110.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 157,
      "name": "Colorado",
      "off": 112.7,
      "def": 108.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 156,
      "name": "Colorado State",
      "off": 113.4,
      "def": 109.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 158,
      "name": "Columbia",
      "off": 108.7,
      "def": 109.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 165,
      "name": "Coppin State",
      "off": 99.5,
      "def": 114.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 167,
      "name": "Cornell",
      "off": 114.2,
      "def": 113.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 169,
      "name": "Creighton",
      "off": 111.1,
      "def": 107.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 172,
      "name": "Dartmouth",
      "off": 106.6,
      "def": 110.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 173,
      "name": "Davidson",
      "off": 108.3,
      "def": 106.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 175,
      "name": "Dayton",
      "off": 109.3,
      "def": 103.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 180,
      "name": "Delaware",
      "off": 106.0,
      "def": 111.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 178,
      "name": "Delaware State",
      "off": 97.8,
      "def": 110.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 183,
      "name": "Denver",
      "off": 111.7,
      "def": 115.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 176,
      "name": "DePaul",
      "off": 107.0,
      "def": 104.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 184,
      "name": "Detroit Mercy",
      "off": 107.8,
      "def": 110.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 189,
      "name": "Drake",
      "off": 109.2,
      "def": 110.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 191,
      "name": "Drexel",
      "off": 105.4,
      "def": 106.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 193,
      "name": "Duke",
      "off": 119.0,
      "def": 98.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 194,
      "name": "Duquesne",
      "off": 109.8,
      "def": 107.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 196,
      "name": "East Carolina",
      "off": 105.1,
      "def": 109.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 198,
      "name": "East Tennessee State",
      "off": 109.5,
      "def": 107.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 199,
      "name": "East Texas A&M",
      "off": 103.4,
      "def": 110.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 201,
      "name": "Eastern Illinois",
      "off": 102.2,
      "def": 110.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 202,
      "name": "Eastern Kentucky",
      "off": 108.6,
      "def": 113.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 204,
      "name": "Eastern Michigan",
      "off": 105.0,
      "def": 107.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 207,
      "name": "Eastern Washington",
      "off": 110.0,
      "def": 111.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 1068,
      "name": "Elon",
      "off": 109.5,
      "def": 112.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 219,
      "name": "Evansville",
      "off": 103.9,
      "def": 111.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 220,
      "name": "Fairfield",
      "off": 107.3,
      "def": 110.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 222,
      "name": "Fairleigh Dickinson",
      "off": 103.8,
      "def": 112.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 235,
      "name": "Florida",
      "off": 116.8,
      "def": 100.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 228,
      "name": "Florida A&M",
      "off": 102.3,
      "def": 109.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 229,
      "name": "Florida Atlantic",
      "off": 109.1,
      "def": 106.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 28755,
      "name": "Florida Gulf Coast",
      "off": 107.3,
      "def": 110.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 231,
      "name": "Florida International",
      "off": 107.9,
      "def": 108.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 234,
      "name": "Florida State",
      "off": 112.6,
      "def": 106.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 236,
      "name": "Fordham",
      "off": 106.3,
      "def": 106.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 96,
      "name": "Fresno State",
      "off": 106.8,
      "def": 106.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 244,
      "name": "Furman",
      "off": 107.7,
      "def": 107.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 1092,
      "name": "Gardner-Webb",
      "off": 100.9,
      "def": 115.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 248,
      "name": "George Mason",
      "off": 110.6,
      "def": 105.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 249,
      "name": "George Washington",
      "off": 113.3,
      "def": 106.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 251,
      "name": "Georgetown",
      "off": 110.6,
      "def": 106.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 257,
      "name": "Georgia",
      "off": 116.1,
      "def": 105.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 253,
      "name": "Georgia Southern",
      "off": 108.9,
      "def": 111.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 254,
      "name": "Georgia State",
      "off": 103.3,
      "def": 109.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 255,
      "name": "Georgia Tech",
      "off": 107.3,
      "def": 107.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 260,
      "name": "Gonzaga",
      "off": 115.5,
      "def": 99.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 261,
      "name": "Grambling",
      "off": 102.6,
      "def": 108.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 1104,
      "name": "Grand Canyon",
      "off": 109.2,
      "def": 102.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 794,
      "name": "Green Bay",
      "off": 109.8,
      "def": 112.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 270,
      "name": "Hampton",
      "off": 104.8,
      "def": 109.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 275,
      "name": "Harvard",
      "off": 107.5,
      "def": 106.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 277,
      "name": "Hawai'i",
      "off": 107.6,
      "def": 103.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 19651,
      "name": "High Point",
      "off": 113.5,
      "def": 106.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 283,
      "name": "Hofstra",
      "off": 111.5,
      "def": 106.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 285,
      "name": "Holy Cross",
      "off": 104.5,
      "def": 112.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 288,
      "name": "Houston",
      "off": 116.3,
      "def": 99.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 287,
      "name": "Houston Christian",
      "off": 105.3,
      "def": 111.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 290,
      "name": "Howard",
      "off": 106.2,
      "def": 106.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 295,
      "name": "Idaho",
      "off": 108.4,
      "def": 107.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 294,
      "name": "Idaho State",
      "off": 108.6,
      "def": 112.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 301,
      "name": "Illinois",
      "off": 119.8,
      "def": 103.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 299,
      "name": "Illinois State",
      "off": 109.6,
      "def": 104.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 2743,
      "name": "Incarnate Word",
      "off": 107.9,
      "def": 112.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 306,
      "name": "Indiana",
      "off": 114.4,
      "def": 105.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 305,
      "name": "Indiana State",
      "off": 106.8,
      "def": 108.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 310,
      "name": "Iona",
      "off": 106.1,
      "def": 108.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 312,
      "name": "Iowa",
      "off": 115.2,
      "def": 103.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 311,
      "name": "Iowa State",
      "off": 116.6,
      "def": 100.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 2699,
      "name": "IU Indianapolis",
      "off": 106.7,
      "def": 113.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 314,
      "name": "Jackson State",
      "off": 102.2,
      "def": 114.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 316,
      "name": "Jacksonville",
      "off": 105.6,
      "def": 111.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 315,
      "name": "Jacksonville State",
      "off": 106.6,
      "def": 108.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 317,
      "name": "James Madison",
      "off": 109.0,
      "def": 110.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 328,
      "name": "Kansas",
      "off": 112.7,
      "def": 101.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 2707,
      "name": "Kansas City",
      "off": 100.1,
      "def": 113.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 327,
      "name": "Kansas State",
      "off": 110.0,
      "def": 107.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 1157,
      "name": "Kennesaw State",
      "off": 109.4,
      "def": 108.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 331,
      "name": "Kent State",
      "off": 109.8,
      "def": 108.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 334,
      "name": "Kentucky",
      "off": 114.4,
      "def": 103.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 340,
      "name": "La Salle",
      "off": 105.9,
      "def": 109.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 342,
      "name": "Lafayette",
      "off": 104.1,
      "def": 111.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 346,
      "name": "Lamar",
      "off": 105.7,
      "def": 108.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 349,
      "name": "Le Moyne",
      "off": 106.0,
      "def": 111.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 352,
      "name": "Lehigh",
      "off": 105.3,
      "def": 110.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 355,
      "name": "Liberty",
      "off": 112.8,
      "def": 110.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 30136,
      "name": "Lindenwood",
      "off": 98.9,
      "def": 108.3,
      "tempo": null,
      "source": "torvik"
    },
    {
      "ncaaId": 28600,
      "name": "Lipscomb",
      "off": 107.8,
      "def": 108.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 32,
      "name": "Little Rock",
      "off": 104.2,
      "def": 111.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 99,
      "name": "Long Beach State",
      "off": 105.7,
      "def": 110.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 361,
      "name": "Long Island University",
      "off": 107.4,
      "def": 107.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 363,
      "name": "Longwood",
      "off": 106.0,
      "def": 109.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 671,
      "name": "Louisiana",
      "off": 103.2,
      "def": 110.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 366,
      "name": "Louisiana Tech",
      "off": 105.3,
      "def": 106.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 367,
      "name": "Louisville",
      "off": 116.5,
      "def": 102.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 371,
      "name": "Loyola Chicago",
      "off": 105.6,
      "def": 111.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 369,
      "name": "Loyola Maryland",
      "off": 106.0,
      "def": 113.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 370,
      "name": "Loyola Marymount",
      "off": 106.7,
      "def": 106.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 365,
      "name": "LSU",
      "off": 113.7,
      "def": 107.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 474,
      "name": "LSU New Orleans",
      "off": 107.9,
      "def": 110.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 380,
      "name": "Maine",
      "off": 100.2,
      "def": 109.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 381,
      "name": "Manhattan",
      "off": 106.0,
      "def": 114.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 386,
      "name": "Marist",
      "off": 104.5,
      "def": 104.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 387,
      "name": "Marquette",
      "off": 108.9,
      "def": 105.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 388,
      "name": "Marshall",
      "off": 110.6,
      "def": 110.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 392,
      "name": "Maryland",
      "off": 108.3,
      "def": 108.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 393,
      "name": "Maryland Eastern Shore",
      "off": 100.4,
      "def": 111.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 400,
      "name": "Massachusetts",
      "off": 108.6,
      "def": 108.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 402,
      "name": "McNeese",
      "off": 111.7,
      "def": 104.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 404,
      "name": "Memphis",
      "off": 107.5,
      "def": 106.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 406,
      "name": "Mercer",
      "off": 110.2,
      "def": 110.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 408,
      "name": "Mercyhurst",
      "off": 101.2,
      "def": 110.7,
      "tempo": null,
      "source": "torvik"
    },
    {
      "ncaaId": 410,
      "name": "Merrimack",
      "off": 107.1,
      "def": 107.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 415,
      "name": "Miami",
      "off": 114.8,
      "def": 104.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 414,
      "name": "Miami (OH)",
      "off": 113.2,
      "def": 107.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 418,
      "name": "Michigan",
      "off": 118.1,
      "def": 99.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 416,
      "name": "Michigan State",
      "off": 115.2,
      "def": 101.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 419,
      "name": "Middle Tennessee",
      "off": 108.7,
      "def": 108.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 797,
      "name": "Milwaukee",
      "off": 107.2,
      "def": 111.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 428,
      "name": "Minnesota",
      "off": 110.4,
      "def": 105.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 430,
      "name": "Mississippi State",
      "off": 109.6,
      "def": 107.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 432,
      "name": "Mississippi Valley State",
      "off": 98.0,
      "def": 116.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 434,
      "name": "Missouri",
      "off": 113.2,
      "def": 106.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 669,
      "name": "Missouri State",
      "off": 108.7,
      "def": 109.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 439,
      "name": "Monmouth",
      "off": 107.0,
      "def": 107.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 441,
      "name": "Montana",
      "off": 107.0,
      "def": 108.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 440,
      "name": "Montana State",
      "off": 109.2,
      "def": 108.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 444,
      "name": "Morehead State",
      "off": 107.7,
      "def": 112.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 446,
      "name": "Morgan State",
      "off": 103.0,
      "def": 114.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 450,
      "name": "Mount St. Mary's",
      "off": 103.5,
      "def": 108.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 454,
      "name": "Murray State",
      "off": 112.5,
      "def": 109.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 726,
      "name": "Navy",
      "off": 108.1,
      "def": 105.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 490,
      "name": "NC State",
      "off": 116.2,
      "def": 106.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 463,
      "name": "Nebraska",
      "off": 112.9,
      "def": 100.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 466,
      "name": "Nevada",
      "off": 111.7,
      "def": 106.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 469,
      "name": "New Hampshire",
      "off": 101.7,
      "def": 111.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 470,
      "name": "New Haven",
      "off": 96.6,
      "def": 112.4,
      "tempo": null,
      "source": "torvik"
    },
    {
      "ncaaId": 473,
      "name": "New Mexico",
      "off": 112.3,
      "def": 104.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 472,
      "name": "New Mexico State",
      "off": 108.6,
      "def": 108.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 482,
      "name": "Niagara",
      "off": 103.4,
      "def": 112.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 483,
      "name": "Nicholls",
      "off": 106.4,
      "def": 110.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 471,
      "name": "NJIT",
      "off": 101.9,
      "def": 110.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 485,
      "name": "Norfolk State",
      "off": 104.6,
      "def": 111.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 487,
      "name": "North Alabama",
      "off": 104.0,
      "def": 113.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 457,
      "name": "North Carolina",
      "off": 114.8,
      "def": 103.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 488,
      "name": "North Carolina A&T",
      "off": 106.8,
      "def": 111.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 489,
      "name": "North Carolina Central",
      "off": 104.1,
      "def": 114.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 494,
      "name": "North Dakota",
      "off": 106.5,
      "def": 112.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 493,
      "name": "North Dakota State",
      "off": 110.1,
      "def": 106.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 2711,
      "name": "North Florida",
      "off": 107.2,
      "def": 116.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 497,
      "name": "North Texas",
      "off": 105.3,
      "def": 104.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 500,
      "name": "Northeastern",
      "off": 107.8,
      "def": 112.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 501,
      "name": "Northern Arizona",
      "off": 105.6,
      "def": 113.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 502,
      "name": "Northern Colorado",
      "off": 110.1,
      "def": 109.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 503,
      "name": "Northern Illinois",
      "off": 102.2,
      "def": 110.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 504,
      "name": "Northern Iowa",
      "off": 109.0,
      "def": 102.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 505,
      "name": "Northern Kentucky",
      "off": 108.9,
      "def": 108.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 509,
      "name": "Northwestern",
      "off": 112.1,
      "def": 106.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 508,
      "name": "Northwestern State",
      "off": 104.8,
      "def": 111.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 513,
      "name": "Notre Dame",
      "off": 111.2,
      "def": 107.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 514,
      "name": "Oakland",
      "off": 111.4,
      "def": 111.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 519,
      "name": "Ohio",
      "off": 108.2,
      "def": 110.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 518,
      "name": "Ohio State",
      "off": 116.1,
      "def": 105.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 522,
      "name": "Oklahoma",
      "off": 116.1,
      "def": 107.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 521,
      "name": "Oklahoma State",
      "off": 112.8,
      "def": 107.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 523,
      "name": "Old Dominion",
      "off": 107.1,
      "def": 110.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 433,
      "name": "Ole Miss",
      "off": 110.4,
      "def": 105.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 464,
      "name": "Omaha",
      "off": 106.8,
      "def": 110.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 527,
      "name": "Oral Roberts",
      "off": 104.7,
      "def": 111.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 529,
      "name": "Oregon",
      "off": 109.2,
      "def": 107.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 528,
      "name": "Oregon State",
      "off": 108.2,
      "def": 109.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 534,
      "name": "Pacific",
      "off": 108.9,
      "def": 106.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 539,
      "name": "Penn State",
      "off": 110.1,
      "def": 111.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 540,
      "name": "Pennsylvania",
      "off": 107.9,
      "def": 106.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 541,
      "name": "Pepperdine",
      "off": 105.1,
      "def": 110.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 545,
      "name": "Pittsburgh",
      "off": 110.2,
      "def": 107.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 551,
      "name": "Portland",
      "off": 105.9,
      "def": 109.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 550,
      "name": "Portland State",
      "off": 105.9,
      "def": 105.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 553,
      "name": "Prairie View A&M",
      "off": 104.4,
      "def": 110.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 1320,
      "name": "Presbyterian",
      "off": 105.5,
      "def": 109.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 554,
      "name": "Princeton",
      "off": 106.2,
      "def": 109.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 556,
      "name": "Providence",
      "off": 114.4,
      "def": 109.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 559,
      "name": "Purdue",
      "off": 120.1,
      "def": 104.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 308,
      "name": "Purdue Fort Wayne",
      "off": 106.6,
      "def": 110.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 11504,
      "name": "Queens",
      "off": 107.5,
      "def": 110.1,
      "tempo": null,
      "source": "torvik"
    },
    {
      "ncaaId": 562,
      "name": "Quinnipiac",
      "off": 106.4,
      "def": 107.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 563,
      "name": "Radford",
      "off": 107.3,
      "def": 110.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 572,
      "name": "Rhode Island",
      "off": 106.8,
      "def": 105.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 574,
      "name": "Rice",
      "off": 107.5,
      "def": 111.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 575,
      "name": "Richmond",
      "off": 109.9,
      "def": 108.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 576,
      "name": "Rider",
      "off": 101.6,
      "def": 113.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 579,
      "name": "Robert Morris",
      "off": 109.5,
      "def": 108.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 587,
      "name": "Rutgers",
      "off": 108.4,
      "def": 107.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 102,
      "name": "Sacramento State",
      "off": 106.1,
      "def": 111.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 590,
      "name": "Sacred Heart",
      "off": 107.8,
      "def": 113.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 606,
      "name": "Saint Joseph's",
      "off": 107.4,
      "def": 105.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 609,
      "name": "Saint Louis",
      "off": 115.0,
      "def": 103.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 610,
      "name": "Saint Mary's",
      "off": 114.3,
      "def": 102.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 617,
      "name": "Saint Peter's",
      "off": 105.8,
      "def": 108.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 624,
      "name": "Sam Houston",
      "off": 111.0,
      "def": 107.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 625,
      "name": "Samford",
      "off": 108.7,
      "def": 110.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 627,
      "name": "San Diego",
      "off": 107.2,
      "def": 111.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 626,
      "name": "San Diego State",
      "off": 109.9,
      "def": 102.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 629,
      "name": "San Francisco",
      "off": 110.3,
      "def": 108.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 630,
      "name": "San Jose State",
      "off": 109.0,
      "def": 113.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 631,
      "name": "Santa Clara",
      "off": 115.8,
      "def": 105.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 655,
      "name": "SE Louisiana",
      "off": 103.3,
      "def": 109.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 1356,
      "name": "Seattle U",
      "off": 104.9,
      "def": 103.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 635,
      "name": "Seton Hall",
      "off": 108.7,
      "def": 101.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 639,
      "name": "Siena",
      "off": 108.0,
      "def": 107.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 660,
      "name": "SIU Edwardsville",
      "off": 104.5,
      "def": 107.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 663,
      "name": "SMU",
      "off": 115.8,
      "def": 106.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 646,
      "name": "South Alabama",
      "off": 107.5,
      "def": 108.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 648,
      "name": "South Carolina",
      "off": 109.6,
      "def": 107.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 647,
      "name": "South Carolina State",
      "off": 100.8,
      "def": 113.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 10411,
      "name": "South Carolina Upstate",
      "off": 104.2,
      "def": 109.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 650,
      "name": "South Dakota",
      "off": 106.5,
      "def": 112.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 649,
      "name": "South Dakota State",
      "off": 108.1,
      "def": 109.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 651,
      "name": "South Florida",
      "off": 113.4,
      "def": 104.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 654,
      "name": "Southeast Missouri State",
      "off": 105.0,
      "def": 107.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 665,
      "name": "Southern",
      "off": 105.9,
      "def": 111.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 659,
      "name": "Southern Illinois",
      "off": 106.2,
      "def": 103.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 661,
      "name": "Southern Indiana",
      "off": 98.3,
      "def": 112.3,
      "tempo": null,
      "source": "torvik"
    },
    {
      "ncaaId": 664,
      "name": "Southern Miss",
      "off": 106.5,
      "def": 108.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 667,
      "name": "Southern Utah",
      "off": 106.0,
      "def": 111.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 596,
      "name": "St. Bonaventure",
      "off": 111.1,
      "def": 109.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 603,
      "name": "St. John's",
      "off": 114.0,
      "def": 101.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 620,
      "name": "St. Thomas-Minnesota",
      "off": 111.3,
      "def": 107.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 674,
      "name": "Stanford",
      "off": 112.1,
      "def": 106.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 676,
      "name": "Stephen F. Austin",
      "off": 110.4,
      "def": 105.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 678,
      "name": "Stetson",
      "off": 105.1,
      "def": 113.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 682,
      "name": "Stonehill",
      "off": 101.4,
      "def": 108.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 683,
      "name": "Stony Brook",
      "off": 106.4,
      "def": 109.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 688,
      "name": "Syracuse",
      "off": 111.0,
      "def": 105.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 1395,
      "name": "Tarleton State",
      "off": 105.6,
      "def": 108.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 698,
      "name": "TCU",
      "off": 111.5,
      "def": 103.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 690,
      "name": "Temple",
      "off": 110.0,
      "def": 109.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 694,
      "name": "Tennessee",
      "off": 114.7,
      "def": 101.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 691,
      "name": "Tennessee State",
      "off": 108.2,
      "def": 108.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 692,
      "name": "Tennessee Tech",
      "off": 105.5,
      "def": 112.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 703,
      "name": "Texas",
      "off": 115.8,
      "def": 106.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 697,
      "name": "Texas A&M",
      "off": 114.1,
      "def": 105.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 26172,
      "name": "Texas A&M-Corpus Christi",
      "off": 105.4,
      "def": 106.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 699,
      "name": "Texas Southern",
      "off": 104.2,
      "def": 111.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 670,
      "name": "Texas State",
      "off": 105.7,
      "def": 109.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 700,
      "name": "Texas Tech",
      "off": 116.3,
      "def": 104.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 141,
      "name": "The Citadel",
      "off": 103.6,
      "def": 114.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 709,
      "name": "Toledo",
      "off": 111.6,
      "def": 109.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 711,
      "name": "Towson",
      "off": 106.5,
      "def": 105.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 716,
      "name": "Troy",
      "off": 110.1,
      "def": 108.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 718,
      "name": "Tulane",
      "off": 107.4,
      "def": 109.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 719,
      "name": "Tulsa",
      "off": 115.6,
      "def": 107.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 9,
      "name": "UAB",
      "off": 109.0,
      "def": 106.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 14,
      "name": "UAlbany",
      "off": 105.7,
      "def": 112.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 108,
      "name": "UC Davis",
      "off": 107.5,
      "def": 108.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 109,
      "name": "UC Irvine",
      "off": 106.1,
      "def": 103.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 111,
      "name": "UC Riverside",
      "off": 104.9,
      "def": 110.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 112,
      "name": "UC San Diego",
      "off": 107.7,
      "def": 105.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 104,
      "name": "UC Santa Barbara",
      "off": 110.7,
      "def": 109.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 128,
      "name": "UCF",
      "off": 113.7,
      "def": 107.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 110,
      "name": "UCLA",
      "off": 115.2,
      "def": 105.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 164,
      "name": "UConn",
      "off": 115.0,
      "def": 100.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 302,
      "name": "UIC",
      "off": 109.3,
      "def": 105.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 498,
      "name": "UL Monroe",
      "off": 104.1,
      "def": 115.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 368,
      "name": "UMass Lowell",
      "off": 105.5,
      "def": 112.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 391,
      "name": "UMBC",
      "off": 108.6,
      "def": 108.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 456,
      "name": "UNC Asheville",
      "off": 106.4,
      "def": 109.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 459,
      "name": "UNC Greensboro",
      "off": 107.2,
      "def": 113.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 460,
      "name": "UNC Wilmington",
      "off": 110.4,
      "def": 106.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 465,
      "name": "UNLV",
      "off": 111.1,
      "def": 108.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 657,
      "name": "USC",
      "off": 109.7,
      "def": 105.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 702,
      "name": "UT Arlington",
      "off": 104.8,
      "def": 104.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 695,
      "name": "UT Martin",
      "off": 104.1,
      "def": 105.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 536,
      "name": "UT Rio Grande Valley",
      "off": 109.0,
      "def": 107.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 732,
      "name": "Utah",
      "off": 110.7,
      "def": 109.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 731,
      "name": "Utah State",
      "off": 115.8,
      "def": 104.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 30095,
      "name": "Utah Tech",
      "off": 108.6,
      "def": 110.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 30024,
      "name": "Utah Valley",
      "off": 110.3,
      "def": 105.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 704,
      "name": "UTEP",
      "off": 104.3,
      "def": 109.1,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 706,
      "name": "UTSA",
      "off": 103.0,
      "def": 113.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 735,
      "name": "Valparaiso",
      "off": 108.2,
      "def": 107.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 736,
      "name": "Vanderbilt",
      "off": 117.4,
      "def": 104.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 740,
      "name": "VCU",
      "off": 114.3,
      "def": 105.3,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 738,
      "name": "Vermont",
      "off": 108.0,
      "def": 109.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 739,
      "name": "Villanova",
      "off": 113.6,
      "def": 104.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 746,
      "name": "Virginia",
      "off": 115.6,
      "def": 102.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 742,
      "name": "Virginia Tech",
      "off": 112.6,
      "def": 105.6,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 741,
      "name": "VMI",
      "off": 103.2,
      "def": 116.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 748,
      "name": "Wagner",
      "off": 105.2,
      "def": 110.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 749,
      "name": "Wake Forest",
      "off": 112.2,
      "def": 106.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 756,
      "name": "Washington",
      "off": 112.1,
      "def": 105.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 754,
      "name": "Washington State",
      "off": 110.4,
      "def": 109.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 758,
      "name": "Weber State",
      "off": 109.5,
      "def": 110.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 11740,
      "name": "West Florida",
      "off": 90.9,
      "def": 114.5,
      "tempo": null,
      "source": "torvik"
    },
    {
      "ncaaId": 766,
      "name": "West Georgia",
      "off": 100.2,
      "def": 111.7,
      "tempo": null,
      "source": "torvik"
    },
    {
      "ncaaId": 768,
      "name": "West Virginia",
      "off": 108.9,
      "def": 102.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 769,
      "name": "Western Carolina",
      "off": 108.6,
      "def": 110.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 771,
      "name": "Western Illinois",
      "off": 100.2,
      "def": 113.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 772,
      "name": "Western Kentucky",
      "off": 108.4,
      "def": 107.7,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 774,
      "name": "Western Michigan",
      "off": 107.4,
      "def": 112.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 782,
      "name": "Wichita State",
      "off": 110.5,
      "def": 104.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 786,
      "name": "William & Mary",
      "off": 109.5,
      "def": 108.0,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 792,
      "name": "Winthrop",
      "off": 110.5,
      "def": 109.2,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 796,
      "name": "Wisconsin",
      "off": 116.5,
      "def": 105.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 2915,
      "name": "Wofford",
      "off": 108.7,
      "def": 111.9,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 810,
      "name": "Wright State",
      "off": 110.2,
      "def": 108.5,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 811,
      "name": "Wyoming",
      "off": 111.4,
      "def": 107.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 812,
      "name": "Xavier",
      "off": 111.5,
      "def": 108.8,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 813,
      "name": "Yale",
      "off": 115.0,
      "def": 108.4,
      "tempo": null,
      "source": "highlights"
    },
    {
      "ncaaId": 817,
      "name": "Youngstown State",
      "off": 107.1,
      "def": 108.4,
      "tempo": null,
      "source": "highlights"
    }
  ]
};
