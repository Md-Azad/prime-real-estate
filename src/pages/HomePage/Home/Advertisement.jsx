import { useEffect, useState } from "react";
import useProperty from "../../../hooks/useProperty";
import SectionTitle from "../../../SharedPages/Navbar/SectionTitle/SectionTitle";
import PropertyCard from "../AllProperties/PropertyCard";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Advertisement = () => {
  const [properties] = useProperty();

  const { add } = useAuth();

  const [show, setShow] = useState([]);

  useEffect(() => {
    if (properties.length > 0) {
      const addProperties = [...properties];
      const editable = addProperties.slice(0, 4);
      setShow(editable);
    }
  }, [properties]);

  useEffect(() => {
    const isExist = show.find((edit) => edit._id === add);
    if (isExist) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This property already in advertisement page.",
      });
    }
    const isFound = properties.find((pro) => pro._id === add);
    if (!isExist && isFound) {
      const [, ...b] = show;

      const final = [isFound, ...b];
      setShow(final);
    }
  }, [add]);

  return (
    <div className="mb-8 md:px-12 ">
      <div className="my-8 flex justify-center">
        <SectionTitle
          title="You Might Like"
          subTitle="Most visited properties"
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {show.map((property) => (
          <PropertyCard key={property._id} property={property}></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
