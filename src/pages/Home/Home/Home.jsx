import { Helmet } from "react-helmet";
import Banner from "../Components/Banner/Banner";


const Home = () => {
    return (
        <div>
         <Helmet><title>Blood Donation | Home</title></Helmet>
           <div className="">
           <Banner/>
           </div>
        </div>
    );
};

export default Home;