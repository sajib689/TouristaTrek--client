import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Banner = () => {
  return (
    <Carousel>
      <div className="w-full md:h-[500px]">
        <img src="https://sylhettouristplaces.com/wp-content/uploads/2020/02/Jaflong-Sylhet-1.jpg" />
      </div>
      <div className="w-full md:h-[500px]">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Zero_Point_at_Zuflong.jpg" />
      </div>
      <div className="w-full md:h-[500px]">
        <img src="https://static.toiimg.com/photo/93140880.cms" />
      </div>
    </Carousel>
  );
};

export default Banner;
