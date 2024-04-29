import { useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Utilitis/Loader";
AOS.init();
const Countries = () => {
  const{loading} = useContext(AuthContext)
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-mocha.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  if(loading) return <Loader/>
  return (
    <div>
      <h1 data-aos="fade-right" className="font-bold text-4xl text-center mt-48 mb-12">
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
      <div  className="grid grid-cols md:grid-cols-3 md:gap-6 mx-auto">
        {countries.map((country) => (
          <CountryCard key={country._id} country={country}></CountryCard>
        ))}
      </div>
    </div>
  );
};

export default Countries;
