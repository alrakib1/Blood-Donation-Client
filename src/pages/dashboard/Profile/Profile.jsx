import { useQuery } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

import { useForm } from "react-hook-form";

import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import useArea from "../../../hooks/useArea";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Profile = () => {
  const { districts, upazilas } = useArea();
  const { register, handleSubmit } = useForm();
  const { user, updateUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [editProfile, setEditProfile] = useState(false);

  const { data: currentUser = [], refetch } = useQuery({
    queryKey: ["CurrentUser", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/profile?email=${user?.email}`);
      return res.data;
    },
  });
  //   console.log(currentUser);

  // Every user(admin, donner, or volunteer) will have a profile page. And from where
  // the user is able to see his name, email, avatar, address(district, upazila), blood
  // group and able to update profile information.(only the email will not be
  // changeable)

  const onSubmit = async (data) => {
    const name = data.name;
    const bloodGroup = data.group;
    const upazila = data.upazila;
    const district = data.district;
    const imageFile = { image: data.image[0] };

    // post the image in image bb

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      //   console.log(res.data);
      const avatar = res.data.data.display_url;
      updateUser(name, avatar);
      const updatedProfile = {
        name,
        bloodGroup,
        upazila,
        district,
        avatar,
      };

      const result = await axiosPublic.patch(
        `/user?email=${user?.email}`,
        updatedProfile
      );
    //   console.log(result.data);
      if (result.data.modifiedCount > 0) {
        refetch();
        setEditProfile(false);
        toast.success("Profile Updated", {
          position: "bottom-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  const handleEditProfile = () => {
    setEditProfile(!editProfile);
  };

 

  return (
    <div>
      <div>
        {currentUser.map((user) => (
          <div key={user._id}>
            <div className="flex flex-col md:flex-row gap-10">
              <div>
                <img
                  src={user.avatarImage}
                  alt="Avatar"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="pt-5">
                <h2 className="text-2xl font-semibold">Name: {user.name}</h2>
                <p className="text-xl font-semibold">Email: {user.email}</p>
                <p className="text-red-400 font-semibold">
                  Blood Group: {user.bloodGroup}
                </p>
                <p className="font-semibold">Upazila: {user.upazila}</p>
                <p className="font-semibold">District: {user.district}</p>
                <p className="font-semibold">
                  Status:{" "}
                  <span
                    style={
                      user.status === "active"
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    {" "}
                    {user.status}
                  </span>
                </p>
                <p className="font-semibold">Role: {user.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleEditProfile}
        className="btn text-white mt-5"
        style={
          editProfile ? { background: "black" } : { background: "#EF4444" }
        }
      >
        {editProfile ? "Cancel" : "Edit Profile"}
      </button>
      {/* update profile section */}
      {editProfile && (
        <section className="mt-4">
          {currentUser.map((user) => (
            <div key={user._id}>
              <div className="bg-red-500 shadow-lg">
                <div className="p-2">
                  <h3 className="text-xl lg:text-3xl mb-2 text-center font-bold text-white">
                    Update your profile
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-sm font-semibold mb-1 text-white">
                      Name*
                    </p>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      defaultValue={user.name}
                      className="input input-bordered md:w-1/2"
                    />

                    <p className="text-sm font-semibold mt-5 mb-1 text-white">
                      Your Photo*
                    </p>

                    <input
                      {...register("image", { required: true })}
                      type="file"
                      className="file-input border-0 file-input-bordered file-input-sm w-full mb-4 max-w-xs"
                    />
                    <div className="flex gap-10 my-5">
                      <div className="md:w-1/2">
                        <p className="text-sm font-semibold mb-1 text-white">
                          Blood Group*
                        </p>
                        <select
                          defaultValue={user.group}
                          {...register("group", { required: true })}
                          className="select select-bordered w-full"
                        >
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
                        <p className="text-sm font-semibold mb-1 text-white">
                          Upazila*
                        </p>
                        <select
                          defaultValue={user.upazila}
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
                        <p className="text-sm font-semibold mb-1 text-white">
                          District*
                        </p>
                        <select
                          defaultValue={user.district}
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
                      className="text-red-500 shadow-lg btn bg-white border-0 mb-2 hover:bg-blue-500 hover:text-white"
                    >
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Profile;
