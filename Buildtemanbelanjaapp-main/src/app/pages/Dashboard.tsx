import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ShoppingCart, Package, Wallet, LogOut, Bell } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    // Check if user is logged in
    const currentUser = localStorage.getItem('temanbelanja_currentUser');
    if (!currentUser) {
      navigate('/');
      return;
    }

    const user = JSON.parse(currentUser);
    setUserName(user.name);

    // Check for expiring inventory items
    checkExpiringItems();
  }, [navigate]);

  const checkExpiringItems = () => {
    const inventoriesData = localStorage.getItem('temanbelanja_inventories');
    if (!inventoriesData) return;

    const inventories = JSON.parse(inventoriesData);
    const today = new Date();
    const sevenDaysFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const expiringSoon: string[] = [];

    inventories.forEach((inventory: any) => {
      inventory.items?.forEach((item: any) => {
        if (item.expiryDate) {
          const expiryDate = new Date(item.expiryDate);
          if (expiryDate <= sevenDaysFromNow && expiryDate >= today) {
            expiringSoon.push(`${item.name} akan expired pada ${new Date(item.expiryDate).toLocaleDateString('id-ID')}`);
          }
        }
      });
    });

    setNotifications(expiringSoon);
  };

  const handleLogout = () => {
    localStorage.removeItem('temanbelanja_currentUser');
    navigate('/');
  };

  const menuCards = [
    {
      title: 'Daftar Belanja',
      description: 'Kelola daftar belanja Anda',
      icon: ShoppingCart,
      color: 'bg-blue-500',
      path: '/shopping-list',
    },
    {
      title: 'Inventaris',
      description: 'Kelola stok barang Anda',
      icon: Package,
      color: 'bg-green-500',
      path: '/inventory',
    },
    {
      title: 'Catatan Keuangan',
      description: 'Kelola keuangan dan perhitungan',
      icon: Wallet,
      color: 'bg-purple-500',
      path: '/financial',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Teman Belanja</h1>
            <p className="text-gray-600 text-sm">Selamat datang, {userName}!</p>
          </div>
          <div className="flex items-center gap-4">
            {notifications.length > 0 && (
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications.length}
                </span>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition"
            >
              <LogOut className="w-5 h-5" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Notifications */}
        {notifications.length > 0 && (
          <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <div className="flex items-start">
              <Bell className="w-5 h-5 text-yellow-600 mt-0.5 mr-3" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Peringatan Barang Akan Expired</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  {notifications.map((notif, index) => (
                    <li key={index}>• {notif}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(card.path)}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-left group"
              >
                <div className={`${card.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </button>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-600 text-sm">Total Daftar Belanja</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {JSON.parse(localStorage.getItem('temanbelanja_shoppinglists') || '[]').length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-600 text-sm">Total Inventaris</p>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {JSON.parse(localStorage.getItem('temanbelanja_inventories') || '[]').length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-600 text-sm">Catatan Keuangan</p>
            <p className="text-3xl font-bold text-purple-600 mt-2">
              {JSON.parse(localStorage.getItem('temanbelanja_financials') || '[]').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
