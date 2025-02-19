import Banner from "./Banner";
import Advertisement from "./Advertisement";
import { Helmet } from "react-helmet-async";
import Reviews from "./Reviews";
import LatestProject from "./LatestProject";
import Collaboration from "./Collaboration";
import Offer from "./Offer";
import Investment from "./Investment";

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
      <LatestProject></LatestProject>
      <Offer></Offer>
      <Collaboration></Collaboration>
      <Investment></Investment>
      <Reviews></Reviews>
    </>
  );
};

export default Home;
