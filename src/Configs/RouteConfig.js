import ForgotPassword from "../Journeys/Authentication/ForgotPassword";
import Login from "../Journeys/Authentication/Login";
import Signup from "../Journeys/Authentication/Signup";
import UpdatePassword from "../Journeys/Authentication/UpdatePassword";
import DashboardRoute from "../Journeys/Dashboard";
import AppSettingsJourney from "../Journeys/Dashboard/AppSettings";
import ManageProducts from "../Journeys/Dashboard/CatalogueJourney/ManageProducts";
import MarkettingJourney from "../Journeys/Dashboard/MarkettingJourney";
import SalesJourney from "../Journeys/Dashboard/SalesJourney";

export const PUBLIC_ROUTES = [
  {
    title: "Sign In",
    Component: Login,
    path: "/",
  },
  {
    title: "Sign Up",
    Component: Signup,
    path: "/signup",
  },
  {
    title: "Reset Password",
    Component: ForgotPassword,
    path: "/resetPassword",
  },
  {
    title: "Update Password",
    Component: UpdatePassword,
    path: "/updatePassword",
  },
];

export const PRIVATE_ROUTES = {
  title: "Dashboard Landing",
  Component: DashboardRoute,
  path: "/dashboard",
  children: [
    {
      title: "Catalogue Journey",
      Component: ManageProducts,
      path: "/dashboard/manageCatalogue",
      roles: "C",
    },
    {
      title: "Sales Journey",
      Component: SalesJourney,
      path: "/dashboard/manageSales",
      roles: "S",
    },
    {
      title: "Marketting Journey",
      Component: MarkettingJourney,
      path: "/dashboard/manageMarketting",
      roles: "M",
    },
    {
      title: "App Settings Journey",
      Component: AppSettingsJourney,
      path: "/dashboard/appSettings",
      roles: null,
    },
  ],
};
