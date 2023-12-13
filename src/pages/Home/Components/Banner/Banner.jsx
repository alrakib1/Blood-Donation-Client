import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";


const Banner = () => {
    const {user} = useAuth();
    return (
        <div className="flex flex-col justify-center items-center mt-10 space-y-5">
            <h2 className="text-3xl font-semibold px-2 text-center">Our mission is to save as many life as possible</h2>
            <div className="">
               <div className="flex justify-center items-center">
              {!user && <Link to='/signup'> <button className="btn bg-red-500 text-white hover:bg-blue-500 border-0">Join As A donner</button></Link>}
               <Link to='/search'> <button className="btn bg-blue-950 text-white ml-5 hover:bg-black border-0">Search Donor</button></Link>
               </div>
            </div>
            <img className="lg:h-[650px]"  src="https://i.ibb.co/LxmjRPw/world-blood-donor-day-social-media-template.jpg" alt="" />
       
            </div>
    
    );
};

export default Banner;