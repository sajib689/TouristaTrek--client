import { useLoaderData } from "react-router-dom";


const AllSpots = () => {
    const spots = useLoaderData()
    console.log(spots)
    return (
        <div>
            
        </div>
    );
};

export default AllSpots;