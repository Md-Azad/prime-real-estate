import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const apiKey = import.meta.env.VITE_Imagebb_api;

const UpdateProperty = () => {
  const { register, handleSubmit } = useForm();
  const id = useParams();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const { data: property = [], refetch } = useQuery({
    queryKey: ["update", id?.id],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/product/${id?.id}`);

      return res.data;
    },
  });

  const onSubmit = async (data) => {
    const image = { image: data.image[0] };
    const res = await axiosPublic.post(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      image,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    if (res.data.success) {
      console.log("image uploaded successfully");
      const updatedProduct = {
        title: data.title,
        location: data.location,
        min: data.min,
        max: data.max,
        image: res.data?.data?.display_url,
      };

      axiosSecure
        .patch(`/updateproducts/${id.id}`, updatedProduct)
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            navigate("/dashboard/myproperties");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your post is updated!",
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
        Update properties
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
                defaultValue={property?.title}
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
                defaultValue={property?.location}
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
                  defaultValue={property?.min}
                  placeholder="Minimum Price"
                  className="input input-bordered w-1/2"
                  required
                />
                <input
                  type="number"
                  {...register("max")}
                  defaultValue={property?.max}
                  placeholder="Maximum Price"
                  className="input input-bordered w-1/2"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  You must have to upload an image
                </span>
              </label>
              <input
                type="file"
                {...register("image")}
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              />
            </div>

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

export default UpdateProperty;
