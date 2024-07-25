import { type RouteObject } from "react-router-dom";
import { DetailTravelPage } from "../pages/DetailTravelPage";

export const travelRouter: RouteObject[] = [
  {
    path: ':id',
    element: <DetailTravelPage />
  }
] 