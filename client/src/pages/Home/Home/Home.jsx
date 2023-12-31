import { Helmet } from "react-helmet";
import Banner from "../Components/Banner/Banner";
import NewSletter from "../Components/Banner/Newsletter/Newsletter";
import AboutUs from "../Components/About Us/AboutUs";
// import Gallery from "../Components/Gallery/Gallery";


const Home = () => {
    return (
        <div>
         <Helmet><title>Blood Donation | Home</title></Helmet>
           <div className="">
           <Banner/>
           </div>
            {/* <h1 className="text-3xl  my-10 text-center font-bold text-white"> Some Photos from our campaigns</h1>
           <div className="md:w-6/12 mx-auto flex justify-center">
           <Gallery></Gallery>
           </div> */}
           
           <div className=" text-center mt-10">
            <AboutUs></AboutUs>
           </div>
           <div className="">
            <NewSletter></NewSletter>
           </div>
        </div>
    );
};

export default Home;