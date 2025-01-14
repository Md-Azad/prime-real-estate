import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllProperties = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: userInfo = [] } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${user?.email}`);
      return res.data;
    },
  });
  console.log(userInfo.role);
  return (
    <div>
      <h1>{`Welcome back ${userInfo?.name}`}</h1>
    </div>
  );
};

export default AllProperties;
