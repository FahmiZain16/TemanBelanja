#!/bin/bash
# Build script for Teman Belanja WebUI C++ (Linux/macOS)

echo ""
echo "========================================"
echo "   Teman Belanja - WebUI C++ Builder"
echo "========================================"
echo ""

# Check if g++ is installed
if ! command -v g++ &> /dev/null; then
    echo "ERROR: g++ not found!"
    echo "Please install GCC compiler"
    echo ""
    echo "On Ubuntu/Debian:"
    echo "  sudo apt-get install build-essential"
    echo ""
    echo "On macOS:"
    echo "  brew install gcc"
    echo ""
    exit 1
fi

echo "[1/3] Checking files..."
if [ ! -f "app.cpp" ]; then
    echo "ERROR: app.cpp not found!"
    exit 1
fi

if [ ! -f "include/webui.hpp" ]; then
    echo "ERROR: include/webui.hpp not found!"
    exit 1
fi

echo "[2/3] Compiling..."
echo "Compiling app.cpp..."

# Compile with optimization
g++ -std=c++17 -O2 app.cpp -o app -I./include

if [ $? -ne 0 ]; then
    echo ""
    echo "ERROR: Compilation failed!"
    exit 1
fi

echo "[3/3] Build complete!"
echo ""
echo "========================================"
echo "   SUCCESS! Executable created: app"
echo "========================================"
echo ""
echo "To run the application, execute:"
echo "    ./app"
echo ""
echo "The application will open in your browser at:"
echo "    http://localhost:8080"
echo ""
