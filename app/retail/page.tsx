"use client";
import { useState } from "react";
import { Calculator, Truck, Package } from "lucide-react";

export default function RetailPage() {
  const [quantity, setQuantity] = useState(10);
  const basePriceSEK = 2800;
  const shippingDDP = 1200;

  const totalDeviceCost = quantity * basePriceSEK;
  const grandTotal = totalDeviceCost + shippingDDP;

  return (
    <main className="min-h-[80vh] bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Retail &amp; Wholesale</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Calculate your bulk orders. All wholesale orders are shipped securely from China via DDP (Delivered Duty Paid) directly to your European location. Delivery takes approximately 10 days.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <Calculator className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-800">DDP Order Calculator</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3">
                Order Quantity (Units)
              </label>
              <input 
                type="number" 
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full text-3xl font-black text-blue-700 bg-slate-100 border border-slate-300 rounded-xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all"
              />
              <p className="mt-3 text-sm text-slate-500">
                Current wholesale rate: <span className="font-bold text-slate-700">2,800 SEK</span> per unit.
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 text-white shadow-inner flex flex-col justify-center">
              <div className="flex justify-between items-center mb-3 text-slate-400">
                <span className="flex items-center gap-2"><Package className="w-4 h-4"/> Devices:</span>
                <span className="font-mono text-slate-200">{totalDeviceCost.toLocaleString()} SEK</span>
              </div>
              <div className="flex justify-between items-center mb-6 text-slate-400 border-b border-slate-700 pb-4">
                <span className="flex items-center gap-2"><Truck className="w-4 h-4"/> DDP Shipping:</span>
                <span className="font-mono text-slate-200">{shippingDDP.toLocaleString()} SEK</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-lg font-bold text-blue-400">Total Estimate:</span>
                <span className="text-4xl font-black text-white">{grandTotal.toLocaleString()} <span className="text-xl text-slate-400 font-medium">SEK</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}