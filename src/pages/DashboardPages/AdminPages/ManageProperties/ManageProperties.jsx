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
    axiosSecure
      .patch(`/products/${property._id}`)

      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  console.log("properties", properties);
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
                    className="btn bg-green-700 text-white"
                  >
                    {property?.status === "accepted" ? "verified" : "Accepted"}
                  </button>
                </td>
                <td>
                  <button
                    disabled={property?.status === "accepted"}
                    className="btn bg-red-700 text-white"
                  >
                    Reject
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
