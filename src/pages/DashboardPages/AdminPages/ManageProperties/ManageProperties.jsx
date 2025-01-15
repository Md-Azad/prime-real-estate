import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageProperties = () => {
  const axiosSecure = useAxiosSecure();
  const { data: properties = [], isPending } = useQuery({
    queryKey: ["property"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products");
      return res.data;
    },
  });
  if (isPending) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div>
      <h1>Manage Properties. {properties.length}</h1>
    </div>
  );
};

export default ManageProperties;
