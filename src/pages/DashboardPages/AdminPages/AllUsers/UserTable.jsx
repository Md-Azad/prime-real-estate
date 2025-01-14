import { MdDeleteForever } from "react-icons/md";
const UserTable = ({ user }) => {
  const { name, email, role } = user;
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
          <button className="btn bg-purple-600 text-white">Make Admin</button>
        </td>
        <td>
          <button className="btn bg-blue-600 text-white">Make Agent</button>
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
