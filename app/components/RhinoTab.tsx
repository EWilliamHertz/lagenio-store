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
    '/Rhino%201%20Pro/lagenio_3.png',
    '/Rhino%201%20Pro/lagenio_4.jpg',
    '/Rhino%201%20Pro/lagenio_5.jpg',
    '/Rhino%201%20Pro/lagenio_6.jpg',
    // Alibaba images (cleaned - removed alibaba_6.jpg and alibaba_15.jpg)
    '/Rhino%201%20Pro/alibaba_1.jpg',
    '/Rhino%201%20Pro/alibaba_2.jpg',
    '/Rhino%201%20Pro/alibaba_3.jpg',
    '/Rhino%201%20Pro/alibaba_4.jpg',
    '/Rhino%201%20Pro/alibaba_5.png',
    '/Rhino%201%20Pro/alibaba_7.png',
    '/Rhino%201%20Pro/alibaba_8.jpg',
    '/Rhino%201%20Pro/alibaba_9.jpg',
    '/Rhino%201%20Pro/alibaba_10.jpg',
    '/Rhino%201%20Pro/alibaba_11.png',
    '/Rhino%201%20Pro/alibaba_12.jpg',
    '/Rhino%201%20Pro/alibaba_13.jpg',
    '/Rhino%201%20Pro/alibaba_14.jpg',
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
    if (e.key === 'ArrowLeft') handlePrevImage(e as any);
    if (e.key === 'ArrowRight') handleNextImage(e as any);
    if (e.key === 'Escape') setSelectedImage(null);
  };

  return (
    <div className="space-y-8">
      {/* Video Player Section */}
      <div className="bg-black rounded-lg overflow-hidden shadow-xl">
        <div className="relative w-full bg-black" style={{ aspectRatio: '16 / 9' }}>
          <video
            className="w-full h-full object-contain"
            controls
            poster="/Rhino%201%20Pro/lagenio_1.png"
          >
            <source src="/Rhino%201%20Pro/rhino_1_pro_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
          <p className="text-lg font-semibold">Rhino 1 Pro - Product Demo</p>
          <p className="text-blue-100 text-sm">Experience the power and durability of the Rhino 1 Pro rugged smartphone</p>
        </div>
      </div>

      {/* Product Specifications */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <Battery className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">12000mAh Battery</p>
              <p className="text-sm text-gray-600">All-day battery life for demanding journeys</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Cpu className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">24GB RAM / 256GB Storage</p>
              <p className="text-sm text-gray-600">Powerful processing and ample storage</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Wifi className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">5G LTE Connectivity</p>
              <p className="text-sm text-gray-600">Ultra-fast data speeds on the go</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <ShieldCheck className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">IP68/IP69K Certified</p>
              <p className="text-sm text-gray-600">Dust and water resistant</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Cpu className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">64MP Main Camera</p>
              <p className="text-sm text-gray-600">Professional-grade photography</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <ShieldCheck className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">MIL-STD-810H Certified</p>
              <p className="text-sm text-gray-600">Military-grade durability</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Product Gallery ({images.length} images)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className="group relative aspect-square rounded-lg overflow-hidden bg-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={`Rhino 1 Pro image ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-8 h-8 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>
                  <p className="text-xs mt-1">Click to expand</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          role="dialog"
          tabIndex={0}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main image */}
            <img
              src={images[selectedImage]}
              alt={`Rhino 1 Pro image ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Navigation arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RhinoTab;
