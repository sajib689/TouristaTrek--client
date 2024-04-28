import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const CountryDetailsCard = ({ tourist }) => {
  const {
    id,
    tourist_spot_name,
    image,
    short_description,
    country_name,
    location,
    average_cost,
    seasonality,
  } = tourist;
  return (
    <div data-aos="fade-down-right" className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div data-aos="fade-down-left" className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {tourist_spot_name.slice(0, 15)}
          </h2>
          <p className="dark:text-gray-800">
            {short_description.slice(0, 50)}...
          </p>
          <p>Country Name: {country_name}</p>
          <p>Location: {location}</p>
          <p>Seasonality: {seasonality}</p>
          <p>Average Cost: {average_cost} per person</p>
          <Link to={`/viewdetails/tourist_spots/${id}`} className="btn bg-[#fc5a34] text-white hover:bg-[#fc5a36] mt-5">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsCard;
