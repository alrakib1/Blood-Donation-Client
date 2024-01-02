import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

// Import Swiper React components

import image1 from '../../../../assets/banner1.jpg'
import image2 from '../../../../assets/banner2.jpg'

import background from '../../../../assets/samuel-regan-asante-JjlkGAc4OUM-unsplash.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";



const Banner = () => {
    const {user} = useAuth();
    return (
     
            <div className="bg-no-repeat bg-contain w-screen min-h-screen" style={{backgroundImage: `url(${background})`}}>
              <div className="flex flex-col justify-center items-center mt-10 space-y-5">
            <h2 className="text-3xl font-semibold px-2 text-center text-white">Our mission is to save as many life as possible</h2>
            <div className="">
               <div className="flex justify-center items-center">
              {!user && <Link to='/signup'> <button className="btn bg-red-500 text-white hover:bg-blue-500 border-0">Join As A donner</button></Link>}
               <Link to='/search'> <button className="btn bg-blue-950 text-white ml-5 hover:bg-black border-0">Search Donor</button></Link>
               </div>
            </div>
         

                {/* slider */}

{/* 
         <div className="max-w-5xl mx-auto">
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
        <SwiperSlide>
          {" "}
          <img
            className=""
            src={image2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className=""
            src={image1}
            alt=""
          />
        </SwiperSlide>
        
     
       
      </Swiper>
         </div> */}
            
            </div>
            </div>
     
    
    );
};

export default Banner;