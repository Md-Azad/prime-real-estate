import { useRef } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const DetailsCard = ({ property }) => {
  const reviewRef = useRef(null);
  const axiosSecure = useAxiosSecure();
  const handleAddReview = (id) => {
    let review = reviewRef.current.value;
    axiosSecure
      .patch(`/addreview/${id}`, { review })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
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
          <p className="text-xl ">Description: {property?.description}</p>

          <p className="text-xl">
            Price Range: ${property?.max} - ${property?.min}
          </p>
          <div>
            <button className="btn bg-purple-700 hover:bg-purple-500 text-white">
              Add to Wishlist
            </button>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className=" ml-4 btn bg-purple-700 hover:bg-purple-500 text-white"
            >
              Add a Review
            </button>
          </div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}

          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="flex flex-col mt-4">
                <h1>Add a review</h1>
                <textarea
                  ref={reviewRef}
                  className="textarea textarea-primary "
                  placeholder="Write here"
                ></textarea>

                <button
                  onClick={() => handleAddReview(property?._id)}
                  className="btn btn-info btn-sm  mt-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
