export interface IUserRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  position: string;
  institution: string;
  password: string;
}

export interface IUserResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  position: string;
  institution: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUserUpdate {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  position?: string;
  institution?: string;
  password?: string;
}
