# 🏎️ FORMULA 1 RACE INTELLIGENCE DASHBOARD
### High-Performance Motorsport Telemetry & Championship Analytics Engine
**Author & Lead Architect:** [Shraddha Patel](https://public.tableau.com/app/profile/shraddha.patel)  
**Tableau Profile:** `shraddha patel`  
**GitHub Repository:** [en25cs3090205-ux/F1](https://github.com/en25cs3090205-ux/F1)  
**Published Workbook:** `F1 Race Intelligence Dashboard_2`  
**Dashboard Sheet:** `FORMULA 1 RACE INTELLIGENCE DASHBOARD`  
**Story Sheet:** `Formula 1 Race Intelligence: From Global Overview to Championship Success` (9 scenes)

[![Tableau](https://img.shields.io/badge/Tableau-Live_Dashboard-E97627?style=for-the-badge&logo=tableau&logoColor=white)](https://prod-in-a.online.tableau.com/#/site/en25cs3090205-84b4be6312/views/F1RaceIntelligenceDashboard_2/FORMULA1RACEINTELLIGENCEDASHBOARD?:iid=1)
[![Tableau Story](https://img.shields.io/badge/Tableau_Story-9--Scene_Narrative-22C55E?style=for-the-badge&logo=tableau&logoColor=white)](https://prod-in-a.online.tableau.com/#/site/en25cs3090205-84b4be6312/views/F1RACEStory/Formula1RaceIntelligenceFromGlobalOverviewtoChampionshipSuccess?:iid=2)
[![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-Web_Service-000000?style=for-the-badge&logo=flask&logoColor=white)](https://palletsprojects.com/p/flask/)
[![Theme](https://img.shields.io/badge/Theme-F1_Dark_Obsidian_%26_Crimson-E10600?style=for-the-badge)](#)

---

## 📌 Project Overview

The **Formula 1 Race Intelligence Dashboard** is an enterprise-grade motorsport telemetry and business intelligence platform designed and engineered by **Shraddha Patel**. It synthesizes **17 seasons of racing data (2010–2026)**, **6,464 race outcomes**, and **~13,750 connected data records** into actionable strategic intelligence.

Bridging the visual horsepower of **Tableau** with a lightweight, responsive **Python Flask** microservice layer and a dark broadcast-aesthetic user interface (`#0a0a0f` Obsidian + `#e10600` F1 Crimson), this platform equips team strategists, performance engineers, and motorsport journalists with real-time access to championship trajectories, tyre wear degradation models, and reliability diagnostics.

---

## 📊 Live Interactive Tableau Workbooks

* 🏁 **Interactive Telemetry Dashboard:**  
  [FORMULA 1 RACE INTELLIGENCE DASHBOARD](https://prod-in-a.online.tableau.com/#/site/en25cs3090205-84b4be6312/views/F1RaceIntelligenceDashboard_2/FORMULA1RACEINTELLIGENCEDASHBOARD?:iid=1)
* 📖 **9-Scene Championship Narrative Story:**  
  [Formula 1 Race Intelligence: From Global Overview to Championship Success](https://prod-in-a.online.tableau.com/#/site/en25cs3090205-84b4be6312/views/F1RACEStory/Formula1RaceIntelligenceFromGlobalOverviewtoChampionshipSuccess?:iid=2)

---

## 🎯 4 Core Operational KPIs

```
+------------------------------------------------------------------------------------+
| 🏁 Competing Teams: 10              | 📅 Seasons in Play: 17 (2010–2026)           |
+-------------------------------------+----------------------------------------------+
| 🏎️ Race Outcomes Logged: 6,464      | 🌍 Circuits Showcased: 29                    |
+------------------------------------------------------------------------------------+
```

---

## 🔬 5 Core Telemetry Pillars

1. **Global Race Overview:** Longitudinal geographic footprint spanning 29 world circuits across 21 nations, detailing track profiles, high-altitude downforce deltas, and continental race clusters.
2. **Driver Performance Metrics:** High-resolution sector pace (S1, S2, S3), qualifying delta margins, dynamic Top-N parameter ranking, and podium conversion ratios.
3. **Constructor Championship Battle:** 17 seasons of hybrid-era constructor point trajectories tracking Red Bull Racing (8,006 pts) and Mercedes-AMG (7,790 pts) across regulatory shifts.
4. **Pit Stop & Tyre Strategy Analysis:** Compound allocation breakdown across 4 official Pirelli specifications (Soft 31.52%, Medium 30.78%, Hard 30.36%, Intermediate 7.34%) and stint degradation curves.
5. **Reliability & DNF Diagnostics:** Granular root-cause categorization of mechanical retirements (Engine, Collision, Transmission, Suspension, Brakes) against modern 91.4% grid completion standards.

---

## 📈 9 Unique Tableau Visualizations

The published workbook incorporates 9 distinct, tailored analytical sheets:
1. **KPI Summary Cards (4 Cards):** Real-time operational benchmark figures (10 Teams, 17 Seasons, 6,464 Outcomes, 29 Circuits).
2. **Global Driver Distribution Across Grand Prix Nations:** Dark Mapbox geographic projection mapping driver nationalities and race volumes across 29 host nations.
3. **Driver Reliability Analysis:** Stacked bar chart breakdown colored by `Dnf Reason` detailing mechanical vs. accident attrition.
4. **Driver Performance Leaderboard:** Dynamic Top-N vertical bar chart controlled by `Top N Parameter` (default: 10, led by Hamilton, Verstappen, Leclerc, and Norris).
5. **Team Performance Ranking:** Horizontal bar chart sorted descending by points ranking constructor supremacy across the hybrid era.
6. **Team Championship Performance Analysis:** Vertical bar chart from `championship_standings` displaying regulation dominance shifts.
7. **Tyre Compound Usage Distribution:** Circular breakdown of Pirelli telemetry: Soft (31.52%), Medium (30.78%), Hard (30.36%), and Inter (7.34%).
8. **Country-wise Race Participation:** Proportional treemap / highlight table led by Bahrain (2,168), USA (400), Monaco (328), Spain (328), and Brazil (308).
9. **Podium Achievements by Driver and Team:** Packed bubble chart sized by `SUM(Podiums)` illustrating top-3 finishes by driver and constructor pairing.

---

## 🎛️ Interactive Global Controls

* **`Dnf Reason` Filter:** Categorical multi-select filter isolating specific failure modes (Engine, Collision, Transmission, Suspension, Brakes, Overheating).
* **`YEAR(Race Date)` Filter:** Continuous temporal slider/range encompassing all 17 hybrid seasons (2010–2026).
* **`Top N Parameter`:** Integer parameter (range 1–20, default: 10) dynamically resizing driver ranking visual sheets.

---

## 🛠️ Technology Stack & Architecture

```
+-------------------------------------------------------------------------------+
|  DATA ENGINEERING LAYER                                                       |
|  - F1 Racing Project Dataset.xlsx (5 connected sheets, ~13,750 rows)           |
|  - Root table: race_results (6,464 rows, 42 columns)                           |
+-------------------------------------------------------------------------------+
                                      │
                                      ▼
+-------------------------------------------------------------------------------+
|  TABLEAU ANALYTICS ENGINE                                                     |
|  - Logical Layer Relationships (circuit_id, race_id, season, driver)           |
|  - Calculated Fields: [DNF Count], [Points Cumulative], [Completion Rate %]   |
|  - Parameters: [Top N Parameter] (Integer 1-20, default: 10)                  |
|  - Published: F1 Race Intelligence Dashboard_2                                |
+-------------------------------------------------------------------------------+
                                      │
                                      ▼
+-------------------------------------------------------------------------------+
|  FLASK SERVICE & WEB EMBED LAYER                                              |
|  - Python Flask Web Server (app.py) with dynamic URL formatting               |
|  - Jinja2 Template (templates/index.html) with responsive embed window frames |
|  - Dark Obsidian UI: HTML5, CSS3 Glassmorphism, Vanilla ES6+, Chart.js        |
|  - REST API Endpoints: /api/config, /api/telemetry, /api/circuits, /api/health|
+-------------------------------------------------------------------------------+
```

---

## ⚡ How to Run the Application

### Method 1: Python Flask Server (Recommended)

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
2. **Start the Flask server:**
   ```bash
   python app.py
   ```
3. **Open in browser:**
   ```
   http://127.0.0.1:5000
   ```

### Method 2: Windows Quick-Start
Double-click `run.bat` in the project root to automatically check dependencies and launch the server.

### Method 3: Standalone Offline View
Open `index.html` directly in any web browser.

---

## 🔌 REST API Endpoints

| Endpoint | Method | Response Description |
| :--- | :---: | :--- |
| `/api/health` | `GET` | Service status, author name (`Shraddha Patel`), and version. |
| `/api/config` | `GET` | Active Tableau URLs, author metadata, and workbook config. |
| `/api/telemetry` | `GET` | Aggregated 4 Core KPIs and telemetry indicators. |
| `/api/circuits` | `GET` | Catalog of all 29 world circuits with coordinates. |
| `/api/drivers` | `GET` | Driver career records and telemetry statistics. |

---

## 📁 Repository Structure

```
├── app.py                         # Primary Flask web application server
├── templates/
│   └── index.html                 # Dynamic Flask Jinja2 web template
├── static/
│   ├── css/style.css              # F1 dark telemetry stylesheet
│   ├── js/script.js               # Interactive controller & Tableau embed injector
│   ├── js/data.js                 # Pre-compiled telemetry data object
│   ├── assets/                    # Preview images & reference captures
│   └── data/                      # Granular JSON telemetry files
├── requirements.txt               # Python dependency specifications
├── run.bat                        # Windows quick-start launcher script
├── index.html                     # Standalone static preview distribution file
├── style.css                      # Design system stylesheet
├── script.js                      # Frontend controller logic
├── data.js                        # Telemetry data feed
├── process_f1_dataset.py          # Python dataset processor
├── F1 Racing Project Dataset.xlsx # Raw 5-sheet Formula 1 dataset
├── PROJECT_DOCUMENTATION.md       # Comprehensive academic project documentation
└── README.md                      # This README file
```

---

## 👤 Author & Credits

* **Author & Lead Architect:** **Shraddha Patel**
* **Tableau Profile:** [@shraddha patel](https://public.tableau.com/app/profile/shraddha.patel)
* **GitHub Repository:** [https://github.com/en25cs3090205-ux/F1](https://github.com/en25cs3090205-ux/F1)
* **Academic Submission:** October 2026

---

## ⚖️ Educational Disclaimer

*This project is an independent educational and academic analytics platform developed by Shraddha Patel. Formula 1, F1, FIA, and related marks are trademarks of Formula One Licensing B.V. Not affiliated with or endorsed by Formula 1 companies.*
