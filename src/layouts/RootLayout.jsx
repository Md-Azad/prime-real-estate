import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <h1>Here will be the footer section.</h1>
    </div>
  );
};

export default RootLayout;
