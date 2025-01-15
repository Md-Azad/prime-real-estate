import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import MyPropertyCard from "./MyPropertyCard";

const MyProperties = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myproperties = [] } = useQuery({
    queryKey: ["myproperties", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/properties/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  console.log(myproperties);
  return (
    <section>
      <h1>My Properties page. {myproperties.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myproperties.map((property) => (
          <MyPropertyCard
            key={property._id}
            property={property}
          ></MyPropertyCard>
        ))}
      </div>
    </section>
  );
};

export default MyProperties;
