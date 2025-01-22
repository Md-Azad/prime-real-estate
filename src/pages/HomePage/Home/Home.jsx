import Banner from "./Banner";
import Advertisement from "./Advertisement";
import { Helmet } from "react-helmet-async";
import Reviews from "./Reviews";

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
      <Reviews></Reviews>
    </>
  );
};

export default Home;
