import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myreviews = [], refetch } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myreview/${user?.email}`);
      return res.data;
    },
  });
  console.log(myreviews);
  const handleDeleteReview = (review) => {
    axiosSecure
      .delete(`/myreviews/${review.reviewerEmail}?id=${review._id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Review Has Been Deleted.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <h1>My Reviews: {myreviews.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Property Title</th>
              <th>Agent Name</th>
              <th>Review Time</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myreviews.map((review, idx) => (
              <tr>
                <th>{idx + 1} </th>
                <td>{review?.propertyTitle ? review?.propertyTitle : "N/A"}</td>
                <td>{review.agentName}</td>
                <td>{review.time}</td>
                <td>{review.review}</td>
                <td>
                  <button
                    onClick={() => handleDeleteReview(review)}
                    className="btn btn-error"
                  >
                    <FaTrashAlt className="text-white"></FaTrashAlt>
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

export default MyReviews;
