import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const AllRequest = () => {
  const axiosPublic = useAxiosPublic();
  const { data: requests = [], isLoading } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      const res = await axiosPublic.get("/request");
      return res.data;
    },
  });

  const [selectedFilter, setSelectedFilter] = useState("");

  const filteredRequests =
    selectedFilter === ""
      ? requests
      : requests.filter((request) => request.donationStatus === selectedFilter);

  const handleSelect = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <div className=" max-w-screen-xl mx-auto my-10 border rounded-md px-5">
      <Helmet>
        <title>LifeFlowDonor | All</title>
      </Helmet>

      <div className="text-white">
        <div className="flex justify-between items-center gap-5">
          <h3 className="text-2xl font-semibold text-center py-10">
            All Requests
          </h3>
          <div className="text-base">
            <select
              onChange={handleSelect}
              className=" py-1 px-1 rounded-md border w-full max-w-xs bg-[#8B0000]"
            >
              <option value="">All</option>
              <option value="inprogress">Inprogress</option>
              <option value="canceled">Canceled</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-xs mb-7">
            <thead>
              <>
                {isLoading ? (
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                ) : (
                  <>
                    <tr className="text-white">
                      <th>No</th>
                      <th> Recipient Name</th>
                      <th>Require Blood Group</th>
                      <th> Location</th>
                      <th>Donation Date</th>
                      <th>Donation Time</th>
                      <th>Donation Status</th>
                      <th>Donor Name</th>
                      <th>Donor Email</th>
                    </tr>
                  </>
                )}
              </>
            </thead>
            <tbody>
              {isLoading ? (
                <Stack spacing={2}>
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    width="100vw"
                    height={30}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                </Stack>
              ) : (
                <>
                  {filteredRequests.map((request, index) => (
                    <tr key={request._id}>
                      <th>{index + 1}</th>
                      <td>{request.recipientName}</td>
                      <td>{request.requiredBloodGroup}</td>
                      <td>
                        {request.upazila},{request.district}
                      </td>
                      <td>{request.donationDate}</td>
                      <td>{request.donationTime}</td>
                      <td>{request.donationStatus}</td>
                      <td>
                        {request?.donationStatus === "inprogress" ? (
                          <>{request.donorName}</>
                        ) : (
                          <>{request.donorName || "None"}</>
                        )}
                      </td>
                      <td>
                        {request?.donationStatus === "inprogress" ? (
                          <>{request.donorEmail}</>
                        ) : (
                          <>{request.donorEmail || "None"}</>
                        )}
                      </td>

                      <td className="flex gap-3">
                        <Link to={`/dashboard/details/${request._id}`}>
                          <button className="btn btn-xs">view</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllRequest;
