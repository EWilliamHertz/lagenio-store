import { Factory, UserCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-[80vh] bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">About Lagenio Europe</h1>
          <p className="text-lg text-slate-600">Bridging top-tier Chinese manufacturing with the European market.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-blue-100 p-4 rounded-full text-blue-700 shrink-0">
            <Factory className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">The Manufacturer</h2>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">TIRISEN INTERNATIONAL TRADING CO., LIMITED</h3>
            <p className="text-slate-600 leading-relaxed">
              Lagenio devices are forged by an industry titan with over 12 years of extensive experience designing and manufacturing flagship mobile phones for other leading brands globally. This foundation of manufacturing excellence guarantees that every Rhino and Eagle device meets the highest standards of durability and performance.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-slate-100 p-4 rounded-full text-slate-700 shrink-0">
            <UserCircle className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">European Distribution</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our operations in Sweden handle the strict EU compliance, ensuring CE Marks, RoHS validations, and DoC (Declaration of Conformity) are strictly maintained.
            </p>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg inline-block">
              <span className="block text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">Swedish Importer &amp; Responsible Person</span>
              <span className="block text-lg font-black text-slate-800">Ernst-William Hertz</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}