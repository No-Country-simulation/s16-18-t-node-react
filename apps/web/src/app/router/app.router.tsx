import { Navigate, RouteObject } from "react-router-dom";

import { HomePage } from "@/app/pages/HomePage";
import { travelRouter } from "@/travel/router/travel.router";
import { paymentRouter } from "@/payment/router/payment.router";
import { authRouter } from "@/auth/router/auth.router";
import { profileRouter } from "@/user/router/user.router";
import { Layout } from "../layouts/Layout";
import path from "path";

export const privateRouter: RouteObject[] = ([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ],
  },
  {
    path: '/travel',
    element: <Layout />,
    children: travelRouter
  },
  {
    path: '/payment',
    element: <Layout />,
    children: paymentRouter
  },
  {
    path: '/profile',
    element: <Layout />,
    children: profileRouter
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
]);

export const router: RouteObject[] = ([
  {
    path: 'auth/*',
    children: authRouter,
  },
  {
    path: '*',
    element: <Navigate to='/auth/login' />
  }
])