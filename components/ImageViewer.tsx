'use client';

import { ImageViewerProps } from '@/types';
import LoadingSpinner from './LoadingSpinner';

export default function ImageViewer({ originalImage, generatedImage, isLoading = false }: ImageViewerProps) {
  if (isLoading) {
    return (
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <LoadingSpinner size="lg" className="mb-4" />
          <p className="text-center text-gnb-green-700 font-medium">
            Generating your pup's transformation...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
          <div className="px-6 py-3 bg-gnb-beige-50 border-r border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 text-center">Original Photo</h3>
          </div>
          <div className="px-6 py-3 bg-gnb-green-50">
            <h3 className="text-sm font-medium text-gray-900 text-center">AI Transformation</h3>
          </div>
        </div>

        {/* Side-by-Side Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Original Image */}
          <div className="relative aspect-square">
            <img
              src={originalImage}
              alt="Original dog photo"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <div className="bg-black bg-opacity-50 rounded-lg px-3 py-1">
                <span className="text-white text-xs font-medium">Original</span>
              </div>
            </div>
          </div>

          {/* Generated Image */}
          <div className="relative aspect-square border-l border-gray-200">
            <img
              src={generatedImage}
              alt="AI-generated dog transformation"
              className="w-full h-full object-cover"
            />
            
            {/* GNB Logo Overlay */}
            <div className="absolute bottom-4 right-4">
              <div className="bg-white bg-opacity-90 rounded-lg p-2 shadow-lg">
                <div className="w-12 h-12 bg-gnb-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">GNB</span>
                </div>
              </div>
            </div>

            {/* Generated Label */}
            <div className="absolute bottom-4 left-4">
              <div className="bg-gnb-green-600 bg-opacity-90 rounded-lg px-3 py-1">
                <span className="text-white text-xs font-medium">AI Generated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Responsive Stack */}
        <div className="md:hidden">
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <p className="text-sm text-gray-600 text-center">
              📱 Mobilde yukarıdan aşağıya: Orijinal → AI Dönüştürme
            </p>
          </div>
        </div>

        {/* Desktop Info */}
        <div className="hidden md:block p-4 bg-gray-50">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600">Your original photo</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">AI-generated transformation with GNB branding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 