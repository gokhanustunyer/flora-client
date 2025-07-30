export interface ApiResponse {
  success: boolean;
  data?: {
    imageUrl?: string;
    base64Image?: string;
  };
  error?: string;
}

export interface UploadFormProps {
  onImageUploaded: (originalImage: string, generatedImage: string) => void;
  onError: (message: string) => void;
}

export interface ImageViewerProps {
  originalImage: string;
  generatedImage: string;
  isLoading?: boolean;
}

export interface DownloadButtonProps {
  imageUrl: string;
  fileName?: string;
}

export interface ShareButtonsProps {
  imageUrl: string;
  hashtag?: string;
  mention?: string;
}

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
} 