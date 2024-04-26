import { useLoaderData } from "react-router-dom";


const SpotsDetails = () => {
    const spots = useLoaderData()
    console.log(spots)
    return (
        <div>
            
        </div>
    );
};

export default SpotsDetails;