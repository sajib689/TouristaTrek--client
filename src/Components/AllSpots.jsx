import { useLoaderData } from "react-router-dom";
import Loader from "../Utilitis/Loader";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AllSpotCard from "./AllSpotCard";

const AllSpots = () => {
  const { loading } = useContext(AuthContext);
  const spots = useLoaderData();
  const [data, setData] = useState(spots)
  const sortData = (data,d) => {
    const sortSpots = [...data].sort((a, b) => b[d] - a[d])
    return sortSpots
}
const handleSort = (event) => {
    const selectedValue = event.target.value;
    const sortedSpots = sortData(spots, selectedValue);
    setData(sortedSpots);
  }
  if (loading) return <Loader />;
  return (
    <div className="mt-12 mb-24">
      <h1 className="text-4xl text-start mb-20 font-bold">
        All Tourists Spots
      </h1>
      <div className="mb-5">
      <select onClick={handleSort}  className="select bg-[#fc5a34] text-white  w-[120px]">
          <option disabled selected>
          Sort By
          </option>
          <option className="cursor-pointer" value='average_cost'>Average Cost</option>
          </select>
      </div>
      <div className="grid grid-cols md:grid-cols-3 gap-6">
        {data.map((spot) => (
          <AllSpotCard key={spot._id} spot={spot}></AllSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllSpots;
