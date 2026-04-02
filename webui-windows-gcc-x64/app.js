// Improved frontend logic for Teman Belanja
(function () {
    // Simple client-side state
    const state = {
        user: null,
        shoppingLists: [],
        inventories: [],
        financials: [],
        currentListId: null,
    };

    function $(id) { return document.getElementById(id); }

    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const el = $(pageId);
        if (el) el.classList.add('active');
    }

    window.goToPage = function (pageId) { showPage(pageId); renderAll(); };

    // modals
    window.showModal = function (id) { const m = $(id); if (m) m.style.display = 'block'; };
    window.hideModal = function (id) { const m = $(id); if (m) m.style.display = 'none'; };

    // auth
    async function callBackend(name, payload) {
        try {
            console.log(`[Backend Call] Function: ${name}, Payload:`, payload);
            
            // Wait a tick to ensure webui is available
            await new Promise(resolve => setTimeout(resolve, 10));
            
            if (!window.webui || !window.webui.call) {
                console.error('webui.call not available. window.webui:', window.webui);
                throw new Error('WebUI API tidak tersedia');
            }
            
            const result = await window.webui.call(name, payload);
            console.log(`[Backend Response] Function: ${name}, Result:`, result);
            return result;
            
        } catch (e) {
            console.error(`[Backend Error] Function: ${name}`, e);
            throw e;
        }
    }

    window.handleLogin = async function (e) {
        e.preventDefault();
        const email = $('loginEmail').value.trim();
        const password = $('loginPassword').value.trim();
        
        if (!email || !password) {
            $('loginError').style.display = 'block';
            $('loginError').innerText = 'Email dan password tidak boleh kosong';
            return;
        }
        
        try {
            // Send as pipe-delimited string
            const payload = email + '|' + password;
            const resStr = await callBackend('login', payload);
            
            // Parse pipe-delimited response
            const parts = resStr.split('|');
            if (parts[0] === 'success') {
                state.user = { email, name: parts[1] };
                localStorage.setItem('tb_user', JSON.stringify(state.user));
                $('loginError').style.display = 'none';
                $('loginEmail').value = '';
                $('loginPassword').value = '';
                goToPage('dashboardPage');
            } else {
                $('loginError').style.display = 'block';
                $('loginError').innerText = parts[1] || 'Gagal masuk';
            }
        } catch (err) {
            $('loginError').style.display = 'block';
            $('loginError').innerText = 'Server error: ' + err.message;
        }
    };

    window.handleSignup = async function (e) {
        e.preventDefault();
        const name = $('signupName').value.trim();
        const email = $('signupEmail').value.trim();
        const password = $('signupPassword').value.trim();
        try {
            // Send as pipe-delimited string
            const payload = name + '|' + email + '|' + password;
            const resStr = await callBackend('signup', payload);
            
            // Parse pipe-delimited response
            const parts = resStr.split('|');
            if (parts[0] === 'success') {
                state.user = { name, email };
                localStorage.setItem('tb_user', JSON.stringify(state.user));
                $('signupName').value = '';
                $('signupEmail').value = '';
                $('signupPassword').value = '';
                goToPage('dashboardPage');
            } else {
                $('signupError').style.display = 'block';
                $('signupError').innerText = parts[1] || 'Gagal daftar';
            }
        } catch (err) {
            $('signupError').style.display = 'block';
            $('signupError').innerText = 'Server error: ' + err.message;
        }
    };

    window.logout = function () { localStorage.removeItem('tb_user'); state.user = null; goToPage('loginPage'); };

    window.switchToLogin = function () {
        $('signupPage').classList.remove('active');
        $('loginPage').classList.add('active');
        $('signupError').style.display = 'none';
    };

    window.switchToSignup = function () {
        $('loginPage').classList.remove('active');
        $('signupPage').classList.add('active');
        $('loginError').style.display = 'none';
    };

    window.showInventoryOptions = function () {
        window.createInventory();
    };

    // shopping lists
    window.createShoppingList = async function (e) {
        e.preventDefault();
        const name = $('newListName').value.trim();
        if (!name) {
            alert('Nama daftar harus diisi');
            return;
        }
        try {
            // Send as plain string
            const resStr = await callBackend('createShoppingList', name);
            
            // Parse pipe-delimited response
            const parts = resStr.split('|');
            if (parts[0] === 'success') {
                state.shoppingLists.push({ id: parts[1], name, items: [] });
                hideModal('createListModal');
                $('newListName').value = '';
                renderShoppingLists();
                goToPage('shoppingListPage');
            } else {
                alert('Error: ' + (parts[1] || 'Unknown error'));
            }
        } catch (err) {
            console.error('Error creating shopping list:', err);
            alert('Gagal membuat daftar: ' + err.message);
        }
    };

    window.addItemToList = async function (e) {
        e.preventDefault();
        const name = $('itemName').value.trim();
        const qty = parseInt($('itemQuantity').value || '1', 10);
        const price = parseInt($('itemPrice').value || '0', 10);
        if (!name) {
            alert('Nama item harus diisi');
            return;
        }
        const listId = state.currentListId;
        if (!listId) {
            alert('Daftar belanja tidak dipilih');
            return;
        }
        try {
            // Send as pipe-delimited string: listId|name|price|quantity
            const payload = listId + '|' + name + '|' + price + '|' + qty;
            const resStr = await callBackend('addItemToShoppingList', payload);
            
            // Parse pipe-delimited response
            const parts = resStr.split('|');
            if (parts[0] === 'success') {
                const list = state.shoppingLists.find(l => l.id === listId);
                if (list) list.items.push({ id: parts[1], name, qty, price, checked: false });
                hideModal('addItemModal');
                $('itemName').value = '';
                $('itemQuantity').value = '';
                $('itemPrice').value = '';
                renderListDetail(listId);
            } else {
                alert('Error: ' + (parts[1] || 'Unknown error'));
            }
        } catch (err) {
            console.error('Error adding item:', err);
            alert('Gagal menambah item: ' + err.message);
        }
    };

    function renderShoppingLists() {
        const grid = $('shoppingGrid');
        grid.innerHTML = '';
        if (state.shoppingLists.length === 0) {
            $('emptyShoppingState').style.display = 'block';
            grid.style.display = 'none';
        } else {
            $('emptyShoppingState').style.display = 'none';
            grid.style.display = 'grid';
            state.shoppingLists.forEach(list => {
                const card = document.createElement('div');
                card.className = 'small-card';
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.innerText = '🗑️';
                deleteBtn.style.cssText = 'position:absolute;top:8px;right:8px;background:none;border:none;cursor:pointer;font-size:1.2rem;';
                deleteBtn.onclick = (e) => { e.stopPropagation(); deleteShoppingListFn(list.id); };
                card.style.position = 'relative';
                card.innerHTML = `<h3>${list.name}</h3><p>${list.items.length} item</p>`;
                card.appendChild(deleteBtn);
                card.onclick = () => { state.currentListId = list.id; renderListDetail(list.id); goToPage('shoppingListDetailPage'); };
                grid.appendChild(card);
            });
        }
        $('shoppingListStat').innerText = `${state.shoppingLists.length} daftar`;
    }

    function renderListDetail(listId) {
        const list = state.shoppingLists.find(l => l.id === listId);
        if (!list) return;
        $('detailListName').innerText = list.name;
        const container = $('itemsList');
        container.innerHTML = '';
        if (!list.items || list.items.length === 0) {
            $('emptyItemsState').style.display = 'block';
        } else {
            $('emptyItemsState').style.display = 'none';
            list.items.forEach(item => {
                const row = document.createElement('div');
                row.className = 'list-item';
                row.style.display = 'flex';
                row.style.justifyContent = 'space-between';
                row.style.alignItems = 'center';
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = item.checked;
                checkbox.onchange = () => toggleItem(listId, item.id);
                const content = document.createElement('div');
                content.className = 'item-content';
                content.style.flex = '1';
                content.innerHTML = `<div class='item-name'>${item.name}</div><div class='item-meta'>x${item.qty} • Rp ${item.price}</div>`;
                const deleteBtn = document.createElement('button');
                deleteBtn.innerText = '×';
                deleteBtn.style.cssText = 'background:none;border:none;cursor:pointer;font-size:1.5rem;color:#ef4444;padding:0 8px;';
                deleteBtn.onclick = () => deleteItemFn(listId, item.id);
                row.appendChild(checkbox);
                row.appendChild(content);
                row.appendChild(deleteBtn);
                container.appendChild(row);
            });
        }
        const total = list.items.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0);
        $('summaryPrice').innerText = `Rp ${total}`;
        $('summaryTotal').innerText = list.items.length;
    }

    window.toggleItem = function (listId, itemId) {
        const list = state.shoppingLists.find(l => l.id === listId);
        if (!list) return;
        const item = list.items.find(i => i.id === itemId);
        if (!item) return;
        item.checked = !item.checked;
        renderListDetail(listId);
    };

    window.deleteShoppingListFn = function (listId) {
        if (confirm('Yakin ingin menghapus daftar belanja ini?')) {
            state.shoppingLists = state.shoppingLists.filter(l => l.id !== listId);
            renderShoppingLists();
            $('shoppingListStat').innerText = `${state.shoppingLists.length} daftar`;
        }
    };

    window.deleteItemFn = function (listId, itemId) {
        const list = state.shoppingLists.find(l => l.id === listId);
        if (!list) return;
        list.items = list.items.filter(i => i.id !== itemId);
        renderListDetail(listId);
    };

    // inventory (simple)
    window.createInventory = async function () {
        const name = prompt('Nama inventaris:');
        if (!name) return;
        try {
            const resStr = await callBackend('createInventory', name);
            const parts = resStr.split('|');
            if (parts[0] === 'success') {
                state.inventories.push({ id: parts[1], name, items: [] });
                renderInventories();
            }
        } catch (err) { console.error(err); }
    };

    window.addItemToInventory = async function (invId, itemName, itemPrice, itemQuantity, itemExpiryDate) {
        try {
            // Send as pipe-delimited string: invId|itemName|itemPrice|itemQuantity|itemExpiryDate
            const payload = invId + '|' + itemName + '|' + itemPrice + '|' + itemQuantity + '|' + (itemExpiryDate || '');
            const resStr = await callBackend('addItemToInventory', payload);
            
            // Parse pipe-delimited response
            const parts = resStr.split('|');
            if (parts[0] === 'success') {
                const inv = state.inventories.find(i => i.id === invId);
                if (inv) {
                    inv.items.push({
                        id: parts[1],
                        name: itemName,
                        price: itemPrice,
                        quantity: itemQuantity,
                        expiryDate: itemExpiryDate || '',
                        checked: false
                    });
                }
                renderInventories();
            }
        } catch (err) { console.error(err); }
    };

    function renderInventories() {
        const g = $('inventoryGrid');
        g.innerHTML = '';
        if (state.inventories.length === 0) {
            $('emptyInventoryState').style.display = 'block';
        } else {
            $('emptyInventoryState').style.display = 'none';
            state.inventories.forEach(inv => {
                const card = document.createElement('div');
                card.className = 'small-card';
                card.innerHTML = `<h3>${inv.name}</h3><p>${inv.items.length} item</p>`;
                g.appendChild(card);
            });
        }
        $('inventoryStat').innerText = `${state.inventories.length} inventaris`;
    }

    // financials
    window.addFinancialRecord = async function (e) {
        e.preventDefault();
        const desc = $('finDesc').value.trim();
        const type = $('finType').value;
        const category = $('finCategory').value;
        const amount = parseInt($('finAmount').value || '0', 10);
        
        if (!desc || !amount) return;
        
        try {
            // Send as pipe-delimited string: desc|amount|type|category
            const payload = desc + '|' + amount + '|' + type + '|' + category;
            const resStr = await callBackend('addFinancial', payload);
            
            // Parse pipe-delimited response
            const parts = resStr.split('|');
            if (parts[0] === 'success') {
                state.financials.push({ id: parts[1], desc, type, category, amount });
                hideModal('addFinancialModal');
                $('finDesc').value = '';
                $('finAmount').value = '';
                renderFinancials();
            }
        } catch (err) { console.error(err); }
    };

    function renderFinancials() {
        const list = $('financialList');
        list.innerHTML = '';
        if (state.financials.length === 0) {
            $('emptyFinancialState').style.display = 'block';
        } else {
            $('emptyFinancialState').style.display = 'none';
            state.financials.forEach(f => {
                const r = document.createElement('div');
                r.className = 'financial-row';
                r.innerHTML = `<div class='f-desc'>${f.desc}</div><div class='f-amount'>Rp ${f.amount}</div>`;
                list.appendChild(r);
            });
        }
        const income = state.financials.filter(x => x.type === 'income').reduce((s, x) => s + x.amount, 0);
        const expense = state.financials.filter(x => x.type === 'expense').reduce((s, x) => s + x.amount, 0);
        $('totalIncome').innerText = `Rp ${income}`;
        $('totalExpense').innerText = `Rp ${expense}`;
        $('netBalance').innerText = `Rp ${income - expense}`;
        $('financialStat').innerText = `Rp ${income - expense}`;
    }

    function renderAll() {
        const u = localStorage.getItem('tb_user');
        if (u) state.user = JSON.parse(u);
        if (!state.user) { goToPage('loginPage'); return; }
        $('userGreeting').innerText = `Hai, ${state.user.name || state.user.email}`;
        renderShoppingLists();
        renderInventories();
        renderFinancials();
    }

    // initial
    document.addEventListener('DOMContentLoaded', function () {
        renderAll();
    });

})();
// Global state
let currentUser = null;
let currentShoppingListId = null;
let shoppingLists = [];
let inventories = [];
let financialRecords = [];

// ===== LOCAL STORAGE PERSISTENCE =====
function loadDataFromLocalStorage() {
    const savedLists = localStorage.getItem('tb_shoppingLists');
    const savedInventories = localStorage.getItem('tb_inventories');
    const savedFinancials = localStorage.getItem('tb_financials');
    
    if (savedLists) shoppingLists = JSON.parse(savedLists);
    if (savedInventories) inventories = JSON.parse(savedInventories);
    if (savedFinancials) financialRecords = JSON.parse(savedFinancials);
}

function saveDataToLocalStorage() {
    localStorage.setItem('tb_shoppingLists', JSON.stringify(shoppingLists));
    localStorage.setItem('tb_inventories', JSON.stringify(inventories));
    localStorage.setItem('tb_financials', JSON.stringify(financialRecords));
}

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
async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    
    if (!email || !password) {
        document.getElementById('loginError').innerText = 'Email dan password tidak boleh kosong';
        document.getElementById('loginError').style.display = 'block';
        return;
    }
    
    try {
        const result = await webui.call('login', email + '|' + password);
        const parts = result.split('|');
        
        if (parts[0] === 'success') {
            currentUser = { name: parts[1], id: parts[2], email: email };
            document.getElementById('userGreeting').textContent = `Selamat datang, ${currentUser.name}!`;
            document.getElementById('loginError').style.display = 'none';
            goToPage('dashboardPage');
        } else {
            document.getElementById('loginError').innerText = parts[1] || 'Email atau password salah';
            document.getElementById('loginError').style.display = 'block';
        }
    } catch (err) {
        console.error('Login error:', err);
        document.getElementById('loginError').innerText = 'Terjadi kesalahan pada server: ' + err.message;
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
    currentShoppingListId = null;
    
    // Clear session data
    shoppingLists = [];
    inventories = [];
    financialRecords = [];
    
    // Clear form
    document.getElementById('loginForm').reset();
    document.getElementById('signupForm').reset();
    document.getElementById('loginError').style.display = 'none';
    document.getElementById('signupError').style.display = 'none';
    
    switchToLogin();
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
            saveDataToLocalStorage();
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
    
    saveDataToLocalStorage();
    
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
    saveDataToLocalStorage();
    renderShoppingListItems();
}

function removeShoppingItem(itemId) {
    if (confirm('Yakin ingin menghapus item ini?')) {
        const list = shoppingLists.find(l => l.id === currentShoppingListId);
        if (!list) return;
        list.items = list.items.filter(i => i.id !== itemId);
        saveDataToLocalStorage();
        renderShoppingListItems();
    }
}

async function deleteShoppingList(listId) {
    if (confirm('Yakin ingin menghapus daftar belanja ini?')) {
        shoppingLists = shoppingLists.filter(l => l.id !== listId);
        saveDataToLocalStorage();
        loadShoppingLists();
        updateDashboardStats();
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
            saveDataToLocalStorage();
            
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
    // Preferensi: gunakan fungsi createInventory jika tersedia (IIFE modern),
    // kalau tidak ada fallback sederhana untuk menambah inventaris lokal.
    if (typeof window !== 'undefined' && typeof window.createInventory === 'function') {
        window.createInventory();
        return;
    }

    const name = prompt('Nama inventaris:');
    if (!name) return;
    inventories.push({ id: Date.now().toString(), name, items: [] });
    if (typeof updateDashboardStats === 'function') updateDashboardStats();
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
    loadDataFromLocalStorage();
    loadShoppingLists();
    updateDashboardStats();
});

