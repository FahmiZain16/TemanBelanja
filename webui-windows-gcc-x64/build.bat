@echo off
REM Build script for Teman Belanja WebUI C++ (Windows)

echo.
echo ========================================
echo   Teman Belanja - WebUI C++ Builder
echo ========================================
echo.

REM Check if g++ is installed
g++ --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: g++ not found!
    echo Please install MinGW or GCC compiler
    echo Download from: https://www.mingw-w64.org/
    pause
    exit /b 1
)

echo [1/3] Checking files...
if not exist "app.cpp" (
    echo ERROR: app.cpp not found!
    pause
    exit /b 1
)

if not exist "include\webui.hpp" (
    echo ERROR: include\webui.hpp not found!
    pause
    exit /b 1
)

echo [2/3] Compiling...
echo Compiling app.cpp...

REM Compile with optimization
g++ -std=c++17 -O2 app.cpp -o app.exe -I./include -static-libgcc -static-libstdc++

if errorlevel 1 (
    echo.
    echo ERROR: Compilation failed!
    pause
    exit /b 1
)

echo [3/3] Build complete!
echo.
echo ========================================
echo   SUCCESS! Executable created: app.exe
echo ========================================
echo.
echo To run the application, execute:
echo    app.exe
echo.
echo The application will open in your browser at:
echo    http://localhost:8080
echo.
pause
