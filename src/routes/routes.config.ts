import { createElement, lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Solutions = lazy(() => import("../pages/Solutions"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const Blogs = lazy(() => import("../pages/Blogs"));
const Careers = lazy(() => import("../pages/Careers"));
const Services = lazy(() => import("../pages/Services"));

export const routes = [
  { path: "/", element: createElement(Home), protected: false },
  { path: "/services", element: createElement(Services), protected: false },
  { path: "/solutions", element: createElement(Solutions), protected: false },
  { path: "/portfolio", element: createElement(Portfolio), protected: false },
  { path: "/blog", element: createElement(Blogs), protected: false },
  { path: "/careers", element: createElement(Careers), protected: false },
];
