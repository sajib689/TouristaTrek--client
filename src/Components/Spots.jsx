import { useEffect, useState } from "react";
import SpotsCard from "./SpotsCard";

const Spots = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/spots")
      .then((res) => res.json())
      .then((data) => setTouristSpots(data));
  }, []);
  return (
    <div className="mt-24 mb-24">
      <h1 className="text-4xl text-center mb-20 font-bold">Tourists Spots</h1>
      <div className="grid grid-cols md:grid-cols-3 gap-6">
        {touristSpots.map((spot) => (
          <SpotsCard key={spot._id} spot={spot}></SpotsCard>
        ))}
      </div>
    </div>
  );
};

export default Spots;
