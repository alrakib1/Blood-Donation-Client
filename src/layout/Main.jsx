import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="bg-slate-300">
            <Navbar></Navbar>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;