import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProperty = () => {
  const axiosPublic = useAxiosPublic();
  const { data: properties = [], isPending } = useQuery({
    queryKey: ["allproperties"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products`);
      return res.data;
    },
  });
  return [properties, isPending];
};

export default useProperty;
