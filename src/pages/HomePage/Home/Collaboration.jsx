import bannerImg from "../../../assets/banner.jpg";
import SectionTitle from "../../../SharedPages/Navbar/SectionTitle/SectionTitle";
const Collaboration = () => {
  return (
    <div className="md:px-12">
      <SectionTitle
        title="We are looking for collaboration"
        subTitle="You are welcome for colaboration"
      ></SectionTitle>
      <div
        className="hero min-h-[30rem] rounded-lg  my-4"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-80 rounded-lg"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Are you A Land Owner?</h1>
            <p className="mb-5  font-semibold">You have lang but no money?</p>
            <p className="mb-5  font-semibold">
              You want us build building and you want to live there?
            </p>
            <p className="mb-5  font-semibold">You want sell your land?</p>
            <h1 className="text-2xl text-green-500">
              Contact us for discussion: +4985456214 (from 10am to 5pm)
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
