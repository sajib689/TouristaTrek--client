import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Banner = () => {
  return (
    <Carousel>
      <div className="w-full md:h-[500px]">
        <img src="https://live.staticflickr.com/65535/49390937486_0c787ef728_b.jpg" />
      </div>
      <div className="w-full md:h-[500px]">
        <img src="https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1x694528/uploads/dten/2022/01/14/web-harintana-camp-sundarbans-syed-zakir-hossain-1527880262624-1609813445999.jpeg?watermark=media%2F2023%2F05%2F28%2F1280px-Dhaka_Tribune_Logo.svg-1-a9e61c86dded62d74300fef48fee558f.png" />
      </div>
      <div className="w-full md:h-[500px]">
        <img src="https://static.toiimg.com/photo/93140880.cms" />
      </div>
    </Carousel>
  );
};

export default Banner;
