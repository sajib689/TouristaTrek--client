import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const AllSpotCard = ({ spot }) => {
  const {
    _id,
    image,
    tourist_spot_name,
    short_description,
    average_cost,
    total_visitors_per_year,
    travel_time,
    seasonality
  } = spot;
  return (
    <div data-aos="fade-down-right" className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {tourist_spot_name}
          </h2>
          <p className="dark:text-gray-800">
            {short_description.slice(0, 60)}...
          </p>
          <div>
            <div>
                <p><span className="font-bold">Average Cost:</span> {average_cost} per person</p>
                <p><span className="font-bold">Travel Time:</span> {travel_time}</p>
            </div>
            <div>
                <p><span className="font-bold">Total Visitors Per Year:</span> {total_visitors_per_year} persons</p>
                <p><span className="font-bold">Seasonality:</span> {seasonality}</p>
            </div>
          </div>
        </div>
        <Link
          to={`/details/${_id}`}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#fc5a34] text-gray-50"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AllSpotCard;
