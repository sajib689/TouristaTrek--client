import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyListCard from "./MyListCard";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/spots?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, [user?.email]);
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">My List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Country Name</th>
              <th className="p-3">Tourist Spot Name</th>
              <th className="p-3">Location</th>
              <th className="p-3">Travel Time</th>
              <th className="p-3">Total Visitors</th>
              <th className="p-3">Average Cost</th>
              <th className="p-3">Delete</th>
              <th className="p-3">Update</th>
            </tr>
          </thead>
          <tbody>
            {spots.map((spot) => (
              <MyListCard key={spot._id} spot={spot}></MyListCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
