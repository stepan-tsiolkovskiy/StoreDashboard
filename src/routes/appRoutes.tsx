import { AnalyticsPage } from "../pages/dashboard";
import { HomePage } from "../pages/home";
import { AboutPage } from "../pages/about";
import { RouteType } from "./config";

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/dashboard",
    element: <AnalyticsPage />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
  },
  {
    path: "/about",
    element: <AboutPage />,
    state: "about",
    sidebarProps: {
      displayText: "About",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;