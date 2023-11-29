import { useState } from "react";
import { Link } from "react-router-dom";
import useUserRequests from "../../../hooks/useUserRequests";
import { Helmet } from "react-helmet";

const MyRequest = () => {
  const [status, setStatus] = useState("");
  const { requests } = useUserRequests();

  const handleCancel = () => {
    //
  };
  const handleDelete = () => {
    //
  };
  const handleDone = () => {
    //
  };

  const filteredRequest = requests.filter(
    (request) => status === "" || request.donationStatus === status
  );

  //   console.log(requests);

  return (
    <div>
      <Helmet>
      <title>Blood Donation | My Requests</title>
    </Helmet>
      <div className="mb-10">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="done">Done</option>
          <option value="inprogress">In progress</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th> Recipient Name</th>
              <th>Require Blood Group</th>
              <th> Location</th>

              <th>Donation Date</th>
              <th>Donation Time</th>
              <th>Donation Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredRequest.map((request, index) => (
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
                  {request?.donationStatus === "inprogress" && (
                    <div className="flex gap-5">
                      <button onClick={handleDone} className="btn btn-xs">
                        Done
                      </button>
                      <button onClick={handleCancel} className="btn btn-xs ">
                        Cancel
                      </button>
                    </div>
                  )}
                </td>
                <td>
                  {request?.donationStatus === "inprogress" && (
                    <div className="">
                      Donor {request.requester},{request.requesterEmail}
                    </div>
                  )}
                </td>
                <td className="flex gap-3">
                  <Link to={`/dashboard/update/${request._id}`}>
                    {" "}
                    <button className="btn btn-xs">Edit</button>
                  </Link>
                  <Link to={`/dashboard/details/${request._id}`}>
                    <button className="btn btn-xs">view</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(request._id)}
                    className="btn btn-xs"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRequest;
