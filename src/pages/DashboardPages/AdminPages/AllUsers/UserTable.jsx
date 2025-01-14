import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const UserTable = ({ user, refetch }) => {
  const { name, email, role } = user;
  const [dis, setDisabled] = useState(false);
  const [disAgent, setDisAgent] = useState(false);

  const axiosSecure = useAxiosSecure();

  const handleMakeAdmin = (user) => {
    if (user.role === "admin") {
      setDisabled(true);

      Swal.fire({
        icon: "error",
        title: `Oops... ${name} is already an Admin`,
      });
    } else {
      const updatedRole = "admin";
      axiosSecure
        .patch(`/users/${email}`, { role: updatedRole })
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            setDisAgent(false);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} is an Admin now!`,
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
  const handleMakeAgent = (user) => {
    if (user.role === "agent") {
      setDisAgent(true);

      Swal.fire({
        icon: "error",
        title: `Oops... ${name} is already an ${role}`,
      });
    } else {
      const updatedRole = "agent";
      axiosSecure
        .patch(`/users/${email}`, { role: updatedRole })
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            setDisabled(false);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} is an ${updatedRole} now!`,
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
    <tbody>
      {}
      <tr>
        <th>1</th>
        <td className="flex flex-col">
          <h1 className="text-xl font-bold uppercase">{name}</h1>
          <button className="btn btn-xs bg-yellow-600 w-1/2 text-white ">
            {role}
          </button>{" "}
        </td>
        <td>{email}</td>
        <td>
          <button
            onClick={() => handleMakeAdmin(user)}
            disabled={dis}
            className="btn bg-purple-600 text-white"
          >
            Make Admin
          </button>
        </td>
        <td>
          <button
            onClick={() => handleMakeAgent(user)}
            disabled={disAgent}
            className="btn bg-blue-600 text-white"
          >
            Make Agent
          </button>
        </td>
        <td>
          <button className="btn bg-yellow-400 text-white">Is Fraud</button>
        </td>
        <td>
          <button className="btn bg-red-600 text-white">
            <MdDeleteForever className="text-xl" />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default UserTable;
