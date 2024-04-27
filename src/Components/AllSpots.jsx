import { useLoaderData } from "react-router-dom";
import Loader from "../Utilitis/Loader";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AllSpotCard from "./AllSpotCard";


const AllSpots = () => {
    const{loading} = useContext(AuthContext)
    const spots = useLoaderData()
    if(loading) return <Loader/>
    return (
        <div className="mt-24 mb-24">
      <h1 className="text-4xl text-start mb-20 font-bold">All Tourists Spots</h1>
      <div className="grid grid-cols md:grid-cols-3 gap-6">
        {spots.map((spot) => (
          <AllSpotCard key={spot._id} spot={spot}></AllSpotCard>
        ))}
      </div>
    </div>
    );
};

export default AllSpots;