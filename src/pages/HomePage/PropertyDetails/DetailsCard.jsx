import { useState } from "react";

const DetailsCard = ({ property }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className=" bg-gray-200 min-h-screen rounded-md   ">
      <div className=" flex-col  items-center justify-center   ">
        <div className=" h-64 md:h-[24rem] w-full ">
          <img
            src={property?.image}
            className=" h-full w-full object-cover  rounded-lg shadow-2xl"
          />
        </div>
        <div className=" w-full text-center space-y-1 pt-4 ">
          <h1 className="text-xl md:text-2xl font-bold">
            Property Name:{property?.title}
            <span className="ml-4 badge badge-success text-white">
              {property?.status === "accepted" && "Verified"}
            </span>
          </h1>
          <p className="text-xl">Agent Name: {property?.name}</p>
          <p className=" text-xl">Location:{property?.location}</p>
          <p className="text-xl text-red-700">
            Description will be here letter.
          </p>

          <p className="text-xl">
            Price Range: ${property?.max} - ${property?.min}
          </p>
          <div>
            <button className="btn bg-purple-700 hover:bg-purple-500 text-white">
              Add to Wishlist
            </button>
            <button
              onClick={() => setIsShow(!isShow)}
              className=" ml-4 btn bg-purple-700 hover:bg-purple-500 text-white"
            >
              Add a Review
            </button>
          </div>
          {isShow && (
            <div className=" h-36 flex flex-col justify-center items-center space-y-2">
              <h1>Write a review</h1>
              <textarea
                className="textarea textarea-primary w-1/3 h-32 pb-8"
                placeholder="Write here"
              ></textarea>
              <button className="btn btn-info btn-sm ">Submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
