import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: userInfo = [], isPending } = useQuery({
    queryKey: ["user", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${user?.email}`);
      return res.data?.role;
    },
  });
  return [userInfo, isPending];
};

export default useRole;
