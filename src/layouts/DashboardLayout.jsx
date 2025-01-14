import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const [role] = useRole();

  return (
    <div>
      <h1>Dashboard Layout.{role}</h1>
      {role === "admin" && <h1>this is Admin home</h1>}
      {role === "agent" && <h1>this is agent home</h1>}
      {role === "user" && <h1>this is User home</h1>}
    </div>
  );
};

export default DashboardLayout;
