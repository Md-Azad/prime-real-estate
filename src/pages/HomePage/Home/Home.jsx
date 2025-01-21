import Banner from "./Banner";
import Advertisement from "./Advertisement";
import { Helmet } from "react-helmet-async";

const Home = () => {
  // editable.shift();
  // editable.unshift({ number: 55 });

  // console.log(editable);
  return (
    <>
      <Helmet>
        <title>Prime || Home</title>
      </Helmet>
      <Banner></Banner>
      <Advertisement></Advertisement>
    </>
  );
};

export default Home;
