import { FadeLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <FadeLoader color="#36d7b7" />
        </div>
    );
};

export default Loader;