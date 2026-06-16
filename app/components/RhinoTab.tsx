'use client';

import { ShieldCheck, Cpu, Battery, Wifi, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const RhinoTab = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    // Lagenio shop images
    '/Rhino%201%20Pro/lagenio_1.png',
    '/Rhino%201%20Pro/lagenio_2.jpg',
    '/Rhino%201%20Pro/lagenio_3.jpg',
    '/Rhino%201%20Pro/lagenio_4.jpg',
    '/Rhino%201%20Pro/lagenio_5.jpg',
    '/Rhino%201%20Pro/lagenio_6.jpg',
    // Alibaba images
    '/Rhino%201%20Pro/alibaba_1.jpg',
    '/Rhino%201%20Pro/alibaba_2.jpg',
    '/Rhino%201%20Pro/alibaba_3.jpg',
    '/Rhino%201%20Pro/alibaba_4.jpg',
    '/Rhino%201%20Pro/alibaba_5.png',
    '/Rhino%201%20Pro/alibaba_6.jpg',
    '/Rhino%201%20Pro/alibaba_7.jpg',
    '/Rhino%201%20Pro/alibaba_8.jpg',
    '/Rhino%201%20Pro/alibaba_9.jpg',
    '/Rhino%201%20Pro/alibaba_10.jpg',
    '/Rhino%201%20Pro/alibaba_11.png',
    '/Rhino%201%20Pro/alibaba_12.jpg',
    '/Rhino%201%20Pro/alibaba_13.jpg',
    '/Rhino%201%20Pro/alibaba_14.jpg',
    '/Rhino%201%20Pro/alibaba_15.jpg',
    '/Rhino%201%20Pro/alibaba_16.jpg',
    '/Rhino%201%20Pro/alibaba_17.jpg',
    '/Rhino%201%20Pro/alibaba_18.jpg',
    '/Rhino%201%20Pro/alibaba_19.jpg',
    '/Rhino%201%20Pro/alibaba_20.jpg',
  ];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === 'ArrowLeft') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else if (e.key === 'ArrowRight') {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    } else if (e.key === 'Escape') {
      setSelectedImage(null);
    }
  };

  return (
    <div className="w-full" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Specs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg p-6 border border-blue-200/30">
          <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            Military-Grade Protection
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• IP69K waterproof rating</li>
            <li>• Gorilla Glass Armor front</li>
            <li>• Military drop test certified</li>
            <li>• MIL-STD-810H compliant</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg p-6 border border-blue-200/30">
          <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            Performance Specs
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Snapdragon 8 Gen 3</li>
            <li>• 24GB RAM</li>
            <li>• 256GB Storage</li>
            <li>• 6.5" 2K Display</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg p-6 border border-blue-200/30">
          <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
            <Battery className="w-5 h-5" />
            Battery & Charging
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• 6500mAh battery</li>
            <li>• 65W fast charging</li>
            <li>• 50+ hours standby</li>
            <li>• Wireless charging support</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg p-6 border border-blue-200/30">
          <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
            <Wifi className="w-5 h-5" />
            Connectivity
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• 5G connectivity</li>
            <li>• WiFi 7 support</li>
            <li>• Dual SIM</li>
            <li>• Global bands support</li>
          </ul>
        </div>
      </div>

      {/* Gallery */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-square"
            >
              <img
                src={image}
                alt={`Rhino 1 Pro ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* Image */}
            <img
              src={images[selectedImage]}
              alt={`Rhino 1 Pro ${selectedImage + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Navigation */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 bg-white/90 hover:bg-white rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-4 bg-white/90 hover:bg-white rounded-full p-3 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RhinoTab;
