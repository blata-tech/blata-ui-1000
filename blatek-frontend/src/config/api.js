// API configuration based on environment
const getApiUrl = () => {
  // Use environment variable if available
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  
  // Fallback: Check if we're in development (localhost)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:3000';
  }
  
  // For production - Custom domain API URL
  return 'https://api.blatatechnology.net';
};

export const API_BASE_URL = getApiUrl();
export const API_ENDPOINTS = {
  contact: `${API_BASE_URL}/contact`
};