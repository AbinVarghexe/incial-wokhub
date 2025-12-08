
export type CRMStatus = 'onboarded' | 'drop' | 'on progress' | 'Quote Sent' | 'lead' | 'completed';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  statusCode: number;
  token: string;
  role: string;
  user: User;
  message: string;
}

export interface SocialLinks {
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  website?: string;
  twitter?: string;
  other?: string;
}

export interface CRMEntry {
  id: number;
  company: string;
  phone: string;
  email: string;
  contactName: string;
  assignedTo: string;
  lastContact: string; // ISO Date string YYYY-MM-DD
  nextFollowUp: string; // ISO Date string YYYY-MM-DD
  dealValue: number;
  notes: string;
  status: CRMStatus;
  tags: string[];
  work: string[];
  leadSources: string[];
  driveLink?: string; 
  socials?: SocialLinks;
  lastUpdatedBy?: string;
  lastUpdatedAt?: string;
  referenceId?: string; // Added for Company view compatibility
}

export interface FilterState {
  status: string;
  assignedTo: string;
  search: string;
  dateRangeStart: string;
  dateRangeEnd: string;
}

// Re-using CRM Entry for Company Views
export interface CompanyFilterState {
  search: string;
  status: string;
  workType: string;
}

// --- TASKS MODULE TYPES ---

export type TaskStatus = 'Not Started' | 'In Progress' | 'Completed';
export type TaskPriority = 'Low' | 'Medium' | 'High';

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignedTo: string; // User name or 'Unassigned'
  dueDate: string; // YYYY-MM-DD
  createdAt: string;
  lastUpdatedBy?: string;
  lastUpdatedAt?: string;
}

export interface TaskFilterState {
  search: string;
  status: string;
  priority: string;
  assignedTo: string;
}
