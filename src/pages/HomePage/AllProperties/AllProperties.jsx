import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllProperties = () => {
  const axiosPublic = useAxiosPublic();
  const { data: properties = [] } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products`);
      return res.data;
    },
  });
  console.log(properties);
  return (
    <div>
      <h1>Properties: {properties.length}</h1>
    </div>
  );
};

export default AllProperties;
