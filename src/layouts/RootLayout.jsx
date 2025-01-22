import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import Footer from "../SharedPages/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
