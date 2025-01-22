// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import PropertyCard from "./PropertyCard";
import useProperty from "../../../hooks/useProperty";

const AllProperties = () => {
  const [properties] = useProperty();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property._id} property={property}></PropertyCard>
      ))}
    </div>
  );
};

export default AllProperties;
