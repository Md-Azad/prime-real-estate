import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className=" bg-gray-200 md:h-72 rounded-md  ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="h-64 w-full">
          <img
            src={property?.image}
            className=" h-full w-full object-cover  rounded-lg shadow-2xl"
          />
        </div>
        <div className=" w-full space-y-1">
          <h1 className="text-xl md:text-2xl font-bold">
            Property Name:{property?.title}
          </h1>
          <p className="badge badge-success text-white">
            <span>{property?.status === "accepted" && "Verified"}</span>
          </p>
          <p className="py-2 text-xl">Location:{property?.location}</p>
          <p className="text-xl">image: will be available letter</p>

          <p className="text-xl">
            Price Range: ${property?.max} - ${property?.min}
          </p>
          <div className="text-center pt-4">
            <Link to={`/allProperties/details/${property?._id}`}>
              <button className="btn btn-info text-white w-full">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
