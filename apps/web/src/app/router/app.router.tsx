import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { HomePage } from "@/app/pages/HomePage";
import TravelFilterPage from "../pages/TravelFilterPage";

import { travelRouter } from "@/travel/router/travel.router";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/buscar-viaje',
        element: <TravelFilterPage />
      }
    ],
  },
  {
    path: '/travel',
    element: <App />,
    children: travelRouter
  }
]);