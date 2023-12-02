import { Helmet } from "react-helmet";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaCodePullRequest, FaHandHoldingDollar, FaUsers } from "react-icons/fa6";
import { TbDiscountCheck } from "react-icons/tb";



const AdminHome = () => {
  const { user } = useAuth();
const axiosPublic = useAxiosPublic();
  const {data:totalData={}} = useQuery({
    queryKey: ['totalData'],
    queryFn: async()=>{
        const res = await axiosPublic.get('/admin-stats');
        return res.data;
    }
  })
  const {totalDonation} = totalData;
  const total = totalDonation?.reduce((acc, transaction) => acc + transaction.price, 0);

  
  return (
    <div>
      <Helmet>
        <title>Blood Donation | Dashboard</title>
      </Helmet>
      <h1 className="text-2xl font-semibold">Welcome {user?.displayName}</h1>
      <div className="mt-10">
        {/* cards */}
        <div className="flex flex-cold md:flex-row gap-5 text-white">
          <div className="card w-96 bg-blue-500 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl"> Total users < FaUsers className="text-3xl"/></h2>
              <p className="text-xl">{totalData.users}</p>
            </div>
          </div>
          <div className="card w-96  bg-red-500 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Total Requests <FaCodePullRequest className="text-3xl"/></h2>
              <p className="text-xl">{totalData.requests}</p>
            </div>
          </div>
          <div className="card w-96 bg-violet-500 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Total Donation Count <TbDiscountCheck className="text-3xl" /></h2>
              <p className="text-xl">{totalData.donationsCount}</p>
            </div>
          </div>
          <div className="card w-96 bg-green-500 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Total Donations Collected <FaHandHoldingDollar className="text-3xl"/></h2>
              <p className="text-xl">$ {total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
