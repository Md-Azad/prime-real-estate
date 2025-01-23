import useRole from "../../../hooks/useRole";
import AdminHome from "../AdminPages/AdminHome/AdminHome";
import AgentHome from "../AgentPages/AgentHome/AgentHome";
import MyProfile from "../UserPages/MyProfile/MyProfile";

const DashboardHome = () => {
  const [role] = useRole();
  console.log("before edit profile", role);
  return (
    <>
      {role === "admin" && <AdminHome></AdminHome>}
      {role === "agent" && <AgentHome></AgentHome>}
      {role === "user" && <MyProfile></MyProfile>}
    </>
  );
};

export default DashboardHome;
