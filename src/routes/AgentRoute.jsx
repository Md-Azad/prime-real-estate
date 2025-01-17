import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";

const AgentRoute = ({ children }) => {
  const [role, isPending] = useRole();
  console.log(role);
  if (isPending) {
    return (
      <>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </>
    );
  }

  if (role === "agent") {
    return children;
  }

  return <Navigate to="/"></Navigate>;
};

export default AgentRoute;
