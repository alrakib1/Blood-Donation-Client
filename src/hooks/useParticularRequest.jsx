import { useParams } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useParticularRequest = () => {
    const params = useParams();
    const axiosPublic = useAxiosPublic();
  

    
  
    const { data: requests = {},refetch } = useQuery({
      queryKey: ["requests", params.id],
      queryFn: async () => {
        const res = await axiosPublic.get(`/request/${params.id}`);
        return res.data;
      },
    });
  
    return {requests,refetch}
};

export default useParticularRequest;