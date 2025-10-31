// User types
export interface User {
  id: string;
  email: string;
  name?: string;
  created_at: string;
}

// Company/Tenant types
export interface Company {
  id: string;
  name: string;
  slug: string;
  logo_url?: string;
  created_at: string;
  updated_at: string;
}

// Plan types
export interface Plan {
  id: string;
  name: string;
  description?: string;
  price: number;
  currency: string;
  features: string[];
  created_at: string;
  updated_at: string;
}

// Auth types
export interface AuthError {
  message: string;
  code?: string;
}

export interface AuthResponse {
  user?: User;
  error?: AuthError;
}
