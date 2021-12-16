import { lazy } from "react";

const routes = [
  {
    label: "Главная",
    path: "/",
    exact: true,
    component: lazy(() => import("./pages/Main/Main.jsx")),
    redirectTo: "/auth",
    privated: false,
  },
  {
    label: "Страница авторизации",
    path: "/auth",
    exact: true,
    component: lazy(() => import("./pages/Auth/Auth")),
    redirectTo: "/auth",
    privated: false,
  },
  {
    label: "Страница не найдена",
    // path: "/notFound",
    exact: true,
    component: lazy(() => import("./pages/NotFound/NotFound")),
    redirectTo: "/notFound",
    privated: false,
  },
];

export default routes;
