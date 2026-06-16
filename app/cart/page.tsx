"use client";
import { useState } from "react";
import { createOrder } from "../actions";
import { ShoppingCart, CheckCircle } from "lucide-react";

export default function CartPage() {
  const [formData, setFormData] = useState({
    name: "", address: "", phone: "", email: "", eagleQty: 0, rhinoQty: 0
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.eagleQty === 0 && formData.rhinoQty === 0) {
      alert("Please add at least one phone to your order.");
      return;
    }
    
    setStatus('loading');
    const result = await createOrder(formData);
    
    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <main className="min-h-[70vh] flex items-center justify-center p-8">
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl max-w-lg w-full border border-slate-200">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-black text-slate-800 mb-4">Order Received!</h2>
          <p className="text-slate-600 mb-6">Your details have been securely logged. An agent will contact you shortly regarding the manual payment process.</p>
          <button onClick={() => window.location.reload()} className="text-blue-600 font-bold hover:underline">
            Submit another order
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[80vh] bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Direct Checkout</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 space-y-6">
          <div className="grid grid-cols-2 gap-6 pb-6 border-b border-slate-100">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Rhino 1 Pro (Qty)</label>
              <input type="number" min="0" value={formData.rhinoQty} onChange={e => setFormData({...formData, rhinoQty: parseInt(e.target.value) || 0})} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Eagle Pro 5G (Qty)</label>
              <input type="number" min="0" value={formData.eagleQty} onChange={e => setFormData({...formData, eagleQty: parseInt(e.target.value) || 0})} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
              <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
              <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50" placeholder="+46 70 123 45 67" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Full Delivery Address</label>
              <textarea required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} rows={3} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50" placeholder="Street, City, Postal Code, Country" />
            </div>
          </div>

          {status === 'error' && <p className="text-red-500 font-medium">Failed to submit order. Please try again.</p>}

          <button disabled={status === 'loading'} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition text-lg disabled:opacity-50">
            {status === 'loading' ? 'Processing...' : 'Submit Order'}
          </button>
        </form>
      </div>
    </main>
  );
}