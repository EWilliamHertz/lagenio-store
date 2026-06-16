// app/admin-login/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { verifyAdminLogin, getOrders } from '../actions';
import { Shield, Package, Mail, MapPin, Phone, User } from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState<any[]>([]);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const res = await verifyAdminLogin(password);
    if (res.success) {
      setIsAuthenticated(true);
      fetchOrders();
    } else {
      setError(res.error || 'Failed to authenticate');
    }
  };

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (err) {
      setError('Unauthorized or database session expired.');
      setIsAuthenticated(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full border border-slate-200">
          <div className="flex justify-center mb-4 text-blue-600">
            <Shield className="w-12 h-12" />
          </div>
          <h1 className="text-2xl font-black text-center mb-6 tracking-tight text-slate-800">Lagenio Terminal Gateway</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Passkey Verification</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-slate-900 bg-slate-50"
                placeholder="Enter root credentials..."
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition">
              Authenticate
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8 border-b pb-4 border-slate-200">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Order Fulfilment Ledger</h1>
          <p className="text-slate-500 text-sm">Direct ingestion dashboard from PostgreSQL</p>
        </div>
        <span className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> SQL Node Online
        </span>
      </div>

      {orders.length === 0 ? (
        <div className="text-center bg-white p-12 rounded-xl border border-dashed border-slate-300 text-slate-500">
          No transactions logged into database node yet.
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600 flex flex-col md:flex-row md:justify-between gap-6">
              
              {/* Customer Info Column */}
              <div className="space-y-2 max-w-md">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                  <User className="w-4 h-4 text-slate-400" /> {order.name}
                </div>
                <div className="flex items-start gap-2 text-slate-600 text-sm">
                  <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" /> 
                  <span className="whitespace-pre-line">{order.address}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Phone className="w-4 h-4 text-slate-400" /> {order.phone}
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Mail className="w-4 h-4 text-slate-400" /> {order.email}
                </div>
              </div>

              {/* Order Manifest & Timestamp Column */}
              <div className="flex flex-col md:items-end justify-between border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
                <div className="space-y-1.5">
                  <span className="text-xs text-slate-400 font-mono block md:text-right">ORDER #{order.id}</span>
                  <div className="flex gap-4">
                    {order.eagle_qty > 0 && (
                      <div className="bg-slate-100 px-3 py-1 rounded-lg text-slate-800 font-semibold text-sm flex items-center gap-1.5">
                        <Package className="w-4 h-4 text-slate-500" /> Eagle Pro ×{order.eagle_qty}
                      </div>
                    )}
                    {order.rhino_qty > 0 && (
                      <div className="bg-blue-50 px-3 py-1 rounded-lg text-blue-900 font-semibold text-sm flex items-center gap-1.5">
                        <Package className="w-4 h-4 text-blue-500" /> Rhino 1 Pro ×{order.rhino_qty}
                      </div>
                    )}
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-medium mt-4 md:mt-0">
                  Logged: {new Date(order.created_at).toLocaleString('sv-SE')}
                </span>
              </div>

            </div>
          ))}
        </div>
      )}
    </main>
  );
}