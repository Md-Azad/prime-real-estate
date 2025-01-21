import { Link } from "react-router-dom";
import bannerImg from "../../../assets/banner.jpg";
const Banner = () => {
  return (
    <div
      className="hero min-h-[30rem]"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Are you looking for home?</h1>
          <p className="mb-5">
            Discover your dream home with us. Exceptional properties, unmatched
            opportunities, and a commitment to your future
          </p>
          <Link to="/allProperties">
            <button className="btn btn-primary">Visit Your Next Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
