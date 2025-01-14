import useAuth from "../../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>Admin Homes</h1>
      <h1>Hi, Mr. {user?.email}</h1>
    </div>
  );
};

export default AdminHome;
