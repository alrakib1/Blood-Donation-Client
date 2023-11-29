import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useArea = () => {

    const axiosPublic = useAxiosPublic();
  // district and upazila data load from server

  const { data: districts = [] } = useQuery({
    queryKey: ["districts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/districts");
      return res.data;
    },
  });

  const { data: upazilas = [] } = useQuery({
    queryKey: ["upazilas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/upazilas");
      return res.data;
    },
  });

    return {districts,upazilas}
};

export default useArea;