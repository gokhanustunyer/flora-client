'use client';

import { useState } from 'react';
import UploadForm from '@/components/UploadForm';
import ImageViewer from '@/components/ImageViewer';
import DownloadButton from '@/components/DownloadButton';
import ShareButtons from '@/components/ShareButtons';

export default function Home() {
  const [originalImage, setOriginalImage] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUploaded = (original: string, generated: string) => {
    setOriginalImage(original);
    setGeneratedImage(generated);
    setError(null);
  };

  const handleError = (message: string) => {
    setError(message);
  };

  const handleReset = () => {
    setOriginalImage('');
    setGeneratedImage('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gnb-green-50 to-gnb-beige-50">
      {/* Header */}
      <header className="relative shadow-lg border-b border-gray-200/20 bg-gradient-to-r from-gnb-green-700 via-gnb-green-600 to-gnb-green-700 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-8">
            <div className="flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/GNB_Logo-white.svg" 
                alt="Good Natured Brand" 
                className="h-12 w-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gnb-beige-200/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-gnb-green-200/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="text-center mb-10">
          <div className="inline-block">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gnb-green-700 via-gnb-green-600 to-gnb-green-800 bg-clip-text text-transparent mb-4 leading-tight">
              Transform Your Pup's Photo
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gnb-green-400 to-gnb-green-600 mx-auto mb-4 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Upload your dog's photo and watch the magic happen! Our AI will create a beautiful transformation 
            with <span className="font-semibold text-gnb-green-700">Good Natured Brand</span> styling.
          </p>
        </div>

        {/* Upload Section */}
        {!originalImage && !generatedImage && (
          <div className="mb-8">
            <UploadForm onImageUploaded={handleImageUploaded} onError={handleError} />
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="mb-8 max-w-md mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* Image Viewer */}
        {originalImage && generatedImage && (
          <div className="mb-8">
            <ImageViewer 
              originalImage={originalImage} 
              generatedImage={generatedImage} 
              isLoading={isLoading}
            />
          </div>
        )}

        {/* Action Buttons */}
        {generatedImage && (
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <DownloadButton imageUrl={generatedImage} />
              <button
                onClick={handleReset}
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Transform Another Photo
              </button>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-base font-medium text-gray-900 mb-3">Share Your Transformation</h3>
              <ShareButtons imageUrl={generatedImage} />
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-gnb-green-400 to-gnb-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-gnb-green-400/25 transition-all duration-300 group-hover:rotate-3">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Advanced AI technology creates stunning transformations with perfect attention to detail</p>
          </div>

          <div className="group text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-gnb-green-500 to-gnb-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-gnb-green-500/25 transition-all duration-300 group-hover:rotate-3">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Secure & Private</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Your photos are processed securely and never stored, ensuring complete privacy</p>
          </div>

          <div className="group text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-gnb-green-600 to-gnb-green-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-gnb-green-600/25 transition-all duration-300 group-hover:rotate-3">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Easy Sharing</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Download and share your transformations instantly on social media</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-gnb-green-50 to-gnb-beige-100 border-t border-gnb-green-200/30 mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-gnb-green-100/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <img 
                src="/GNB_Logo-white.svg" 
                alt="Good Natured Brand" 
                className="h-8 w-auto opacity-60"
              />
            </div>
            <p className="text-gnb-green-700 text-sm font-medium">
              © 2025 Good Natured Brand. All rights reserved.
            </p>
            <p className="text-gnb-green-600 text-xs mt-2">
              Transform your memories with AI ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 