import { type RouteObject } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

export const authRouter: RouteObject[] = [
  {
    path: 'login',
    element: <LoginPage />
  }
] 