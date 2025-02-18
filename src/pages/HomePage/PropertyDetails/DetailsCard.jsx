import { useRef } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const DetailsCard = ({ property }) => {
  const { user } = useAuth();
  const [userInfo] = useRole();

  const reviewRef = useRef(null);
  const axiosSecure = useAxiosSecure();

  const { data: myreviews = [], refetch } = useQuery({
    queryKey: ["myreviews", property._id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${property._id}`);

      return res.data;
    },
  });

  const handleAddReview = (property) => {
    if (userInfo !== "user") {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Only A user can add a review.",
      });
    } else {
      let review = reviewRef.current.value;
      const reviewDoc = {
        propertyId: property._id,
        propertyTitle: property.title,
        agentName: property.name,
        reviewerEmail: user?.email,
        review: review,
        time: moment().format(" MMMM Do YYYY, h:mm a"),
      };

      axiosSecure
        .post(`/addreview`, { reviewDoc })
        .then((res) => {
          if (res.data.insertedId) {
            refetch();
            reviewRef.current.value = null;
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

  const handleAddToWishlist = (property) => {
    if (userInfo !== "user") {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Only User Can Buy Property.",
      });
    }
    const data = {
      buyerEmail: user.email,
      buyerName: user.displayName,
      propertyId: property._id,
      agentEmail: property.email,
      agentName: property.name,
      propertyLocation: property.location,
      propertyImage: property.image,
      propertyMin: property.min,
      propertyMax: property.max,
      varificationStatus: property.status,
      propertyTitle: property.title,

      status: "listed",
    };
    axiosSecure
      .post("/wishlist", data)
      .then((res) => {
        if (res.data.message) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Already wishlisted..",
          });
        }
        if (res.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added to the wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  };
  return (
    <div className="  min-h-screen rounded-md   ">
      <div className=" flex-col bg-gray-200  items-center justify-center   ">
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
          <p className="text-xl text-left pl-4">
            Description: {property?.description}
          </p>

          <p className="text-xl">
            Price Range: ${property?.max} - ${property?.min}
          </p>
          <div>
            <button
              onClick={() => handleAddToWishlist(property)}
              className="btn bg-purple-700 hover:bg-purple-500 text-white"
            >
              Add to Wishlist
            </button>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className=" ml-4 btn bg-purple-700 hover:bg-purple-500 text-white"
            >
              Add a Review
            </button>
          </div>

          {/* modal */}
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
                    onClick={() => handleAddReview(property)}
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
      <div className="bg-white  pt-4 my-4  ">
        {myreviews.length < 1 && (
          <h1 className="text-2xl text-center">
            This Property yet to receive a review.
          </h1>
        )}
        {myreviews.length > 0 && (
          <h1 className="text-xl font-bold text-center">
            What People say About this Property.
          </h1>
        )}
        {myreviews.map((review, index) => (
          <div key={review._id} className="flex justify-center items-center">
            <h1>
              {index + 1}.{review.review}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsCard;
