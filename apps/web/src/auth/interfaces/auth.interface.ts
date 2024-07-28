type Gender = 'MALE' | 'FEMALE'
type Role = 'DEFAULT' | 'ADMIN'

export interface User {
  id:     string;
  email:  string;
  role:   Role;
  dni:    string;
  name:   string;
  phone:  string;
  gender: Gender;
  avatar: null;
}

export interface LoginRequestData {
  email: string
  password: string
}