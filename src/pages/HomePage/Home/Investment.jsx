import SectionTitle from "../../../SharedPages/Navbar/SectionTitle/SectionTitle";
import { FaHandshake } from "react-icons/fa";
import investImg from "../../../assets/house.jpg";
const Investment = () => {
  return (
    <div className="md:px-12 mt-4 mb-8 ">
      <SectionTitle
        title={"Looking for Investment?"}
        subTitle={"Be our partner."}
      ></SectionTitle>

      <div className=" flex px-4 flex-col md:flex-row gap-8 border  py-8">
        <div className="flex-1 ">
          {/* <FaHandshake className="text-[20rem] text-purple-700" /> */}
          <img src={investImg} className="w-full h-full rounded-lg" alt="" />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">Why people invest with us?</h1>
          <p>
            Investing in our properties guarantees high returns with prime
            locations in fast-growing markets. We offer luxurious, high-quality
            homes designed for comfort, convenience, and long-term value. With
            strong appreciation potential and secure investments, now is the
            perfect time to own your dream property! 🏡✨
          </p>
          <ul className="space-y-4">
            <li>
              1️⃣ High ROI & Property Value Growth – Our properties have
              consistently delivered strong returns, with significant
              appreciation in value over time.
            </li>
            <li>
              2️⃣ Strategic & Prime Locations – We invest in high-demand areas
              with excellent infrastructure, ensuring strong rental yields and
              resale potential.
            </li>
            <li>
              3️⃣ Trusted & Transparent Transactions – Our commitment to
              transparency and professionalism has built trust among investors,
              making us a reliable choice in real estate.
            </li>
            <li>
              4️⃣ Diverse & Lucrative Portfolio – From luxury homes to commercial
              spaces, our wide range of properties ensures investment
              opportunities tailored to every need. 🚀🏡
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Investment;
