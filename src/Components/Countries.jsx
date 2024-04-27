import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
   <div>
    <h1 className="text-4xl text-center mt-24 mb-12">Let's Visit</h1>
     <div className="grid grid-cols md:grid-cols-3 gap-6">
      {countries.map((country) => (
        <CountryCard key={country._id} country={country}></CountryCard>
      ))}
    </div>
   </div>
  );
};

export default Countries;
