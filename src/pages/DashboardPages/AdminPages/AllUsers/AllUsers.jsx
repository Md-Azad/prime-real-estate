import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import UserTable from "./UserTable";

const AllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
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
            <UserTable key={user._id} user={user}></UserTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
