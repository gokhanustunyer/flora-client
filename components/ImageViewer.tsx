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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
          {/* Subtle background patterns */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white opacity-60"></div>
          
          {/* Original Image */}
          <div className="relative aspect-square bg-white/80 backdrop-blur-3xl">
            {/* Subtle texture background */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/20 to-transparent"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,0,0,0.02) 1px, transparent 1px),
                              radial-gradient(circle at 80% 50%, rgba(0,0,0,0.02) 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}></div>
            
            <img
              src={originalImage}
              alt="Original dog photo"
              className="relative w-full h-full object-contain p-6 drop-shadow-2xl"
            />
            
            <div className="absolute bottom-4 left-4 z-10">
              <div className="bg-white/90 rounded-xl px-4 py-2 backdrop-blur-md shadow-xl border border-gray-200/50">
                <span className="text-gray-700 text-xs font-medium">Original</span>
              </div>
            </div>
          </div>

          {/* Generated Image */}
          <div className="relative aspect-square bg-white/80 backdrop-blur-3xl border-l border-gray-200/50">
            {/* Subtle GNB-themed background */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gnb-green-50/10 to-transparent"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30% 40%, rgba(58,157,101,0.03) 1px, transparent 1px),
                              radial-gradient(circle at 70% 60%, rgba(58,157,101,0.03) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
            
            <img
              src={generatedImage}
              alt="AI-generated dog transformation"
              className="relative w-full h-full object-contain p-6 drop-shadow-2xl"
            />
            
            {/* GNB Logo Overlay */}
            <div className="absolute bottom-4 right-4 z-10">
              <div className="bg-white/95 rounded-2xl p-3 shadow-xl backdrop-blur-md border border-gnb-green-200/30">
                <img 
                  src="/GNB_Logo-white.svg" 
                  alt="GNB" 
                  className="w-8 h-8 opacity-75"
                />
              </div>
            </div>

            {/* Generated Label */}
            <div className="absolute bottom-4 left-4 z-10">
              <div className="bg-gnb-green-600/95 rounded-xl px-4 py-2 backdrop-blur-md shadow-xl border border-gnb-green-500/30">
                <span className="text-white text-xs font-medium flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  AI Generated
                </span>
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