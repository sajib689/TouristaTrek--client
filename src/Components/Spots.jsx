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
    <div>
      <h1>Tourists Spots</h1>
      <div>
        {touristSpots.map((spot) => (
          <SpotsCard key={spot._id} spot={spot}></SpotsCard>
        ))}
      </div>
    </div>
  );
};

export default Spots;
