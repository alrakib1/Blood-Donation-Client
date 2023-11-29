// Below of the welcome section donor will see his maximum 3 recent donation
// request those was requested by the donor who is currently logged in. For
// example, if you are a donor then if you come to this page you will see your 3
// recent donation request (show as tabular format). If the user has not any
// donation request yet this section will be hidden.

import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
    const {user} = useAuth();

    return (
        <div>
            <h1 className="text-2xl font-semibold">Welcome {user?.displayName}</h1>

            <section className="mt-10">

                <h2 className="text-xl mb-5">Recent Request</h2>
                {/* 3 recent donation request */}

                <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>1</th> 
        <td>Cy Ganderton</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
      </tr>
    </tbody> 
    
  </table>
</div>
            </section>
        </div>
    );
};

export default DashboardHome;