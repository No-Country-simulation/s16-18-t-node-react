import { Navigate, type RouteObject } from "react-router-dom";
import { Profile } from "../pages/Profile";

export const profileRouter: RouteObject[] = [
  {
    index: true,
    element: <Profile />
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
] 