import { ShieldCheck, Cpu, Battery, Wifi } from "lucide-react";

export default function RhinoTab({ lang }: { lang: 'en' | 'sv' }) {
  return (
    <div className="animate-in slide-in-from-right-4 duration-500 py-4">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-black text-blue-700 mb-2 tracking-tight">Rhino 1 Pro</h2>
        <p className="text-xl text-slate-500 font-medium">
          {lang === 'en' ? 'The Ultimate Heavy-Duty Powerhouse' : 'Det Ultimata Kraftpaketet'}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
        <img src="/rhino-1-front.jpeg" alt="Rhino 1 Pro Front" className="rounded-2xl shadow-md border border-slate-200 w-full h-80 object-cover" />
        <img src="/rhino-1-box.jpeg" alt="Rhino 1 Pro Box" className="rounded-2xl shadow-md border border-slate-200 w-full h-80 object-cover" />
        
        {/* Placeholders for 3rd and 4th Rhino Images */}
        <div className="rounded-2xl border-2 border-dashed border-slate-300 w-full h-80 flex flex-col items-center justify-center bg-slate-100 text-slate-400">
          <span className="font-bold text-lg mb-1">Slide photo here</span>
          <span className="text-sm">Rhino 3rd Image</span>
        </div>
        <div className="rounded-2xl border-2 border-dashed border-slate-300 w-full h-80 flex flex-col items-center justify-center bg-slate-100 text-slate-400">
          <span className="font-bold text-lg mb-1">Slide photo here</span>
          <span className="text-sm">Rhino 4th Image</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 border-b pb-4 text-slate-800">
          {lang === 'en' ? 'Technical Specifications' : 'Tekniska Specifikationer'}
        </h3>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><Cpu className="w-5 h-5 text-blue-600 mr-2"/> Core &amp; Performance</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">Processor:</span> Octa-Core Industrial Chipset</li>
              <li><span className="font-semibold">Memory:</span> Up to 12GB RAM / 256GB ROM</li>
              <li><span className="font-semibold">OS:</span> Android 16</li>
            </ul>
          </div>
          <div>
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><ShieldCheck className="w-5 h-5 text-blue-600 mr-2"/> Durability &amp; Compliance</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">Certifications:</span> IP68 / IP69K / MIL-STD-810H</li>
              <li><span className="font-semibold">EU Compliance:</span> CE Marked, EU DoC, RoHS Validated</li>
              <li><span className="font-semibold">Build:</span> 440g Heavy-duty polycarbonate/TPU</li>
            </ul>
          </div>
          <div>
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><Wifi className="w-5 h-5 text-blue-600 mr-2"/> Connectivity</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">Network:</span> 4G, Wi-Fi 6, Bluetooth 5.2</li>
              <li><span className="font-semibold">SIM:</span> Enterprise eSIM + Dual Nano-SIM</li>
            </ul>
          </div>
          <div>
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><Battery className="w-5 h-5 text-blue-600 mr-2"/> Battery &amp; Audio</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">Capacity:</span> 12,000mAh (Reverse Charge capable)</li>
              <li><span className="font-semibold">Speaker:</span> 130dB Industrial Loudspeaker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}