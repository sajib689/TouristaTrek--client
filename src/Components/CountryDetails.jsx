import { useLoaderData } from "react-router-dom";
import CountryDetailsCard from "./CountryDetailsCard";

const CountryDetails = () => {
  const countries = useLoaderData();
  return (
    <div className="mt-12">
      <h1 className="text-4xl mb-12">All Spots</h1>
      <div className="grid grid-cols md:grid-cols-3 gap-6 ">
        {countries[0].tourist_spots.map((tourist) => (
          <CountryDetailsCard
            key={tourist.country_name}
            tourist={tourist}
          ></CountryDetailsCard>
        ))}
      </div>
    </div>
  );
};

export default CountryDetails;
