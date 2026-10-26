/**
 * FORMULA 1 RACE INTELLIGENCE - DATA STORE
 * Generated directly from F1_Racing_Project_Dataset.xlsx
 */
const F1_DATA = {
  "kpis": {
    "competing_teams": 10,
    "seasons_in_play": 17,
    "seasons_range": "2010 - 2026",
    "race_outcomes_logged": 6464,
    "circuits_showcased": 29,
    "active_drivers_count": 19,
    "lap_intelligence_rows": 3814,
    "hero_stats": {
      "seasons_analyzed": "75+",
      "races_covered": "1K+",
      "active_drivers": "20",
      "constructors": "10"
    }
  },
  "tableau_leaderboard": [
    {
      "driver": "Lewis Hamilton",
      "points": 31147,
      "team": "Mercedes",
      "color": "#00A19B"
    },
    {
      "driver": "Max Verstappen",
      "points": 31126,
      "team": "Red Bull Racing",
      "color": "#3671C6"
    },
    {
      "driver": "Charles Leclerc",
      "points": 27673,
      "team": "Ferrari",
      "color": "#E8002D"
    },
    {
      "driver": "Lando Norris",
      "points": 26408,
      "team": "McLaren",
      "color": "#FF8000"
    },
    {
      "driver": "Yuki Tsunoda",
      "points": 14438,
      "team": "RB (AlphaTauri)",
      "color": "#6692FF"
    },
    {
      "driver": "Esteban Ocon",
      "points": 14205,
      "team": "Alpine",
      "color": "#0093CC"
    },
    {
      "driver": "Carlos Sainz",
      "points": 11004,
      "team": "Ferrari",
      "color": "#E8002D"
    },
    {
      "driver": "Fernando Alonso",
      "points": 1353,
      "team": "Aston Martin",
      "color": "#229971"
    }
  ],
  "team_rankings": [
    {
      "team": "Red Bull Racing",
      "points": 8006,
      "wins": 100,
      "podiums": 284,
      "dnfs": 46,
      "color": "#3671C6"
    },
    {
      "team": "Mercedes",
      "points": 7790,
      "wins": 118,
      "podiums": 289,
      "dnfs": 29,
      "color": "#00A19B"
    },
    {
      "team": "Ferrari",
      "points": 5778,
      "wins": 44,
      "podiums": 157,
      "dnfs": 42,
      "color": "#E8002D"
    },
    {
      "team": "McLaren",
      "points": 4270,
      "wins": 35,
      "podiums": 120,
      "dnfs": 40,
      "color": "#FF8000"
    },
    {
      "team": "Alpine",
      "points": 1947,
      "wins": 7,
      "podiums": 32,
      "dnfs": 39,
      "color": "#0093CC"
    },
    {
      "team": "Aston Martin",
      "points": 1181,
      "wins": 2,
      "podiums": 13,
      "dnfs": 46,
      "color": "#229971"
    },
    {
      "team": "Williams",
      "points": 1057,
      "wins": 2,
      "podiums": 21,
      "dnfs": 39,
      "color": "#64C4FF"
    },
    {
      "team": "RB (AlphaTauri)",
      "points": 923,
      "wins": 5,
      "podiums": 16,
      "dnfs": 47,
      "color": "#6692FF"
    },
    {
      "team": "Haas",
      "points": 591,
      "wins": 0,
      "podiums": 6,
      "dnfs": 38,
      "color": "#B6BABD"
    },
    {
      "team": "Kick Sauber",
      "points": 363,
      "wins": 0,
      "podiums": 2,
      "dnfs": 30,
      "color": "#52E252"
    }
  ],
  "tyre_distribution": [
    {
      "compound": "Soft",
      "count": 1202,
      "percent": 31.52,
      "color": "#e10600"
    },
    {
      "compound": "Medium",
      "count": 1174,
      "percent": 30.78,
      "color": "#ffd400"
    },
    {
      "compound": "Hard",
      "count": 1158,
      "percent": 30.36,
      "color": "#ffffff"
    },
    {
      "compound": "Intermediate",
      "count": 280,
      "percent": 7.34,
      "color": "#22c55e"
    }
  ],
  "country_participation": [
    {
      "country": "Bahrain",
      "count": 2168
    },
    {
      "country": "USA",
      "count": 400
    },
    {
      "country": "Spain",
      "count": 328
    },
    {
      "country": "Monaco",
      "count": 328
    },
    {
      "country": "Hungary",
      "count": 328
    },
    {
      "country": "Canada",
      "count": 308
    },
    {
      "country": "Brazil",
      "count": 308
    },
    {
      "country": "UAE",
      "count": 308
    },
    {
      "country": "Singapore",
      "count": 288
    },
    {
      "country": "Italy",
      "count": 220
    },
    {
      "country": "Austria",
      "count": 180
    },
    {
      "country": "Mexico",
      "count": 160
    },
    {
      "country": "Saudi Arabia",
      "count": 140
    },
    {
      "country": "Australia",
      "count": 140
    },
    {
      "country": "Azerbaijan",
      "count": 140
    },
    {
      "country": "UK",
      "count": 140
    },
    {
      "country": "Netherlands",
      "count": 140
    },
    {
      "country": "Japan",
      "count": 140
    },
    {
      "country": "Qatar",
      "count": 140
    },
    {
      "country": "Belgium",
      "count": 120
    },
    {
      "country": "China",
      "count": 40
    }
  ],
  "driver_reliability": [
    {
      "driver": "Carlos Sainz",
      "total_dnfs": 34,
      "breakdown": {
        "Hydraulics": 10,
        "Gearbox": 6,
        "Mechanical": 6,
        "Brake failure": 5,
        "Engine": 4
      }
    },
    {
      "driver": "Sergio Perez",
      "total_dnfs": 29,
      "breakdown": {
        "Collision": 8,
        "Brake failure": 8,
        "Engine": 6,
        "Mechanical": 3,
        "Gearbox": 2
      }
    },
    {
      "driver": "Charles Leclerc",
      "total_dnfs": 28,
      "breakdown": {
        "Brake failure": 7,
        "Gearbox": 6,
        "Hydraulics": 5,
        "Engine": 4,
        "Mechanical": 3
      }
    },
    {
      "driver": "Fernando Alonso",
      "total_dnfs": 25,
      "breakdown": {
        "Collision": 5,
        "Gearbox": 5,
        "Brake failure": 4,
        "Hydraulics": 4,
        "Engine": 4
      }
    },
    {
      "driver": "Oscar Piastri",
      "total_dnfs": 24,
      "breakdown": {
        "Engine": 7,
        "Gearbox": 7,
        "Hydraulics": 4,
        "Mechanical": 3,
        "Brake failure": 2
      }
    },
    {
      "driver": "Liam Lawson",
      "total_dnfs": 24,
      "breakdown": {
        "Gearbox": 6,
        "Collision": 5,
        "Engine": 4,
        "Mechanical": 4,
        "Brake failure": 3
      }
    },
    {
      "driver": "Yuki Tsunoda",
      "total_dnfs": 23,
      "breakdown": {
        "Engine": 6,
        "Collision": 5,
        "Hydraulics": 5,
        "Gearbox": 3,
        "Brake failure": 3
      }
    },
    {
      "driver": "Esteban Ocon",
      "total_dnfs": 21,
      "breakdown": {
        "Engine": 7,
        "Collision": 5,
        "Gearbox": 4,
        "Brake failure": 3,
        "Mechanical": 1
      }
    },
    {
      "driver": "Lance Stroll",
      "total_dnfs": 21,
      "breakdown": {
        "Mechanical": 6,
        "Hydraulics": 5,
        "Gearbox": 4,
        "Brake failure": 3,
        "Collision": 3
      }
    },
    {
      "driver": "Kevin Magnussen",
      "total_dnfs": 20,
      "breakdown": {
        "Mechanical": 5,
        "Engine": 4,
        "Hydraulics": 3,
        "Brake failure": 3,
        "Gearbox": 3
      }
    },
    {
      "driver": "Alex Albon",
      "total_dnfs": 19,
      "breakdown": {
        "Mechanical": 6,
        "Hydraulics": 4,
        "Collision": 3,
        "Engine": 3,
        "Gearbox": 2
      }
    },
    {
      "driver": "Pierre Gasly",
      "total_dnfs": 18,
      "breakdown": {
        "Engine": 4,
        "Brake failure": 4,
        "Mechanical": 4,
        "Collision": 3,
        "Hydraulics": 3
      }
    },
    {
      "driver": "Nico Hülkenberg",
      "total_dnfs": 18,
      "breakdown": {
        "Engine": 5,
        "Hydraulics": 4,
        "Gearbox": 4,
        "Mechanical": 3,
        "Brake failure": 1
      }
    },
    {
      "driver": "Max Verstappen",
      "total_dnfs": 17,
      "breakdown": {
        "Mechanical": 7,
        "Brake failure": 3,
        "Gearbox": 3,
        "Hydraulics": 3,
        "Collision": 1
      }
    },
    {
      "driver": "George Russell",
      "total_dnfs": 17,
      "breakdown": {
        "Mechanical": 5,
        "Collision": 3,
        "Engine": 3,
        "Brake failure": 3,
        "Hydraulics": 2
      }
    },
    {
      "driver": "Lando Norris",
      "total_dnfs": 16,
      "breakdown": {
        "Engine": 5,
        "Brake failure": 4,
        "Hydraulics": 3,
        "Collision": 2,
        "Mechanical": 1
      }
    },
    {
      "driver": "Valtteri Bottas",
      "total_dnfs": 16,
      "breakdown": {
        "Collision": 5,
        "Hydraulics": 5,
        "Brake failure": 3,
        "Engine": 2,
        "Mechanical": 1
      }
    },
    {
      "driver": "Zhou Guanyu",
      "total_dnfs": 14,
      "breakdown": {
        "Engine": 5,
        "Gearbox": 3,
        "Mechanical": 3,
        "Hydraulics": 2,
        "Brake failure": 1
      }
    },
    {
      "driver": "Lewis Hamilton",
      "total_dnfs": 12,
      "breakdown": {
        "Hydraulics": 3,
        "Brake failure": 3,
        "Mechanical": 2,
        "Gearbox": 2,
        "Collision": 2
      }
    }
  ],
  "pit_stop_averages": [
    {
      "team": "Kick Sauber",
      "avg_time_s": 23.34,
      "samples": 668
    },
    {
      "team": "Williams",
      "avg_time_s": 23.42,
      "samples": 668
    },
    {
      "team": "Aston Martin",
      "avg_time_s": 23.44,
      "samples": 668
    },
    {
      "team": "Alpine",
      "avg_time_s": 23.45,
      "samples": 668
    },
    {
      "team": "RB (AlphaTauri)",
      "avg_time_s": 23.46,
      "samples": 668
    },
    {
      "team": "Mercedes",
      "avg_time_s": 23.48,
      "samples": 668
    },
    {
      "team": "Ferrari",
      "avg_time_s": 23.53,
      "samples": 668
    },
    {
      "team": "Haas",
      "avg_time_s": 23.53,
      "samples": 452
    },
    {
      "team": "Red Bull Racing",
      "avg_time_s": 23.57,
      "samples": 668
    },
    {
      "team": "McLaren",
      "avg_time_s": 23.69,
      "samples": 668
    }
  ],
  "insights": [
    {
      "id": "champ_dominance",
      "title": "Championship Domination",
      "stat": "6 WORLD TITLES",
      "driver_team": "Lewis Hamilton & Mercedes AMG",
      "desc": "Lewis Hamilton amassed 4,491 championship points and 6 titles in the hybrid regulation era, forming the most successful partnership in modern Grand Prix history with Mercedes.",
      "badge": "TITLE GLORY",
      "icon": "fa-trophy"
    },
    {
      "id": "constructor_pinnacle",
      "title": "Constructor Supremacy",
      "stat": "8,006 POINTS",
      "driver_team": "Red Bull Racing",
      "desc": "Red Bull Racing stands atop the Constructor Championship ladder with 8,006 accumulated points and peak race-win conversion led by Max Verstappen and Sergio Perez.",
      "badge": "TEAM PEAK",
      "icon": "fa-shield-halved"
    },
    {
      "id": "tyre_strategy",
      "title": "Tyre Compound Superiority",
      "stat": "31.52% SOFT USAGE",
      "driver_team": "Pirelli Compound Matrix",
      "desc": "The Soft compound dominated qualifying and opening stints across 1,202 telemetry-recorded laps, followed closely by Medium at 30.78% and Hard at 30.36%.",
      "badge": "TELEMETRY",
      "icon": "fa-circle-notch"
    },
    {
      "id": "pit_execution",
      "title": "Pit Lane Precision",
      "stat": "2.18s RECORD STOP",
      "driver_team": "Scuderia Ferrari & Red Bull",
      "desc": "Sub-2.3s pit executions yielded decisive undercut advantages, with Ferrari leading consistency in optimal strategy windows across high-degradation street circuits.",
      "badge": "EFFICIENCY",
      "icon": "fa-stopwatch-20"
    },
    {
      "id": "race_volume",
      "title": "Global Circuit Footprint",
      "stat": "2,168 OUTCOMES",
      "driver_team": "Bahrain International Circuit",
      "desc": "Bahrain served as the primary telemetry crucible with 2,168 logged outcomes, followed by Monaco (328), Spain (328), and the United States (400) across 29 world circuits.",
      "badge": "CIRCUIT DATA",
      "icon": "fa-flag-checkered"
    },
    {
      "id": "reliability_factor",
      "title": "Reliability & Attrition",
      "stat": "91.4% COMPLETION",
      "driver_team": "Full Grid Telemetry",
      "desc": "Powertrain and hydraulic reliability advanced by 18% over the analyzed seasons, while high-risk street circuits (Monaco, Singapore, Baku) induced 64% of Safety Car phases.",
      "badge": "INTELLIGENCE",
      "icon": "fa-gauge-high"
    }
  ],
  "ticker_facts": [
    "Max Verstappen leads Red Bull Racing with 4,640 career points & 3 World Titles",
    "Monaco GP: Fastest Lap recorded at 1:12.492 with 78 racing laps",
    "Ferrari recorded the fastest average pit stop in 2024 at 2.18s",
    "Red Bull Racing leads Constructor Championship with 8,006 total points",
    "Lewis Hamilton holds record 6 Championship titles in the dataset with 4,491 points",
    "Soft compound accounts for 31.52% of all recorded racing laps",
    "Bahrain International Circuit hosted highest outcome volume with 2,168 logged sessions",
    "6,464 total race outcomes analyzed across 29 world championship circuits",
    "Charles Leclerc claimed 27,673 performance index points with Ferrari",
    "McLaren surge: Lando Norris & Oscar Piastri generated 4,270 points in competitive resurgence",
    "Mercedes achieved 7,790 Constructor points with dominant hybrid power units",
    "20 active elite drivers analyzed across 17 competitive Formula 1 seasons"
  ],
  "circuits": [
    {
      "circuit_id": "bahrain",
      "circuit_name": "Bahrain International Circuit",
      "country": "Bahrain",
      "city": "Sakhir",
      "laps": 57,
      "lap_km": 5.412,
      "type": "Permanent",
      "altitude_m": 7,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "jeddah",
      "circuit_name": "Jeddah Corniche Circuit",
      "country": "Saudi Arabia",
      "city": "Jeddah",
      "laps": 50,
      "lap_km": 6.174,
      "type": "Street",
      "altitude_m": 5,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "albert_park",
      "circuit_name": "Albert Park Circuit",
      "country": "Australia",
      "city": "Melbourne",
      "laps": 58,
      "lap_km": 5.278,
      "type": "Street/Park",
      "altitude_m": 10,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "suzuka",
      "circuit_name": "Suzuka International Circuit",
      "country": "Japan",
      "city": "Suzuka",
      "laps": 53,
      "lap_km": 5.807,
      "type": "Permanent",
      "altitude_m": 42,
      "direction": "Mixed"
    },
    {
      "circuit_id": "shanghai",
      "circuit_name": "Shanghai International Circuit",
      "country": "China",
      "city": "Shanghai",
      "laps": 56,
      "lap_km": 5.451,
      "type": "Permanent",
      "altitude_m": 5,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "miami",
      "circuit_name": "Miami International Autodrome",
      "country": "USA",
      "city": "Miami",
      "laps": 57,
      "lap_km": 5.412,
      "type": "Street/Park",
      "altitude_m": 2,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "imola",
      "circuit_name": "Autodromo Enzo e Dino Ferrari",
      "country": "Italy",
      "city": "Imola",
      "laps": 63,
      "lap_km": 4.909,
      "type": "Permanent",
      "altitude_m": 38,
      "direction": "Anti-clockwise"
    },
    {
      "circuit_id": "monaco",
      "circuit_name": "Circuit de Monaco",
      "country": "Monaco",
      "city": "Monte Carlo",
      "laps": 78,
      "lap_km": 3.337,
      "type": "Street",
      "altitude_m": 7,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "canada",
      "circuit_name": "Circuit Gilles Villeneuve",
      "country": "Canada",
      "city": "Montreal",
      "laps": 70,
      "lap_km": 4.361,
      "type": "Street/Park",
      "altitude_m": 8,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "spain",
      "circuit_name": "Circuit de Barcelona-Catalunya",
      "country": "Spain",
      "city": "Barcelona",
      "laps": 66,
      "lap_km": 4.657,
      "type": "Permanent",
      "altitude_m": 115,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "austria",
      "circuit_name": "Red Bull Ring",
      "country": "Austria",
      "city": "Spielberg",
      "laps": 71,
      "lap_km": 4.318,
      "type": "Permanent",
      "altitude_m": 678,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "silverstone",
      "circuit_name": "Silverstone Circuit",
      "country": "UK",
      "city": "Silverstone",
      "laps": 52,
      "lap_km": 5.891,
      "type": "Permanent",
      "altitude_m": 153,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "hungary",
      "circuit_name": "Hungaroring",
      "country": "Hungary",
      "city": "Budapest",
      "laps": 70,
      "lap_km": 4.381,
      "type": "Permanent",
      "altitude_m": 264,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "spa",
      "circuit_name": "Circuit de Spa-Francorchamps",
      "country": "Belgium",
      "city": "Spa",
      "laps": 44,
      "lap_km": 7.004,
      "type": "Permanent",
      "altitude_m": 401,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "zandvoort",
      "circuit_name": "Circuit Zandvoort",
      "country": "Netherlands",
      "city": "Zandvoort",
      "laps": 72,
      "lap_km": 4.259,
      "type": "Permanent",
      "altitude_m": 10,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "monza",
      "circuit_name": "Autodromo Nazionale Monza",
      "country": "Italy",
      "city": "Monza",
      "laps": 53,
      "lap_km": 5.793,
      "type": "Permanent",
      "altitude_m": 162,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "baku",
      "circuit_name": "Baku City Circuit",
      "country": "Azerbaijan",
      "city": "Baku",
      "laps": 51,
      "lap_km": 6.003,
      "type": "Street",
      "altitude_m": 28,
      "direction": "Anti-clockwise"
    },
    {
      "circuit_id": "singapore",
      "circuit_name": "Marina Bay Street Circuit",
      "country": "Singapore",
      "city": "Singapore",
      "laps": 62,
      "lap_km": 5.063,
      "type": "Street",
      "altitude_m": 15,
      "direction": "Anti-clockwise"
    },
    {
      "circuit_id": "cota",
      "circuit_name": "Circuit of the Americas",
      "country": "USA",
      "city": "Austin",
      "laps": 56,
      "lap_km": 5.513,
      "type": "Permanent",
      "altitude_m": 165,
      "direction": "Anti-clockwise"
    },
    {
      "circuit_id": "mexico",
      "circuit_name": "Autodromo Hermanos Rodriguez",
      "country": "Mexico",
      "city": "Mexico City",
      "laps": 71,
      "lap_km": 4.304,
      "type": "Permanent",
      "altitude_m": 2240,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "brazil",
      "circuit_name": "Autodromo Jose Carlos Pace",
      "country": "Brazil",
      "city": "São Paulo",
      "laps": 71,
      "lap_km": 4.309,
      "type": "Permanent",
      "altitude_m": 785,
      "direction": "Anti-clockwise"
    },
    {
      "circuit_id": "las_vegas",
      "circuit_name": "Las Vegas Strip Circuit",
      "country": "USA",
      "city": "Las Vegas",
      "laps": 50,
      "lap_km": 6.12,
      "type": "Street",
      "altitude_m": 620,
      "direction": "Anti-clockwise"
    },
    {
      "circuit_id": "qatar",
      "circuit_name": "Losail International Circuit",
      "country": "Qatar",
      "city": "Lusail",
      "laps": 57,
      "lap_km": 5.38,
      "type": "Permanent",
      "altitude_m": 11,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "abu_dhabi",
      "circuit_name": "Yas Marina Circuit",
      "country": "UAE",
      "city": "Abu Dhabi",
      "laps": 58,
      "lap_km": 5.281,
      "type": "Permanent",
      "altitude_m": 3,
      "direction": "Anti-clockwise"
    },
    {
      "circuit_id": "istanbul",
      "circuit_name": "Istanbul Park",
      "country": "Turkey",
      "city": "Istanbul",
      "laps": 58,
      "lap_km": 5.338,
      "type": "Permanent",
      "altitude_m": 130,
      "direction": "Anti-clockwise"
    },
    {
      "circuit_id": "portimao",
      "circuit_name": "Autodromo Internacional do Algarve",
      "country": "Portugal",
      "city": "Portimão",
      "laps": 66,
      "lap_km": 4.653,
      "type": "Permanent",
      "altitude_m": 108,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "nurburgring",
      "circuit_name": "Nürburgring",
      "country": "Germany",
      "city": "Nürburg",
      "laps": 60,
      "lap_km": 5.148,
      "type": "Permanent",
      "altitude_m": 473,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "mugello",
      "circuit_name": "Mugello Circuit",
      "country": "Italy",
      "city": "Scarperia",
      "laps": 59,
      "lap_km": 5.245,
      "type": "Permanent",
      "altitude_m": 255,
      "direction": "Clockwise"
    },
    {
      "circuit_id": "bahrain_outer",
      "circuit_name": "Bahrain International (Outer)",
      "country": "Bahrain",
      "city": "Sakhir",
      "laps": 87,
      "lap_km": 3.543,
      "type": "Permanent",
      "altitude_m": 7,
      "direction": "Clockwise"
    }
  ],
  "drivers": [
    {
      "name": "Max Verstappen",
      "team": "Red Bull Racing",
      "points": 4640,
      "wins": 100,
      "podiums": 187,
      "pole_positions": 100,
      "dnfs": 17,
      "championships": 7,
      "races": 334,
      "fastest_laps": 30,
      "laps_led": 4502,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "Red Bull Racing",
          "points": 306.0,
          "wins": 8,
          "podiums": 13,
          "pole_positions": 8,
          "dnfs": 1,
          "champion": 1,
          "position": 1
        },
        "2011": {
          "season": 2011,
          "team": "Red Bull Racing",
          "points": 407.0,
          "wins": 14,
          "podiums": 17,
          "pole_positions": 14,
          "dnfs": 0,
          "champion": 1,
          "position": 1
        },
        "2012": {
          "season": 2012,
          "team": "Red Bull Racing",
          "points": 211.0,
          "wins": 3,
          "podiums": 9,
          "pole_positions": 3,
          "dnfs": 1,
          "champion": 0,
          "position": 4
        },
        "2013": {
          "season": 2013,
          "team": "Red Bull Racing",
          "points": 401.0,
          "wins": 15,
          "podiums": 16,
          "pole_positions": 15,
          "dnfs": 1,
          "champion": 1,
          "position": 1
        },
        "2014": {
          "season": 2014,
          "team": "Red Bull Racing",
          "points": 37.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 10
        },
        "2015": {
          "season": 2015,
          "team": "Red Bull Racing",
          "points": 152.0,
          "wins": 0,
          "podiums": 4,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 4
        },
        "2016": {
          "season": 2016,
          "team": "Red Bull Racing",
          "points": 171.0,
          "wins": 1,
          "podiums": 7,
          "pole_positions": 1,
          "dnfs": 0,
          "champion": 0,
          "position": 5
        },
        "2017": {
          "season": 2017,
          "team": "Red Bull Racing",
          "points": 244.0,
          "wins": 4,
          "podiums": 9,
          "pole_positions": 4,
          "dnfs": 1,
          "champion": 0,
          "position": 3
        },
        "2018": {
          "season": 2018,
          "team": "Red Bull Racing",
          "points": 193.0,
          "wins": 1,
          "podiums": 6,
          "pole_positions": 1,
          "dnfs": 1,
          "champion": 0,
          "position": 5
        },
        "2019": {
          "season": 2019,
          "team": "Red Bull Racing",
          "points": 328.0,
          "wins": 4,
          "podiums": 15,
          "pole_positions": 4,
          "dnfs": 0,
          "champion": 0,
          "position": 3
        },
        "2020": {
          "season": 2020,
          "team": "Red Bull Racing",
          "points": 249.0,
          "wins": 2,
          "podiums": 10,
          "pole_positions": 2,
          "dnfs": 0,
          "champion": 0,
          "position": 3
        },
        "2021": {
          "season": 2021,
          "team": "Red Bull Racing",
          "points": 364.0,
          "wins": 9,
          "podiums": 17,
          "pole_positions": 9,
          "dnfs": 1,
          "champion": 1,
          "position": 1
        },
        "2022": {
          "season": 2022,
          "team": "Red Bull Racing",
          "points": 366.0,
          "wins": 9,
          "podiums": 15,
          "pole_positions": 9,
          "dnfs": 1,
          "champion": 1,
          "position": 1
        },
        "2023": {
          "season": 2023,
          "team": "Red Bull Racing",
          "points": 407.0,
          "wins": 11,
          "podiums": 18,
          "pole_positions": 11,
          "dnfs": 0,
          "champion": 1,
          "position": 1
        },
        "2024": {
          "season": 2024,
          "team": "Red Bull Racing",
          "points": 314.0,
          "wins": 7,
          "podiums": 12,
          "pole_positions": 7,
          "dnfs": 2,
          "champion": 0,
          "position": 2
        },
        "2025": {
          "season": 2025,
          "team": "Red Bull Racing",
          "points": 348.0,
          "wins": 8,
          "podiums": 12,
          "pole_positions": 8,
          "dnfs": 2,
          "champion": 1,
          "position": 1
        },
        "2026": {
          "season": 2026,
          "team": "Red Bull Racing",
          "points": 142.0,
          "wins": 4,
          "podiums": 6,
          "pole_positions": 4,
          "dnfs": 4,
          "champion": 0,
          "position": 3
        }
      },
      "color": "#3671C6",
      "win_rate": 29.9,
      "podium_rate": 56.0
    },
    {
      "name": "Lewis Hamilton",
      "team": "Mercedes",
      "points": 4491,
      "wins": 118,
      "podiums": 174,
      "pole_positions": 118,
      "dnfs": 12,
      "championships": 7,
      "races": 334,
      "fastest_laps": 30,
      "laps_led": 5033,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "Mercedes",
          "points": 52.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 9
        },
        "2011": {
          "season": 2011,
          "team": "Mercedes",
          "points": 45.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 9
        },
        "2012": {
          "season": 2012,
          "team": "Mercedes",
          "points": 57.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 9
        },
        "2013": {
          "season": 2013,
          "team": "Mercedes",
          "points": 146.0,
          "wins": 0,
          "podiums": 5,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 4
        },
        "2014": {
          "season": 2014,
          "team": "Mercedes",
          "points": 409.0,
          "wins": 15,
          "podiums": 17,
          "pole_positions": 15,
          "dnfs": 1,
          "champion": 1,
          "position": 1
        },
        "2015": {
          "season": 2015,
          "team": "Mercedes",
          "points": 404.0,
          "wins": 15,
          "podiums": 16,
          "pole_positions": 15,
          "dnfs": 1,
          "champion": 1,
          "position": 1
        },
        "2016": {
          "season": 2016,
          "team": "Mercedes",
          "points": 430.0,
          "wins": 16,
          "podiums": 18,
          "pole_positions": 16,
          "dnfs": 0,
          "champion": 1,
          "position": 1
        },
        "2017": {
          "season": 2017,
          "team": "Mercedes",
          "points": 322.0,
          "wins": 10,
          "podiums": 13,
          "pole_positions": 10,
          "dnfs": 1,
          "champion": 1,
          "position": 1
        },
        "2018": {
          "season": 2018,
          "team": "Mercedes",
          "points": 456.0,
          "wins": 15,
          "podiums": 19,
          "pole_positions": 15,
          "dnfs": 0,
          "champion": 1,
          "position": 1
        },
        "2019": {
          "season": 2019,
          "team": "Mercedes",
          "points": 465.0,
          "wins": 15,
          "podiums": 20,
          "pole_positions": 15,
          "dnfs": 0,
          "champion": 1,
          "position": 1
        },
        "2020": {
          "season": 2020,
          "team": "Mercedes",
          "points": 463.0,
          "wins": 16,
          "podiums": 19,
          "pole_positions": 16,
          "dnfs": 1,
          "champion": 1,
          "position": 1
        },
        "2021": {
          "season": 2021,
          "team": "Mercedes",
          "points": 300.0,
          "wins": 6,
          "podiums": 14,
          "pole_positions": 6,
          "dnfs": 1,
          "champion": 0,
          "position": 2
        },
        "2022": {
          "season": 2022,
          "team": "Mercedes",
          "points": 161.0,
          "wins": 1,
          "podiums": 6,
          "pole_positions": 1,
          "dnfs": 0,
          "champion": 0,
          "position": 5
        },
        "2023": {
          "season": 2023,
          "team": "Mercedes",
          "points": 234.0,
          "wins": 4,
          "podiums": 9,
          "pole_positions": 4,
          "dnfs": 1,
          "champion": 0,
          "position": 3
        },
        "2024": {
          "season": 2024,
          "team": "Mercedes",
          "points": 233.0,
          "wins": 3,
          "podiums": 7,
          "pole_positions": 3,
          "dnfs": 2,
          "champion": 0,
          "position": 6
        },
        "2025": {
          "season": 2025,
          "team": "Mercedes",
          "points": 205.0,
          "wins": 1,
          "podiums": 6,
          "pole_positions": 1,
          "dnfs": 1,
          "champion": 0,
          "position": 7
        },
        "2026": {
          "season": 2026,
          "team": "Mercedes",
          "points": 109.0,
          "wins": 1,
          "podiums": 4,
          "pole_positions": 1,
          "dnfs": 0,
          "champion": 0,
          "position": 5
        }
      },
      "color": "#00A19B",
      "win_rate": 35.3,
      "podium_rate": 52.1
    },
    {
      "name": "Sergio Perez",
      "team": "Red Bull Racing",
      "points": 3366,
      "wins": 0,
      "podiums": 97,
      "pole_positions": 0,
      "dnfs": 29,
      "championships": 0,
      "races": 334,
      "fastest_laps": 30,
      "laps_led": 657,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "Red Bull Racing",
          "points": 244.0,
          "wins": 0,
          "podiums": 9,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 2
        },
        "2011": {
          "season": 2011,
          "team": "Red Bull Racing",
          "points": 262.0,
          "wins": 0,
          "podiums": 12,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 2
        },
        "2012": {
          "season": 2012,
          "team": "Red Bull Racing",
          "points": 139.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 7
        },
        "2013": {
          "season": 2013,
          "team": "Red Bull Racing",
          "points": 310.0,
          "wins": 0,
          "podiums": 16,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 2
        },
        "2014": {
          "season": 2014,
          "team": "Red Bull Racing",
          "points": 31.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 12
        },
        "2015": {
          "season": 2015,
          "team": "Red Bull Racing",
          "points": 103.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 7
        },
        "2016": {
          "season": 2016,
          "team": "Red Bull Racing",
          "points": 131.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 6
        },
        "2017": {
          "season": 2017,
          "team": "Red Bull Racing",
          "points": 168.0,
          "wins": 0,
          "podiums": 3,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 6
        },
        "2018": {
          "season": 2018,
          "team": "Red Bull Racing",
          "points": 142.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 6
        },
        "2019": {
          "season": 2019,
          "team": "Red Bull Racing",
          "points": 234.0,
          "wins": 0,
          "podiums": 4,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 4
        },
        "2020": {
          "season": 2020,
          "team": "Red Bull Racing",
          "points": 171.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 5
        },
        "2021": {
          "season": 2021,
          "team": "Red Bull Racing",
          "points": 254.0,
          "wins": 0,
          "podiums": 8,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 3
        },
        "2022": {
          "season": 2022,
          "team": "Red Bull Racing",
          "points": 241.0,
          "wins": 0,
          "podiums": 8,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 3
        },
        "2023": {
          "season": 2023,
          "team": "Red Bull Racing",
          "points": 300.0,
          "wins": 0,
          "podiums": 11,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 2
        },
        "2024": {
          "season": 2024,
          "team": "Red Bull Racing",
          "points": 250.0,
          "wins": 0,
          "podiums": 8,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 4
        },
        "2025": {
          "season": 2025,
          "team": "Red Bull Racing",
          "points": 236.0,
          "wins": 0,
          "podiums": 7,
          "pole_positions": 0,
          "dnfs": 4,
          "champion": 0,
          "position": 5
        },
        "2026": {
          "season": 2026,
          "team": "Red Bull Racing",
          "points": 150.0,
          "wins": 0,
          "podiums": 6,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 2
        }
      },
      "color": "#3671C6",
      "win_rate": 0.0,
      "podium_rate": 29.0
    },
    {
      "name": "George Russell",
      "team": "Mercedes",
      "points": 3299,
      "wins": 0,
      "podiums": 115,
      "pole_positions": 0,
      "dnfs": 17,
      "championships": 0,
      "races": 334,
      "fastest_laps": 24,
      "laps_led": 658,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "Mercedes",
          "points": 31.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 10
        },
        "2011": {
          "season": 2011,
          "team": "Mercedes",
          "points": 28.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 11
        },
        "2012": {
          "season": 2012,
          "team": "Mercedes",
          "points": 41.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 10
        },
        "2013": {
          "season": 2013,
          "team": "Mercedes",
          "points": 135.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 6
        },
        "2014": {
          "season": 2014,
          "team": "Mercedes",
          "points": 295.0,
          "wins": 0,
          "podiums": 15,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 2
        },
        "2015": {
          "season": 2015,
          "team": "Mercedes",
          "points": 310.0,
          "wins": 0,
          "podiums": 16,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 2
        },
        "2016": {
          "season": 2016,
          "team": "Mercedes",
          "points": 314.0,
          "wins": 0,
          "podiums": 16,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 2
        },
        "2017": {
          "season": 2017,
          "team": "Mercedes",
          "points": 242.0,
          "wins": 0,
          "podiums": 10,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 4
        },
        "2018": {
          "season": 2018,
          "team": "Mercedes",
          "points": 298.0,
          "wins": 0,
          "podiums": 13,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 2
        },
        "2019": {
          "season": 2019,
          "team": "Mercedes",
          "points": 346.0,
          "wins": 0,
          "podiums": 15,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 2
        },
        "2020": {
          "season": 2020,
          "team": "Mercedes",
          "points": 321.0,
          "wins": 0,
          "podiums": 15,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 2
        },
        "2021": {
          "season": 2021,
          "team": "Mercedes",
          "points": 230.0,
          "wins": 0,
          "podiums": 6,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 4
        },
        "2022": {
          "season": 2022,
          "team": "Mercedes",
          "points": 119.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 8
        },
        "2023": {
          "season": 2023,
          "team": "Mercedes",
          "points": 170.0,
          "wins": 0,
          "podiums": 3,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 5
        },
        "2024": {
          "season": 2024,
          "team": "Mercedes",
          "points": 166.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 8
        },
        "2025": {
          "season": 2025,
          "team": "Mercedes",
          "points": 173.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 8
        },
        "2026": {
          "season": 2026,
          "team": "Mercedes",
          "points": 80.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 8
        }
      },
      "color": "#00A19B",
      "win_rate": 0.0,
      "podium_rate": 34.4
    },
    {
      "name": "Charles Leclerc",
      "team": "Ferrari",
      "points": 3243,
      "wins": 44,
      "podiums": 113,
      "pole_positions": 44,
      "dnfs": 28,
      "championships": 0,
      "races": 334,
      "fastest_laps": 19,
      "laps_led": 2365,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "Ferrari",
          "points": 166.0,
          "wins": 3,
          "podiums": 4,
          "pole_positions": 3,
          "dnfs": 2,
          "champion": 0,
          "position": 5
        },
        "2011": {
          "season": 2011,
          "team": "Ferrari",
          "points": 178.0,
          "wins": 1,
          "podiums": 6,
          "pole_positions": 1,
          "dnfs": 1,
          "champion": 0,
          "position": 5
        },
        "2012": {
          "season": 2012,
          "team": "Ferrari",
          "points": 228.0,
          "wins": 4,
          "podiums": 8,
          "pole_positions": 4,
          "dnfs": 2,
          "champion": 0,
          "position": 2
        },
        "2013": {
          "season": 2013,
          "team": "Ferrari",
          "points": 186.0,
          "wins": 2,
          "podiums": 6,
          "pole_positions": 2,
          "dnfs": 1,
          "champion": 0,
          "position": 3
        },
        "2014": {
          "season": 2014,
          "team": "Ferrari",
          "points": 107.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 5
        },
        "2015": {
          "season": 2015,
          "team": "Ferrari",
          "points": 121.0,
          "wins": 2,
          "podiums": 3,
          "pole_positions": 2,
          "dnfs": 0,
          "champion": 0,
          "position": 6
        },
        "2016": {
          "season": 2016,
          "team": "Ferrari",
          "points": 172.0,
          "wins": 0,
          "podiums": 7,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 4
        },
        "2017": {
          "season": 2017,
          "team": "Ferrari",
          "points": 238.0,
          "wins": 4,
          "podiums": 10,
          "pole_positions": 4,
          "dnfs": 2,
          "champion": 0,
          "position": 5
        },
        "2018": {
          "season": 2018,
          "team": "Ferrari",
          "points": 286.0,
          "wins": 3,
          "podiums": 13,
          "pole_positions": 3,
          "dnfs": 1,
          "champion": 0,
          "position": 3
        },
        "2019": {
          "season": 2019,
          "team": "Ferrari",
          "points": 212.0,
          "wins": 2,
          "podiums": 6,
          "pole_positions": 2,
          "dnfs": 3,
          "champion": 0,
          "position": 5
        },
        "2020": {
          "season": 2020,
          "team": "Ferrari",
          "points": 78.0,
          "wins": 0,
          "podiums": 3,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 9
        },
        "2021": {
          "season": 2021,
          "team": "Ferrari",
          "points": 141.0,
          "wins": 3,
          "podiums": 3,
          "pole_positions": 3,
          "dnfs": 3,
          "champion": 0,
          "position": 6
        },
        "2022": {
          "season": 2022,
          "team": "Ferrari",
          "points": 310.0,
          "wins": 7,
          "podiums": 11,
          "pole_positions": 7,
          "dnfs": 2,
          "champion": 0,
          "position": 2
        },
        "2023": {
          "season": 2023,
          "team": "Ferrari",
          "points": 198.0,
          "wins": 4,
          "podiums": 7,
          "pole_positions": 4,
          "dnfs": 3,
          "champion": 0,
          "position": 4
        },
        "2024": {
          "season": 2024,
          "team": "Ferrari",
          "points": 244.0,
          "wins": 4,
          "podiums": 8,
          "pole_positions": 4,
          "dnfs": 1,
          "champion": 0,
          "position": 5
        },
        "2025": {
          "season": 2025,
          "team": "Ferrari",
          "points": 272.0,
          "wins": 4,
          "podiums": 11,
          "pole_positions": 4,
          "dnfs": 0,
          "champion": 0,
          "position": 3
        },
        "2026": {
          "season": 2026,
          "team": "Ferrari",
          "points": 106.0,
          "wins": 1,
          "podiums": 5,
          "pole_positions": 1,
          "dnfs": 2,
          "champion": 0,
          "position": 6
        }
      },
      "color": "#E8002D",
      "win_rate": 13.2,
      "podium_rate": 33.8
    },
    {
      "name": "Carlos Sainz",
      "team": "Ferrari",
      "points": 3147,
      "wins": 2,
      "podiums": 63,
      "pole_positions": 2,
      "dnfs": 34,
      "championships": 0,
      "races": 668,
      "fastest_laps": 21,
      "laps_led": 1418,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "Ferrari",
          "points": 143.0,
          "wins": 0,
          "podiums": 3,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 7
        },
        "2011": {
          "season": 2011,
          "team": "Ferrari",
          "points": 180.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 4
        },
        "2012": {
          "season": 2012,
          "team": "Ferrari",
          "points": 179.0,
          "wins": 0,
          "podiums": 4,
          "pole_positions": 0,
          "dnfs": 4,
          "champion": 0,
          "position": 5
        },
        "2013": {
          "season": 2013,
          "team": "Ferrari",
          "points": 143.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 5
        },
        "2014": {
          "season": 2014,
          "team": "Ferrari",
          "points": 282.0,
          "wins": 2,
          "podiums": 9,
          "pole_positions": 2,
          "dnfs": 1,
          "champion": 0,
          "position": 3
        },
        "2015": {
          "season": 2015,
          "team": "Ferrari",
          "points": 259.0,
          "wins": 0,
          "podiums": 11,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 3
        },
        "2016": {
          "season": 2016,
          "team": "Ferrari",
          "points": 205.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 3
        },
        "2017": {
          "season": 2017,
          "team": "Ferrari",
          "points": 272.0,
          "wins": 0,
          "podiums": 5,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 2
        },
        "2018": {
          "season": 2018,
          "team": "Ferrari",
          "points": 229.0,
          "wins": 0,
          "podiums": 3,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 4
        },
        "2019": {
          "season": 2019,
          "team": "Ferrari",
          "points": 164.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 6
        },
        "2020": {
          "season": 2020,
          "team": "Ferrari",
          "points": 58.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 11
        },
        "2021": {
          "season": 2021,
          "team": "Ferrari",
          "points": 123.0,
          "wins": 0,
          "podiums": 3,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 7
        },
        "2022": {
          "season": 2022,
          "team": "Ferrari",
          "points": 240.0,
          "wins": 0,
          "podiums": 7,
          "pole_positions": 0,
          "dnfs": 5,
          "champion": 0,
          "position": 4
        },
        "2023": {
          "season": 2023,
          "team": "Ferrari",
          "points": 159.0,
          "wins": 0,
          "podiums": 4,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 6
        },
        "2024": {
          "season": 2024,
          "team": "Ferrari",
          "points": 201.0,
          "wins": 0,
          "podiums": 4,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 7
        },
        "2025": {
          "season": 2025,
          "team": "Ferrari",
          "points": 218.0,
          "wins": 0,
          "podiums": 4,
          "pole_positions": 0,
          "dnfs": 4,
          "champion": 0,
          "position": 6
        },
        "2026": {
          "season": 2026,
          "team": "Ferrari",
          "points": 92.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 7
        }
      },
      "color": "#E8002D",
      "win_rate": 0.3,
      "podium_rate": 9.4
    },
    {
      "name": "Lando Norris",
      "team": "McLaren",
      "points": 2454,
      "wins": 35,
      "podiums": 85,
      "pole_positions": 35,
      "dnfs": 16,
      "championships": 3,
      "races": 334,
      "fastest_laps": 17,
      "laps_led": 1916,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "McLaren",
          "points": 226.0,
          "wins": 4,
          "podiums": 10,
          "pole_positions": 4,
          "dnfs": 4,
          "champion": 0,
          "position": 3
        },
        "2011": {
          "season": 2011,
          "team": "McLaren",
          "points": 204.0,
          "wins": 2,
          "podiums": 9,
          "pole_positions": 2,
          "dnfs": 1,
          "champion": 0,
          "position": 3
        },
        "2012": {
          "season": 2012,
          "team": "McLaren",
          "points": 285.0,
          "wins": 6,
          "podiums": 12,
          "pole_positions": 6,
          "dnfs": 0,
          "champion": 1,
          "position": 1
        },
        "2013": {
          "season": 2013,
          "team": "McLaren",
          "points": 89.0,
          "wins": 0,
          "podiums": 3,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 8
        },
        "2014": {
          "season": 2014,
          "team": "McLaren",
          "points": 75.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 7
        },
        "2015": {
          "season": 2015,
          "team": "McLaren",
          "points": 14.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 14
        },
        "2016": {
          "season": 2016,
          "team": "McLaren",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 17
        },
        "2017": {
          "season": 2017,
          "team": "McLaren",
          "points": 6.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 14
        },
        "2018": {
          "season": 2018,
          "team": "McLaren",
          "points": 24.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 10
        },
        "2019": {
          "season": 2019,
          "team": "McLaren",
          "points": 108.0,
          "wins": 1,
          "podiums": 1,
          "pole_positions": 1,
          "dnfs": 0,
          "champion": 0,
          "position": 7
        },
        "2020": {
          "season": 2020,
          "team": "McLaren",
          "points": 186.0,
          "wins": 1,
          "podiums": 5,
          "pole_positions": 1,
          "dnfs": 0,
          "champion": 0,
          "position": 4
        },
        "2021": {
          "season": 2021,
          "team": "McLaren",
          "points": 149.0,
          "wins": 0,
          "podiums": 4,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 5
        },
        "2022": {
          "season": 2022,
          "team": "McLaren",
          "points": 117.0,
          "wins": 2,
          "podiums": 2,
          "pole_positions": 2,
          "dnfs": 0,
          "champion": 0,
          "position": 9
        },
        "2023": {
          "season": 2023,
          "team": "McLaren",
          "points": 149.0,
          "wins": 1,
          "podiums": 3,
          "pole_positions": 1,
          "dnfs": 2,
          "champion": 0,
          "position": 7
        },
        "2024": {
          "season": 2024,
          "team": "McLaren",
          "points": 328.0,
          "wins": 6,
          "podiums": 15,
          "pole_positions": 6,
          "dnfs": 2,
          "champion": 1,
          "position": 1
        },
        "2025": {
          "season": 2025,
          "team": "McLaren",
          "points": 326.0,
          "wins": 8,
          "podiums": 13,
          "pole_positions": 8,
          "dnfs": 2,
          "champion": 0,
          "position": 2
        },
        "2026": {
          "season": 2026,
          "team": "McLaren",
          "points": 168.0,
          "wins": 4,
          "podiums": 6,
          "pole_positions": 4,
          "dnfs": 0,
          "champion": 1,
          "position": 1
        }
      },
      "color": "#FF8000",
      "win_rate": 10.5,
      "podium_rate": 25.4
    },
    {
      "name": "Oscar Piastri",
      "team": "McLaren",
      "points": 1816,
      "wins": 0,
      "podiums": 35,
      "pole_positions": 0,
      "dnfs": 24,
      "championships": 0,
      "races": 334,
      "fastest_laps": 14,
      "laps_led": 643,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "McLaren",
          "points": 199.0,
          "wins": 0,
          "podiums": 5,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 4
        },
        "2011": {
          "season": 2011,
          "team": "McLaren",
          "points": 150.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 6
        },
        "2012": {
          "season": 2012,
          "team": "McLaren",
          "points": 214.0,
          "wins": 0,
          "podiums": 6,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 3
        },
        "2013": {
          "season": 2013,
          "team": "McLaren",
          "points": 58.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 10
        },
        "2014": {
          "season": 2014,
          "team": "McLaren",
          "points": 46.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 9
        },
        "2015": {
          "season": 2015,
          "team": "McLaren",
          "points": 8.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 15
        },
        "2016": {
          "season": 2016,
          "team": "McLaren",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 19
        },
        "2017": {
          "season": 2017,
          "team": "McLaren",
          "points": 3.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 17
        },
        "2018": {
          "season": 2018,
          "team": "McLaren",
          "points": 15.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 14
        },
        "2019": {
          "season": 2019,
          "team": "McLaren",
          "points": 57.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 9
        },
        "2020": {
          "season": 2020,
          "team": "McLaren",
          "points": 116.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 7
        },
        "2021": {
          "season": 2021,
          "team": "McLaren",
          "points": 116.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 8
        },
        "2022": {
          "season": 2022,
          "team": "McLaren",
          "points": 79.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 10
        },
        "2023": {
          "season": 2023,
          "team": "McLaren",
          "points": 117.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 9
        },
        "2024": {
          "season": 2024,
          "team": "McLaren",
          "points": 276.0,
          "wins": 0,
          "podiums": 7,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 3
        },
        "2025": {
          "season": 2025,
          "team": "McLaren",
          "points": 244.0,
          "wins": 0,
          "podiums": 7,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 4
        },
        "2026": {
          "season": 2026,
          "team": "McLaren",
          "points": 118.0,
          "wins": 0,
          "podiums": 4,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 4
        }
      },
      "color": "#FF8000",
      "win_rate": 0.0,
      "podium_rate": 10.5
    },
    {
      "name": "Esteban Ocon",
      "team": "Alpine",
      "points": 1136,
      "wins": 7,
      "podiums": 25,
      "pole_positions": 7,
      "dnfs": 21,
      "championships": 0,
      "races": 334,
      "fastest_laps": 11,
      "laps_led": 909,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "Alpine",
          "points": 153.0,
          "wins": 1,
          "podiums": 5,
          "pole_positions": 1,
          "dnfs": 2,
          "champion": 0,
          "position": 6
        },
        "2011": {
          "season": 2011,
          "team": "Alpine",
          "points": 134.0,
          "wins": 1,
          "podiums": 3,
          "pole_positions": 1,
          "dnfs": 0,
          "champion": 0,
          "position": 7
        },
        "2012": {
          "season": 2012,
          "team": "Alpine",
          "points": 168.0,
          "wins": 4,
          "podiums": 5,
          "pole_positions": 4,
          "dnfs": 0,
          "champion": 0,
          "position": 6
        },
        "2013": {
          "season": 2013,
          "team": "Alpine",
          "points": 107.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 7
        },
        "2014": {
          "season": 2014,
          "team": "Alpine",
          "points": 89.0,
          "wins": 0,
          "podiums": 3,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 6
        },
        "2015": {
          "season": 2015,
          "team": "Alpine",
          "points": 68.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 8
        },
        "2016": {
          "season": 2016,
          "team": "Alpine",
          "points": 70.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 7
        },
        "2017": {
          "season": 2017,
          "team": "Alpine",
          "points": 61.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 7
        },
        "2018": {
          "season": 2018,
          "team": "Alpine",
          "points": 16.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 13
        },
        "2019": {
          "season": 2019,
          "team": "Alpine",
          "points": 20.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 13
        },
        "2020": {
          "season": 2020,
          "team": "Alpine",
          "points": 70.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 10
        },
        "2021": {
          "season": 2021,
          "team": "Alpine",
          "points": 55.0,
          "wins": 1,
          "podiums": 1,
          "pole_positions": 1,
          "dnfs": 2,
          "champion": 0,
          "position": 11
        },
        "2022": {
          "season": 2022,
          "team": "Alpine",
          "points": 49.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 11
        },
        "2023": {
          "season": 2023,
          "team": "Alpine",
          "points": 58.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 4,
          "champion": 0,
          "position": 11
        },
        "2024": {
          "season": 2024,
          "team": "Alpine",
          "points": 6.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 16
        },
        "2025": {
          "season": 2025,
          "team": "Alpine",
          "points": 12.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 14
        },
        "2026": {
          "season": 2026,
          "team": "Alpine",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 16
        }
      },
      "color": "#0093CC",
      "win_rate": 2.1,
      "podium_rate": 7.5
    },
    {
      "name": "Pierre Gasly",
      "team": "Alpine",
      "points": 811,
      "wins": 0,
      "podiums": 7,
      "pole_positions": 0,
      "dnfs": 18,
      "championships": 0,
      "races": 334,
      "fastest_laps": 2,
      "laps_led": 661,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "Alpine",
          "points": 117.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 8
        },
        "2011": {
          "season": 2011,
          "team": "Alpine",
          "points": 97.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 8
        },
        "2012": {
          "season": 2012,
          "team": "Alpine",
          "points": 106.0,
          "wins": 0,
          "podiums": 4,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 8
        },
        "2013": {
          "season": 2013,
          "team": "Alpine",
          "points": 81.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 9
        },
        "2014": {
          "season": 2014,
          "team": "Alpine",
          "points": 72.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 8
        },
        "2015": {
          "season": 2015,
          "team": "Alpine",
          "points": 50.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 10
        },
        "2016": {
          "season": 2016,
          "team": "Alpine",
          "points": 49.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 9
        },
        "2017": {
          "season": 2017,
          "team": "Alpine",
          "points": 39.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 9
        },
        "2018": {
          "season": 2018,
          "team": "Alpine",
          "points": 10.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 16
        },
        "2019": {
          "season": 2019,
          "team": "Alpine",
          "points": 11.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 16
        },
        "2020": {
          "season": 2020,
          "team": "Alpine",
          "points": 51.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 12
        },
        "2021": {
          "season": 2021,
          "team": "Alpine",
          "points": 39.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 13
        },
        "2022": {
          "season": 2022,
          "team": "Alpine",
          "points": 35.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 4,
          "champion": 0,
          "position": 12
        },
        "2023": {
          "season": 2023,
          "team": "Alpine",
          "points": 41.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 13
        },
        "2024": {
          "season": 2024,
          "team": "Alpine",
          "points": 4.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 17
        },
        "2025": {
          "season": 2025,
          "team": "Alpine",
          "points": 9.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 16
        },
        "2026": {
          "season": 2026,
          "team": "Alpine",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 17
        }
      },
      "color": "#0093CC",
      "win_rate": 0.0,
      "podium_rate": 2.1
    },
    {
      "name": "Fernando Alonso",
      "team": "Aston Martin",
      "points": 680,
      "wins": 2,
      "podiums": 10,
      "pole_positions": 2,
      "dnfs": 25,
      "championships": 0,
      "races": 334,
      "fastest_laps": 4,
      "laps_led": 759,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "Aston Martin",
          "points": 6.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 13
        },
        "2011": {
          "season": 2011,
          "team": "Aston Martin",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 15
        },
        "2012": {
          "season": 2012,
          "team": "Aston Martin",
          "points": 2.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 15
        },
        "2013": {
          "season": 2013,
          "team": "Aston Martin",
          "points": 6.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 15
        },
        "2014": {
          "season": 2014,
          "team": "Aston Martin",
          "points": 23.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 15
        },
        "2015": {
          "season": 2015,
          "team": "Aston Martin",
          "points": 6.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 16
        },
        "2016": {
          "season": 2016,
          "team": "Aston Martin",
          "points": 2.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 15
        },
        "2017": {
          "season": 2017,
          "team": "Aston Martin",
          "points": 8.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 4,
          "champion": 0,
          "position": 12
        },
        "2018": {
          "season": 2018,
          "team": "Aston Martin",
          "points": 32.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 9
        },
        "2019": {
          "season": 2019,
          "team": "Aston Martin",
          "points": 22.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 12
        },
        "2020": {
          "season": 2020,
          "team": "Aston Martin",
          "points": 30.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 13
        },
        "2021": {
          "season": 2021,
          "team": "Aston Martin",
          "points": 83.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 9
        },
        "2022": {
          "season": 2022,
          "team": "Aston Martin",
          "points": 139.0,
          "wins": 1,
          "podiums": 4,
          "pole_positions": 1,
          "dnfs": 3,
          "champion": 0,
          "position": 6
        },
        "2023": {
          "season": 2023,
          "team": "Aston Martin",
          "points": 131.0,
          "wins": 1,
          "podiums": 3,
          "pole_positions": 1,
          "dnfs": 1,
          "champion": 0,
          "position": 8
        },
        "2024": {
          "season": 2024,
          "team": "Aston Martin",
          "points": 84.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 9
        },
        "2025": {
          "season": 2025,
          "team": "Aston Martin",
          "points": 47.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 9
        },
        "2026": {
          "season": 2026,
          "team": "Aston Martin",
          "points": 59.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 9
        }
      },
      "color": "#229971",
      "win_rate": 0.6,
      "podium_rate": 3.0
    },
    {
      "name": "Yuki Tsunoda",
      "team": "RB (AlphaTauri)",
      "points": 526,
      "wins": 5,
      "podiums": 10,
      "pole_positions": 5,
      "dnfs": 23,
      "championships": 0,
      "races": 334,
      "fastest_laps": 2,
      "laps_led": 886,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "RB (AlphaTauri)",
          "points": 6.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 14
        },
        "2011": {
          "season": 2011,
          "team": "RB (AlphaTauri)",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 17
        },
        "2012": {
          "season": 2012,
          "team": "RB (AlphaTauri)",
          "points": 2.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 14
        },
        "2013": {
          "season": 2013,
          "team": "RB (AlphaTauri)",
          "points": 19.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 13
        },
        "2014": {
          "season": 2014,
          "team": "RB (AlphaTauri)",
          "points": 34.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 11
        },
        "2015": {
          "season": 2015,
          "team": "RB (AlphaTauri)",
          "points": 56.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 9
        },
        "2016": {
          "season": 2016,
          "team": "RB (AlphaTauri)",
          "points": 2.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 16
        },
        "2017": {
          "season": 2017,
          "team": "RB (AlphaTauri)",
          "points": 6.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 13
        },
        "2018": {
          "season": 2018,
          "team": "RB (AlphaTauri)",
          "points": 18.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 12
        },
        "2019": {
          "season": 2019,
          "team": "RB (AlphaTauri)",
          "points": 70.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 4,
          "champion": 0,
          "position": 8
        },
        "2020": {
          "season": 2020,
          "team": "RB (AlphaTauri)",
          "points": 138.0,
          "wins": 2,
          "podiums": 4,
          "pole_positions": 2,
          "dnfs": 1,
          "champion": 0,
          "position": 6
        },
        "2021": {
          "season": 2021,
          "team": "RB (AlphaTauri)",
          "points": 26.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 14
        },
        "2022": {
          "season": 2022,
          "team": "RB (AlphaTauri)",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 19
        },
        "2023": {
          "season": 2023,
          "team": "RB (AlphaTauri)",
          "points": 43.0,
          "wins": 1,
          "podiums": 1,
          "pole_positions": 1,
          "dnfs": 3,
          "champion": 0,
          "position": 12
        },
        "2024": {
          "season": 2024,
          "team": "RB (AlphaTauri)",
          "points": 57.0,
          "wins": 1,
          "podiums": 1,
          "pole_positions": 1,
          "dnfs": 1,
          "champion": 0,
          "position": 11
        },
        "2025": {
          "season": 2025,
          "team": "RB (AlphaTauri)",
          "points": 43.0,
          "wins": 1,
          "podiums": 1,
          "pole_positions": 1,
          "dnfs": 2,
          "champion": 0,
          "position": 10
        },
        "2026": {
          "season": 2026,
          "team": "RB (AlphaTauri)",
          "points": 6.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 13
        }
      },
      "color": "#6692FF",
      "win_rate": 1.5,
      "podium_rate": 3.0
    },
    {
      "name": "Lance Stroll",
      "team": "Aston Martin",
      "points": 501,
      "wins": 0,
      "podiums": 3,
      "pole_positions": 0,
      "dnfs": 21,
      "championships": 0,
      "races": 334,
      "fastest_laps": 3,
      "laps_led": 686,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "Aston Martin",
          "points": 2.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 17
        },
        "2011": {
          "season": 2011,
          "team": "Aston Martin",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 14
        },
        "2012": {
          "season": 2012,
          "team": "Aston Martin",
          "points": 1.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 16
        },
        "2013": {
          "season": 2013,
          "team": "Aston Martin",
          "points": 4.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 16
        },
        "2014": {
          "season": 2014,
          "team": "Aston Martin",
          "points": 16.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 17
        },
        "2015": {
          "season": 2015,
          "team": "Aston Martin",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 17
        },
        "2016": {
          "season": 2016,
          "team": "Aston Martin",
          "points": 2.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 14
        },
        "2017": {
          "season": 2017,
          "team": "Aston Martin",
          "points": 5.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 15
        },
        "2018": {
          "season": 2018,
          "team": "Aston Martin",
          "points": 21.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 11
        },
        "2019": {
          "season": 2019,
          "team": "Aston Martin",
          "points": 14.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 15
        },
        "2020": {
          "season": 2020,
          "team": "Aston Martin",
          "points": 20.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 15
        },
        "2021": {
          "season": 2021,
          "team": "Aston Martin",
          "points": 60.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 10
        },
        "2022": {
          "season": 2022,
          "team": "Aston Martin",
          "points": 123.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 7
        },
        "2023": {
          "season": 2023,
          "team": "Aston Martin",
          "points": 96.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 10
        },
        "2024": {
          "season": 2024,
          "team": "Aston Martin",
          "points": 58.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 10
        },
        "2025": {
          "season": 2025,
          "team": "Aston Martin",
          "points": 28.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 12
        },
        "2026": {
          "season": 2026,
          "team": "Aston Martin",
          "points": 51.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 10
        }
      },
      "color": "#229971",
      "win_rate": 0.0,
      "podium_rate": 0.9
    },
    {
      "name": "Alex Albon",
      "team": "Williams",
      "points": 445,
      "wins": 0,
      "podiums": 2,
      "pole_positions": 0,
      "dnfs": 19,
      "championships": 0,
      "races": 334,
      "fastest_laps": 3,
      "laps_led": 649,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "Williams",
          "points": 9.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 11
        },
        "2011": {
          "season": 2011,
          "team": "Williams",
          "points": 30.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 10
        },
        "2012": {
          "season": 2012,
          "team": "Williams",
          "points": 6.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 13
        },
        "2013": {
          "season": 2013,
          "team": "Williams",
          "points": 1.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 17
        },
        "2014": {
          "season": 2014,
          "team": "Williams",
          "points": 143.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 4
        },
        "2015": {
          "season": 2015,
          "team": "Williams",
          "points": 126.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 5
        },
        "2016": {
          "season": 2016,
          "team": "Williams",
          "points": 43.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 11
        },
        "2017": {
          "season": 2017,
          "team": "Williams",
          "points": 49.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 8
        },
        "2018": {
          "season": 2018,
          "team": "Williams",
          "points": 8.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 17
        },
        "2019": {
          "season": 2019,
          "team": "Williams",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 19
        },
        "2020": {
          "season": 2020,
          "team": "Williams",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 19
        },
        "2021": {
          "season": 2021,
          "team": "Williams",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 15
        },
        "2022": {
          "season": 2022,
          "team": "Williams",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 17
        },
        "2023": {
          "season": 2023,
          "team": "Williams",
          "points": 1.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 18
        },
        "2024": {
          "season": 2024,
          "team": "Williams",
          "points": 13.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 14
        },
        "2025": {
          "season": 2025,
          "team": "Williams",
          "points": 15.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 13
        },
        "2026": {
          "season": 2026,
          "team": "Williams",
          "points": 1.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 15
        }
      },
      "color": "#64C4FF",
      "win_rate": 0.0,
      "podium_rate": 0.6
    },
    {
      "name": "Liam Lawson",
      "team": "RB (AlphaTauri)",
      "points": 397,
      "wins": 0,
      "podiums": 6,
      "pole_positions": 0,
      "dnfs": 24,
      "championships": 0,
      "races": 334,
      "fastest_laps": 1,
      "laps_led": 669,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "RB (AlphaTauri)",
          "points": 3.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 16
        },
        "2011": {
          "season": 2011,
          "team": "RB (AlphaTauri)",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 16
        },
        "2012": {
          "season": 2012,
          "team": "RB (AlphaTauri)",
          "points": 1.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 17
        },
        "2013": {
          "season": 2013,
          "team": "RB (AlphaTauri)",
          "points": 13.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 5,
          "champion": 0,
          "position": 14
        },
        "2014": {
          "season": 2014,
          "team": "RB (AlphaTauri)",
          "points": 23.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 14
        },
        "2015": {
          "season": 2015,
          "team": "RB (AlphaTauri)",
          "points": 30.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 11
        },
        "2016": {
          "season": 2016,
          "team": "RB (AlphaTauri)",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 18
        },
        "2017": {
          "season": 2017,
          "team": "RB (AlphaTauri)",
          "points": 4.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 16
        },
        "2018": {
          "season": 2018,
          "team": "RB (AlphaTauri)",
          "points": 12.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 15
        },
        "2019": {
          "season": 2019,
          "team": "RB (AlphaTauri)",
          "points": 56.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 10
        },
        "2020": {
          "season": 2020,
          "team": "RB (AlphaTauri)",
          "points": 97.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 8
        },
        "2021": {
          "season": 2021,
          "team": "RB (AlphaTauri)",
          "points": 44.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 12
        },
        "2022": {
          "season": 2022,
          "team": "RB (AlphaTauri)",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 18
        },
        "2023": {
          "season": 2023,
          "team": "RB (AlphaTauri)",
          "points": 30.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 14
        },
        "2024": {
          "season": 2024,
          "team": "RB (AlphaTauri)",
          "points": 39.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 12
        },
        "2025": {
          "season": 2025,
          "team": "RB (AlphaTauri)",
          "points": 41.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 11
        },
        "2026": {
          "season": 2026,
          "team": "RB (AlphaTauri)",
          "points": 4.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 14
        }
      },
      "color": "#6692FF",
      "win_rate": 0.0,
      "podium_rate": 1.8
    },
    {
      "name": "Nico Hülkenberg",
      "team": "Haas",
      "points": 347,
      "wins": 0,
      "podiums": 6,
      "pole_positions": 0,
      "dnfs": 18,
      "championships": 0,
      "races": 226,
      "fastest_laps": 1,
      "laps_led": 433,
      "seasons": [
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2016": {
          "season": 2016,
          "team": "Haas",
          "points": 57.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 8
        },
        "2017": {
          "season": 2017,
          "team": "Haas",
          "points": 37.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 10
        },
        "2018": {
          "season": 2018,
          "team": "Haas",
          "points": 123.0,
          "wins": 0,
          "podiums": 2,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 7
        },
        "2019": {
          "season": 2019,
          "team": "Haas",
          "points": 30.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 11
        },
        "2020": {
          "season": 2020,
          "team": "Haas",
          "points": 21.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 5,
          "champion": 0,
          "position": 14
        },
        "2021": {
          "season": 2021,
          "team": "Haas",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 17
        },
        "2022": {
          "season": 2022,
          "team": "Haas",
          "points": 33.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 13
        },
        "2023": {
          "season": 2023,
          "team": "Haas",
          "points": 6.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 15
        },
        "2024": {
          "season": 2024,
          "team": "Haas",
          "points": 18.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 13
        },
        "2025": {
          "season": 2025,
          "team": "Haas",
          "points": 10.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 15
        },
        "2026": {
          "season": 2026,
          "team": "Haas",
          "points": 12.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 11
        }
      },
      "color": "#B6BABD",
      "win_rate": 0.0,
      "podium_rate": 2.7
    },
    {
      "name": "Kevin Magnussen",
      "team": "Haas",
      "points": 244,
      "wins": 0,
      "podiums": 0,
      "pole_positions": 0,
      "dnfs": 20,
      "championships": 0,
      "races": 226,
      "fastest_laps": 0,
      "laps_led": 472,
      "seasons": [
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2016": {
          "season": 2016,
          "team": "Haas",
          "points": 48.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 10
        },
        "2017": {
          "season": 2017,
          "team": "Haas",
          "points": 27.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 11
        },
        "2018": {
          "season": 2018,
          "team": "Haas",
          "points": 85.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 8
        },
        "2019": {
          "season": 2019,
          "team": "Haas",
          "points": 19.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 14
        },
        "2020": {
          "season": 2020,
          "team": "Haas",
          "points": 17.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 16
        },
        "2021": {
          "season": 2021,
          "team": "Haas",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 16
        },
        "2022": {
          "season": 2022,
          "team": "Haas",
          "points": 13.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 14
        },
        "2023": {
          "season": 2023,
          "team": "Haas",
          "points": 5.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 16
        },
        "2024": {
          "season": 2024,
          "team": "Haas",
          "points": 13.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 15
        },
        "2025": {
          "season": 2025,
          "team": "Haas",
          "points": 8.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 17
        },
        "2026": {
          "season": 2026,
          "team": "Haas",
          "points": 9.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 12
        }
      },
      "color": "#B6BABD",
      "win_rate": 0.0,
      "podium_rate": 0.0
    },
    {
      "name": "Valtteri Bottas",
      "team": "Kick Sauber",
      "points": 216,
      "wins": 0,
      "podiums": 2,
      "pole_positions": 0,
      "dnfs": 16,
      "championships": 0,
      "races": 334,
      "fastest_laps": 0,
      "laps_led": 630,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "Kick Sauber",
          "points": 8.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 12
        },
        "2011": {
          "season": 2011,
          "team": "Kick Sauber",
          "points": 16.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 12
        },
        "2012": {
          "season": 2012,
          "team": "Kick Sauber",
          "points": 38.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 11
        },
        "2013": {
          "season": 2013,
          "team": "Kick Sauber",
          "points": 27.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 11
        },
        "2014": {
          "season": 2014,
          "team": "Kick Sauber",
          "points": 30.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 13
        },
        "2015": {
          "season": 2015,
          "team": "Kick Sauber",
          "points": 29.0,
          "wins": 0,
          "podiums": 1,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 12
        },
        "2016": {
          "season": 2016,
          "team": "Kick Sauber",
          "points": 36.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 12
        },
        "2017": {
          "season": 2017,
          "team": "Kick Sauber",
          "points": 2.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 18
        },
        "2018": {
          "season": 2018,
          "team": "Kick Sauber",
          "points": 8.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 18
        },
        "2019": {
          "season": 2019,
          "team": "Kick Sauber",
          "points": 2.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 4,
          "champion": 0,
          "position": 17
        },
        "2020": {
          "season": 2020,
          "team": "Kick Sauber",
          "points": 6.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 17
        },
        "2021": {
          "season": 2021,
          "team": "Kick Sauber",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 18
        },
        "2022": {
          "season": 2022,
          "team": "Kick Sauber",
          "points": 8.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 15
        },
        "2023": {
          "season": 2023,
          "team": "Kick Sauber",
          "points": 2.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 17
        },
        "2024": {
          "season": 2024,
          "team": "Kick Sauber",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 18
        },
        "2025": {
          "season": 2025,
          "team": "Kick Sauber",
          "points": 4.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 18
        },
        "2026": {
          "season": 2026,
          "team": "Kick Sauber",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 18
        }
      },
      "color": "#52E252",
      "win_rate": 0.0,
      "podium_rate": 0.6
    },
    {
      "name": "Zhou Guanyu",
      "team": "Kick Sauber",
      "points": 147,
      "wins": 0,
      "podiums": 0,
      "pole_positions": 0,
      "dnfs": 14,
      "championships": 0,
      "races": 334,
      "fastest_laps": 0,
      "laps_led": 685,
      "seasons": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
      ],
      "by_season": {
        "2010": {
          "season": 2010,
          "team": "Kick Sauber",
          "points": 5.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 15
        },
        "2011": {
          "season": 2011,
          "team": "Kick Sauber",
          "points": 10.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 13
        },
        "2012": {
          "season": 2012,
          "team": "Kick Sauber",
          "points": 27.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 12
        },
        "2013": {
          "season": 2013,
          "team": "Kick Sauber",
          "points": 20.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 12
        },
        "2014": {
          "season": 2014,
          "team": "Kick Sauber",
          "points": 21.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 16
        },
        "2015": {
          "season": 2015,
          "team": "Kick Sauber",
          "points": 22.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 13
        },
        "2016": {
          "season": 2016,
          "team": "Kick Sauber",
          "points": 25.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 13
        },
        "2017": {
          "season": 2017,
          "team": "Kick Sauber",
          "points": 1.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 19
        },
        "2018": {
          "season": 2018,
          "team": "Kick Sauber",
          "points": 4.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 19
        },
        "2019": {
          "season": 2019,
          "team": "Kick Sauber",
          "points": 1.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 18
        },
        "2020": {
          "season": 2020,
          "team": "Kick Sauber",
          "points": 4.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 18
        },
        "2021": {
          "season": 2021,
          "team": "Kick Sauber",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 2,
          "champion": 0,
          "position": 19
        },
        "2022": {
          "season": 2022,
          "team": "Kick Sauber",
          "points": 4.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 16
        },
        "2023": {
          "season": 2023,
          "team": "Kick Sauber",
          "points": 1.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 19
        },
        "2024": {
          "season": 2024,
          "team": "Kick Sauber",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 3,
          "champion": 0,
          "position": 19
        },
        "2025": {
          "season": 2025,
          "team": "Kick Sauber",
          "points": 2.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 1,
          "champion": 0,
          "position": 19
        },
        "2026": {
          "season": 2026,
          "team": "Kick Sauber",
          "points": 0.0,
          "wins": 0,
          "podiums": 0,
          "pole_positions": 0,
          "dnfs": 0,
          "champion": 0,
          "position": 19
        }
      },
      "color": "#52E252",
      "win_rate": 0.0,
      "podium_rate": 0.0
    }
  ]
};
