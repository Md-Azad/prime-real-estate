import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const RequestedProperties = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: requestedList = [] } = useQuery({
    queryKey: ["requestedOffers", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlist/${user?.email}`);
      return res.data;
    },
  });
  console.log(requestedList);
  return (
    <div>
      <h1>Requested properties.{requestedList.length}</h1>
    </div>
  );
};

export default RequestedProperties;
