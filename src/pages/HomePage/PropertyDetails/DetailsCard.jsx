import { useRef } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import { useQuery } from "@tanstack/react-query";

const DetailsCard = ({ property }) => {
  const { user } = useAuth();
  const [userInfo] = useRole();

  const reviewRef = useRef(null);
  const axiosSecure = useAxiosSecure();

  const { data: myreviews = [], refetch } = useQuery({
    queryKey: ["myreviews", property._id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${property._id}`);
      console.log("reviews", res.data);
      return res.data;
    },
  });

  const handleAddReview = (id) => {
    if (userInfo !== "user") {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Only A user can add a review.",
      });
    } else {
      let review = reviewRef.current.value;
      const reviewDoc = {
        propertyId: id,
        reviewerEmail: user?.email,
        review: review,
      };
      axiosSecure
        .post(`/addreview`, { reviewDoc })
        .then((res) => {
          if (res.data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Review is under concideration.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
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
          <div className="bg-purple-200 pt-4 border-2  border-yellow-300">
            {myreviews.length < 1 && (
              <h1 className="text-2xl text-center">
                This Property yet to receive a review.
              </h1>
            )}
            {myreviews.length > 0 && (
              <h1 className="text-xl font-bold">
                What People say About this Property.
              </h1>
            )}
            {myreviews.map((review, index) => (
              <div key={review._id}>
                <h1>
                  {index + 1}--{review.review}
                </h1>
              </div>
            ))}
          </div>

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

                <form method="dialog">
                  <button
                    onClick={() => handleAddReview(property?._id)}
                    className="btn btn-info btn-sm  mt-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
