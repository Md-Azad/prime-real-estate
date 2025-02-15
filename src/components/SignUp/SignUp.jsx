import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useState } from "react";

const SignUp = () => {
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [passError, setPassError] = useState("");
  const handleSignUp = (e) => {
    setPassError("");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;

    const password = form.password.value;
    const isCapital = /[A-Z]/;
    const hasSpecialCharacter = /[!@#$%^&*]/;
    const isLong = /.{6,}/;
    const checkCapital = isCapital.test(password);
    const checkSpecial = hasSpecialCharacter.test(password);
    const checkLong = isLong.test(password);

    if (!checkSpecial) {
      setPassError("password must contain a special letter");
      return;
    }
    if (!checkCapital) {
      setPassError("password must contain a capital letter");
      return;
    }
    if (!checkLong) {
      setPassError("password must contain at least 6 letters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        if (user?.email) {
          updateUser(name, photo)
            .then(() => {})
            .catch((err) => {
              setPassError(err.message);
            });
        }
        if (user?.email) {
          const userInfo = {
            uid: user.uid,
            name,
            email: user.email,
            image: photo,
            role: "user",
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        }
      })
      .catch((err) => {
        setPassError(err.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col w-3/5  ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up As User!</h1>
        </div>
        <div className="card bg-base-100 w-full shadow-2xl ">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <p className="text-red-700">{passError}</p>

            <div className="form-control mt-6">
              <input
                className={`btn btn-primary `}
                type="submit"
                value="SignUp"
              />
            </div>
          </form>
          <div className="text-center">
            <div className="divider divider-success">OR</div>

            <SocialLogin></SocialLogin>
          </div>
          <div className="divider "></div>
          <p
            className="text-center mb-4
          "
          >
            <small>
              Allready Have an Account?{" "}
              <Link to="/login" className="text-yellow-500">
                Login Here
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
