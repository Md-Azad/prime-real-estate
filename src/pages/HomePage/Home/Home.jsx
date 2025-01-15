import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <Helmet>
        <title>Prime || Home</title>
      </Helmet>
      <h1>Home page will be here.{user?.displayName}</h1>
    </div>
  );
};

export default Home;
