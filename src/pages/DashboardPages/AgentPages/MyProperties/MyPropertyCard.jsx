const MyPropertyCard = ({ property }) => {
  console.log("property : ", property.image);
  const { _id, name, email, title, location, image, min, max, status } =
    property;
  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure className=" w-full h-44 ">
        <img className="w-full h-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body bg-gray-100">
        <h2 className="card-title">
          {title}
          <div
            className={`badge text-white  ${
              (status === "accepted" && "badge-success") ||
              (status === "pending" && "badge-warning") ||
              "badge-error"
            }`}
          >
            {status}
          </div>
        </h2>
        <p>Location: {location}</p>
        <p>
          Price Range: ${min}- ${max}
        </p>
        <p>Agent Name: {name}</p>
        <p>Agent Email: {email}</p>

        <div className="card-actions justify-end">
          <button
            disabled={status === "rejected"}
            className={`badge ${
              status === "rejected"
                ? "badge-ghost text-black"
                : "badge-warning "
            }  text-white`}
          >
            Update
          </button>
          <div className="badge badge-error text-white">Delete</div>
        </div>
      </div>
    </div>
  );
};

export default MyPropertyCard;
