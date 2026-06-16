import { ShieldCheck, Sparkles, Scale } from "lucide-react";

export default function PantherTab({ lang }: { lang: 'en' | 'sv' }) {
  return (
    <div className="animate-in slide-in-from-right-4 duration-500 py-4">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-black text-slate-900 mb-2 tracking-tight">Panther 2 Pro</h2>
        <p className="text-xl text-slate-500 font-medium">
          {lang === 'en' ? '11.3mm Slim. 24GB RAM. Gemini AI.' : '11.3mm Tunn. 24GB RAM. Gemini AI.'}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
        <img src="/IMG_4573.webp" alt="Panther 2 Pro Design" className="rounded-2xl shadow-md border border-slate-200 w-full h-80 object-cover" />
        <img src="/IMG_4575.webp" alt="11.3mm Slim Profile" className="rounded-2xl shadow-md border border-slate-200 w-full h-80 object-cover" />
        <img src="/IMG_4574.webp" alt="Durability Features" className="rounded-2xl shadow-md border border-slate-200 w-full h-80 object-cover" />
        
        {/* Placeholder for 4th Panther Image */}
        <div className="rounded-2xl border-2 border-dashed border-slate-300 w-full h-80 flex flex-col items-center justify-center bg-slate-100 text-slate-400">
          <span className="font-bold text-lg mb-1">Slide photo here</span>
          <span className="text-sm">Panther 4th Image</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 border-b pb-4 text-slate-800">
          {lang === 'en' ? 'Technical Specifications' : 'Tekniska Specifikationer'}
        </h3>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><Sparkles className="w-5 h-5 text-blue-600 mr-2"/> Intelligence & Core</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">AI System:</span> Integrated Gemini AI</li>
              <li><span className="font-semibold">Memory:</span> 24GB RAM / 256GB ROM</li>
            </ul>
          </div>
          <div>
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><ShieldCheck className="w-5 h-5 text-blue-600 mr-2"/> Durability</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">Certifications:</span> IP68 / IP69K / MIL-STD-810H</li>
              <li><span className="font-semibold">Resistance:</span> Waterproof, Dustproof, Anti-Destruction</li>
            </ul>
          </div>
          <div>
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><Scale className="w-5 h-5 text-blue-600 mr-2"/> Design</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">Profile:</span> Ultra-slim 11.3mm Chassis</li>
              <li><span className="font-semibold">Display:</span> Edge-to-edge protection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}