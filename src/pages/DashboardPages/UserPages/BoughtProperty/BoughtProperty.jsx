import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const BoughtProperty = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myProperty = [] } = useQuery({
    queryKey: ["myBought", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/buy/${user?.email}`);
      return res.data;
    },
  });
  console.log(myProperty);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      {myProperty.map((pro) => (
        <div key={pro._id} className=" bg-gray-200 px-4">
          <div className="text-center">
            <p className="text-xl font-bold">
              Property Name: {pro?.propertyTitle}
            </p>
            <p className="text-xl font-bold">City: {pro?.propertyLocation}</p>
          </div>
          <div className="w-36 h-36 md:w-full md:h-3/5">
            <img className="w-full h-full" src={pro?.propertyImage} alt="" />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold mt-2">
              <p> Agent Name: {pro?.agentName}</p>
              <p>
                {pro?.status === "bought" ? "Sold Price" : "Offered Price"}: $
                {pro?.offerPrice}
              </p>
              <p>
                Status:{" "}
                <span className="text-purple-700">
                  {pro.status && "Bought"}
                </span>
              </p>
              <p className="text-green-700 text-sm">
                PaymentId: {pro.paymentId}
              </p>
            </div>
            {pro?.status === "accepted" && (
              <Link to={`/dashboard/payment/${pro._id}`}>
                <button className="btn bg-purple-600 text-white">Pay</button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoughtProperty;
