import { FaHandPointRight } from "react-icons/fa";
import SectionTitle from "../../../SharedPages/Navbar/SectionTitle/SectionTitle";

const Offer = () => {
  return (
    <div className="md:px-12 mt-12">
      <SectionTitle
        title={"Worry about bank loan?"}
        subTitle="Here is your solution!"
      ></SectionTitle>
      <div className="divider "></div>
      <div className="flex flex-col items-center justify-center my-8 bg-gray-200 space-y-4 py-8">
        <h1 className="text-purple-600 font-bold text-2xl">
          No Need to worry about payment! Choose your own mood.
        </h1>
        <ul className="text-xl font-semibold text-slate-600">
          <li className="flex items-center gap-2">
            <FaHandPointRight />
            Only 20% have to pay during booking the property.
          </li>
          <li className="flex items-center gap-2">
            <FaHandPointRight />
            Prime Real Estate will help you to get the bank loan.
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <FaHandPointRight />
            Loan available for 12, 24, and 36 months with 3% flat interest rate.
          </li>
          <li className="flex items-center gap-2">
            <FaHandPointRight />
            EMI available for 3 to 5 years.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Offer;
