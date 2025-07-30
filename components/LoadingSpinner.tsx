'use client';

import { LoadingSpinnerProps } from '@/types';

export default function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center justify-center ${className}`} role="status" aria-label="Loading">
      <div
        className={`${sizeClasses[size]} border-2 border-gnb-green-200 border-t-gnb-green-600 rounded-full animate-spin`}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
} 