import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Plus, Trash2, Edit2, AlertTriangle } from 'lucide-react';

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

export default function InventoryDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inventory, setInventory] = useState<InventoryGroup | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  
  // Form fields
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);
  const [expiryDate, setExpiryDate] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    loadInventory();
  }, [id]);

  const loadInventory = () => {
    const inventoriesData = localStorage.getItem('temanbelanja_inventories');
    if (inventoriesData) {
      const inventories = JSON.parse(inventoriesData);
      const currentInventory = inventories.find((inv: InventoryGroup) => inv.id === id);
      if (currentInventory) {
        setInventory(currentInventory);
      } else {
        navigate('/inventory');
      }
    }
  };

  const saveInventories = (updatedInventory: InventoryGroup) => {
    const inventoriesData = localStorage.getItem('temanbelanja_inventories');
    if (inventoriesData) {
      const inventories = JSON.parse(inventoriesData);
      const updatedInventories = inventories.map((inv: InventoryGroup) =>
        inv.id === updatedInventory.id ? updatedInventory : inv
      );
      localStorage.setItem('temanbelanja_inventories', JSON.stringify(updatedInventories));
      setInventory(updatedInventory);
    }
  };

  const addItem = () => {
    if (!itemName.trim() || !inventory) return;

    const newItem: InventoryItem = {
      id: Date.now().toString(),
      name: itemName,
      quantity: itemQuantity,
      purchasePrice: purchasePrice,
      sellingPrice: sellingPrice,
      expiryDate: expiryDate,
      notes: notes,
    };

    const updatedInventory = {
      ...inventory,
      items: [...inventory.items, newItem],
    };

    saveInventories(updatedInventory);
    resetForm();
  };

  const updateItem = () => {
    if (!itemName.trim() || !inventory || !selectedItem) return;

    const updatedItems = inventory.items.map(item =>
      item.id === selectedItem.id
        ? {
            ...item,
            name: itemName,
            quantity: itemQuantity,
            purchasePrice: purchasePrice,
            sellingPrice: sellingPrice,
            expiryDate: expiryDate,
            notes: notes,
          }
        : item
    );

    const updatedInventory = {
      ...inventory,
      items: updatedItems,
    };

    saveInventories(updatedInventory);
    resetForm();
    setShowEditModal(false);
  };

  const deleteItem = (itemId: string) => {
    if (!inventory) return;

    const updatedInventory = {
      ...inventory,
      items: inventory.items.filter(item => item.id !== itemId),
    };

    saveInventories(updatedInventory);
  };

  const resetForm = () => {
    setItemName('');
    setItemQuantity(1);
    setPurchasePrice(0);
    setSellingPrice(0);
    setExpiryDate('');
    setNotes('');
    setShowAddModal(false);
    setSelectedItem(null);
  };

  const openEditModal = (item: InventoryItem) => {
    setSelectedItem(item);
    setItemName(item.name);
    setItemQuantity(item.quantity);
    setPurchasePrice(item.purchasePrice);
    setSellingPrice(item.sellingPrice);
    setExpiryDate(item.expiryDate);
    setNotes(item.notes);
    setShowEditModal(true);
  };

  const isExpiring = (expiryDateStr: string) => {
    if (!expiryDateStr) return false;
    const today = new Date();
    const expiryDate = new Date(expiryDateStr);
    const sevenDaysFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    return expiryDate <= sevenDaysFromNow && expiryDate >= today;
  };

  const isExpired = (expiryDateStr: string) => {
    if (!expiryDateStr) return false;
    const today = new Date();
    const expiryDate = new Date(expiryDateStr);
    return expiryDate < today;
  };

  if (!inventory) return null;

  const totalValue = inventory.items.reduce((sum, item) => sum + (item.purchasePrice * item.quantity), 0);
  const potentialProfit = inventory.items.reduce((sum, item) => 
    sum + ((item.sellingPrice - item.purchasePrice) * item.quantity), 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate('/inventory')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800">{inventory.name}</h1>
              <p className="text-gray-600 text-sm">{inventory.items.length} item dalam inventaris</p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <Plus className="w-5 h-5" />
              <span>Tambah Item</span>
            </button>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="px-4 py-2 bg-blue-50 rounded-lg">
              <span className="text-gray-600">Total Item: </span>
              <span className="font-semibold">{inventory.items.length}</span>
            </div>
            <div className="px-4 py-2 bg-green-50 rounded-lg">
              <span className="text-gray-600">Total Nilai: </span>
              <span className="font-semibold text-green-700">Rp {totalValue.toLocaleString('id-ID')}</span>
            </div>
            <div className="px-4 py-2 bg-purple-50 rounded-lg">
              <span className="text-gray-600">Potensi Profit: </span>
              <span className="font-semibold text-purple-700">
                Rp {potentialProfit.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {inventory.items.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Belum Ada Item</h3>
            <p className="text-gray-600 mb-6">Tambahkan item ke inventaris Anda</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Tambah Item Pertama
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Nama</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Jumlah</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Harga Beli</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Harga Jual</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Expired</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Catatan</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {inventory.items.map((item) => {
                    const expiring = isExpiring(item.expiryDate);
                    const expired = isExpired(item.expiryDate);
                    
                    return (
                      <tr 
                        key={item.id}
                        className={`hover:bg-gray-50 ${expired ? 'bg-red-50' : expiring ? 'bg-yellow-50' : ''}`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {(expired || expiring) && (
                              <AlertTriangle className={`w-4 h-4 ${expired ? 'text-red-500' : 'text-yellow-500'}`} />
                            )}
                            <span className="font-medium text-gray-800">{item.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{item.quantity}</td>
                        <td className="px-6 py-4 text-gray-600">
                          Rp {item.purchasePrice.toLocaleString('id-ID')}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {item.sellingPrice > 0 
                            ? `Rp ${item.sellingPrice.toLocaleString('id-ID')}`
                            : '-'
                          }
                        </td>
                        <td className="px-6 py-4">
                          {item.expiryDate ? (
                            <span className={expired ? 'text-red-600 font-semibold' : expiring ? 'text-yellow-600 font-semibold' : 'text-gray-600'}>
                              {new Date(item.expiryDate).toLocaleDateString('id-ID')}
                            </span>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {item.notes ? (
                            <span className="text-gray-600 text-sm">{item.notes}</span>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button
                              onClick={() => openEditModal(item)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteItem(item.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md my-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tambah Item Baru</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Item</label>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  placeholder="Contoh: Beras Premium"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah</label>
                <input
                  type="number"
                  value={itemQuantity}
                  onChange={(e) => setItemQuantity(parseInt(e.target.value) || 1)}
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Harga Beli</label>
                  <input
                    type="number"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(parseInt(e.target.value) || 0)}
                    min="0"
                    placeholder="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Harga Jual</label>
                  <input
                    type="number"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(parseInt(e.target.value) || 0)}
                    min="0"
                    placeholder="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Expired (Opsional)</label>
                <input
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Catatan (Opsional)</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Catatan tambahan..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={resetForm}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Batal
              </button>
              <button
                onClick={addItem}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Tambah
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Item Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md my-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Item</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Item</label>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah</label>
                <input
                  type="number"
                  value={itemQuantity}
                  onChange={(e) => setItemQuantity(parseInt(e.target.value) || 1)}
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Harga Beli</label>
                  <input
                    type="number"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(parseInt(e.target.value) || 0)}
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Harga Jual</label>
                  <input
                    type="number"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(parseInt(e.target.value) || 0)}
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Expired</label>
                <input
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Catatan</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Catatan tambahan..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  resetForm();
                }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Batal
              </button>
              <button
                onClick={updateItem}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
