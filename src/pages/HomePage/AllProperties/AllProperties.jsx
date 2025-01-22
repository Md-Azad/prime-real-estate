// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import PropertyCard from "./PropertyCard";
import useProperty from "../../../hooks/useProperty";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

const AllProperties = () => {
  const [properties, isPending] = useProperty();
  const [search, setSearch] = useState("");
  const [finalproperties, setFinalProperties] = useState([]);

  useEffect(() => {
    if (properties.length > 0) {
      setFinalProperties(properties);
    }
  }, [properties]);

  const handleMinSort = () => {
    const sortedPrice = [...finalproperties].sort((a, b) => a.min - b.min);
    setFinalProperties(sortedPrice);
    console.log(finalproperties);
  };

  if (isPending) {
    return <h1>Loading.....</h1>;
  }
  return (
    <div>
      <div className="flex flex-row-reverse justify-evenly items-center">
        <div className="my-4 flex justify-center mr-12 items-center">
          <label className="input input-bordered border-yellow-500 flex items-center gap-2">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="grow"
              placeholder="Search"
            />
            <kbd className="kbd kbd-sm">
              <FaSearch />
            </kbd>
          </label>
        </div>
        <div className="flex justify-end gap-4 ">
          <button onClick={handleMinSort} className="btn btn-info text-white">
            Sort By Min Price
          </button>
          <button className="btn btn-accent text-white">
            Sort By Max Price
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {finalproperties
          .filter((items) => {
            return search === ""
              ? items
              : items?.location.toLowerCase().includes(search.toLowerCase());
          })
          .map((property) => (
            <PropertyCard key={property._id} property={property}></PropertyCard>
          ))}
      </div>
    </div>
  );
};

export default AllProperties;
