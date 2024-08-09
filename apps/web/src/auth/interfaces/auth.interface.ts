export type Gender = 'MALE' | 'FEMALE'
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

export interface RegisterRequestData {
  name:         string;
  phone_number: string;
  dni:          string;
  email:        string;
  password:     string;
  gender:       Gender
}
