import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-900  font-Font-Nunito">
      <Navbar></Navbar>
      <div className=" min-h-[calc(100vh-220px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
