import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyListCard from "./MyListCard";
import Swal from "sweetalert2";
import NoData from "../Utilitis/NoData";
import Loader from './../Utilitis/Loader';

const MyList = () => {
  const { user,loading } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/spots?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, [user?.email]);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-mocha.vercel.app/spots/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              Swal.fire({
                title: "Deleted!",
                text: "Spot has been deleted.",
                icon: "success",
              });
              const remaining = spots.filter((spot) => spot._id !== _id);
              setSpots(remaining);
            }
          });
      }
    });
  };
  
  if(loading) return <Loader/>
  if(spots.length < 1) return <NoData/>
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
              <MyListCard
                key={spot._id}
                spot={spot}
                handleDelete={handleDelete}
              ></MyListCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
