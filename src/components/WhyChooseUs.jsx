import React from "react";
import NatureViewImageThirdSection from "../assets/natureViewThirdSection.JPG";
import WifiIcon from "../assets/wifiIcon.png";
import FurnishedIcon from "../assets/furnishedIcon.png";
import MealIcon from "../assets/mealIcon.png";
import ParkingIcon from "../assets/parkingIcon.png";

function WhyChooseUs() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
        <div className="mt-1 md:mt-0 container m-auto px-6 border-r border-l md:px-12  lg:pt-[4.8rem] lg:px-7">
          <div className="flex items-center flex-wrap gap-12 px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:-ml-20">
              <h1 className="mt-6 flex justify-center font-bold text-4xl sm:text-4xl md:text-4xl xl:text-4xl">
                Why Choose Us <span className="text-gray-800">?</span>
              </h1>
              <div className="mt-6 space-y-8 lg:ml-32">
                <p className="text-gray-700">
                  <h2 className="mt-1 text-center text-xl text-gray-600 font-bold md:text-xl">
                    We pride ourselves on a high standard of friendly cheerful
                    service which caters to the needs of the whole family.
                    <br className="sm:block" hidden />
                  </h2>
                </p>
                <div className="flex justify-between ">
                  <p
                    title="Start buying"
                    className="w-full py-3 px-6 text-center rounded-full transition duration-300 bg-gray-100 focus:bg-cyan-800 sm:w-max"
                  >
                    <span className="block text-black text-sm">
                      <img src={WifiIcon} alt="wifi icon" className="h-6" />
                      Wifi
                    </span>
                  </p>
                  <p
                    title="Start buying"
                    className="w-full py-3 px-6 text-center rounded-full transition duration-300 bg-gray-100 focus:bg-cyan-800 sm:w-max"
                  >
                    <span className="block text-black text-sm">
                      <img
                        src={FurnishedIcon}
                        alt="wifi icon"
                        className="h-6 pl-4"
                      />
                      Furnished
                    </span>
                  </p>
                  <p
                    title="Start buying"
                    className="w-full py-3 px-6 text-center rounded-full transition duration-300 bg-gray-100 focus:bg-cyan-800 sm:w-max"
                  >
                    <span className="block text-black text-sm">
                      <img
                        src={MealIcon}
                        alt="wifi icon"
                        className="h-6 pl-3"
                      />
                      3 Meals
                    </span>
                  </p>

                  <p
                    title="Start buying"
                    className="w-full py-3 px-6 text-center rounded-full transition duration-300 bg-gray-100 focus:bg-cyan-800 sm:w-max"
                  >
                    <span className="block text-black text-sm">
                      <img
                        src={ParkingIcon}
                        alt="wifi icon"
                        className="h-6 pl-5"
                      />
                      Free Parking
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-6/12">
              <div className="relative">
                <img
                  src={NatureViewImageThirdSection}
                  alt="Nature Mountain Picture"
                  loading="lazy"
                  width="640"
                  height="650"
                />
                {/* <div className="absolute bottom-2 right-2 bg-white">
                  
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
