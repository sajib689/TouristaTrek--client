import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
AOS.init();
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1 data-aos="fade-left" className="font-bold text-4xl text-center mt-48 mb-12">
        <Typewriter
          cursor
          cursorBlinking
          delaySpeed={1000}
          deleteSpeed={25}
          loop={0}
          typeSpeed={75}
          words={[
            "Let's Visit",
            "Let's Visit",
            "Let's Visit",
          ]}
        />
        
      </h1>
      <div className="grid grid-cols md:grid-cols-3 gap-6">
        {countries.map((country) => (
          <CountryCard key={country._id} country={country}></CountryCard>
        ))}
      </div>
    </div>
  );
};

export default Countries;
