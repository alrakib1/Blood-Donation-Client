import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useArea from "../../hooks/useArea";
import { Helmet } from "react-helmet";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Signup = () => {

const {user}=useAuth();

  const {districts,upazilas} = useArea();

  // hooks

  const { signup, updateUser } = useAuth();

  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  // from sublimation operation

  const onSubmit = async (data) => {
    const name = data.name;
    const password = data.password;
    const email = data.email;
    const confirmPassword = data.confirm;
    const bloodGroup = data.group;
    const upazila = data.upazila;
    const district = data.district;
    const status = "active";
    const role = "donor";
    const imageFile = { image: data.image[0] };

    if (password !== confirmPassword) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Password and confirmation password do not match",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    // post the image in image bb

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(res.data, 'for image')

    if (res.data.success) {
      // image url from image bb

      const avatarImage = res.data.data.display_url;

      // signup user

      signup(email, password)
        .then(async () => {
          // console.log(result.user);
          updateUser(name, avatarImage);
          const userData = {
            name,
            email,
            avatarImage,
            bloodGroup,
            upazila,
            district,
            status,
            role,
          };

          const res = await axiosPublic.post("/user", userData);
          // console.log(res.data);

          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Registration successful",
              showConfirmButton: false,
              timer: 2000,
            });
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error);
       
          Swal.fire({
            position: "center",
            icon: "error",
            title: "This email is already registered with another account",
            showConfirmButton: false,
            timer: 2000,
          });
       
        });
    }
  };

  return (
   <div>
    <Helmet>
      <title>Blood Donation | Signup</title>
    </Helmet>
    <div>
    {
      user ? <div className="h-screen flex flex-col gap-8 justify-center items-center text-2xl font-semibold"><h1>You are already a valid user. please go back.
        
        </h1>
       
       <Link to='/'> <button className="btn btn-outline">Go back to home</button></Link>
        </div> : <div className="mb-10 bg-red-500 shadow-lg">
      <div className="p-4">
        <h3 className="text-xl lg:text-3xl mb-4 text-center font-bold text-white">
          Join us and help us to save lives
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-sm font-semibold mb-2 text-white">Name*</p>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Your Name"
            className="input input-bordered md:w-1/2"
          />
          <p className="text-sm font-semibold mt-5 mb-2 text-white">Email</p>
          <input
            {...register("email", { required: true })}
            type="text"
            placeholder="Your Email Address"
            className="input input-bordered md:w-1/2"
          />

          <p className="text-sm font-semibold mt-5 mb-2 text-white">Password</p>
          <input
            {...register("password", { required: true })}
            type="password"
            className="input input-bordered md:w-1/2"
          />
          <p className="text-sm font-semibold mt-5 mb-2 text-white">
            Confirm Password
          </p>
          <input
            {...register("confirm", { required: true })}
            type="password"
            className="input input-bordered md:w-1/2"
          />

          <p className="text-sm font-semibold mt-5 mb-2 text-white">
            Your Photo*
          </p>

          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input border-0 file-input-bordered file-input-sm w-full mb-4 max-w-xs"
          />
          <div className="flex gap-10 my-5">
            <div className="md:w-1/2">
              <p className="text-sm font-semibold mb-2 text-white">
                Blood Group*
              </p>
              <select
                defaultValue="default"
                {...register("group", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select Your Blood Group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <p className="text-sm font-semibold mb-2 text-white">Upazila*</p>
              <select
                {...register("upazila", { required: true })}
                className="select select-bordered w-full"
              >
                {upazilas.map((option, index) => (
                  <option key={index} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:w-1/2">
              <p className="text-sm font-semibold mb-2 text-white">District*</p>
              <select
                {...register("district", { required: true })}
                className="select select-bordered w-full"
              >
                {districts.map((option, index) => (
                  <option key={index} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <br />
          <button
            type="submit"
            className="text-red-500 shadow-lg btn bg-white border-0 mb-5 hover:bg-blue-500 hover:text-white"
          >
            Sign Up
          </button>
        </form>
        <p className="text-white font-semibold text-xl text-center">
          Already Have an account ?{" "}
          <Link to="/login">
            <span className="hover:text-blue-500">Log in here</span>
          </Link>
        </p>
      </div>
    </div>
    }
    </div>
    
   </div>
  );
};

export default Signup;
