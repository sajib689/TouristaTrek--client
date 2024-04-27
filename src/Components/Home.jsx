import Banner from "./Banner";
import Countries from "./Countries";
import Spots from "./Spots";
import Team from "./Team";
import Testimonials from "./Testimonials";


const Home = () => {
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