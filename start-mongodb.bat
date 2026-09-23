@echo off
REM ============================================
REM  Glitter Glaze - MongoDB & Backend Starter
REM  Starts MongoDB (portable) and the backend
REM ============================================
title Glitter Glaze - MongoDB & Backend

echo.
echo ============================================
echo  Starting MongoDB...
echo ============================================
echo.

REM Start MongoDB if it is not already running
tasklist /FI "IMAGENAME eq mongod.exe" 2>NUL | find /I "mongod.exe" >NUL
if %ERRORLEVEL%==0 (
    echo MongoDB is already running.
) else (
    if not exist "C:\data\db" mkdir "C:\data\db"
    if not exist "C:\data\log" mkdir "C:\data\log"
    start "MongoDB" /MIN "C:\mongodb\mongodb-win32-x86_64-windows-8.0.4\bin\mongod.exe" --dbpath "C:\data\db" --logpath "C:\data\log\mongod.log" --port 27017 --bind_ip 127.0.0.1
    echo MongoDB started on port 27017
)

timeout /t 3 /nobreak >NUL

echo.
echo ============================================
echo  Starting Backend (http://localhost:5000)...
echo ============================================
echo.

cd /d "%~dp0backend"
node index.js

pause

