import { useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const SpotsDetails = () => {
  const spots = useLoaderData();
  const {country_name,average_cost,image,location,seasonality,short_description,total_visitors_per_year,tourist_spot_name,travel_time,} = spots;
  return (
    <div className="hero min-h-screen ms-4 md:ms-0">
      <div className="hero-content flex-col lg:flex-row">
        <img data-aos="fade-down-right"
          src={image}
          className="rounded-lg shadow-2xl  md:w-[600px]"
        />
        <div data-aos="fade-down-left">
          <h1 className="text-5xl font-bold">{tourist_spot_name}</h1>
          <p className="py-6">
           {short_description}
          </p>
          <p>Country Name: {country_name}</p>
          <p>Location: {location}</p>
          <p>Seasonality: {seasonality}</p>
          <p>Travel Time: {travel_time}</p>
          <p>Total Visitors Per Year: {total_visitors_per_year}</p>
          <p>Average Cost: ${average_cost} per person</p>
          <button className="btn bg-[#fc5a34] text-white hover:bg-[#fc5a36] mt-5">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SpotsDetails;
