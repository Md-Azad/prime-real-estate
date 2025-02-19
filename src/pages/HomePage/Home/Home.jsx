import Banner from "./Banner";
import Advertisement from "./Advertisement";
import { Helmet } from "react-helmet-async";
import Reviews from "./Reviews";
import LatestProject from "./LatestProject";
import Collaboration from "./Collaboration";
import Offer from "./Offer";
import Investment from "./Investment";
import Faq from "./Faq";

const Home = () => {
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
      <Faq></Faq>
    </>
  );
};

export default Home;
