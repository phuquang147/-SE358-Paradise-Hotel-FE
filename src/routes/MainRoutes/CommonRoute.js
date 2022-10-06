import { lazy } from "react";
import Loadable from "~/ui-component/Loadable";

const Dashboard = Loadable(lazy(() => import("~/pages/Dashboard")));
const NotFound = Loadable(lazy(() => import("~/pages/NotFound")));

const CommonRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default CommonRoutes;
