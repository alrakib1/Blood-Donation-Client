import { Helmet } from "react-helmet";
import Banner from "../Components/Banner/Banner";
import NewSletter from "../Components/Banner/Newsletter/Newsletter";
import AboutUs from "../Components/About Us/AboutUs";
// import Gallery from "../Components/Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LifeFlowDonor | Home</title>
      </Helmet>
      <div className="">
        <Banner />
      </div>
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
