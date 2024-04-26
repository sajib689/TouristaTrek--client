import { Link } from "react-router-dom";


const MyListCard = ({spot,handleDelete}) => {
    const {_id,tourist_spot_name,country_name,location,total_visitors_per_year,travel_time,average_cost} = spot;
    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
        <td className="p-3">
          <p>{country_name}</p>
        </td>
        <td className="p-3">
          <p>{tourist_spot_name}</p>
        </td>
        <td className="p-3">
          <p>{location}</p>
        </td>
        <td className="p-3">
          <p>{travel_time} days</p>
        </td>
        <td className="p-3 ">
          <p>{total_visitors_per_year}</p>
        </td>
        <td className="p-3">
         <p>${average_cost}</p>
        </td>
        <td className="p-3 ">
          <button onClick={() => handleDelete(_id)} className="btn bg-warning text-white">Delete</button>
          
        </td>
        <td className="p-3">
        <Link to={`/update/${_id}`} className="btn bg-success text-white">Update</Link>
        </td>
      </tr>
    );
};

export default MyListCard;