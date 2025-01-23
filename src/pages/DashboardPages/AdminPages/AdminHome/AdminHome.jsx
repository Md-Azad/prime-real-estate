import useAuth from "../../../../hooks/useAuth";

import ProfileCard from "../../../../SharedPages/ProfileCard/ProfileCard";

const AdminHome = () => {
  const { user, setLoading } = useAuth();

  return (
    <>
      <div>
        <h1
          className="text-3xl text-center text-cyan-600
      "
        >
          {" "}
          Welcome Back Admin {user?.displayName}
        </h1>

        <div>
          <ProfileCard profile={user} setLoading={setLoading}></ProfileCard>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
