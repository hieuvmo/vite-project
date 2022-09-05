import DashboardPage from "../pages/admin/Dashboard/DashboardPage";
import { IRoute } from "../types/router.model";
import routerPaths from "./router.paths";

export const adminRoutes: IRoute[] = [
  {
    path: routerPaths.admin.DASHBOARD,
    element: <DashboardPage />,
  },
];
