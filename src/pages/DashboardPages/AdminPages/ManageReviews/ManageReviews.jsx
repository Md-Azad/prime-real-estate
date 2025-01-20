import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

import { FaTrashAlt } from "react-icons/fa";

const ManageReviews = () => {
  const axiosSecure = useAxiosSecure();

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");

      return res.data;
    },
  });

  const handleReviewDelete = (id) => {
    axiosSecure
      .delete(`/reviews/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      {reviews.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Reviewer name</th>
                <th>email</th>
                <th>Review</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, idx) => (
                <tr key={review._id}>
                  <th>{idx + 1}</th>
                  <td>
                    {review?.reviewDetails[0]?.image ? (
                      <img
                        className="w-12 h-12 rounded-md"
                        src={review.reviewDetails[0].image}
                        alt=""
                      />
                    ) : (
                      <p>N/A</p>
                    )}
                  </td>
                  <td>{review?.reviewDetails[0].name}</td>
                  <td>{review?.reviewerEmail}</td>
                  <td>{review.review}</td>
                  <td>
                    <button
                      onClick={() => handleReviewDelete(review._id)}
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
      ) : (
        <h1> No Review Found</h1>
      )}
    </div>
  );
};

export default ManageReviews;
