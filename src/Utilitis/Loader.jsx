
import loader from '../../public/loader.json'
import Lottie from "lottie-react";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Lottie className='w-48 h-48' animationData={loader} />
        </div>
    );
};

export default Loader;