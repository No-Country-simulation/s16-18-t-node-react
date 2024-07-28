import { Navigate, type RouteObject } from "react-router-dom";
import { DetailPaymentPage } from '../pages/DetailPaymentPage.tsx'
import { DetailPaymentMethodPage } from "../pages/DetailPaymentMethodPage.tsx";
import { SuccessPage } from "../pages/SuccessPage.tsx";

export const paymentRouter: RouteObject[] = [
  {
    index: true,
    element: <DetailPaymentPage />
  },
  {
    path: 'method',
    element: <DetailPaymentMethodPage />
  },
  {
    path: 'success',
    element: <SuccessPage />
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
] 