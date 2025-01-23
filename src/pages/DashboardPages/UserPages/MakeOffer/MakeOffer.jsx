import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const MakeOffer = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const id = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: product = [] } = useQuery({
    queryKey: ["offer", id.id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/product/${id.id}`);
      return res.data;
    },
  });

  const onSubmit = async (data) => {
    const min = parseFloat(product.min);
    const max = parseFloat(product.max);
    if (data.offer < min) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Offer has to be more than ${min}`,
      });
    }
    if (data.offer > max) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Offer has to be less than ${max}`,
      });
    }

    const offerData = {
      for: product._id,
      offerPrice: data.offer,
      date: data.date,
      status: "pending",
    };

    axiosSecure
      .patch(`/wishlist/${user?.email}`, offerData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          navigate("/dashboard/boughtproperty");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added to the wishlist.",
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
      <h1 className="text-center uppercase text-2xl text-purple-500 font-bold">
        Make an Offer
      </h1>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="card bg-base-100 w-full shadow-2xl ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Property Title</span>
              </label>
              <input
                type="text"
                {...register("title")}
                defaultValue={product?.title}
                placeholder="Property Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                {...register("location")}
                defaultValue={product?.location}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Agent Name</span>
              </label>
              <input
                type="text"
                {...register("agentName")}
                defaultValue={product.name}
                readOnly
                placeholder="Agent Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Buyer Name</span>
              </label>
              <input
                type="text"
                {...register("buyername")}
                defaultValue={user?.displayName || user.email.split("@")[0]}
                readOnly
                placeholder="Agent Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Buyer Email</span>
              </label>
              <input
                type="email"
                {...register("agentEmail")}
                defaultValue={user?.email}
                placeholder="Agent Email"
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex ">
              <label className="label justify-start gap-4">
                <span className="label-text">Offer Amount</span>
              </label>
              <div className="flex gap-4">
                <input
                  type="number"
                  {...register("offer")}
                  placeholder={`min value- ${product.min}- max value-${product.max}`}
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Buying Date</span>
              </label>
              <input
                type="date"
                {...register("date")}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input
                className={`btn btn-primary `}
                type="submit"
                value="Submit Offer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeOffer;
