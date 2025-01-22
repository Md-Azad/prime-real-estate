// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import PropertyCard from "./PropertyCard";
import useProperty from "../../../hooks/useProperty";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const AllProperties = () => {
  const [properties] = useProperty();
  const [search, setSearch] = useState("");

  const allproperties = properties.filter((property) => {
    return search === ""
      ? property
      : property?.location.toLowerCase().includes(search);
  });

  return (
    <div>
      <div className="my-4 flex justify-end mr-12 items-center">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allproperties.map((property) => (
          <PropertyCard key={property._id} property={property}></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
