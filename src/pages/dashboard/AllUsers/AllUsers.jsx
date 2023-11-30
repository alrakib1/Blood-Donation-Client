import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useUsers from "../../../hooks/useUsers";

const AllUsers = () => {
  const { users, refetch } = useUsers();
  const axiosPublic = useAxiosPublic();

  const handleBlock = async (id) => {
    const res = await axiosPublic.patch(`/users/block/${id}`);

    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        title: "user has been blocked",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleActive = async (id) => {
    const res = await axiosPublic.patch(`/users/active/${id}`);

    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        title: "user has been unblocked",
        showConfirmButton: false,
        icon: "success",
        timer: 1500,
      });
    }
  };

  const handleVolunteer = async (id) => {
    console.log("volunteer btn", id);
    const res = await axiosPublic.patch(`/users/volunteer/${id}`);
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        title: "user has been added as volunteer",
        showConfirmButton: false,
        icon: "success",
        timer: 1500,
      });
    }
  };

 

  const handleAdmin = async (id) => {
    console.log("admin btn", id);

    const res = await axiosPublic.patch(`/users/admin/${id}`);
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "user has been added as an admin",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <h3 className="mt-10 mb-11 text-2xl font-bold text-center">All Users</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user?.avatarImage} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                      <div className="text-sm opacity-50">
                        {user?.upazila},{user?.district}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user?.email}</td>
                <td>{user.status}</td>

                <td>{user.role}</td>
                {user.status === "active" && (
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleBlock(user._id)}
                    >
                      Block User
                    </button>
                  </th>
                )}
                {user.status === "blocked" && (
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleActive(user._id)}
                    >
                      Unblock User
                    </button>
                  </th>
                )}
                {user.role !== "admin" && (
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleVolunteer(user._id)}
                    >
                      Make Volunteer
                    </button>
                  </th>
                )}
                {user.role !== "admin" && (
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleAdmin(user._id)}
                    >
                      Make Admin
                    </button>
                  </th>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
