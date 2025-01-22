import house from "../../../assets/banner.jpg";
import SectionTitle from "../../../SharedPages/Navbar/SectionTitle/SectionTitle";
const latest = 3;
const LatestProject = () => {
  return (
    <div>
      <SectionTitle
        title="Future Projects"
        subTitle="15% off on Pre-book"
      ></SectionTitle>

      <div className="flex flex-col md:flex-row gap-4 my-4">
        <div className="card bg-base-100 w-96 shadow-xl flex-1">
          <figure className="px-10 pt-10">
            <img src={house} alt="projects" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Baghbari Royal Mension</h2>
            <p>Call for enquery: +495145826</p>
            <div className="card-actions">
              <button className="btn btn-success text-white">Pre Book</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl flex-1">
          <figure className="px-10 pt-10">
            <img src={house} alt="projects" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Hatibanda Fokir Bari</h2>
            <p>Call for enquery: +495145826</p>
            <div className="card-actions">
              <button className="btn btn-success text-white">Pre Book</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl flex-1">
          <figure className="px-10 pt-10">
            <img src={house} alt="projects" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Goribana Palace</h2>
            <p>Call for enquery: +495145826</p>
            <div className="card-actions">
              <button className="btn btn-success text-white">Pre Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProject;
