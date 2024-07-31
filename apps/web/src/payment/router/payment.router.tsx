import { Navigate, type RouteObject } from "react-router-dom";

import { DetailPaymentMethodPage } from "../pages/DetailPaymentMethodPage.tsx";
import { SuccessPage } from "../pages/SuccessPage.tsx";
import { DetailPaymentSummaryPage } from "../pages/DetailPaymentSummaryPage.tsx";

export const paymentRouter: RouteObject[] = [
  {
    path: 'summary/:id',
    element: <DetailPaymentSummaryPage />
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