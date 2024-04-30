import { useContext } from "react";
import Banner from "./Banner";
import Countries from "./Countries";
import Spots from "./Spots";
import Team from "./Team";
import Testimonials from "./Testimonials";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Utilitis/Loader";


const Home = () => {
    const {loading} = useContext(AuthContext)
    if(loading) return <Loader/>
    return (
        <div>
            <Banner/>
            <Spots/>
            <Countries/>
            <Team/>
            <Testimonials/>
        </div>
    );
};

export default Home;