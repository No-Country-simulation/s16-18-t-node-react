import { type RouteObject } from "react-router-dom";
import { DetailTravelPage } from "../pages/DetailTravelPage";

export const travelRouter: RouteObject[] = [
  {
    index: true,
    element: <DetailTravelPage />
  }
] 