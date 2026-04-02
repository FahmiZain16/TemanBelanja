// Global state
let currentUser = null;
let currentShoppingListId = null;
let shoppingLists = [];
let inventories = [];
let financialRecords = [];

// ===== NAVIGATION =====
function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    if (pageId === 'dashboardPage') {
        updateDashboardStats();
    } else if (pageId === 'shoppingListPage') {
        loadShoppingLists();
    } else if (pageId === 'financialDetailPage') {
        updateFinancialSummary();
    }
}

// ===== AUTH =====
async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
        const result = await webui.call('login', email + '|' + password);
        const parts = result.split('|');
        
        if (parts[0] === 'success') {
            currentUser = { name: parts[1], id: parts[2] };
            document.getElementById('userGreeting').textContent = `Selamat datang, ${currentUser.name}!`;
            goToPage('dashboardPage');
        } else {
            document.getElementById('loginError').innerText = parts[1];
            document.getElementById('loginError').style.display = 'block';
        }
    } catch (err) {
        console.error('Login error:', err);
        document.getElementById('loginError').innerText = 'Terjadi kesalahan pada server';
        document.getElementById('loginError').style.display = 'block';
    }
}

async function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    try {
        const result = await webui.call('signup', name + '|' + email + '|' + password);
        const parts = result.split('|');
        
        if (parts[0] === 'success') {
            alert('Akun berhasil dibuat! Silahkan login.');
            switchToLogin();
        } else {
            document.getElementById('signupError').innerText = parts[1];
            document.getElementById('signupError').style.display = 'block';
        }
    } catch (err) {
        console.error('Signup error:', err);
        document.getElementById('signupError').innerText = 'Terjadi kesalahan pada server';
        document.getElementById('signupError').style.display = 'block';
    }
}

function switchToLogin() {
    document.getElementById('signupPage').classList.remove('active');
    document.getElementById('loginPage').classList.add('active');
    document.getElementById('signupError').style.display = 'none';
}

function switchToSignup() {
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('signupPage').classList.add('active');
    document.getElementById('loginError').style.display = 'none';
}

function logout() {
    currentUser = null;
    shoppingLists = [];
    inventories = [];
    financialRecords = [];
    currentShoppingListId = null;
    switchToLogin();
    document.getElementById('loginForm').reset();
    document.getElementById('signupForm').reset();
}

// ===== SHOPPING LIST =====
async function createShoppingList(e) {
    e.preventDefault();
    const name = document.getElementById('newListName').value;
    
    try {
        const result = await webui.call('createShoppingList', name);
        const parts = result.split('|');
        
        if (parts[0] === 'success') {
            shoppingLists.push({
                id: parts[1],
                name: name,
                items: [],
                createdAt: new Date().toISOString()
            });
            hideModal('createListModal');
            document.getElementById('newListName').value = '';
            loadShoppingLists();
        }
    } catch (err) {
        console.error('Error creating list:', err);
        alert('Gagal membuat daftar belanja');
    }
}

function loadShoppingLists() {
    const grid = document.getElementById('shoppingGrid');
    const emptyState = document.getElementById('emptyShoppingState');
    
    if (shoppingLists.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    emptyState.style.display = 'none';
    
    grid.innerHTML = shoppingLists.map(list => {
        const totalItems = list.items.length;
        const checkedItems = list.items.filter(i => i.checked).length;
        const totalPrice = list.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
        const progress = totalItems > 0 ? (checkedItems / totalItems) * 100 : 0;
        
        return `
            <div class="card">
                <div class="card-content">
                    <div class="card-header">
                        <h3>${list.name}</h3>
                        <button class="btn-delete" onclick="deleteShoppingList('${list.id}')">🗑️</button>
                    </div>
                    <div class="card-stats">
                        <div class="card-stat-row">
                            <span>Total Item</span>
                            <span>${totalItems}</span>
                        </div>
                        <div class="card-stat-row">
                            <span>Terbeli</span>
                            <span style="color: #10B981;">${checkedItems} / ${totalItems}</span>
                        </div>
                        <div class="card-stat-row">
                            <span>Total Harga</span>
                            <span>Rp ${formatCurrency(totalPrice)}</span>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <button class="btn btn-blue full-width" onclick="openShoppingListDetail('${list.id}')">Lihat Detail</button>
                </div>
            </div>
        `;
    }).join('');
}

function openShoppingListDetail(listId) {
    const list = shoppingLists.find(l => l.id === listId);
    if (!list) return;
    
    currentShoppingListId = listId;
    document.getElementById('detailListName').textContent = list.name;
    renderShoppingListItems();
    goToPage('shoppingListDetailPage');
}

function renderShoppingListItems() {
    const list = shoppingLists.find(l => l.id === currentShoppingListId);
    if (!list) return;
    
    const totalItems = list.items.length;
    const checkedItems = list.items.filter(i => i.checked).length;
    const totalPrice = list.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    
    document.getElementById('totalCount').textContent = totalItems;
    document.getElementById('checkedCount').textContent = checkedItems;
    document.getElementById('summaryTotal').textContent = totalItems;
    document.getElementById('summaryPrice').textContent = `Rp ${formatCurrency(totalPrice)}`;
    
    const itemsList = document.getElementById('itemsList');
    const emptyState = document.getElementById('emptyItemsState');
    
    if (totalItems === 0) {
        itemsList.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    itemsList.style.display = 'block';
    emptyState.style.display = 'none';
    
    itemsList.innerHTML = list.items.map(item => `
        <div class="list-item ${item.checked ? 'checked' : ''}">
            <div class="item-checkbox">
                <input type="checkbox" ${item.checked ? 'checked' : ''} 
                    onchange="toggleShoppingItem('${item.id}')">
            </div>
            <div class="item-content">
                <h4>${item.name}</h4>
                <p>${item.quantity}x @ Rp ${formatCurrency(item.price)} = <strong>Rp ${formatCurrency(item.quantity * item.price)}</strong></p>
                <div class="item-actions">
                    <a href="https://www.google.com/search?q=${encodeURIComponent(item.name)}" target="_blank" class="item-link">🔗 Cek Harga</a>
                    <a href="https://www.google.com/search?q=${encodeURIComponent(item.name)}+beli+online" target="_blank" class="item-link">🛍️ Beli Online</a>
                    <button class="item-delete" onclick="removeShoppingItem('${item.id}')">×</button>
                </div>
            </div>
        </div>
    `).join('');
}

async function addItemToList(e) {
    e.preventDefault();
    const list = shoppingLists.find(l => l.id === currentShoppingListId);
    if (!list) return;
    
    const name = document.getElementById('itemName').value;
    const quantity = parseInt(document.getElementById('itemQuantity').value) || 1;
    const price = parseFloat(document.getElementById('itemPrice').value) || 0;
    
    list.items.push({
        id: Date.now().toString(),
        name,
        quantity,
        price,
        checked: false
    });
    
    document.getElementById('itemName').value = '';
    document.getElementById('itemQuantity').value = '1';
    document.getElementById('itemPrice').value = '0';
    
    hideModal('addItemModal');
    renderShoppingListItems();
}

function toggleShoppingItem(itemId) {
    const list = shoppingLists.find(l => l.id === currentShoppingListId);
    if (!list) return;
    
    const item = list.items.find(i => i.id === itemId);
    if (item) item.checked = !item.checked;
    renderShoppingListItems();
}

function removeShoppingItem(itemId) {
    const list = shoppingLists.find(l => l.id === currentShoppingListId);
    if (!list) return;
    
    list.items = list.items.filter(i => i.id !== itemId);
    renderShoppingListItems();
}

async function deleteShoppingList(listId) {
    if (confirm('Yakin ingin menghapus daftar ini?')) {
        shoppingLists = shoppingLists.filter(l => l.id !== listId);
        loadShoppingLists();
    }
}

// ===== FINANCIAL =====
async function addFinancialRecord(e) {
    e.preventDefault();
    
    const desc = document.getElementById('finDesc').value;
    const type = document.getElementById('finType').value;
    const category = document.getElementById('finCategory').value;
    const amount = parseFloat(document.getElementById('finAmount').value);
    
    try {
        const result = await webui.call('addFinancial', desc + '|' + amount + '|' + type + '|' + category);
        const parts = result.split('|');
        
        if (parts[0] === 'success') {
            financialRecords.push({
                id: parts[1],
                description: desc,
                amount,
                type,
                category,
                date: new Date().toLocaleDateString('id-ID')
            });
            
            document.getElementById('finDesc').value = '';
            document.getElementById('finAmount').value = '';
            updateFinancialSummary();
            alert('Catatan keuangan berhasil disimpan!');
        }
    } catch (err) {
        console.error('Error adding financial record:', err);
        alert('Gagal menyimpan catatan keuangan');
    }
}

function updateFinancialSummary() {
    const income = financialRecords
        .filter(r => r.type === 'income')
        .reduce((sum, r) => sum + r.amount, 0);
    
    const expense = financialRecords
        .filter(r => r.type === 'expense')
        .reduce((sum, r) => sum + r.amount, 0);
    
    const balance = income - expense;
    
    document.getElementById('totalIncome').textContent = `Rp ${formatCurrency(income)}`;
    document.getElementById('totalExpense').textContent = `Rp ${formatCurrency(expense)}`;
    document.getElementById('netBalance').textContent = `Rp ${formatCurrency(balance)}`;
}

// ===== INVENTORY =====
function showInventoryOptions() {
    alert('Fitur pembuat inventaris akan segera hadir!');
}

// ===== DASHBOARD =====
function updateDashboardStats() {
    document.getElementById('shoppingListStat').textContent = `${shoppingLists.length} daftar`;
    document.getElementById('inventoryStat').textContent = `${inventories.length} inventaris`;
    
    const totalBalance = financialRecords.reduce((sum, r) => {
        return r.type === 'income' ? sum + r.amount : sum - r.amount;
    }, 0);
    document.getElementById('financialStat').textContent = `Rp ${formatCurrency(totalBalance)}`;
}

// ===== MODALS =====
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
    document.getElementById(modalId).style.justifyContent = 'center';
    document.getElementById(modalId).style.alignItems = 'center';
}

function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// ===== HELPERS =====
function formatCurrency(value) {
    return Math.round(value).toLocaleString('id-ID');
}

window.addEventListener('load', () => {
    console.log('App loaded successfully');
});
