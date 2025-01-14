import useRole from "../../../hooks/useRole";
import AdminHome from "../AdminPages/AdminHome/AdminHome";
import MyProfile from "../UserPages/MyProfile/MyProfile";

const DashboardHome = () => {
  const [role] = useRole();
  return (
    <>
      {role === "admin" && <AdminHome></AdminHome>}
      {role === "agent" && <h1>this is agent home</h1>}
      {role === "user" && <MyProfile></MyProfile>}
    </>
  );
};

export default DashboardHome;
