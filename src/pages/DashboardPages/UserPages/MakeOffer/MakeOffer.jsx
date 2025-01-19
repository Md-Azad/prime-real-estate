import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const MakeOffer = () => {
  const id = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: product = [] } = useQuery({
    queryKey: ["offer", id.id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/product/${id.id}`);
      return res.data;
    },
  });
  console.log(product);
  return (
    <div>
      <h1>here will be the offer page.</h1>
    </div>
  );
};

export default MakeOffer;
