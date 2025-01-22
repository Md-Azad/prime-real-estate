import bannerImg from "../../../assets/banner.jpg";
const Collaboration = () => {
  return (
    <div
      className="hero min-h-[30rem]"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Are you A Land Owner?</h1>
          <p className="mb-5  font-semibold">You have lang but no money?</p>
          <p className="mb-5  font-semibold">
            You want us build building and you want to live there?
          </p>
          <p className="mb-5  font-semibold">You want sell your land?</p>
          <h1 className="text-2xl text-yellow-500">
            Contact us for discussion: +4985456214 (from 10am to 5pm)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
