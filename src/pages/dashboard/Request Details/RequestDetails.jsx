import {
  Box,
  Button,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useParticularRequest from "../../../hooks/useParticularRequest";

const RequestDetails = () => {
  const { user } = useAuth();
  const { requests, refetch } = useParticularRequest();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const params = useParams();


  const axiosPublic = useAxiosPublic();

  const handleConfirm = async () => {

    const donorName = user.displayName;
    const donorEmail = user.email;
    const donationStatus = "inprogress";

    const updatedData = {
      donorName,
      donorEmail,
      donationStatus,
    };

    const res = await axiosPublic.patch(`/donor/${params.id}`, updatedData);

    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Donor Have Been Added",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };
  return (
    <div>
      <Helmet>
        <title>Blood Donation | Details</title>
      </Helmet>
      <ChakraProvider>
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
          <p>Request Status: {requests.donationStatus}</p>
          <p>Donor: {requests.donorName ? requests.donorName : "None"}</p>
          <p>
            Donor Email : {requests.donorEmail ? requests.donorEmail : "None"}
          </p>
          <Box
            ref={finalRef}
            tabIndex={-1}
            aria-label="Focus moved to this box"
          ></Box>
{
  requests.donationStatus !== 'inprogress' && <Button mt={4} onClick={onOpen}>
  Donate
</Button>
}
          
          <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Confirm Donor</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {/* body */}
             
                  <p>Donor Name: {user?.displayName}</p>
                  <p>Donor Email : {user?.email}</p>
                  <div className="flex gap-1 flex-row justify-center items-center">
                    <Button colorScheme="blue" mt={3} mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button
                      onClick={handleConfirm}
                      mt={3}
                      variant="ghost"
                    >
                      Confirm
                    </Button>
                  </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </ChakraProvider>
    </div>
  );
};

export default RequestDetails;
