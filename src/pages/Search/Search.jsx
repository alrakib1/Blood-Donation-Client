import { useForm } from "react-hook-form";
import useArea from "../../hooks/useArea";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

import useSearchedUser from "../../hooks/useSearchedUser";
import { Stack } from "@mui/system";
import { Skeleton } from "@mui/material";

const Search = () => {
  const [searchedUser, setSearchedUser] = useState([]);
  // const searched= searchedUser[0];
  const [userNumber, setUserNumber] = useState(false);

  const { users, isLoading } = useSearchedUser();
  const { register, handleSubmit } = useForm();
  const { districts, upazilas } = useArea();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const requestData = {
      bloodGroup: data.bloodGroup,
      district: data.district,
      upazila: data.upazila,
    };
    const res = await axiosPublic.get("/search", { params: requestData });
    if (res.data.length == 0) {
      setUserNumber(true);
    } else {
      setUserNumber(false);
    }
    setSearchedUser(res.data);
  };

  // console.log(searchedUser);

  return (
    <div className="p-5 bg-violet-500 text-black min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-10 my-5">
          <div className="md:w-1/2">
            <p className="text-sm font-semibold mb-1 text-white">
              Required Blood Group*
            </p>
            <select
              {...register("bloodGroup", { required: true })}
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
            <p className="text-sm font-semibold mb-1 text-white">Upazila*</p>
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
            <p className="text-sm font-semibold mb-1 text-white">District*</p>
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
        <button className="btn bg-white text-violet-500">Search</button>
      </form>
      <div className="my-10">
        {searchedUser.length > 0 ? (
          <div key={searchedUser._id}>
            {searchedUser.map((searched) => (
              <div
                className="border mt-10 p-4 text-white text-center md:w-1/2 mx-auto"
                key={searched.id}
              >
                <h1 className="text-xl">Donor Name: {searched?.name}</h1>
                <p className="text-base font-semibold">
                  Blood Group : {searched?.bloodGroup}{" "}
                </p>
                <p className="text-base font-semibold">
                  Email : {searched?.email}{" "}
                </p>
                <p className="text-xl font-semibold ">
                  Address: {searched?.upazila}
                  {searched ? "," : ""}
                  {searched?.district}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <>
            {userNumber && (
              <h2 className="text-center text-white text-2xl font-bold border-2 md:w-1/2 mx-auto py-2 ">
                Sorry, No user have been found with this criteria
              </h2>
            )}
          </>
        )}
      </div>
      <div>
        <div>
          <h3 className="mt-10 mb-10 text-2xl font-bold text-white text-center">
            All Users
          </h3>
          <div className="overflow-x-auto">
            <table className="table text-white">
              {/* head */}
              <thead className="text-white">
                {isLoading ? (
                  <Stack>
                    <Skeleton
                      width="70vw"
                      height={30}
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                    />
                  </Stack>
                ) : (
                  <tr>
                    <th>
                      <label></label>
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Blood Group</th>
                    <th>Upazila</th>
                    <th>District</th>
                  </tr>
                )}
              </thead>
              <tbody>
                {isLoading ? (
                  <>
                    <Stack>
                      <Skeleton
                        width="70vw"
                        height={30}
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                      />
                    </Stack>{" "}
                    <Stack>
                      <Skeleton
                        width="70vw"
                        height={30}
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                      />
                    </Stack>{" "}
                    <Stack>
                      <Skeleton
                        width="70vw"
                        height={30}
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                      />
                    </Stack>{" "}
                    <Stack>
                      <Skeleton
                        width="70vw"
                        height={30}
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                      />
                    </Stack>
                  </>
                ) : (
                  <>
                    {users.map((user, index) => (
                      <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>
                          <div className="flex items-center gap-3">
                            <div>
                              <div className="font-bold">{user?.name}</div>
                            </div>
                          </div>
                        </td>
                        <td>{user?.email}</td>
                        <td>{user?.bloodGroup}</td>

                        <td>{user?.upazila}</td>

                        <td>{user?.district}</td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
