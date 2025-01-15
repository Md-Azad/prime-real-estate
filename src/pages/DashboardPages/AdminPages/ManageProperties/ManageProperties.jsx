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

  const handleAcceptProperty = (property) => {
    const { status, ...rest } = property;
    const updateProduct = {
      ...rest,
      status: "accepted",
    };
    axiosSecure
      .post("/allproducts", updateProduct)
      .then((res) => {
        console.log(res.data);
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
                    className="btn bg-green-700 text-white"
                  >
                    Accept
                  </button>
                </td>
                <td>
                  <button className="btn bg-red-700 text-white">Reject</button>
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
