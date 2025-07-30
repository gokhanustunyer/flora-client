'use client';

import { useState, useRef, useCallback } from 'react';
import { UploadFormProps } from '@/types';
import { uploadImage, validateImageFile } from '@/lib/api';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

export default function UploadForm({ onImageUploaded, onError }: UploadFormProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(async (file: File) => {
    setError(null);
    
    const validation = validateImageFile(file);
    if (!validation.isValid) {
      setError(validation.error || 'Invalid file');
      return;
    }

    setIsUploading(true);
    
    try {
      // Create a preview of the original image
      const originalImageUrl = URL.createObjectURL(file);
      
      const response = await uploadImage(file);
      console.log(response);
      if (!response.success) {
        throw new Error(response.error || 'Failed to generate image');
      }

      const generatedImage = response.data?.imageUrl || response.data?.base64Image;
      if (!generatedImage) {
        throw new Error('No image data received from server');
      }

      onImageUploaded(originalImageUrl, generatedImage);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      onError(errorMessage);
    } finally {
      setIsUploading(false);
    }
  }, [onImageUploaded, onError]);

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
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      {error && <ErrorMessage message={error} onRetry={handleRetry} />}
      
      <div
        className={`
          relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragOver 
            ? 'border-gnb-green-400 bg-gnb-green-50' 
            : 'border-gnb-green-300 hover:border-gnb-green-400 hover:bg-gnb-green-50'
          }
          ${isUploading ? 'pointer-events-none opacity-75' : ''}
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
          disabled={isUploading}
        />
        
        {isUploading ? (
          <div className="space-y-4">
            <LoadingSpinner size="lg" />
            <p className="text-gnb-green-700 font-medium">Generating your pup's transformation...</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gnb-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gnb-green-600"
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
            <div>
              <p className="text-lg font-medium text-gray-900">
                Upload your dog's photo
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Drag and drop or click to browse
              </p>
              <p className="text-xs text-gray-400 mt-2">
                JPG, PNG up to 10MB
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 