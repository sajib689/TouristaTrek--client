import { useContext, useEffect, useState } from "react";
import SpotsCard from "./SpotsCard";
import { AuthContext } from "./../Provider/AuthProvider";
import Loader from "./../Utilitis/Loader";
import { Typewriter } from "react-simple-typewriter";

const Spots = () => {
  const { loading } = useContext(AuthContext);
  const [touristSpots, setTouristSpots] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-mocha.vercel.app/spots")
      .then((res) => res.json())
      .then((data) => setTouristSpots(data));
  }, []);
  if (loading) return <Loader />;
  return (
    <div className="mt-24 mb-24">
      <div className="mb-20">
        <h1 data-aos="fade-right" className="text-4xl text-center  font-bold ">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={["Tourists Spots", "Tourists Spots", "Tourists Spots"]}
          />
        </h1>
        <p className="text-center mt-4">Journey Beyond Boundaries, Where  Every Destination <br /> Tells a Story</p>
      </div>

      <div className="grid grid-cols md:grid-cols-3 md:gap-6 ms-4 md:ms-0">
        {touristSpots.slice(0, 6).map((spot) => (
          <SpotsCard key={spot._id} spot={spot}></SpotsCard>
        ))}
      </div>
    </div>
  );
};

export default Spots;
