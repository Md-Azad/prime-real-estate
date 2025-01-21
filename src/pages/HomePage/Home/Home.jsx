import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useProperty from "../../../hooks/useProperty";
import PropertyCard from "../AllProperties/PropertyCard";

const Home = () => {
  const { user } = useAuth();
  const [properties] = useProperty();

  const addProperties = [...properties];
  const editable = addProperties.slice(0, 4);
  // editable.shift();
  // editable.unshift({ number: 55 });

  // console.log(editable);
  return (
    <div>
      <Helmet>
        <title>Prime || Home</title>
      </Helmet>
      <h1>Home page will be here.{user?.displayName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {editable.map((property) => (
          <PropertyCard key={property._id} property={property}></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
