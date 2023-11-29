import { Helmet } from "react-helmet";
import useParticularRequest from "../../../hooks/useParticularRequest";

const RequestDetails = () => {
  const { requests } = useParticularRequest();
  // console.log(requests)
  return (
    <div>
      <Helmet>
        <title>Blood Donation | Details</title>
      </Helmet>
      <div>
        <h2>Requester Name: {requests.requester}</h2>
        <p>Requester Email : {requests.requesterEmail}</p>
        <p>Recipient Name: {requests.recipientName}</p>
        <p>Required Blood Group : {requests.requiredBloodGroup}</p>
        <p>Date: {requests.donationDate}</p>
        <p>Time: {requests.donationTime}</p>
        <p>
          Address: {requests.upazila},{requests.district}
        </p>
        <p>Full Address : {requests.fullAddress}</p>
        <p>Reason for blood request: {requests.message}</p>
      </div>
    </div>
  );
};

export default RequestDetails;
