import { Link } from "react-router-dom";

const SpotsCard = ({ spot }) => {
  const { _id,image, tourist_spot_name, short_description,total_visitors_per_year } = spot;
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
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
            {short_description.slice(0,60)}...
          </p>
        </div>
        <Link to={`/details/${_id}`}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#fc5a34] text-gray-50"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SpotsCard;
