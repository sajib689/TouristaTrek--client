import Lottie from 'react-lottie';
import error from '../../public/error.json'

const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Lottie className='w-48 h-48' animationData={error} />
        </div>
    );
};

export default Error;