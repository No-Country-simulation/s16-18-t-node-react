import { Navigate, type RouteObject } from "react-router-dom";
import { DetailPaymentPage } from '../pages/DetailPaymentPage.tsx'
import { SuccessPage } from "../pages/SuccessPage.tsx";
import { DetailPaymentMethodMPPage } from "../pages/DetailPaymentMethodMPPage.tsx";

export const paymentRouter: RouteObject[] = [
  {
    index: true,
    element: <DetailPaymentPage />
  },
  {
    path: 'method',
    element: <DetailPaymentMethodMPPage />
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