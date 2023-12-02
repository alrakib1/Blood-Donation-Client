import { Helmet } from "react-helmet";
import Banner from "../Components/Banner/Banner";
import NewSletter from "../Components/Banner/Newsletter/Newsletter";
import AboutUs from "../Components/About Us/AboutUs";
import Gallery from "../Components/Gallery/Gallery";


const Home = () => {
    return (
        <div>
         <Helmet><title>Blood Donation | Home</title></Helmet>
           <div className="">
           <Banner/>
           </div>
           <div className="flex flex-col gap-10 justify-center items-center mt-10">
            <h1 className="text-3xl font-bold"> Some Photos from our campaigns</h1>
            <Gallery></Gallery>
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