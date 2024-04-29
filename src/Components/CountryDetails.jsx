import { useParams } from "react-router-dom";
import CountryDetailsCard from "./CountryDetailsCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
AOS.init();
const CountryDetails = () => {
  const {country_name} = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/spots')
    .then(res => res.json())
    .then(data => setData(data))
  },[])
  const filterSpots = data.filter(spots => spots.country_name === country_name)
  
  return (
    <div className="mt-12">
      <h1 className="text-4xl mb-12">All Spots</h1>
      <div className="grid grid-cols md:grid-cols-3 gap-6 ">
        {filterSpots.map((tourist) => (
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
