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
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gnb-green-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-lg font-bold">GNB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Good Natured Pup</h1>
                <p className="text-sm text-gray-500">Transform your dog photos with AI</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transform Your Pup's Photo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your dog's photo and watch the magic happen! Our AI will create a beautiful transformation 
            with Good Natured Brand styling.
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
              <h3 className="text-lg font-medium text-gray-900 mb-4">Share Your Transformation</h3>
              <ShareButtons imageUrl={generatedImage} />
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gnb-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gnb-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">AI-Powered</h3>
            <p className="text-gray-600">Advanced AI technology creates stunning transformations</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gnb-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gnb-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Secure & Private</h3>
            <p className="text-gray-600">Your photos are processed securely and never stored</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gnb-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gnb-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m4 0V2a1 1 0 011-1h1a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V4m4 0h10m-10 0H5m14 0h1" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Easy Sharing</h3>
            <p className="text-gray-600">Download and share your transformations instantly</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Good Natured Brand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 