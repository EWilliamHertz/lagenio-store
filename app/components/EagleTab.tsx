import { ShieldCheck, Cpu, Wifi, Camera } from "lucide-react";

export default function EagleTab({ lang }: { lang: 'en' | 'sv' }) {
  return (
    <div className="animate-in slide-in-from-right-4 duration-500 py-4">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-black text-slate-800 mb-2 tracking-tight">Eagle Pro 5G</h2>
        <p className="text-xl text-slate-500 font-medium">
          {lang === 'en' ? 'Mini Rugged Phone with Built-in Action Camera' : 'Kompakt Tålig Telefon med Inbyggd Actionkamera'}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 border-b pb-4 text-slate-800">
          {lang === 'en' ? 'Technical Specifications' : 'Tekniska Specifikationer'}
        </h3>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><Camera className="w-5 h-5 text-blue-600 mr-2"/> Camera System</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">Action Camera:</span> 48MP (152.6&deg; Ultra-Wide)</li>
              <li><span className="font-semibold">Main Camera:</span> 50MP Main Sensor</li>
              <li><span className="font-semibold">Video:</span> 4K Video @ 30fps</li>
            </ul>
          </div>
          <div>
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><Cpu className="w-5 h-5 text-blue-600 mr-2"/> Core &amp; Display</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">Processor:</span> MediaTek D7300 5G</li>
              <li><span className="font-semibold">Memory:</span> 12GB RAM (Up to 36GB) / 256GB UFS 3.1</li>
              <li><span className="font-semibold">Display:</span> 4.0&quot; Incell Display, 120Hz Refresh Rate</li>
              <li><span className="font-semibold">OS:</span> Android 16 with Gemini AI</li>
            </ul>
          </div>
          <div>
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><Wifi className="w-5 h-5 text-blue-600 mr-2"/> Connectivity &amp; Features</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">Live Streaming:</span> Built-in 5G for Direct Social Streaming</li>
              <li><span className="font-semibold">Smart Features:</span> NFC, Live Translate</li>
            </ul>
          </div>
          <div>
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><ShieldCheck className="w-5 h-5 text-blue-600 mr-2"/> Durability &amp; Battery</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">Protection:</span> IP68 / IP69K / MIL-STD-810H</li>
              <li><span className="font-semibold">Battery:</span> 3,700mAh (Up to 230 mins 4K)</li>
              <li><span className="font-semibold">Weight:</span> 210g Lightweight Build</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}