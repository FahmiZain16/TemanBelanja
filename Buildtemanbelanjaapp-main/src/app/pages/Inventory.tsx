import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Plus, Package, Trash2 } from 'lucide-react';

interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  purchasePrice: number;
  sellingPrice: number;
  expiryDate: string;
  notes: string;
}

interface InventoryGroup {
  id: string;
  name: string;
  items: InventoryItem[];
  createdAt: string;
}

export default function Inventory() {
  const navigate = useNavigate();
  const [inventories, setInventories] = useState<InventoryGroup[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [newInventoryName, setNewInventoryName] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const currentUser = localStorage.getItem('temanbelanja_currentUser');
    if (!currentUser) {
      navigate('/');
      return;
    }

    loadInventories();
  }, [navigate]);

  const loadInventories = () => {
    const inventoriesData = localStorage.getItem('temanbelanja_inventories');
    if (inventoriesData) {
      setInventories(JSON.parse(inventoriesData));
    }
  };

  const createNewInventory = () => {
    if (!newInventoryName.trim()) return;

    const newInventory: InventoryGroup = {
      id: Date.now().toString(),
      name: newInventoryName,
      items: [],
      createdAt: new Date().toISOString(),
    };

    const updatedInventories = [...inventories, newInventory];
    setInventories(updatedInventories);
    localStorage.setItem('temanbelanja_inventories', JSON.stringify(updatedInventories));

    setNewInventoryName('');
    setShowCreateModal(false);
  };

  const createFromShoppingList = () => {
    const shoppingListsData = localStorage.getItem('temanbelanja_shoppinglists');
    if (!shoppingListsData) {
      alert('Tidak ada daftar belanja yang tersedia');
      return;
    }

    const shoppingLists = JSON.parse(shoppingListsData);
    const checkedLists = shoppingLists.filter((list: any) => 
      list.items.some((item: any) => item.checked)
    );

    if (checkedLists.length === 0) {
      alert('Tidak ada item yang sudah dibeli di daftar belanja');
      return;
    }

    // Show selection modal
    const listNames = checkedLists.map((list: any, index: number) => 
      `${index + 1}. ${list.name}`
    ).join('\n');
    
    const selectedIndex = prompt(`Pilih daftar belanja (masukkan nomor):\n${listNames}`);
    if (!selectedIndex) return;

    const index = parseInt(selectedIndex) - 1;
    if (index < 0 || index >= checkedLists.length) {
      alert('Pilihan tidak valid');
      return;
    }

    const selectedList = checkedLists[index];
    const checkedItems = selectedList.items.filter((item: any) => item.checked);

    const newInventory: InventoryGroup = {
      id: Date.now().toString(),
      name: `Inventaris dari ${selectedList.name}`,
      items: checkedItems.map((item: any) => ({
        id: Date.now().toString() + Math.random(),
        name: item.name,
        quantity: item.quantity,
        purchasePrice: item.price,
        sellingPrice: 0,
        expiryDate: '',
        notes: '',
      })),
      createdAt: new Date().toISOString(),
    };

    const updatedInventories = [...inventories, newInventory];
    setInventories(updatedInventories);
    localStorage.setItem('temanbelanja_inventories', JSON.stringify(updatedInventories));

    setShowOptionsModal(false);
    alert('Inventaris berhasil dibuat dari daftar belanja!');
  };

  const deleteInventory = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus inventaris ini?')) {
      const updatedInventories = inventories.filter(inv => inv.id !== id);
      setInventories(updatedInventories);
      localStorage.setItem('temanbelanja_inventories', JSON.stringify(updatedInventories));
    }
  };

  const getInventoryStats = (inventory: InventoryGroup) => {
    const totalItems = inventory.items.length;
    const totalValue = inventory.items.reduce((sum, item) => 
      sum + (item.purchasePrice * item.quantity), 0
    );
    
    // Check expiring items (within 7 days)
    const today = new Date();
    const sevenDaysFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const expiringCount = inventory.items.filter(item => {
      if (!item.expiryDate) return false;
      const expiryDate = new Date(item.expiryDate);
      return expiryDate <= sevenDaysFromNow && expiryDate >= today;
    }).length;

    return { totalItems, totalValue, expiringCount };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Inventaris</h1>
              <p className="text-gray-600 text-sm">Kelola stok barang Anda</p>
            </div>
          </div>
          <button
            onClick={() => inventories.length === 0 ? setShowOptionsModal(true) : setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <Plus className="w-5 h-5" />
            <span>Buat Inventaris</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {inventories.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Belum Ada Inventaris</h3>
            <p className="text-gray-600 mb-6">Buat inventaris baru atau dari daftar belanja</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowCreateModal(true)}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Buat Inventaris Baru
              </button>
              <button
                onClick={createFromShoppingList}
                className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition"
              >
                Dari Daftar Belanja
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Create Options Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setShowOptionsModal(true)}
                className="flex items-center gap-2 px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition"
              >
                <Plus className="w-5 h-5" />
                <span>Opsi Buat Inventaris</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inventories.map((inventory) => {
                const stats = getInventoryStats(inventory);
                return (
                  <div
                    key={inventory.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">{inventory.name}</h3>
                        <button
                          onClick={() => deleteInventory(inventory.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Total Item</span>
                          <span className="font-semibold">{stats.totalItems}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Total Nilai</span>
                          <span className="font-semibold text-green-600">
                            Rp {stats.totalValue.toLocaleString('id-ID')}
                          </span>
                        </div>
                        {stats.expiringCount > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Akan Expired</span>
                            <span className="font-semibold text-red-600">
                              {stats.expiringCount} item
                            </span>
                          </div>
                        )}
                      </div>

                      {stats.expiringCount > 0 && (
                        <div className="mb-4 p-2 bg-red-50 rounded-lg">
                          <p className="text-xs text-red-600">
                            ⚠️ Ada barang yang akan expired!
                          </p>
                        </div>
                      )}

                      <button
                        onClick={() => navigate(`/inventory/${inventory.id}`)}
                        className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                      >
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Create New Inventory Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Buat Inventaris Baru</h2>
            <input
              type="text"
              value={newInventoryName}
              onChange={(e) => setNewInventoryName(e.target.value)}
              placeholder="Nama inventaris"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none mb-6"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setNewInventoryName('');
                }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Batal
              </button>
              <button
                onClick={createNewInventory}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Buat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Options Modal */}
      {showOptionsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pilih Cara Membuat Inventaris</h2>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowOptionsModal(false);
                  setShowCreateModal(true);
                }}
                className="w-full p-4 text-left border-2 border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition"
              >
                <h3 className="font-semibold text-gray-800 mb-1">Buat Inventaris Baru</h3>
                <p className="text-sm text-gray-600">Mulai dari awal dengan inventaris kosong</p>
              </button>
              <button
                onClick={() => {
                  setShowOptionsModal(false);
                  createFromShoppingList();
                }}
                className="w-full p-4 text-left border-2 border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition"
              >
                <h3 className="font-semibold text-gray-800 mb-1">Dari Daftar Belanja</h3>
                <p className="text-sm text-gray-600">Import item dari daftar belanja yang sudah dibeli</p>
              </button>
            </div>
            <button
              onClick={() => setShowOptionsModal(false)}
              className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
