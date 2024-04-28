
import nodata from '../../public/empty.json'
import Lottie from "lottie-react";

const NoData = () => {
  return (
   <>
    <Lottie className='h-[80vh]' animationData={nodata} />;
   </>
  );
};

export default NoData;
