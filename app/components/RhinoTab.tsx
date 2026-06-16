'use client';

import { ShieldCheck, Cpu, Battery, Wifi, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function RhinoTab({ lang }: { lang: 'en' | 'sv' }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const images = [
    '/Rhino 1 Pro/lagenio_001.png',
    '/Rhino 1 Pro/lagenio_002.png',
    '/Rhino 1 Pro/lagenio_003.png',
    '/Rhino 1 Pro/lagenio_004.png',
    '/Rhino 1 Pro/lagenio_005.png',
    '/Rhino 1 Pro/lagenio_006.png',
    '/Rhino 1 Pro/alibaba_001.png',
    '/Rhino 1 Pro/alibaba_002.png',
    '/Rhino 1 Pro/alibaba_003.png',
    '/Rhino 1 Pro/alibaba_004.png',
    '/Rhino 1 Pro/alibaba_005.png',
    '/Rhino 1 Pro/alibaba_006.png',
    '/Rhino 1 Pro/alibaba_007.png',
    '/Rhino 1 Pro/alibaba_008.png',
    '/Rhino 1 Pro/alibaba_009.png',
    '/Rhino 1 Pro/alibaba_010.png',
  ];

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImageIndex(null);
  };

  return (
    <div className="animate-in slide-in-from-right-4 duration-500 py-4" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="text-center mb-10">
        <h2 className="text-5xl font-black text-blue-700 mb-2 tracking-tight">Rhino 1 Pro</h2>
        <p className="text-xl text-slate-500 font-medium">
          {lang === 'en' ? 'The Ultimate Heavy-Duty Powerhouse' : 'Det Ultimata Kraftpaketet'}
        </p>
      </div>

      {/* Image Gallery */}
      <div className="mb-12 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-slate-800">
          {lang === 'en' ? 'Product Gallery' : 'Produktgalleri'}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img}
                alt={`Rhino 1 Pro ${idx + 1}`}
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">🔍</span>
              </div>
            </div>
          ))}
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

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <button
              onClick={handlePrevious}
              className="absolute left-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors z-10"
            >
              <ChevronLeft size={32} />
            </button>

            <img
              src={images[selectedImageIndex]}
              alt="Enlarged"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />

            <button
              onClick={handleNext}
              className="absolute right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors z-10"
            >
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
