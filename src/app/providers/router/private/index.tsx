import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import MainLayout from "@/app/layouts/ui/MainLayout";
const HomePage = lazy(() => import("@/pages/home"));

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      }
    ],
  },
];