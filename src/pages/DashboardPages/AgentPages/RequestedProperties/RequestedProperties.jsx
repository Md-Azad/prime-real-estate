import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

import { ImCross } from "react-icons/im";

const RequestedProperties = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: requestedList = [], refetch } = useQuery({
    queryKey: ["requestedOffers", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myofferlist/${user?.email}`);
      return res.data;
    },
  });
  console.log(requestedList);
  const handleAcceptOffer = (list) => {
    const data = {
      agentEmail: list?.agentEmail,
      propertyId: list?.propertyId,
      status: list?.status,
      soldPrice: list?.offerPrice,
    };
    axiosSecure
      .patch(`/acceptoffer/${list._id}`, data)
      .then((res) => {
        refetch();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      {requestedList.length > 0 ? (
        <>
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
                  <th>Offered Price</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {requestedList.map((list, idx) => (
                  <tr key={list._id}>
                    <th>{idx + 1}</th>
                    <td>{list?.propertyTitle} </td>
                    <td>{list?.propertyLocation}</td>
                    <td>{list?.buyerName}</td>
                    <td>{list?.buyerEmail}</td>
                    <td className="text-center">${list?.offerPrice}</td>
                    <td>
                      <button
                        onClick={() => handleAcceptOffer(list)}
                        className="btn btn-success text-white"
                      >
                        Accept
                      </button>
                    </td>
                    <td className=" btn btn-error">
                      <ImCross className="text-white text-2xl"></ImCross>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h1 className="text-2xl md:text-4xl text-center text-red-700 font-bold">
          {" "}
          You Do not have any Request for properties.
        </h1>
      )}
    </div>
  );
};

export default RequestedProperties;
