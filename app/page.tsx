"use client";
import { useState } from "react";
import { Globe } from "lucide-react";
import PantherTab from "./components/PantherTab";
import RhinoTab from "./components/RhinoTab";
import EagleTab from "./components/EagleTab";

export default function ConsumerPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [lang, setLang] = useState<'en'|'sv'>('en');

  const t = {
    notice: lang === 'en' 
      ? "Notice: Until we move larger quantities of units to our Swedish company, these phones will be shipped from China with a 10-day delivery time." 
      : "Obs: Tills vi flyttar större kvantiteter till vårt svenska bolag skickas dessa telefoner från Kina med 10 dagars leveranstid.",
    subtitle: lang === 'en' 
      ? "State-of-the-art Chinese technology, engineered by an industry titan with over 12 years of experience. Experience the future of connectivity in Europe." 
      : "Toppmodern kinesisk teknologi, konstruerad av en branschledare med över 12 års erfarenhet. Upplev framtidens uppkoppling i Europa.",
    tab1: "1. Panther 2 Pro",
    tab2: "2. Rhino 1 Pro",
    tab3: "3. Eagle Pro 5G",
    overview: lang === 'en' ? "Overview" : "Översikt"
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      <div className="bg-blue-700 text-white flex justify-between items-center py-2 px-6 text-sm font-medium tracking-wide">
        <span className="flex-1 text-center">{t.notice}</span>
        <button 
          onClick={() => setLang(lang === 'en' ? 'sv' : 'en')}
          className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 px-3 py-1 rounded-md transition-colors border border-blue-600"
        >
          <Globe className="w-4 h-4" /> {lang === 'en' ? 'Svenska' : 'English'}
        </button>
      </div>

      <section className="bg-blue-600 text-white py-16 px-6 text-center shadow-inner">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">LAGENIO</h1>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg">{t.subtitle}</p>
      </section>

      <div className="flex justify-center border-b border-slate-300 bg-white sticky top-0 z-10 shadow-sm flex-wrap">
        {[ { id: 1, label: t.tab1 }, { id: 2, label: t.tab2 }, { id: 3, label: t.tab3 } ].map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-4 font-bold text-lg transition-colors ${activeTab === tab.id ? 'border-b-4 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-blue-500'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <h3 className="text-3xl font-black text-center mb-8 text-slate-800 uppercase tracking-widest border-b border-slate-200 pb-4">
          {t.overview}
        </h3>
        
        {activeTab === 1 && <PantherTab lang={lang} />}
        {activeTab === 2 && <RhinoTab lang={lang} />}
        {activeTab === 3 && <EagleTab lang={lang} />}
      </div>
    </main>
  );
}