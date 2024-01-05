import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

import background from "../../../../assets/bg.jpg";

const Banner = () => {
  const { user } = useAuth();
  return (
    <div
      className="bg-no-repeat bg-center bg-cover w-screen min-h-screen flex justify-center items-center mx-auto font-Font-Play"
      style={{ backgroundImage: `url(${background})`, opacity: 0.8, }}
    >
      <div className="space-y-5">
        <h2 className="md:text-6xl text-3xl font-semibold px-2 text-center text-[#800020] bg-opacity-100 opacity-100">
          Our mission is to save as many lives as possible
        </h2>
        <div className="h-full">
          <div className="flex justify-center items-center">
            {!user && (
              <Link to="/signup">
                {" "}
                <button className="btn bg-red-500 text-white hover:bg-blue-500 border-0">
                  Join As A Donor
                </button>
              </Link>
            )}
            <Link to="/search">
              {" "}
              <button className="btn bg-blue-950 text-white ml-5 hover:bg-black border-0">
                Search Donor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
