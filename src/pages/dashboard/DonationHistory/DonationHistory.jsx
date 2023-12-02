import { useQuery } from "@tanstack/react-query";


import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";


const DonationHistory = () => {

    // const axiosSecure = useAxiosSecure();
    const axiosPublic  = useAxiosPublic();
    const {user} = useAuth();
    const {data:donations=[]}=useQuery({
        queryKey: ['payments',user.email],
        queryFn : async ()=>{
            const res = await axiosPublic.get(`/payments/${user.email}`)
            return res.data;
        }
    })

   
    return (
        <div>
            <h2 className="text-2xl">Total Donations: {donations.length}</h2>
            <div className="overflow-x-auto mt-10">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Payment</th>
        <th>Transaction Id</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        donations.map((item,index)=> <tr key={item._id}>
            <th>{index+1}</th>
            <td>{item.email}</td>
            <td>${item.price}</td>
            <td>{item.transactionId}</td>
            <td>{item.date}</td>
          
          </tr>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default DonationHistory;