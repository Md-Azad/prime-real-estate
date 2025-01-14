import { useQuery } from "@tanstack/react-query";
import UserTable from "./UserTable";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <div>
      <h1>Here is All users.{users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Make Agent</th>
              <th>isFraud</th>
              <th>Action</th>
            </tr>
          </thead>
          {users.map((user) => (
            <UserTable key={user._id} user={user} refetch={refetch}></UserTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
