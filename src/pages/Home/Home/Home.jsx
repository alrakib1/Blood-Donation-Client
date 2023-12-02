import { Helmet } from "react-helmet";
import Banner from "../Components/Banner/Banner";
import NewSletter from "../Components/Banner/Newsletter/Newsletter";
import AboutUs from "../Components/About Us/AboutUs";


const Home = () => {
    return (
        <div>
         <Helmet><title>Blood Donation | Home</title></Helmet>
           <div className="">
           <Banner/>
           </div>
           <div className="">
            <NewSletter></NewSletter>
           </div>
           <div className=" text-center">
            <AboutUs></AboutUs>
           </div>
        </div>
    );
};

export default Home;