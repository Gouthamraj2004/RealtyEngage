export interface Project {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  features: string[];
  description: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  completionDate?: string;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectId: string;
  message: string;
  status: 'pending' | 'responded' | 'closed';
  createdAt: string;
}

export interface Feedback {
  id: string;
  name: string;
  email: string;
  type: 'feedback' | 'grievance' | 'suggestion';
  subject: string;
  message: string;
  status: 'open' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}

export interface Payment {
  id: string;
  projectId: string;
  amount: number;
  description: string;
  status: 'pending' | 'completed' | 'failed';
  method: 'card' | 'bank' | 'upi';
  createdAt: string;
}

export type Theme = 'light' | 'dark';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'customer';
  avatar?: string;
  phone?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}