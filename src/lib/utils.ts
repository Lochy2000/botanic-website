import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Utility function to handle image paths correctly in both development and production.
 * Automatically handles the base URL differences between local development and GitHub Pages.
 * 
 * @param path - The image path relative to the public directory, without the base URL
 * @returns The correct URL for the image in the current environment
 */
export function getImagePath(path: string): string {
  // Get the current base URL from Vite's environment variables
  const basePath = import.meta.env.BASE_URL;
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // If path already has '/botanic-website/' prefix, handle it appropriately
  if (cleanPath.startsWith('botanic-website/')) {
    // For paths that already include the repo name, just use the part after it
    return basePath + cleanPath.substring('botanic-website/'.length);
  }
  
  // For paths without the repo name, just append to the current base URL
  return basePath + cleanPath;
}
