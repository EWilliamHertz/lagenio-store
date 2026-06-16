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
  const [activeTab, setActiveTab] = useState(1);
  const [lang, setLang] = useState<'en'|'sv'>('en');

  const t = {
    notice: lang === 'en' 
      ? "Notice: Until we move larger quantities of units to our Swedish company, these phones will be shipped from China with a 10-day delivery time." 
      : "Obs: Tills vi flyttar större kvantiteter till vårt svenska bolag skickas dessa telefoner från Kina med 10 dagars leveranstid.",
    subtitle: lang === 'en' 
      ? "State-of-the-art Chinese technology, engineered by an industry titan with over 12 years of experience. Experience the future of connectivity in Europe." 
      : "Toppmodern kinesisk teknologi, konstruerad av en branschledare med över 12 års erfarenhet. Upplev framtidens uppkoppling i Europa.",
    tab1: lang === 'en' ? "1. Overview" : "1. Översikt",
    tab2: "2. Rhino 1 Pro",
    tab3: "3. Eagle Pro 5G",
    release: lang === 'en' ? "Releases on the Swedish market on the 5th of August." : "Släpps på den svenska marknaden den 5 augusti.",
    pantherTease: lang === 'en' ? "Project Panther 2 Pro: 11.3mm Slim. 24GB RAM. Gemini AI." : "Projekt Panther 2 Pro: 11.3mm Tunn. 24GB RAM. Gemini AI.",
    compare: lang === 'en' ? "Model Comparison" : "Modelljämförelse",
    viewSpecs: lang === 'en' ? "View Full Specs" : "Visa fulla specifikationer",
    techSpecs: lang === 'en' ? "Technical Specifications" : "Tekniska Specifikationer"
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
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
        {activeTab === 1 && (
          <div className="animate-in fade-in duration-500">
            <div className="bg-slate-900 rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-2xl mb-16 border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"></div>
              <Smartphone className="w-32 h-32 text-slate-700 mb-6" strokeWidth={1} />
              <h2 className="text-5xl font-black text-white mb-2 tracking-widest uppercase">???</h2>
              <p className="text-blue-400 text-2xl font-bold mb-4">{t.release}</p>
              <p className="text-slate-400 text-sm font-mono uppercase tracking-widest border border-slate-700 px-4 py-1 rounded-full">{t.pantherTease}</p>
            </div>

            <h3 className="text-3xl font-bold text-center mb-10 text-slate-800">{t.compare}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
                <h4 className="text-2xl font-black text-blue-600 mb-4">Rhino 1 Pro</h4>
                <ul className="space-y-3 text-slate-600 font-medium">
                  <li className="flex items-center"><Battery className="w-5 h-5 text-blue-500 mr-3"/> 12,000mAh Battery</li>
                  <li className="flex items-center"><Volume2 className="w-5 h-5 text-blue-500 mr-3"/> 130dB Loudspeaker</li>
                  <li className="flex items-center"><ShieldCheck className="w-5 h-5 text-blue-500 mr-3"/> IP68 / IP69K / MIL-STD-810H</li>
                  <li className="flex items-center"><Wifi className="w-5 h-5 text-blue-500 mr-3"/> eSIM + Dual Nano-SIM</li>
                  <li className="flex items-center"><Scale className="w-5 h-5 text-blue-500 mr-3"/> 440g Heavy-duty Build</li>
                </ul>
                <button onClick={() => setActiveTab(2)} className="mt-8 w-full bg-blue-50 text-blue-700 py-3 rounded-lg font-bold hover:bg-blue-100 transition-colors flex justify-center items-center">
                  {t.viewSpecs} <ChevronRight className="w-5 h-5 ml-1"/>
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-slate-800 hover:shadow-xl transition-shadow">
                <h4 className="text-2xl font-black text-slate-800 mb-4">Eagle Pro 5G</h4>
                <ul className="space-y-3 text-slate-600 font-medium">
                  <li className="flex items-center"><Camera className="w-5 h-5 text-blue-500 mr-3"/> 48MP Action Cam (152.6° Ultra-Wide)</li>
                  <li className="flex items-center"><Wifi className="w-5 h-5 text-blue-500 mr-3"/> Built-in 5G Live Streaming</li>
                  <li className="flex items-center"><ShieldCheck className="w-5 h-5 text-blue-500 mr-3"/> IP68 / IP69K / MIL-STD-810H</li>
                  <li className="flex items-center"><Cpu className="w-5 h-5 text-blue-500 mr-3"/> MTK D7300 + 120Hz Display</li>
                  <li className="flex items-center"><Scale className="w-5 h-5 text-blue-500 mr-3"/> 210g Lightweight</li>
                </ul>
                <button onClick={() => setActiveTab(3)} className="mt-8 w-full bg-slate-50 text-slate-700 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors flex justify-center items-center">
                  {t.viewSpecs} <ChevronRight className="w-5 h-5 ml-1"/>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="animate-in slide-in-from-right-4 duration-500 py-4">
            <div className="text-center mb-10">
              <h2 className="text-5xl font-black text-blue-700 mb-2 tracking-tight">Rhino 1 Pro</h2>
              <p className="text-xl text-slate-500 font-medium">{lang === 'en' ? 'The Ultimate Heavy-Duty Powerhouse' : 'Det Ultimata Kraftpaketet'}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
              <img src="/rhino-1-front.jpeg" alt="Rhino 1 Pro Front" className="rounded-2xl shadow-md border border-slate-200 w-full object-cover" />
              <img src="/rhino-1-box.jpeg" alt="Rhino 1 Pro Box" className="rounded-2xl shadow-md border border-slate-200 w-full object-cover" />
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 border-b pb-4 text-slate-800">{t.techSpecs}</h3>
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
        )}

        {activeTab === 3 && (
          <div className="animate-in slide-in-from-right-4 duration-500 py-4">
            <div className="text-center mb-10">
              <h2 className="text-5xl font-black text-slate-800 mb-2 tracking-tight">Eagle Pro 5G</h2>
              <p className="text-xl text-slate-500 font-medium">{lang === 'en' ? 'Mini Rugged Phone with Built-in Action Camera' : 'Kompakt Tålig Telefon med Inbyggd Actionkamera'}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 border-b pb-4 text-slate-800">{t.techSpecs}</h3>
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
        )}
      </div>
    </main>
  );
}