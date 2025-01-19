import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const WishList = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: wishList = [] } = useQuery({
    queryKey: ["mywishlist"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlist/${user.email}`);
      return res.data;
    },
  });
  console.log(wishList);
  return (
    <div>
      {/* <h1>WishList will be here for the user. {wishList.length}</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {wishList.map((list) => (
          <div key={list._id} className="border-2 p-2 rounded-lg">
            <div className="">
              <img
                className="w-full h-full object-contain rounded-lg"
                src={list.myList[0].image}
                alt=""
              />
            </div>
            <div className="bg-slate-200">
              <div className="flex flex-col items-center">
                <p>Agent Name: {list.myList[0].name}</p>
                <img
                  className="w-12 h-12 rounded-lg"
                  src={list.userDetails[0].image}
                  alt=""
                />
              </div>
              <p className="text-center">
                Property Name: {list.myList[0].title}
              </p>
              <p className="text-center">Location: {list.myList[0].location}</p>
              <p className="text-center"> Status: {list.status}</p>
              <div className="flex flex-col md:flex-row justify-between">
                <button className="btn btn-sm btn-accent text-white ">
                  Make Offer
                </button>
                <button className="btn btn-sm btn-error text-white">
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
