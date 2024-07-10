import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="font-Font-Nunito max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <div className=" min-h-[calc(100vh-220px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
