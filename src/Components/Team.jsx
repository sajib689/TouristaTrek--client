import { Typewriter } from "react-simple-typewriter";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Team = () => {
  return (
    <section data-aos="fade-up-right" className="mt-24 mb-24 py-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl">
		<Typewriter
    cursor
    cursorBlinking
    delaySpeed={1000}
    deleteSpeed={25}
    loop={0}
    typeSpeed={75}
    words={[
      'Embark on an Adventure with Our Team',
      'Our Team Always Give You Best Service',
    ]}
  />
        </h1>
        <p className="max-w-2xl text-center dark:text-gray-600">
          Get to know the passionate individuals behind TouristTrek who make
          your travel experiences unforgettable.
        </p>
        <div data-aos="fade-down-right" className="flex flex-row flex-wrap-reverse justify-center">
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?0"
            />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="dark:text-gray-600">Adventure Coordinator</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?1"
            />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="dark:text-gray-600">Experience Curator</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?2"
            />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="dark:text-gray-600">Travel Storyteller</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?3"
            />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="dark:text-gray-600">Exploration Expert</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?4"
            />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="dark:text-gray-600">Journey Guide</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?5"
            />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="dark:text-gray-600">Destination Navigator</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
