import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddProperties = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit } = useForm();

  const apiKey = import.meta.env.VITE_Imagebb_api;

  const onSubmit = async (data) => {
    const image = { image: data.image[0] };

    const res = await axiosPublic.post(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      image,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    if (res.data.success) {
      const product = {
        name: user.displayName,
        email: user.email,
        title: data.title,
        location: data.location,
        min: data.min,
        max: data.max,
        image: res.data?.data?.display_url,
        status: "pending",
      };

      axiosSecure
        .post("/products", product)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your post is being verified!",
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
    <div>
      <h1 className="text-center uppercase text-2xl text-purple-500 font-bold">
        Add properties
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
                placeholder=" Property Location"
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
                defaultValue={user?.displayName}
                readOnly
                placeholder="Agent Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Agent Email</span>
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
                <span className="label-text">Price Range</span>
              </label>
              <div className="flex gap-4">
                <input
                  type="number"
                  {...register("min")}
                  placeholder="Minimum Price"
                  className="input input-bordered w-1/2"
                  required
                />
                <input
                  type="number"
                  {...register("max")}
                  placeholder="Maximum Price"
                  className="input input-bordered w-1/2"
                  required
                />
              </div>
            </div>
            <input
              type="file"
              {...register("image")}
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />

            <div className="form-control mt-6">
              <input
                className={`btn btn-primary `}
                type="submit"
                value="Add Property"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProperties;
