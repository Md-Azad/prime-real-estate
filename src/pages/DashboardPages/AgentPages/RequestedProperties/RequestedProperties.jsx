import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";

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

  const handleReject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to reject this offer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/offerreject/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Rejected!",
              icon: "success",
            });
          }
        });
      }
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
                      {list?.status === "pending" ? (
                        <button
                          onClick={() => handleAcceptOffer(list)}
                          className="btn btn-success text-white"
                          disabled={list?.status === "accepted"}
                        >
                          Accept
                        </button>
                      ) : (
                        <h1
                          className={`${
                            list?.status === "accepted"
                              ? "bg-green-700"
                              : "bg-red-700"
                          } text-white text-center rounded-lg`}
                        >
                          {list?.status}
                        </h1>
                      )}
                    </td>
                    <td>
                      {list?.status === "pending" ? (
                        <button
                          onClick={() => {
                            handleReject(list._id);
                          }}
                          className=" btn btn-error"
                        >
                          <ImCross className="text-white text-xl"></ImCross>
                        </button>
                      ) : (
                        <h1
                          className={`${
                            list?.status === "accepted"
                              ? "bg-green-700"
                              : "bg-red-700"
                          } text-white text-center rounded-lg`}
                        >
                          {list?.status}
                        </h1>
                      )}
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
