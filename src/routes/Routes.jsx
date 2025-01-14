import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/HomePage/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import AllProperties from "../pages/HomePage/AllProperties/AllProperties";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/DashboardPages/DashboardHome/DashboardHome";
import MyProfile from "../pages/DashboardPages/UserPages/MyProfile/MyProfile";
import WishList from "../pages/DashboardPages/UserPages/WishList/WishList";
import AllUsers from "../pages/DashboardPages/AdminPages/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allproperties",
        element: (
          <PrivateRoute>
            <AllProperties></AllProperties>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/home",
        element: <DashboardHome></DashboardHome>,
      },

      //   Admin dashboard routes
      {
        path: "/dashboard/users",
        element: <AllUsers></AllUsers>,
      },

      //   users dashboard routes.

      {
        path: "/dashboard/myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/dashboard/wishlist",
        element: <WishList></WishList>,
      },
    ],
  },
]);
