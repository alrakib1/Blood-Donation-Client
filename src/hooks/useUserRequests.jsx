import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useUserRequests = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();

    const {data :requests=[],refetch} = useQuery({
        queryKey: ['requests',user?.email],
        queryFn: async()=>{
            const res =await axiosPublic.get('/currentUserRequests')
            return res.data;
        }
    })
    const sortedRequest =requests.sort((a, b) => new Date(b.requestTime) - new Date(a.requestTime));
   

    return {requests,sortedRequest,refetch}
};

export default useUserRequests;