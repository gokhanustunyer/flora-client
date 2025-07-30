import { ApiResponse } from '@/types';

const API_BASE_URL = 'https://flora-backend-adcwd9a1h-gokhans-projects-51f5a8d2.vercel.app/';

export const uploadImage = async (file: File): Promise<ApiResponse> => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${API_BASE_URL}/api/v1/generate`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error uploading image:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to upload image',
    };
  }
};

export const validateImageFile = (file: File): { isValid: boolean; error?: string } => {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/bmp'];

  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: 'Please upload a JPG or PNG image file.',
    };
  }

  if (file.size > maxSize) {
    return {
      isValid: false,
      error: 'Image size must be less than 10MB.',
    };
  }

  return { isValid: true };
}; 