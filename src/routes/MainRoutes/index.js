import { lazy } from "react";
import Loadable from "../../ui-component/Loadable";
import CommonRoutes from "./CommonRoute";

const AuthGuard = Loadable(lazy(() => import("../AuthGuard")));

const MainRoutes = () => {
  return {
    path: "/",
    element: <AuthGuard />,
    children: CommonRoutes,
  };
};

export default MainRoutes;
