import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { HomePage } from "@/app/pages/HomePage";

import { travelRouter } from "@/travel/router/travel.router";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ],
  },
  {
    path: '/travel',
    element: <App />,
    children: travelRouter
  }
]);