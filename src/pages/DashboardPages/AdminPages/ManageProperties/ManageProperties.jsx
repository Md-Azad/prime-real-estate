import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageProperties = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: properties = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["property"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allproducts");
      return res.data;
    },
  });
  if (isPending) {
    return <progress className="progress w-56"></progress>;
  }

  const handleAcceptProperty = (property) => {
    const status = "accepted";
    axiosSecure
      .patch(`/products/${property._id}`, { status })

      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleRejectStatus = (property) => {
    const status = "rejected";
    axiosSecure
      .patch(`/products/${property._id}`, { status })
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Location</th>
              <th>Agent Name</th>
              <th>Agent Email</th>
              <th>Price Range</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => (
              <tr key={property._id}>
                <th>{index + 1}</th>
                <td>{property?.title}</td>
                <td>{property?.location}</td>
                <td>{property?.name}</td>
                <td>{property?.email}</td>
                <td>
                  {property?.min} - {property?.max}
                </td>
                <td>
                  <button
                    onClick={() => handleAcceptProperty(property)}
                    className={`btn bg-green-700 ${
                      property?.status === "rejected" && "bg-red-500"
                    } text-white`}
                  >
                    {(property?.status === "accepted" && "Verified") ||
                      (property?.status === "rejected" && "Rejected") ||
                      "Accept"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleRejectStatus(property)}
                    disabled={property?.status === "accepted"}
                    className="btn bg-red-700 text-white"
                  >
                    {property?.status === "rejected" ? "Rejected" : "Reject"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProperties;
