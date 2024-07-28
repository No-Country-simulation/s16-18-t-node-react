import { Navigate, type RouteObject } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const authRouter: RouteObject[] = [
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: 'register',
    element: <RegisterPage />
  },
  {
    path: '*',
    element: <Navigate to='/auth/login' />
  }
] 