'use client';

import { ShieldCheck, Cpu, Battery, Wifi, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { useState } from "react";

export default function EagleTab({ lang }: { lang: 'en' | 'sv' }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    '/Eagle Pro/lagenio_001.png',
    '/Eagle Pro/lagenio_002.png',
    '/Eagle Pro/lagenio_003.png',
    '/Eagle Pro/lagenio_004.png',
    '/Eagle Pro/lagenio_005.png',
    '/Eagle Pro/lagenio_006.png',
    '/Eagle Pro/lagenio_007.png',
    '/Eagle Pro/lagenio_008.png',
    '/Eagle Pro/lagenio_009.png',
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
        <h2 className="text-5xl font-black text-amber-600 mb-2 tracking-tight">Eagle Pro</h2>
        <p className="text-xl text-slate-500 font-medium">
          {lang === 'en' ? '5G Mini Rugged Phone with Action Camera' : '5G Mini Ruggedtelefon med Actionkamera'}
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
                alt={`Eagle Pro ${idx + 1}`}
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
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><Cpu className="w-5 h-5 text-amber-600 mr-2"/> Core &amp; Performance</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">Processor:</span> Snapdragon 888 5G</li>
              <li><span className="font-semibold">Memory:</span> 8GB RAM / 128GB ROM</li>
              <li><span className="font-semibold">OS:</span> Android 16</li>
            </ul>
          </div>
          <div>
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><Camera className="w-5 h-5 text-amber-600 mr-2"/> Camera</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">Main:</span> 48MP Ultra Wide</li>
              <li><span className="font-semibold">Action Cam:</span> 1080p 60FPS Built-in</li>
              <li><span className="font-semibold">Front:</span> 16MP</li>
            </ul>
          </div>
          <div>
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><ShieldCheck className="w-5 h-5 text-amber-600 mr-2"/> Durability</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">Certification:</span> IP68 / MIL-STD-810H</li>
              <li><span className="font-semibold">Drop Test:</span> 1.5m Shockproof</li>
              <li><span className="font-semibold">Build:</span> 220g Aluminum Frame</li>
            </ul>
          </div>
          <div>
            <h4 className="flex items-center font-bold text-slate-800 mb-2"><Battery className="w-5 h-5 text-amber-600 mr-2"/> Battery &amp; 5G</h4>
            <ul className="text-slate-600 space-y-1 ml-7 text-sm">
              <li><span className="font-semibold">Capacity:</span> 4,500mAh</li>
              <li><span className="font-semibold">Network:</span> 5G SA/NSA, Wi-Fi 6E</li>
              <li><span className="font-semibold">Charging:</span> 65W Super Fast</li>
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
