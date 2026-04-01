import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Plus, Calculator, Trash2 } from 'lucide-react';

interface FinancialRecord {
  id: string;
  name: string;
  type: 'manual' | 'shopping-list' | 'inventory';
  sourceId?: string;
  calculations: {
    items: { name: string; amount: number }[];
    total: number;
  };
  createdAt: string;
}

export default function Financial() {
  const navigate = useNavigate();
  const [records, setRecords] = useState<FinancialRecord[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showManualModal, setShowManualModal] = useState(false);
  const [recordName, setRecordName] = useState('');
  const [manualItems, setManualItems] = useState<{ name: string; amount: number }[]>([
    { name: '', amount: 0 }
  ]);

  useEffect(() => {
    // Check if user is logged in
    const currentUser = localStorage.getItem('temanbelanja_currentUser');
    if (!currentUser) {
      navigate('/');
      return;
    }

    loadRecords();
  }, [navigate]);

  const loadRecords = () => {
    const recordsData = localStorage.getItem('temanbelanja_financials');
    if (recordsData) {
      setRecords(JSON.parse(recordsData));
    }
  };

  const createFromShoppingList = () => {
    const shoppingListsData = localStorage.getItem('temanbelanja_shoppinglists');
    if (!shoppingListsData) {
      alert('Tidak ada daftar belanja yang tersedia');
      return;
    }

    const shoppingLists = JSON.parse(shoppingListsData);
    if (shoppingLists.length === 0) {
      alert('Tidak ada daftar belanja');
      return;
    }

    // Show selection modal
    const listNames = shoppingLists.map((list: any, index: number) => 
      `${index + 1}. ${list.name}`
    ).join('\n');
    
    const selectedIndex = prompt(`Pilih daftar belanja (masukkan nomor):\n${listNames}`);
    if (!selectedIndex) return;

    const index = parseInt(selectedIndex) - 1;
    if (index < 0 || index >= shoppingLists.length) {
      alert('Pilihan tidak valid');
      return;
    }

    const selectedList = shoppingLists[index];
    const items = selectedList.items.map((item: any) => ({
      name: `${item.name} (${item.quantity}x)`,
      amount: item.price * item.quantity
    }));

    const total = items.reduce((sum: number, item: any) => sum + item.amount, 0);

    const newRecord: FinancialRecord = {
      id: Date.now().toString(),
      name: `Perhitungan dari ${selectedList.name}`,
      type: 'shopping-list',
      sourceId: selectedList.id,
      calculations: { items, total },
      createdAt: new Date().toISOString(),
    };

    const updatedRecords = [...records, newRecord];
    setRecords(updatedRecords);
    localStorage.setItem('temanbelanja_financials', JSON.stringify(updatedRecords));

    setShowCreateModal(false);
    alert('Perhitungan keuangan berhasil dibuat!');
  };

  const createFromInventory = () => {
    const inventoriesData = localStorage.getItem('temanbelanja_inventories');
    if (!inventoriesData) {
      alert('Tidak ada inventaris yang tersedia');
      return;
    }

    const inventories = JSON.parse(inventoriesData);
    if (inventories.length === 0) {
      alert('Tidak ada inventaris');
      return;
    }

    // Show selection modal
    const invNames = inventories.map((inv: any, index: number) => 
      `${index + 1}. ${inv.name}`
    ).join('\n');
    
    const selectedIndex = prompt(`Pilih inventaris (masukkan nomor):\n${invNames}`);
    if (!selectedIndex) return;

    const index = parseInt(selectedIndex) - 1;
    if (index < 0 || index >= inventories.length) {
      alert('Pilihan tidak valid');
      return;
    }

    const selectedInv = inventories[index];
    
    // Calculate purchase cost and potential profit
    const purchaseItems = selectedInv.items.map((item: any) => ({
      name: `${item.name} - Beli (${item.quantity}x)`,
      amount: item.purchasePrice * item.quantity
    }));

    const profitItems = selectedInv.items
      .filter((item: any) => item.sellingPrice > 0)
      .map((item: any) => ({
        name: `${item.name} - Profit Potensial`,
        amount: (item.sellingPrice - item.purchasePrice) * item.quantity
      }));

    const items = [...purchaseItems, ...profitItems];
    const purchaseTotal = purchaseItems.reduce((sum: any, item: any) => sum + item.amount, 0);
    const profitTotal = profitItems.reduce((sum: any, item: any) => sum + item.amount, 0);

    const newRecord: FinancialRecord = {
      id: Date.now().toString(),
      name: `Perhitungan dari ${selectedInv.name}`,
      type: 'inventory',
      sourceId: selectedInv.id,
      calculations: { 
        items: [
          ...purchaseItems,
          { name: '--- PROFIT POTENSIAL ---', amount: 0 },
          ...profitItems,
          { name: 'Total Modal', amount: purchaseTotal },
          { name: 'Total Profit Potensial', amount: profitTotal },
        ], 
        total: profitTotal 
      },
      createdAt: new Date().toISOString(),
    };

    const updatedRecords = [...records, newRecord];
    setRecords(updatedRecords);
    localStorage.setItem('temanbelanja_financials', JSON.stringify(updatedRecords));

    setShowCreateModal(false);
    alert('Perhitungan keuangan berhasil dibuat!');
  };

  const createManual = () => {
    if (!recordName.trim()) {
      alert('Nama perhitungan harus diisi');
      return;
    }

    const validItems = manualItems.filter(item => item.name.trim() !== '');
    if (validItems.length === 0) {
      alert('Minimal satu item harus diisi');
      return;
    }

    const total = validItems.reduce((sum, item) => sum + item.amount, 0);

    const newRecord: FinancialRecord = {
      id: Date.now().toString(),
      name: recordName,
      type: 'manual',
      calculations: { items: validItems, total },
      createdAt: new Date().toISOString(),
    };

    const updatedRecords = [...records, newRecord];
    setRecords(updatedRecords);
    localStorage.setItem('temanbelanja_financials', JSON.stringify(updatedRecords));

    setShowManualModal(false);
    setRecordName('');
    setManualItems([{ name: '', amount: 0 }]);
  };

  const deleteRecord = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus perhitungan ini?')) {
      const updatedRecords = records.filter(record => record.id !== id);
      setRecords(updatedRecords);
      localStorage.setItem('temanbelanja_financials', JSON.stringify(updatedRecords));
    }
  };

  const addManualItem = () => {
    setManualItems([...manualItems, { name: '', amount: 0 }]);
  };

  const updateManualItem = (index: number, field: 'name' | 'amount', value: string | number) => {
    const updatedItems = [...manualItems];
    if (field === 'name') {
      updatedItems[index].name = value as string;
    } else {
      updatedItems[index].amount = typeof value === 'number' ? value : parseInt(value) || 0;
    }
    setManualItems(updatedItems);
  };

  const removeManualItem = (index: number) => {
    setManualItems(manualItems.filter((_, i) => i !== index));
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
              <h1 className="text-2xl font-bold text-gray-800">Catatan Keuangan</h1>
              <p className="text-gray-600 text-sm">Kelola perhitungan keuangan Anda</p>
            </div>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            <Plus className="w-5 h-5" />
            <span>Buat Perhitungan</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {records.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Belum Ada Perhitungan</h3>
            <p className="text-gray-600 mb-6">Buat perhitungan keuangan baru</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Buat Perhitungan
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {records.map((record) => (
              <div
                key={record.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{record.name}</h3>
                      <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded">
                        {record.type === 'manual' ? 'Manual' : 
                         record.type === 'shopping-list' ? 'Daftar Belanja' : 'Inventaris'}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteRecord(record.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
                    {record.calculations.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className={`text-gray-600 ${item.name.includes('---') ? 'font-bold text-purple-600' : ''}`}>
                          {item.name}
                        </span>
                        <span className={`font-semibold ${item.amount >= 0 ? 'text-gray-800' : 'text-red-600'} ${item.name.includes('---') ? 'hidden' : ''}`}>
                          Rp {Math.abs(item.amount).toLocaleString('id-ID')}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-800">Total</span>
                      <span className="text-2xl font-bold text-purple-600">
                        Rp {record.calculations.total.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-gray-500">
                    Dibuat: {new Date(record.createdAt).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create Options Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pilih Cara Membuat Perhitungan</h2>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setShowManualModal(true);
                }}
                className="w-full p-4 text-left border-2 border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition"
              >
                <h3 className="font-semibold text-gray-800 mb-1">Perhitungan Manual</h3>
                <p className="text-sm text-gray-600">Masukkan item dan jumlah secara manual</p>
              </button>
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  createFromShoppingList();
                }}
                className="w-full p-4 text-left border-2 border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition"
              >
                <h3 className="font-semibold text-gray-800 mb-1">Dari Daftar Belanja</h3>
                <p className="text-sm text-gray-600">Hitung total dari daftar belanja</p>
              </button>
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  createFromInventory();
                }}
                className="w-full p-4 text-left border-2 border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition"
              >
                <h3 className="font-semibold text-gray-800 mb-1">Dari Inventaris</h3>
                <p className="text-sm text-gray-600">Hitung modal dan profit dari inventaris</p>
              </button>
            </div>
            <button
              onClick={() => setShowCreateModal(false)}
              className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      {/* Manual Calculation Modal */}
      {showManualModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md my-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Perhitungan Manual</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Nama Perhitungan</label>
              <input
                type="text"
                value={recordName}
                onChange={(e) => setRecordName(e.target.value)}
                placeholder="Contoh: Belanja Bulanan April"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                autoFocus
              />
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Item</label>
                <button
                  onClick={addManualItem}
                  className="text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" />
                  Tambah Item
                </button>
              </div>
              
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {manualItems.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => updateManualItem(index, 'name', e.target.value)}
                      placeholder="Nama item"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                    <input
                      type="number"
                      value={item.amount}
                      onChange={(e) => updateManualItem(index, 'amount', e.target.value)}
                      placeholder="0"
                      className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                    {manualItems.length > 1 && (
                      <button
                        onClick={() => removeManualItem(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 p-3 bg-purple-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Total</span>
                <span className="text-xl font-bold text-purple-600">
                  Rp {manualItems.reduce((sum, item) => sum + item.amount, 0).toLocaleString('id-ID')}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowManualModal(false);
                  setRecordName('');
                  setManualItems([{ name: '', amount: 0 }]);
                }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Batal
              </button>
              <button
                onClick={createManual}
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
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
