import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Plus, Trash2, Check, Edit2, Search, ExternalLink } from 'lucide-react';

interface ShoppingListItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  checked: boolean;
}

interface ShoppingListGroup {
  id: string;
  name: string;
  items: ShoppingListItem[];
  createdAt: string;
}

export default function ShoppingListDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [list, setList] = useState<ShoppingListGroup | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ShoppingListItem | null>(null);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);

  useEffect(() => {
    loadList();
  }, [id]);

  const loadList = () => {
    const listsData = localStorage.getItem('temanbelanja_shoppinglists');
    if (listsData) {
      const lists = JSON.parse(listsData);
      const currentList = lists.find((l: ShoppingListGroup) => l.id === id);
      if (currentList) {
        setList(currentList);
      } else {
        navigate('/shopping-list');
      }
    }
  };

  const saveLists = (updatedList: ShoppingListGroup) => {
    const listsData = localStorage.getItem('temanbelanja_shoppinglists');
    if (listsData) {
      const lists = JSON.parse(listsData);
      const updatedLists = lists.map((l: ShoppingListGroup) =>
        l.id === updatedList.id ? updatedList : l
      );
      localStorage.setItem('temanbelanja_shoppinglists', JSON.stringify(updatedLists));
      setList(updatedList);
    }
  };

  const addItem = () => {
    if (!itemName.trim() || !list) return;

    const newItem: ShoppingListItem = {
      id: Date.now().toString(),
      name: itemName,
      quantity: itemQuantity,
      price: itemPrice,
      checked: false,
    };

    const updatedList = {
      ...list,
      items: [...list.items, newItem],
    };

    saveLists(updatedList);
    resetForm();
  };

  const updateItem = () => {
    if (!itemName.trim() || !list || !selectedItem) return;

    const updatedItems = list.items.map(item =>
      item.id === selectedItem.id
        ? { ...item, name: itemName, quantity: itemQuantity, price: itemPrice }
        : item
    );

    const updatedList = {
      ...list,
      items: updatedItems,
    };

    saveLists(updatedList);
    resetForm();
    setShowEditModal(false);
  };

  const deleteItem = (itemId: string) => {
    if (!list) return;

    const updatedList = {
      ...list,
      items: list.items.filter(item => item.id !== itemId),
    };

    saveLists(updatedList);
  };

  const toggleCheck = (itemId: string) => {
    if (!list) return;

    const updatedItems = list.items.map(item =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );

    const updatedList = {
      ...list,
      items: updatedItems,
    };

    saveLists(updatedList);
  };

  const resetForm = () => {
    setItemName('');
    setItemQuantity(1);
    setItemPrice(0);
    setShowAddModal(false);
    setSelectedItem(null);
  };

  const openEditModal = (item: ShoppingListItem) => {
    setSelectedItem(item);
    setItemName(item.name);
    setItemQuantity(item.quantity);
    setItemPrice(item.price);
    setShowEditModal(true);
  };

  const searchGoogle = (productName: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(productName + ' harga')}`, '_blank');
  };

  const searchOnlineStore = (productName: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent('beli ' + productName + ' online')}`, '_blank');
  };

  if (!list) return null;

  const totalPrice = list.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const checkedCount = list.items.filter(item => item.checked).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate('/shopping-list')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800">{list.name}</h1>
              <p className="text-gray-600 text-sm">
                {checkedCount} dari {list.items.length} item terbeli
              </p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Plus className="w-5 h-5" />
              <span>Tambah Item</span>
            </button>
          </div>

          {/* Summary */}
          <div className="flex gap-4 text-sm">
            <div className="px-4 py-2 bg-blue-50 rounded-lg">
              <span className="text-gray-600">Total Item: </span>
              <span className="font-semibold">{list.items.length}</span>
            </div>
            <div className="px-4 py-2 bg-green-50 rounded-lg">
              <span className="text-gray-600">Total Harga: </span>
              <span className="font-semibold text-green-700">Rp {totalPrice.toLocaleString('id-ID')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {list.items.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Belum Ada Item</h3>
            <p className="text-gray-600 mb-6">Tambahkan item ke daftar belanja Anda</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Tambah Item Pertama
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="divide-y">
              {list.items.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 hover:bg-gray-50 transition ${item.checked ? 'bg-green-50' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Checkbox */}
                    <button
                      onClick={() => toggleCheck(item.id)}
                      className={`mt-1 w-6 h-6 rounded border-2 flex items-center justify-center transition ${
                        item.checked
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-300 hover:border-blue-500'
                      }`}
                    >
                      {item.checked && <Check className="w-4 h-4 text-white" />}
                    </button>

                    {/* Item Info */}
                    <div className="flex-1">
                      <h4 className={`font-semibold text-gray-800 mb-1 ${item.checked ? 'line-through' : ''}`}>
                        {item.name}
                      </h4>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>Jumlah: {item.quantity}</span>
                        <span>|</span>
                        {item.price > 0 ? (
                          <span className="font-semibold text-blue-600">
                            Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                          </span>
                        ) : (
                          <button
                            onClick={() => searchGoogle(item.name)}
                            className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
                          >
                            <Search className="w-3 h-3" />
                            Cek Harga
                          </button>
                        )}
                      </div>
                      <button
                        onClick={() => searchOnlineStore(item.name)}
                        className="mt-2 flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Beli Online
                      </button>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEditModal(item)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tambah Item Baru</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Item</label>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  placeholder="Contoh: Beras"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Harga per Item (Opsional)</label>
                <input
                  type="number"
                  value={itemPrice}
                  onChange={(e) => setItemPrice(parseInt(e.target.value) || 0)}
                  min="0"
                  placeholder="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Tambah
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Item Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Item</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Item</label>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Harga per Item</label>
                <input
                  type="number"
                  value={itemPrice}
                  onChange={(e) => setItemPrice(parseInt(e.target.value) || 0)}
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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
