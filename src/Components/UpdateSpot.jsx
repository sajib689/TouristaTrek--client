import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const UpdateSpot = () => {
    const spots = useLoaderData()
    const {_id,tourist_spot_name,image,country_name,location,short_description,seasonality,total_visitors_per_year,travel_time,average_cost} = spots;
    const handleUpdateSpot = e => {
        e.preventDefault()
        const form = e.target
        const tourist_spot_name = form.tourist_spot_name.value
        const country_name = form.country_name.value 
        const location = form.location.value
        const short_description = form.short_description.value
        const average_cost = form.average_cost.value
        const image = form.image.value
        const seasonality = form.seasonality.value 
        const travel_time = form.travel_time.value
        const total_visitors_per_year = form.total_visitors_per_year.value
        
        const spots = {image,tourist_spot_name,country_name,location,short_description,average_cost,seasonality,travel_time,total_visitors_per_year}
        fetch( `http://localhost:3000/spots/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(spots)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Update Success!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        form.reset()
    }
    return (
        <section data-aos="fade-down-right" className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <form onSubmit={handleUpdateSpot} className="container mx-auto space-y-8">
            <fieldset className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
                <legend className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Tourist Spot Information Update:
                </legend>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-2">
                        <label
                            htmlFor="tourist_spot_name"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Tourist Spot Name
                        </label>
                        <input
                        defaultValue={tourist_spot_name}
                            id="tourist_spot_name"
                            name="tourist_spot_name"
                            type="text"
                            placeholder="Tourist Spot Name"
                            className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="country_name"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Country
                        </label>
                        <input
                         defaultValue={country_name}
                            id="country_name"
                            name="country_name"
                            type="text"
                            placeholder="Country"
                            className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="location"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Location
                        </label>
                        <input
                        defaultValue={location}
                            id="location"
                            name="location"
                            type="text"
                            placeholder="Location"
                            className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="short_description"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Short Description
                        </label>
                        <textarea
                        defaultValue={short_description}
                            id="short_description"
                            name="short_description"
                            placeholder="Short Description"
                            className="w-full h-20 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
                        ></textarea>
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="average_cost"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Average Cost
                        </label>
                        <input
                        defaultValue={average_cost}
                            id="average_cost"
                            name="average_cost"
                            type="text"
                            placeholder="Average Cost"
                            className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="seasonality"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Seasonality
                        </label>
                        <input
                        defaultValue={seasonality}
                            id="seasonality"
                            name="seasonality"
                            type="text"
                            placeholder="Seasonality"
                            className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="travel_time"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Travel Time
                        </label>
                        <input
                         defaultValue={travel_time}
                            id="travel_time"
                            name="travel_time"
                            type="text"
                            placeholder="Travel Time"
                            className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="total_visitors_per_year"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Total Visitors Per Year
                        </label>
                        <input
                         defaultValue={total_visitors_per_year}
                            id="total_visitors_per_year"
                            name="total_visitors_per_year"
                            type="text"
                            placeholder="Total Visitors Per Year"
                            className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="photoURL"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Photo URL
                        </label>
                        <input
                        defaultValue={image}
                            id="photoURL"
                            name="image"
                            type="text"
                            placeholder="Photo URL"
                            className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full py-2 bg-[#fc5a34] text-white rounded-md hover:bg-[#fc5a34] focus:outline-none focus:ring focus:ring-violet-600 focus:ring-opacity-50"
                    >
                        Update
                    </button>
                </div>
            </fieldset>
        </form>
    </section>
    );
};

export default UpdateSpot;