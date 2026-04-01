import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Plus, Trash2, ShoppingCart } from 'lucide-react';

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

export default function ShoppingList() {
  const navigate = useNavigate();
  const [lists, setLists] = useState<ShoppingListGroup[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newListName, setNewListName] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const currentUser = localStorage.getItem('temanbelanja_currentUser');
    if (!currentUser) {
      navigate('/');
      return;
    }

    loadLists();
  }, [navigate]);

  const loadLists = () => {
    const listsData = localStorage.getItem('temanbelanja_shoppinglists');
    if (listsData) {
      setLists(JSON.parse(listsData));
    }
  };

  const createNewList = () => {
    if (!newListName.trim()) return;

    const newList: ShoppingListGroup = {
      id: Date.now().toString(),
      name: newListName,
      items: [],
      createdAt: new Date().toISOString(),
    };

    const updatedLists = [...lists, newList];
    setLists(updatedLists);
    localStorage.setItem('temanbelanja_shoppinglists', JSON.stringify(updatedLists));

    setNewListName('');
    setShowCreateModal(false);
  };

  const deleteList = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus daftar belanja ini?')) {
      const updatedLists = lists.filter(list => list.id !== id);
      setLists(updatedLists);
      localStorage.setItem('temanbelanja_shoppinglists', JSON.stringify(updatedLists));
    }
  };

  const getListStats = (list: ShoppingListGroup) => {
    const totalItems = list.items.length;
    const checkedItems = list.items.filter(item => item.checked).length;
    const totalPrice = list.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return { totalItems, checkedItems, totalPrice };
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
              <h1 className="text-2xl font-bold text-gray-800">Daftar Belanja</h1>
              <p className="text-gray-600 text-sm">Kelola daftar belanja Anda</p>
            </div>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" />
            <span>Buat Daftar Baru</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {lists.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Belum Ada Daftar Belanja</h3>
            <p className="text-gray-600 mb-6">Mulai buat daftar belanja pertama Anda</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Buat Daftar Baru
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lists.map((list) => {
              const stats = getListStats(list);
              return (
                <div
                  key={list.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{list.name}</h3>
                      <button
                        onClick={() => deleteList(list.id)}
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
                        <span className="text-gray-600">Terbeli</span>
                        <span className="font-semibold text-green-600">
                          {stats.checkedItems} / {stats.totalItems}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Harga</span>
                        <span className="font-semibold text-blue-600">
                          Rp {stats.totalPrice.toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all"
                          style={{
                            width: stats.totalItems > 0
                              ? `${(stats.checkedItems / stats.totalItems) * 100}%`
                              : '0%'
                          }}
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => navigate(`/shopping-list/${list.id}`)}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Buat Daftar Belanja Baru</h2>
            <input
              type="text"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              placeholder="Nama daftar belanja"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none mb-6"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setNewListName('');
                }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Batal
              </button>
              <button
                onClick={createNewList}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Buat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
