// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}

// Category Types
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
  createdAt: string;
  updatedAt: string;
}

// Material Types
export interface Material {
  id: string;
  title: string;
  slug: string;
  content: string;
  thumbnail?: string;
  categoryId: string;
  category?: Category;
  tags?: string[];
  status: 'draft' | 'published';
  publishedAt?: string;
  author?: User;
  views: number;
  createdAt: string;
  updatedAt: string;
}

// Video Types
export interface Video {
  id: string;
  title: string;
  thumbnail?: string;
  videoUrl: string;
  description?: string;
  duration?: number;
  views: number;
  status: 'draft' | 'published';
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

// Download Types
export interface Download {
  id: string;
  title: string;
  slug: string;
  description?: string;
  fileUrl: string;
  thumbnail?: string;
  fileSize?: number;
  category?: string;
  downloads: number;
  createdAt: string;
  updatedAt: string;
}

// Comment Types
export interface CommentImage {
  id: string;
  url: string;
  publicId?: string;
  createdAt: string;
}

export interface Comment {
  id: string;
  materialId?: string;
  name: string;
  email: string;
  content: string;
  images?: CommentImage[];
  replies?: Comment[];
  parentId?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

// Settings Types
export interface Settings {
  id: string;
  siteName: string;
  siteDescription: string;
  logo?: string;
  favicon?: string;
  heroBanner?: string;
  email: string;
  phone?: string;
  address?: string;
  socialMedia?: Record<string, string>;
  seoMetaTitle: string;
  seoMetaDescription: string;
  updatedAt: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
