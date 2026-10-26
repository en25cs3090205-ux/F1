"""
Formula 1 Race Intelligence Dashboard - Flask Application Engine
================================================================
Author / Lead Developer : Shraddha Patel
Tableau Public Profile  : shraddha patel
Published Workbook      : F1 Race Intelligence Dashboard_2
Championship Story      : Formula 1 Race Intelligence: From Global Overview to Championship Success
Repository              : https://github.com/en25cs3090205-ux/F1

This production module serves the Formula 1 Race Intelligence web application,
providing dynamic server-side rendering of the dark obsidian/crimson telemetry
interface, embedded interactive Tableau visualizations, and RESTful telemetry API endpoints.
"""

import os
import json
from urllib.parse import urlparse, parse_qs
from flask import Flask, render_template, jsonify, send_from_directory, request

# Base directory paths
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
STATIC_DIR = os.path.join(BASE_DIR, 'static')
TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')
DATA_DIR = os.path.join(BASE_DIR, 'data')

# Initialize Flask application
app = Flask(
    __name__,
    template_folder=TEMPLATES_DIR if os.path.exists(TEMPLATES_DIR) else BASE_DIR,
    static_folder=STATIC_DIR if os.path.exists(STATIC_DIR) else BASE_DIR,
    static_url_path='/static'
)

def to_embed_url(url: str) -> str:
    """
    Convert a Tableau Cloud or Tableau Public URL to a clean iframe embed URL.
    Handles Tableau Cloud hash routing (/#/site/...) -> /t/... and standard embed parameters.
    """
    if not url:
        return ""
    clean_url = url.split("?:iid=")[0].split("?")[0].rstrip('/')
    
    # Handle Tableau Online/Cloud hash-routing syntax
    if "/#/site/" in clean_url:
        clean_url = clean_url.replace("/#/site/", "/t/")
        
    delimiter = "&" if "?" in clean_url else "?"
    return f"{clean_url}{delimiter}:embed=yes&:showVizHome=no&:toolbar=yes&:tabs=no&:showAppBanner=false"


# ==============================================================================
# CONFIGURATION SETTINGS & TABLEAU URLS (SHRADDHA PATEL)
# ==============================================================================
DASHBOARD_LIVE_URL = os.environ.get(
    "TABLEAU_DASHBOARD_URL",
    "https://prod-in-a.online.tableau.com/#/site/en25cs3090205-84b4be6312/views/F1RaceIntelligenceDashboard_2/FORMULA1RACEINTELLIGENCEDASHBOARD?:iid=1"
)

STORY_LIVE_URL = os.environ.get(
    "TABLEAU_STORY_URL",
    "https://prod-in-a.online.tableau.com/#/site/en25cs3090205-84b4be6312/views/F1RACEStory/Formula1RaceIntelligenceFromGlobalOverviewtoChampionshipSuccess?:iid=2"
)

CONFIG = {
    "AUTHOR_NAME": "Shraddha Patel",
    "AUTHOR_HANDLE": "shraddha patel",
    "TABLEAU_PUBLIC_PROFILE": os.environ.get("TABLEAU_PUBLIC_PROFILE", "https://public.tableau.com/app/profile/shraddha.patel"),
    "GITHUB_REPO": "https://github.com/en25cs3090205-ux/F1",
    "WORKBOOK_NAME": "F1 Race Intelligence Dashboard_2",
    "DASHBOARD_SHEET": "FORMULA 1 RACE INTELLIGENCE DASHBOARD",
    "STORY_SHEET": "Formula 1 Race Intelligence: From Global Overview to Championship Success",
    
    # Live Tableau URLs
    "TABLEAU_DASHBOARD_URL": DASHBOARD_LIVE_URL,
    "TABLEAU_STORY_URL": STORY_LIVE_URL,
    "TABLEAU_DASHBOARD_EMBED_URL": to_embed_url(DASHBOARD_LIVE_URL),
    "TABLEAU_STORY_EMBED_URL": to_embed_url(STORY_LIVE_URL),
    
    # 4 Core KPI Ground Truth
    "KPIS": {
        "competing_teams": 10,
        "seasons_in_play": 17,
        "race_outcomes_logged": 6464,
        "circuits_showcased": 29
    },
    
    # 6 Analytical Dimensions
    "DIMENSIONS": [
        {
            "id": "circuits",
            "title": "Circuit Geography & Profile",
            "icon": "fa-solid fa-route",
            "desc": "Spatial mapping and geographic analysis across 29 host circuits spanning 5 continents, correlating high-altitude downforce deltas with lap longevity.",
            "stat": "→ 29 HOST CIRCUITS MAPPED"
        },
        {
            "id": "lap_time",
            "title": "Lap Telemetry & Sector Splits",
            "icon": "fa-solid fa-stopwatch-20",
            "desc": "High-precision millisecond telemetry examining S1/S2/S3 sector splits, qualifying delta margins, apex apex minimum speeds, and tyre drop-off curves.",
            "stat": "→ MILLISECOND PRECISION & DELTAS"
        },
        {
            "id": "tyre_strategy",
            "title": "Pirelli Tyre Wear & Strategy",
            "icon": "fa-solid fa-compact-disc",
            "desc": "Empirical compound allocation analysis across Soft (31.52%), Medium (30.78%), Hard (30.36%), and Intermediate (7.34%) telemetry stints.",
            "stat": "→ 4 RACING COMPOUNDS ANALYZED"
        },
        {
            "id": "driver_h2h",
            "title": "Driver Performance Leaderboard",
            "icon": "fa-solid fa-users-viewfinder",
            "desc": "Dynamic Top-N parameter controls ranking modern grid masters across cumulative championship points, podium finishes, and qualifying conversions.",
            "stat": "→ DYNAMIC TOP-N PARAMETER FILTER"
        },
        {
            "id": "points_progression",
            "title": "Constructor Supremacy Battle",
            "icon": "fa-solid fa-chart-line",
            "desc": "Constructor championship point trajectory across 17 seasons (2010–2026), tracking Red Bull Racing (8,006 pts) vs. Mercedes-AMG (7,790 pts).",
            "stat": "→ 17 SEASONS (2010–2026)"
        },
        {
            "id": "reliability",
            "title": "Reliability & Attrition Diagnostics",
            "icon": "fa-solid fa-triangle-exclamation",
            "desc": "DNF root-cause diagnostics classifying mechanical power units, collisions, transmission, and suspension failures against a 91.4% grid finish rate.",
            "stat": "→ DNF REASON & ATTRITION DIAGNOSTICS"
        }
    ],
    
    # 9 Tableau Story Scenes
    "STORY_SCENES": [
        {"id": 1, "title": "KPI Summary Cards", "summary": "Core telemetry foundation indexing 10 Competing Teams, 17 Seasons, 6,464 Outcomes, and 29 Circuits."},
        {"id": 2, "title": "Global Driver Distribution", "summary": "Dark Mapbox geographic projection mapping driver origin clusters and racing footprints across 29 Grand Prix nations."},
        {"id": 3, "title": "Country-wise Race Participation", "summary": "Participation volume treemap led by Bahrain (2,168 outcomes), United States (400), Monaco (328), Spain (328), and Brazil (308)."},
        {"id": 4, "title": "Team Championship Performance", "summary": "Vertical bar chart tracking constructor championship hauls across turbo-hybrid engine regulation eras."},
        {"id": 5, "title": "Driver Reliability Analysis", "summary": "Stacked bar chart colored by DNF Reason (Engine, Collision, Transmission, Suspension, Brakes) detailing modern reliability."},
        {"id": 6, "title": "Driver Performance Leaderboard", "summary": "Dynamic Top-N vertical bar chart driven by Top N Parameter (Hamilton, Verstappen, Leclerc, Norris, Alonso)."},
        {"id": 7, "title": "Podium Achievements", "summary": "Packed bubble visualization sized by SUM(Podiums) contrasting driver and constructor top-3 cluster density."},
        {"id": 8, "title": "Tyre Compound Usage", "summary": "Pirelli compound distribution pie chart showing Soft (31.52%), Medium (30.78%), Hard (30.36%), and Inter (7.34%)."},
        {"id": 9, "title": "Team Performance Ranking", "summary": "Horizontal bar chart ranking all 10 constructors sorted descending by total accumulated points."}
    ]
}


def load_json_file(filename):
    """Safely load JSON data from data directory or return empty dict."""
    filepath = os.path.join(DATA_DIR, filename)
    if os.path.exists(filepath):
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            app.logger.error(f"Error loading {filename}: {e}")
    return {}


# Pre-load telemetry data
CIRCUITS_DATA = load_json_file('circuits.json')
DRIVERS_DATA = load_json_file('drivers.json')
INTELLIGENCE_DATA = load_json_file('f1_intelligence.json')
INSIGHTS_DATA = load_json_file('insights.json')


# ==============================================================================
# WEB ROUTES
# ==============================================================================

@app.route('/')
def index():
    """Render the primary Formula 1 Race Intelligence Dashboard."""
    return render_template(
        'index.html',
        author_name=CONFIG["AUTHOR_NAME"],
        author_handle=CONFIG["AUTHOR_HANDLE"],
        tableau_public_profile=CONFIG["TABLEAU_PUBLIC_PROFILE"],
        github_repo=CONFIG["GITHUB_REPO"],
        workbook_name=CONFIG["WORKBOOK_NAME"],
        dashboard_sheet=CONFIG["DASHBOARD_SHEET"],
        story_sheet=CONFIG["STORY_SHEET"],
        tableau_dashboard_url=CONFIG["TABLEAU_DASHBOARD_URL"],
        tableau_story_url=CONFIG["TABLEAU_STORY_URL"],
        tableau_dashboard_embed_url=CONFIG["TABLEAU_DASHBOARD_EMBED_URL"],
        tableau_story_embed_url=CONFIG["TABLEAU_STORY_EMBED_URL"],
        kpis=CONFIG["KPIS"],
        dimensions=CONFIG["DIMENSIONS"],
        story_scenes=CONFIG["STORY_SCENES"]
    )


# ==============================================================================
# REST API ENDPOINTS
# ==============================================================================

@app.route('/api/config', methods=['GET'])
def get_config():
    """Return dashboard configuration and live Tableau URLs."""
    return jsonify({
        "status": "success",
        "author": CONFIG["AUTHOR_NAME"],
        "tableau_public_profile": CONFIG["TABLEAU_PUBLIC_PROFILE"],
        "workbook_name": CONFIG["WORKBOOK_NAME"],
        "tableau_dashboard_url": CONFIG["TABLEAU_DASHBOARD_URL"],
        "tableau_story_url": CONFIG["TABLEAU_STORY_URL"],
        "tableau_dashboard_embed_url": CONFIG["TABLEAU_DASHBOARD_EMBED_URL"],
        "tableau_story_embed_url": CONFIG["TABLEAU_STORY_EMBED_URL"],
        "kpis": CONFIG["KPIS"]
    })


@app.route('/api/telemetry', methods=['GET'])
def get_telemetry():
    """Return summary telemetry indicators and aggregated insights."""
    return jsonify({
        "status": "success",
        "kpis": CONFIG["KPIS"],
        "summary": INTELLIGENCE_DATA.get("kpis", CONFIG["KPIS"]),
        "dimensions": CONFIG["DIMENSIONS"],
        "story_scenes": CONFIG["STORY_SCENES"]
    })


@app.route('/api/circuits', methods=['GET'])
def get_circuits():
    """Return all 29 Formula 1 host circuits."""
    return jsonify({
        "status": "success",
        "count": len(CIRCUITS_DATA) if isinstance(CIRCUITS_DATA, list) else 29,
        "data": CIRCUITS_DATA
    })


@app.route('/api/drivers', methods=['GET'])
def get_drivers():
    """Return driver profiles and career telemetry stats."""
    return jsonify({
        "status": "success",
        "data": DRIVERS_DATA
    })


@app.route('/api/health', methods=['GET'])
def health_check():
    """Application health probe."""
    return jsonify({
        "status": "healthy",
        "application": "Formula 1 Race Intelligence Dashboard",
        "author": CONFIG["AUTHOR_NAME"],
        "version": "2.0.0"
    })


# Route for serving static assets from root if not using /static/
@app.route('/<path:filename>')
def serve_root_static(filename):
    """Fallback route to serve static assets when accessed without /static prefix."""
    if os.path.exists(os.path.join(STATIC_DIR, filename)):
        return send_from_directory(STATIC_DIR, filename)
    if os.path.exists(os.path.join(BASE_DIR, filename)):
        return send_from_directory(BASE_DIR, filename)
    return ("File not found", 404)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print(f"================================================================")
    print(f"🏎️ FORMULA 1 RACE INTELLIGENCE DASHBOARD")
    print(f"   Lead Architect : {CONFIG['AUTHOR_NAME']}")
    print(f"   Tableau Profile: {CONFIG['AUTHOR_HANDLE']}")
    print(f"   Listening on   : http://127.0.0.1:{port}")
    print(f"================================================================")
    app.run(host='0.0.0.0', port=port, debug=True)
