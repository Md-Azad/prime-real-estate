import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const PropertyDetails = () => {
  const id = useParams();

  const axiosSecure = useAxiosSecure();
  const { data: property = [] } = useQuery({
    queryKey: ["property", id?.id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/productdetails/${id.id}`);
      console.log(res.data);
      return res.data;
    },
  });
  console.log(property);
  return (
    <div>
      <DetailsCard property={property}></DetailsCard>
    </div>
  );
};

export default PropertyDetails;
