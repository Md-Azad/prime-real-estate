import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useRole from "../../hooks/useRole";

const ProfileCard = ({ profile, setLoading }) => {
  const [update, setUpdate] = useState(false);
  const { updateUser } = useAuth();
  const [role] = useRole();

  const axiosSecure = useAxiosSecure();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;

    updateUser(name, image)
      .then((res) => {
        setUpdate(false);
        const userInfo = {
          name: name,
          image: image,
        };
        if (profile?.email) {
          axiosSecure
            .patch(`/updatemyinfo/${profile?.email}`, userInfo)

            .then((res) => {
              if (res.data.modifiedCount > 0) {
                setLoading(false);

                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your Profile has been updated.",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
      <div className="card card-compact flex-row bg-gray-100 w-full shadow-xl ">
        <figure className="h-56">
          <img className="h-full w-full" src={profile?.photoURL} alt="Shoes" />
        </figure>

        <div className="card-body flex-row justify-between ">
          <div>
            <h2 className="card-title">{profile?.displayName}</h2>
            <p className="cart-title">{profile?.email}</p>
            <p className="uppercase cart-title">{role}</p>
          </div>
          <div className="card-actions bottom-0 absolute right-0  mb-2">
            <button
              onClick={() => setUpdate((prevUpdate) => !prevUpdate)}
              className="btn btn-info text-white mr-2"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
      {update && (
        <form
          onSubmit={handleUpdateProfile}
          className="space-y-4 border-2 p-12 rounded-md border-cyan-600"
        >
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input
              name="name"
              type="text"
              required
              className="grow"
              placeholder="Name"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Photo URL
            <input
              name="image"
              type="text"
              required
              className="grow"
              placeholder="Photo URL"
            />
          </label>
          <div className="text-center mt-4">
            <input
              className="btn btn-accent text-white"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileCard;
