import useAuth from "../../../../hooks/useAuth";
import useProperty from "../../../../hooks/useProperty";

const Advertise = () => {
  const [properties] = useProperty();
  const { setAdd } = useAuth();

  const handleAdvertise = (id) => {
    setAdd(id);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Property Image</th>
              <th>Property Title</th>
              <th>Price Range</th>
              <th>Agent Name</th>
              <th className="text-center">Action </th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, idx) => (
              <tr key={property?._id}>
                <th>{idx + 1}</th>
                <td>
                  <img
                    className="w-20 rounded-lg"
                    src={property?.image}
                    alt=""
                  />
                </td>
                <td>{property?.title}</td>
                <td>
                  ${property?.min}- ${property?.max}
                </td>
                <td>{property?.name}</td>
                <td className="text-center">
                  <button
                    onClick={() => handleAdvertise(property?._id)}
                    className="btn btn-warning"
                  >
                    Advertise
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

export default Advertise;
