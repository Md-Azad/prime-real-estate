import useProperty from "../../../hooks/useProperty";
import PropertyCard from "../AllProperties/PropertyCard";

const Advertisement = () => {
  const [properties] = useProperty();

  const addProperties = [...properties];
  const editable = addProperties.slice(0, 4);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {editable.map((property) => (
          <PropertyCard key={property._id} property={property}></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
