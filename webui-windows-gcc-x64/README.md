# Teman Belanja - WebUI C++ Version

Aplikasi admin dashboard untuk mengelola daftar belanja, inventaris, dan catatan keuangan. Dibangun dengan WebUI C++ untuk performa yang optimal dan ukuran file yang kecil.

## Fitur

✅ **Authentication** - Login dan Sign Up dengan data tersimpan  
✅ **Dashboard** - Overview dengan statistik real-time  
✅ **Shopping List** - CRUD daftar belanja dengan items  
✅ **Inventory** - Kelola stok barang dengan tanggal kadaluarsa  
✅ **Financial** - Catat pemasukan dan pengeluaran  
✅ **Responsive UI** - Design yang bekerja di semua ukuran layar  
✅ **Local Storage** - Data tersimpan di browser, tidak perlu database  

## File Structure

```
.
├── app.cpp              # Backend C++ menggunakan WebUI
├── index.html           # Frontend unified dengan semua halaman
├── app.js              # JavaScript logic untuk navigasi dan CRUD
├── style.css           # Styling untuk semua pages
└── README.md           # File ini
```

## Requirement

- **GCC Compiler** (MinGW untuk Windows)
- **WebUI Library** (`webui.hpp` dan `webui.js`)
- Browser modern (Chrome, Firefox, Edge, Safari)

## Kompilasi

### Untuk Windows (dengan GCC/MinGW)

1. **Pastikan GCC sudah terinstall:**
   ```bash
   g++ --version
   ```

2. **Pastikan webui.hpp ada di folder `include/`:**
   ```
   c:\Web UI\webui-windows-gcc-x64\webui-windows-gcc-x64\include\webui.hpp
   ```

3. **Compile ke executable:**
   ```bash
   g++ -std=c++17 app.cpp -o app.exe -I./include
   ```

   Atau jika menggunakan Windows Subsystem dengan full optimization:
   ```bash
   g++ -std=c++17 -O2 app.cpp -o app.exe -I./include -static-libgcc -static-libstdc++
   ```

### Untuk Linux/macOS

```bash
g++ -std=c++17 app.cpp -o app -I./include
./app
```

## Menjalankan Aplikasi

1. **Windows:**
   ```bash
   app.exe
   ```

2. **Linux/macOS:**
   ```bash
   ./app
   ```

3. Browser akan otomatis membuka aplikasi di `http://localhost:8080`

## Demo Akun

Silakan gunakan salah satu akun demo untuk test:

| Email | Password |
|-------|----------|
| budi@example.com | password123 |
| siti@example.com | password456 |

## Cara Penggunaan

### Login
- Masukkan email dan password
- Klik "Masuk"
- Untuk membuat akun baru, klik "Daftar sekarang"

### Dashboard
- Melihat overview statistik
- Navigasi ke 3 module utama:
  - **Daftar Belanja** - Manage shopping lists
  - **Inventaris** - Manage inventory items
  - **Catatan Keuangan** - Track income/expense

### Daftar Belanja
1. Klik "Buat Daftar Baru"
2. Masukkan nama daftar belanja
3. Lihat detail untuk manage items
4. Hapus daftar jika tidak dibutuhkan

### Inventaris
1. Klik "Buat Inventaris"
2. Masukkan nama inventaris
3. Lihat detail untuk manage items dengan expiry date
4. Hapus inventaris jika tidak dibutuhkan

### Catatan Keuangan
1. Klik "Tambah Catatan"
2. Isi deskripsi, jumlah, tipe (income/expense), dan kategori
3. View summary pemasukan, pengeluaran, dan saldo
4. Hapus catatan jika perlu

## Penyimpanan Data

Data disimpan dalam **Local Storage** browser:
- `temanbelanja_currentUser` - Info user yang logged in
- `temanbelanja_shoppinglists` - Semua shopping lists
- `temanbelanja_inventories` - Semua inventories
- `temanbelanja_financials` - Semua catatan keuangan
- `demo_users` - Data user untuk login

### Export/Import Data

Untuk backup data, buka browser console dan jalankan:

```javascript
// Export semua data
console.log(JSON.stringify({
    currentUser: localStorage.getItem('temanbelanja_currentUser'),
    shoppingLists: localStorage.getItem('temanbelanja_shoppinglists'),
    inventories: localStorage.getItem('temanbelanja_inventories'),
    financials: localStorage.getItem('temanbelanja_financials')
}));

// Copy output untuk backup
```

## Development Notes

### Backend (C++)

File `app.cpp` menghandle:
- User authentication
- CRUD operations untuk shopping lists, inventory, financial
- WebUI bindings untuk komunikasi C++ ke JavaScript

### Frontend (HTML/JS/CSS)

- `index.html` - Semua pages dalam satu file
- `app.js` - Logic untuk navigasi, CRUD lokal, dan data management
- `style.css` - Styling responsive untuk desktop dan mobile

### Arsitektur

```
┌─────────────────────────────────────────┐
│         Browser Window (WebUI)          │
├─────────────────────────────────────────┤
│        Frontend (HTML/JS/CSS)           │
│   - Page Navigation                     │
│   - Local CRUD Operations               │
│   - UI Rendering                        │
├─────────────────────────────────────────┤
│   C++ Backend (app.cpp)                 │
│   - WebUI Event Bindings                │
│   - Data Validation                     │
│   - Response Handling                   │
└─────────────────────────────────────────┘
```

## Troubleshooting

### "Command 'g++' not found"
- Install MinGW atau GCC compiler
- Tambahkan ke PATH environment variable

### Browser tidak membuka otomatis
- Buka manual: `http://localhost:8080`
- Check window title sebagai konfirmasi aplikasi running

### Data hilang setelah close aplikasi
- Data disimpan di Local Storage browser
- Jika cache dibersihkan, data akan hilang
- Untuk persistent storage, gunakan database atau file system

### CSS tidak load
- Pastikan `style.css` ada di folder yang sama dengan executable
- Reload page (Ctrl+R atau Cmd+R)

## Build Optimization

Untuk production build yang lebih kecil:

```bash
# Compile dengan optimasi ukuran
g++ -std=c++17 -Os -DNDEBUG app.cpp -o app.exe -I./include -static-libgcc -static-libstdc++ -s

# Atau dengan makefile (jika available)
make release
```

## Extensibility

Untuk menambah fitur baru:

1. **Tambah page baru:**
   - Tambahkan `<div id="newPage" class="page">` di `index.html`
   - Implementasi logic di `app.js`

2. **Tambah C++ backend:**
   - Buat function baru di `app.cpp`
   - Bind ke WebUI dengan `win.bind("functionName", handler)`
   - Call dari JavaScript dengan `window.functionName()`

3. **Styling:**
   - Edit `style.css` atau tambah class baru
   - Responsive design sudah built-in

## Performance

- **Ukuran Executable:** ~2-5 MB (depending pada build options)
- **Memory Usage:** Minimal (WebUI dengan embedded JS)
- **Startup Time:** < 1 detik
- **Response Time:** Instant (semua operasi lokal)

## Security Notes

⚠️ **Important:**
- Aplikasi ini menyimpan data di Local Storage (tidak encrypted)
- Password disimpan dalam plain text untuk demo purposes
- Untuk production: implement proper authentication dan encryption

## License

MIT License - Silakan gunakan dan modify sesuai kebutuhan

## Support

Untuk bantuan atau issue:
1. Check Troubleshooting section
2. Review console errors (F12 → Console)
3. Verify semua files ada dan accessible

---

**Version:** 1.0.0  
**Last Updated:** 2024  
**Platform:** Windows/Linux/macOS
