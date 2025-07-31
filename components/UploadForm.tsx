'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { UploadFormProps } from '@/types';
import { uploadImage, validateImageFile } from '@/lib/api';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

export default function UploadForm({ onImageUploaded, onError }: UploadFormProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((file: File) => {
    setError(null);
    
    // Clear the file input to allow same file to be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    
    const validation = validateImageFile(file);
    if (!validation.isValid) {
      setError(validation.error || 'Invalid file');
      return;
    }

    // Create preview and store file
    const previewImageUrl = URL.createObjectURL(file);
    setSelectedFile(file);
    setPreviewUrl(previewImageUrl);
  }, []);

  const handleTransform = useCallback(async () => {
    if (!selectedFile) return;
    
    setIsUploading(true);
    setError(null);
    
    try {
      const response = await uploadImage(selectedFile);
      console.log(response);
      if (!response.success) {
        throw new Error(response.error || 'Failed to generate image');
      }

      const generatedImage = response.data?.imageUrl || response.data?.base64Image;
      if (!generatedImage) {
        throw new Error('No image data received from server');
      }

      onImageUploaded(previewUrl!, generatedImage);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      onError(errorMessage);
    } finally {
      setIsUploading(false);
    }
  }, [selectedFile, previewUrl, onImageUploaded, onError]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleRetry = useCallback(() => {
    setError(null);
    setSelectedFile(null);
    setPreviewUrl(null);
  }, []);

  const handleReset = useCallback(() => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  // Cleanup effect to prevent memory leaks
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="w-full max-w-lg mx-auto">
      {error && <ErrorMessage message={error} onRetry={handleRetry} />}
      
      {isUploading ? (
        <div className="relative border-2 border-dashed rounded-2xl p-10 text-center bg-gradient-to-br from-white/80 to-gnb-green-50/50 backdrop-blur-sm border-gnb-green-300">
          <div className="space-y-6">
            <div className="relative">
              <LoadingSpinner size="lg" />
              <div className="absolute inset-0 bg-gradient-to-r from-gnb-green-400/20 to-gnb-green-600/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <div>
              <p className="text-gnb-green-700 font-semibold text-base">Generating your pup's transformation...</p>
              <p className="text-gnb-green-600 text-sm mt-2">✨ Creating magic with AI</p>
            </div>
          </div>
        </div>
      ) : selectedFile && previewUrl ? (
        <div className="space-y-6">
          {/* Preview Image */}
          <div className="relative">
            {/* Preview container with elegant background */}
            <div className="relative w-full h-64 bg-gradient-to-br from-white via-gray-50/30 to-white rounded-2xl shadow-lg overflow-hidden">
              {/* Subtle texture background */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/20 to-transparent"></div>
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.02) 1px, transparent 1px),
                                radial-gradient(circle at 75% 75%, rgba(0,0,0,0.02) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>
              
              <img 
                src={previewUrl} 
                alt="Selected dog"
                className="relative w-full h-full object-contain p-4 drop-shadow-xl"
              />
              
              {/* Remove button */}
              <button
                onClick={handleReset}
                className="absolute top-3 right-3 bg-white/95 hover:bg-white text-gray-600 hover:text-gray-800 rounded-full p-2 shadow-lg backdrop-blur-sm border border-gray-200/50 transition-all duration-200 hover:scale-110"
                aria-label="Remove image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Preview label */}
              <div className="absolute bottom-3 left-3">
                <div className="bg-white/90 rounded-lg px-3 py-1 backdrop-blur-sm shadow-lg border border-gray-200/50">
                  <span className="text-gray-700 text-xs font-medium">Preview</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Transform Button */}
          <div className="text-center">
            <button
              onClick={handleTransform}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gnb-green-600 to-gnb-green-700 text-white font-semibold rounded-2xl hover:from-gnb-green-700 hover:to-gnb-green-800 focus:outline-none focus:ring-2 focus:ring-gnb-green-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gnb-green-500/25 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Transform Photo
            </button>
            <p className="text-gray-500 text-sm mt-2">Click to start AI transformation</p>
          </div>
        </div>
      ) : (
        <div
          className={`
            relative border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all duration-300 
            bg-gradient-to-br from-white/80 to-gnb-green-50/50 backdrop-blur-sm
            ${isDragOver 
              ? 'border-gnb-green-400 bg-gnb-green-50 shadow-xl shadow-gnb-green-200/50 scale-105' 
              : 'border-gnb-green-300 hover:border-gnb-green-400 hover:bg-gnb-green-50/70 hover:shadow-lg hover:shadow-gnb-green-200/30 hover:scale-102'
            }
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
          role="button"
          tabIndex={0}
          aria-label="Upload dog image"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp,image/tiff,image/bmp"
            onChange={handleFileInputChange}
            className="hidden"
          />
          
          <div className="space-y-6">
            <div className="relative mx-auto w-20 h-20">
              <div className="absolute inset-0 bg-gradient-to-br from-gnb-green-400 to-gnb-green-600 rounded-2xl shadow-lg"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-gnb-green-400 to-gnb-green-600 rounded-2xl flex items-center justify-center transform hover:rotate-3 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900 mb-2">
                Upload your dog's photo
              </p>
              <p className="text-gray-600 text-sm mb-3">
                Drag and drop or click to browse
              </p>
              <div className="inline-flex items-center px-3 py-1 bg-gnb-green-100 rounded-full">
                <span className="text-gnb-green-700 text-xs font-medium">JPG, PNG up to 10MB</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 