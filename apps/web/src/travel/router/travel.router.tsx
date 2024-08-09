import { Navigate, type RouteObject } from "react-router-dom";
import { DetailTravelPage } from "../pages/DetailTravelPage";
import { Travel404Page } from "../pages/Travel404Page";
import { TravelsFilterResultPage } from "../pages/TravelsFilterResultPage";

export const travelRouter: RouteObject[] = [
  {
    path: 'results',
    element: <TravelsFilterResultPage />
  },
  {
    path: ':id',
    element: <DetailTravelPage />
  },
  {
    path: '404',
    element: <Travel404Page />
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
] 