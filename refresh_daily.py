
import datetime as dt
import json
import pathlib
import urllib.request
from zoneinfo import ZoneInfo

ROOT = pathlib.Path(__file__).resolve().parent
now = dt.datetime.now(ZoneInfo("America/Chicago"))
day = now.date()

url = (
    "https://site.api.espn.com/apis/site/v2/sports/basketball/"
    f"mens-college-basketball/scoreboard?dates={day:%Y%m%d}&limit=500&groups=50"
)

request = urllib.request.Request(
    url,
    headers={
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json",
    },
)

try:
    with urllib.request.urlopen(request, timeout=30) as response:
        payload = json.load(response)

    if not isinstance(payload.get("events"), list):
        raise ValueError("Invalid scoreboard response")

    games = []

    for event in payload["events"]:
        competitions = event.get("competitions") or []
        if not competitions:
            continue

        competition = competitions[0]
        teams = {
            team.get("homeAway"): team
            for team in competition.get("competitors", [])
        }

        away = teams.get("away")
        home = teams.get("home")
        if not away or not home:
            continue

        def name(entry):
            team = entry.get("team") or {}
            return team.get("displayName", "Unknown")

        def score(entry):
            value = entry.get("score")
            try:
                return int(value) if value not in (None, "") else None
            except (ValueError, TypeError):
                return None

        status = competition.get("status") or event.get("status") or {}
        state = (status.get("type") or {}).get("description", "Scheduled")

        games.append({
            "away": name(away),
            "home": name(home),
            "away_score": score(away),
            "home_score": score(home),
            "state": state,
        })

    if payload["events"] and not games:
        raise ValueError("Could not parse scoreboard games")

    destination = ROOT / "data" / "daily.json"
    destination.parent.mkdir(parents=True, exist_ok=True)

    snapshot = {
        "date": day.isoformat(),
        "updated_at": now.isoformat(),
        "games": games,
    }

    temporary = destination.with_suffix(".tmp")
    temporary.write_text(json.dumps(snapshot, indent=2))
    temporary.replace(destination)

    print(f"Refreshed {len(games)} games for {day}")

except Exception as error:
    print(f"Refresh failed: {error}")
    raise SystemExit(1)
