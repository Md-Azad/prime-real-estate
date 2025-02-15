import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyPropertyCard = ({ property, refetch }) => {
  const { _id, name, email, title, location, image, min, max, status } =
    property;
  const axiosSecure = useAxiosSecure();

  const handlePropertyDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/products/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Property has been deleted.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

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
          <Link to={`/dashboard/update/${_id}`}>
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
          </Link>
          <button
            onClick={() => handlePropertyDelete(_id)}
            className="badge badge-error text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPropertyCard;
