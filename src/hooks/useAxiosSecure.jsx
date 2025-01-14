import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  // interceptor in request to inject the token;

  axiosSecure.interceptors.request.use(
    function (config) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  //   interceptor in response to use the status code from server.

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      const status = err.request.status;
      //   for 401 and 403 status make the user logout and redirect them to the login page.
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
