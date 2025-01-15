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
import ManageProperties from "../pages/DashboardPages/AdminPages/ManageProperties/ManageProperties";
import ManageReviews from "../pages/DashboardPages/AdminPages/ManageReviews/ManageReviews";
import AgentHome from "../pages/DashboardPages/AgentPages/AgentHome/AgentHome";
import AddProperties from "../pages/DashboardPages/AgentPages/AddProperties/AddProperties";
import AdminHome from "../pages/DashboardPages/AdminPages/AdminHome/AdminHome";
import AdminRoute from "./AdminRoute";
import MyProperties from "../pages/DashboardPages/AgentPages/MyProperties/MyProperties";

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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/home",
        element: <DashboardHome></DashboardHome>,
      },

      //   Admin dashboard routes
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageproperties",
        element: (
          <AdminRoute>
            <ManageProperties></ManageProperties>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managereview",
        element: (
          <AdminRoute>
            <ManageReviews></ManageReviews>
          </AdminRoute>
        ),
      },

      //   agent Dashboard routes

      {
        path: "/dashboard/agenthome",
        element: <AgentHome></AgentHome>,
      },
      {
        path: "/dashboard/addproperties",
        element: <AddProperties></AddProperties>,
      },
      {
        path: "/dashboard/myproperties",
        element: <MyProperties></MyProperties>,
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
