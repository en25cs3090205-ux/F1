@echo off
echo ================================================================
echo  Formula 1 Race Intelligence Dashboard - Flask Web Server
echo  Author: Shraddha Patel (shraddha patel)
echo  GitHub: https://github.com/en25cs3090205-ux/F1
echo ================================================================
cd /d "%~dp0"
if exist requirements.txt (
    echo Checking dependencies...
    pip install -r requirements.txt
)
echo Starting Flask web application on http://127.0.0.1:5000 ...
python app.py
pause
