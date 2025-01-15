import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import MyPropertyCard from "./MyPropertyCard";

const MyProperties = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myproperties = [], refetch } = useQuery({
    queryKey: ["myproperties", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/${user?.email}`);

      return res.data;
    },
  });

  return (
    <section>
      <h1>My Properties page. {myproperties.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myproperties.map((property) => (
          <MyPropertyCard
            key={property._id}
            property={property}
            refetch={refetch}
          ></MyPropertyCard>
        ))}
      </div>
    </section>
  );
};

export default MyProperties;
