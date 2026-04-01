-- Users
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Shopping Groups (Kelompok Daftar Belanja)
CREATE TABLE shopping_groups (
    group_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    group_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Shopping Items
CREATE TABLE shopping_items (
    item_id INTEGER PRIMARY KEY AUTOINCREMENT,
    group_id INTEGER NOT NULL,
    nama_barang VARCHAR(200) NOT NULL,
    jumlah INTEGER DEFAULT 1,
    harga DECIMAL(15,2),
    is_checked BOOLEAN DEFAULT 0,
    catatan TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (group_id) REFERENCES shopping_groups(group_id)
);

-- Inventory
CREATE TABLE inventory (
    inventory_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    nama_barang VARCHAR(200) NOT NULL,
    jumlah INTEGER DEFAULT 0,
    harga_beli DECIMAL(15,2),
    harga_jual DECIMAL(15,2),
    tanggal_expired DATE,
    catatan TEXT,
    kategori VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Transactions (Keuangan)
CREATE TABLE transactions (
    transaction_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    type VARCHAR(20) NOT NULL, -- 'belanja', 'inventaris', 'manual'
    amount DECIMAL(15,2) NOT NULL,
    description TEXT,
    reference_id INTEGER, -- ID dari shopping_items atau inventory
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);