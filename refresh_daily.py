#!/usr/bin/env python3
"""Refresh today's NCAA D-I men's basketball scoreboard. Fails closed, preserving prior snapshot."""
import datetime as dt,json,os,pathlib,urllib.request
from zoneinfo import ZoneInfo
ROOT=pathlib.Path(__file__).parent
TZ=ZoneInfo("America/Chicago")
now=dt.datetime.now(TZ)
day=now.date()
# Public community NCAA wrapper: https://github.com/henrygd/ncaa-api
BASE=os.getenv("NCAA_API_BASE","https://ncaa-api.henrygd.me").rstrip("/")
url=f"{BASE}/scoreboard/basketball-men/d1/{day:%Y/%m/%d}/all-conf"
def normalize(x):
    games=x.get("games",[]) if isinstance(x,dict) else []
    out=[]
    for entry in games:
        game=entry.get("game",entry) if isinstance(entry,dict) else {}
        a=game.get("away",{});h=game.get("home",{})
        if not isinstance(a,dict) or not isinstance(h,dict):continue
        def team(t):return t.get("names",{}).get("short") if isinstance(t.get("names"),dict) else t.get("name") or t.get("shortName") or t.get("teamName")
        def score(t):
            v=t.get("score")
            try:return int(v) if v is not None and str(v).strip() else None
            except (ValueError,TypeError):return None
        out.append({"away":team(a),"home":team(h),"away_score":score(a),"home_score":score(h),"state":game.get("gameState") or game.get("state") or game.get("status") or "Scheduled"})
    return out
req=urllib.request.Request(url,headers={"User-Agent":"CBBEdgeLab/0.1 (public data refresh)","Accept":"application/json"})
try:
    with urllib.request.urlopen(req,timeout=25) as response: payload=json.load(response)
    if not isinstance(payload,dict) or "games" not in payload:raise ValueError("Unexpected API response; refusing overwrite")
    games=normalize(payload)
    dest=ROOT/"data/daily.json"
    tmp=dest.with_suffix(".tmp")
    tmp.write_text(json.dumps({"date":day.isoformat(),"updated_at":now.isoformat(timespec="minutes"),"status":"NCAA scoreboard snapshot","games":games},indent=2))
    tmp.replace(dest)
    print("Refreshed",len(games),"games for",day)
except Exception as exc:
    print("Refresh failed; previous snapshot retained:",exc)
    raise SystemExit(1)
