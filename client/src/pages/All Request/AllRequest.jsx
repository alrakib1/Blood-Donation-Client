import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import image from '../../assets/banner1.jpg'

const AllRequest = () => {
  const axiosPublic = useAxiosPublic();
  const { data: requests = [], isLoading } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      const res = await axiosPublic.get("/request");
      return res.data;
    },
  });

  return (
    <div className=" max-w-screen-xl mx-auto pb-5">
      <Helmet>
        <title>Blood Donation | All</title>
      </Helmet>

      <div className="text-white">
        <h3 className="text-2xl font-semibold text-center pt-10 mb-10">
          All Requests
        </h3>
        <div className="overflow-x-auto">
          <table className="table table-xs">
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
                  {requests.map((request, index) => (
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
