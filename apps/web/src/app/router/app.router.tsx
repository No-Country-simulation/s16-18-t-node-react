import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { HomePage } from "@/app/pages/HomePage";
import TravelFilterPage from "../pages/TravelFilterPage";

import { travelRouter } from "@/travel/router/travel.router";
import { paymentRouter } from "@/payment/router/payment.router";
import { profileRouter } from "@/user/router/user.router";

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
  },
  {
    path: '/payment',
    element: <App />,
    children: paymentRouter
  },
  {
    path: '/profile',
    element: <App />,
    children: profileRouter
  }
]);