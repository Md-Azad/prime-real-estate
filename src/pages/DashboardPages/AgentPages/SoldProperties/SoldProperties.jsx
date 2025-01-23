import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const SoldProperties = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [revenue, setRevenue] = useState(0);
  const { data: soldProperties = [] } = useQuery({
    queryKey: ["sold", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/sold/${user?.email}`);
      return res.data;
    },
  });

  const p = soldProperties.reduce(
    (total, acc) => total + parseInt(acc.soldPrice),
    0
  );
  useEffect(() => {
    setRevenue(p);
  }, [soldProperties]);

  return (
    <div>
      <div>
        <h1 className="bg-purple-700 w-1/3 rounded-md py-8 pl-8 text-xl font-bold text-white">
          Total Revenue: ${revenue}
        </h1>
      </div>
      <h1 className="text-green-700 text-center py-4 text-2xl underline font-bold">
        My sold Properties
      </h1>
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
