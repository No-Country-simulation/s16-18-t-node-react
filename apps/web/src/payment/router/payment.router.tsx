import { Navigate, type RouteObject } from "react-router-dom";
<<<<<<< HEAD

import { DetailPaymentMethodPage } from "../pages/DetailPaymentMethodPage.tsx";
import { SuccessPage } from "../pages/SuccessPage.tsx";
import { DetailPaymentSummaryPage } from "../pages/DetailPaymentSummaryPage.tsx";
=======
import { DetailPaymentPage } from '../pages/DetailPaymentPage.tsx'
import { SuccessPage } from "../pages/SuccessPage.tsx";
import { DetailPaymentMethodMPPage } from "../pages/DetailPaymentMethodMPPage.tsx";
>>>>>>> develop

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