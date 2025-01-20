import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const SoldProperties = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: soldProperties = [] } = useQuery({
    queryKey: ["sold", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/sold/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Property Title</th>
              <th>Location</th>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              <th>Sold Price</th>
            </tr>
          </thead>
          <tbody>
            {soldProperties.map((sold, idx) => (
              <tr key={sold._id}>
                <th>{idx + 1}</th>
                <td>{sold?.propertyTitle}</td>
                <td>{sold?.propertyLocation}</td>
                <td>{sold?.buyerName}</td>
                <td>{sold?.buyerEmail}</td>
                <td>${sold?.offerPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SoldProperties;
