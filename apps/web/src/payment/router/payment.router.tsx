import { Navigate, type RouteObject } from "react-router-dom";

import { SuccessPage } from "../pages/SuccessPage.tsx";
import { DetailPaymentSummaryPage } from "../pages/DetailPaymentSummaryPage.tsx";
import { DetailPaymentMethodMPPage } from "../pages/DetailPaymentMethodMPPage.tsx";


export const paymentRouter: RouteObject[] = [
  {
    path: 'summary/:id',
    element: <DetailPaymentSummaryPage />
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