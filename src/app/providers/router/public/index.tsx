import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import AuthLayout from "@/app/layouts/ui/AuthLayout";
const AuthSignInPage = lazy(() => import("@/pages/auth/AuthSignInPage"));

export const publicRoutes: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: '',
        element: <AuthSignInPage />
      }
    ],
  },
];