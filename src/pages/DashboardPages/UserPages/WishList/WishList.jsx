import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";

const WishList = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: wishList = [], refetch } = useQuery({
    queryKey: ["mywishlist"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/mywishlist/${user.email}`);
      return res.data;
    },
  });
  console.log("mywishlist", wishList);

  const handleWishListDelete = (id) => {
    axiosSecure
      .delete(`/wishlist/${id}`)
      .then((res) => {
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
      {/* <h1>WishList will be here for the user. {wishList.length}</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {wishList.map((list) => (
          <div key={list._id} className="border-2 p-2 rounded-lg">
            <div className="">
              <img
                className="w-full h-full object-contain rounded-lg"
                src={list?.propertyImage}
                alt=""
              />
            </div>
            <div className="bg-slate-200">
              <div className="flex flex-col items-center">
                <p>Agent Name: {list?.agentName}</p>
                {/* <img
                  className="w-12 h-12 rounded-lg"
                  src={list?.propertyImage}
                  alt=""
                /> */}
              </div>
              <p className="text-center">
                Property Name: {list?.propertyTitle}
              </p>
              <p className="text-center">Location: {list?.propertyLocation}</p>
              <p className="text-center">
                {" "}
                Varification Status: {list?.varificationStatus}
              </p>
              <p className="text-center">
                Price Range: ${list?.propertyMin} - ${list?.propertyMax}
              </p>
              <div className="flex flex-col md:flex-row justify-between">
                <Link to={`/dashboard/makeoffer/${list.propertyId}`}>
                  <button className="btn btn-sm btn-accent text-white ">
                    Make Offer
                  </button>
                </Link>
                <button
                  onClick={() => handleWishListDelete(list._id)}
                  className="btn btn-sm btn-error text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
