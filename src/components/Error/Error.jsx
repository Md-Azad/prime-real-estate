import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-purple-500">
        Page did not found!
      </h1>

      <TbError404 className="text-[20rem] text-red-700 font-bold"></TbError404>

      <Link to="/">
        <button className="btn bg-purple-600 text-white">Back To Home</button>
      </Link>
    </div>
  );
};

export default Error;
