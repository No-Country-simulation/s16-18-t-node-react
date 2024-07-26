import { type RouteObject } from "react-router-dom";
import { DetailTravelPage } from "../pages/DetailTravelPage";
import { Travel404Page } from "../pages/Travel404Page";

export const travelRouter: RouteObject[] = [
  {
    path: ':id',
    element: <DetailTravelPage />
  },
  {
    path: '404',
    element: <Travel404Page />
  }
] 