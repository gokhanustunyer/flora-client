'use client';

import { DownloadButtonProps } from '@/types';

export default function DownloadButton({ imageUrl, fileName = 'gnb-transformed-pup' }: DownloadButtonProps) {
  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${fileName}.jpg`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
      // Fallback: open in new tab
      window.open(imageUrl, '_blank');
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center px-4 py-2 bg-gnb-green-600 text-white text-sm font-medium rounded-lg hover:bg-gnb-green-700 focus:outline-none focus:ring-2 focus:ring-gnb-green-500 focus:ring-offset-2 transition-colors"
      aria-label="Download transformed image"
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
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Download Image
    </button>
  );
} 