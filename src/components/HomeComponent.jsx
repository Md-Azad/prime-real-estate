import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import ProfileCard from "../SharedPages/ProfileCard/ProfileCard";

const HomeComponent = () => {
  const { user, setLoading } = useAuth();
  const [role] = useRole();
  return (
    <div>
      <h1
        className="text-3xl text-center text-cyan-600
      "
      >
        {" "}
        Welcome Back {role} {user?.displayName}
      </h1>

      <div>
        <ProfileCard profile={user} setLoading={setLoading}></ProfileCard>
      </div>
    </div>
  );
};

export default HomeComponent;
