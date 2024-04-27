import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
AOS.init();
const Testimonials = () => {
  return (
    <section className="mt-24 mb-24 dark:bg-gray-100 dark:text-gray-800">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div
            data-aos="fade-down-right"
            className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left"
          >
            <h2 className="text-4xl font-bold">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={25}
                loop={0}
                typeSpeed={75}
                words={["What Our Customers Say?", "Customers Testimonials"]}
              />
            </h2>
            <p className="dark:text-gray-600">
              Read what our satisfied customers have to say about their travel
              experiences with us.
            </p>
          </div>
          <div data-aos="fade-down-left" className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                  <p>
                    "Embarking on a journey with TouristTrek was the best
                    decision I've ever made. Their attention to detail and
                    personalized service made my trip unforgettable."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?1"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Jane Doe</p>
                      <p className="text-sm dark:text-gray-600">Adventurer</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                  <p>
                    "TouristTrek exceeded my expectations in every way possible.
                    From the breathtaking locations to the seamless logistics,
                    they made my dream vacation a reality."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?2"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">John Smith</p>
                      <p className="text-sm dark:text-gray-600">
                        Travel Enthusiast
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                  <p>
                    "I've traveled with many tour companies, but TouristTrek
                    stands out for their exceptional service and passion for
                    travel. Highly recommended!"
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?3"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Emily Johnson</p>
                      <p className="text-sm dark:text-gray-600">
                        Adventure Seeker
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                  <p>
                    "TouristTrek made me fall in love with traveling all over
                    again. Their knowledgeable guides and seamless planning made
                    every moment magical."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?4"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Michael Brown</p>
                      <p className="text-sm dark:text-gray-600">
                        World Explorer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
