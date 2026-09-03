import { createElement, lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Solutions = lazy(() => import("../pages/Solutions"));

export const routes = [
  { path: "/", element: createElement(Home), protected: false },
  { path: "/solutions", element: createElement(Solutions), protected: false },
];
