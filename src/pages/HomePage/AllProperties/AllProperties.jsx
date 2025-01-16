import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import PropertyCard from "./PropertyCard";

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* <h1>Properties: {properties.length}</h1> */}

      {properties.map((property) => (
        <PropertyCard key={property._id} property={property}></PropertyCard>
      ))}
    </div>
  );
};

export default AllProperties;
