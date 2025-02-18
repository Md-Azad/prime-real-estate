import { createBrowserRouter } from "react-router-dom";
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
import AdminRoute from "./AdminRoute";
import MyProperties from "../pages/DashboardPages/AgentPages/MyProperties/MyProperties";
import UpdateProperty from "../pages/DashboardPages/AgentPages/UpdateProperty/UpdateProperty";
import SoldProperties from "../pages/DashboardPages/AgentPages/SoldProperties/SoldProperties";
import RequestedProperties from "../pages/DashboardPages/AgentPages/RequestedProperties/RequestedProperties";
import MyReviews from "../pages/DashboardPages/UserPages/MyReviews/MyReviews";
import BoughtProperty from "../pages/DashboardPages/UserPages/BoughtProperty/BoughtProperty";
import PropertyDetails from "../pages/HomePage/PropertyDetails/PropertyDetails";
import AgentRoute from "./AgentRoute";
import MakeOffer from "../pages/DashboardPages/UserPages/MakeOffer/MakeOffer";
import Payment from "../pages/DashboardPages/UserPages/Payment/Payment";
import Error from "../components/Error/Error";
import Advertise from "../pages/DashboardPages/AdminPages/Advertise/Advertise";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/allproperties",
        element: <AllProperties></AllProperties>,
      },
      {
        path: "/allProperties/details/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
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
    errorElement: <Error></Error>,
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
      {
        path: "/dashboard/advertise",
        element: (
          <AdminRoute>
            <Advertise></Advertise>
          </AdminRoute>
        ),
      },

      //   agent Dashboard routes

      {
        path: "/dashboard/agenthome",
        element: (
          <AgentRoute>
            <AgentHome></AgentHome>
          </AgentRoute>
        ),
      },
      {
        path: "/dashboard/addproperties",
        element: (
          <AgentRoute>
            <AddProperties></AddProperties>
          </AgentRoute>
        ),
      },
      {
        path: "/dashboard/myproperties",
        element: <MyProperties></MyProperties>,
      },
      {
        path: "/dashboard/update/:id",
        element: <UpdateProperty></UpdateProperty>,
      },
      {
        path: "/dashboard/soldproperties",
        element: <SoldProperties></SoldProperties>,
      },
      {
        path: "/dashboard/requestedproperties",
        element: <RequestedProperties></RequestedProperties>,
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
      {
        path: "/dashboard/boughtproperty",
        element: <BoughtProperty></BoughtProperty>,
      },
      {
        path: "/dashboard/myreviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/dashboard/makeoffer/:id",
        element: <MakeOffer></MakeOffer>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
      },
    ],
  },
]);
