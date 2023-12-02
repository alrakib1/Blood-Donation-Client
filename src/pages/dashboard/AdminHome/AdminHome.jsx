import { Helmet } from "react-helmet";
import useAuth from "../../../hooks/useAuth";


const AdminHome = () => {
    const {user}=useAuth();
    return (
        <div>
           <Helmet>
        <title>Blood Donation | Dashboard</title>
      </Helmet>
      <h1 className="text-2xl font-semibold">Welcome {user?.displayName}</h1>
      <div className="mt-3">


      </div>
        </div>
    );
};

export default AdminHome;