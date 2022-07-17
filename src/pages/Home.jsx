import React from "react";
import HomeBackground from "../assets/Home_background_Gif.gif";
import NatureIcon from "../assets/natureIcon.png";
import FoodIcon from "../assets/FoodIcon.png";
import LocationIcon from "../assets/locationIcon.png";
import NatureViewImageThirdSection from "../assets/natureViewThirdSection.JPG";
import WifiIcon from "../assets/wifiIcon.png";
import FurnishedIcon from "../assets/furnishedIcon.png";
import MealIcon from "../assets/mealIcon.png";
import ParkingIcon from "../assets/parkingIcon.png";
import VinayPic from "../assets/Testemonies_Pics/Vinay_Review.jpg";
import RajPic from "../assets/Testemonies_Pics/Raj_Review.jpg";
import ManishPic from "../assets/Testemonies_Pics/Manish_Review.jpg";

function Home() {
  return (
    <>
      <div className="relative w-full">
        <header></header>
        <div className="">
          <img
            className="md:block absolute w-full object-cover object-top h-full  md:h-screen inset-0 top-[4.68rem]"
            src={HomeBackground}
            alt="landing page background image mountain"
            loading="lazy"
          />
          <div className="relative container border-l border-r m-auto px-6 md:px-12 lg:px-7 ">
            <div className="py-40 lg:py-56 md:w-9/12 lg:w-7/12 ml-auto ">
              <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl">
                Crazy Clouds Homestay&nbsp;
                <span className="text-gray-700 text-3xl md:block md:text-5xl md:pt-3 ">
                  experience the sound of silence and peace
                </span>
              </h1>
              <h3 className="mt-7 text-xl text-white">
                A place where you can experience serenity in lush green
                environment.<br></br> Away from the city noise, we offer you a
                calm and relaxing stay.
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 Home-Page */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
        <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-20">
          <div>
            <span className="block w-max mx-auto py-2 px-4 rounded-xl bg-gray-600 bg-opacity-75 text-white text-sm font-semibold">
              Enjoy Your Stay!
            </span>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:-mx-8">
            <div className="relative group">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div className="relative text-center space-y-4 p-6 md:p-8">
                <img
                  src={FoodIcon}
                  className="w-16 m-auto"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-yellow-800">
                  Homemade Food
                </h4>
                <p className="text-gray-600">
                  We provide delicious pure vegetarian 3 times healthy and
                  freshly cooked meal. Room bookings are inclusive of 3 time
                  meals.
                  <span className="text-gray-500 text-sm">
                    <br></br> Enjoy your meals with valley view in common dining
                    area.
                  </span>
                </p>
              </div>
            </div>
            <div className="relative group">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div className="relative text-center space-y-4 p-6 md:p-8">
                <img
                  src={NatureIcon}
                  className="w-16 m-auto"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-yellow-800">
                  Feel the Nature
                </h4>
                <p className="text-gray-600">
                  Live close to the refreshing environment and clean air. Our
                  stay is situated in the foothills of the Himalyan Mountains.
                  <span className="text-gray-500 text-sm">
                    <br></br> Nature is pleased with simplicity, delve deeper
                    into yourself
                  </span>
                </p>
              </div>
            </div>
            <div className="relative group">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div className="relative text-center space-y-4 p-6 md:p-8">
                <img
                  src={LocationIcon}
                  className="w-16 m-auto"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-yellow-800">
                  Location
                </h4>
                <p className="text-gray-600">
                  We're located near Rishikesh, which is also known as World
                  Capital of Yoga. Our facility is away from the city's air,
                  noise and solid waste pollution.
                </p>
              </div>
            </div>
            <div className="relative group lg:hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 Home-Page */}
      <div className="border-b ">
        <div className="mt-1 md:mt-0 container m-auto px-6 border-r border-l md:px-12  lg:pt-[4.8rem] lg:px-7">
          <div className="flex items-center flex-wrap gap-12 px-2 md:px-0">
            <div className="lg:w-6/12 lg:-ml-7">
              <div className="relative">
                <img
                  src={NatureViewImageThirdSection}
                  alt="shoes"
                  loading="lazy"
                  width="640"
                  height="640"
                />
                {/* <div className="absolute bottom-2 right-2 bg-white">
                  
                </div> */}
              </div>
            </div>

            <div className="relative lg:w-6/12 lg:-ml-20">
              <h1 className=" flex justify-center font-bold text-4xl sm:text-4xl md:text-4xl xl:text-4xl">
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
          </div>
        </div>
      </div>

      {/* Section 4 Testemonies */}
      <div className="py-16 white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">
            Here It From Our Customers
          </h2>
          <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
              <div className="h-full flex flex-col justify-center space-y-4">
                <img
                  className="w-20 h-20 mx-auto rounded-full"
                  src={VinayPic}
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <p className="text-gray-600 md:text-xl">
                  {" "}
                  <span className="font-serif">"</span> Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quaerat repellat perspiciatis
                  excepturi est. Non ipsum iusto aliquam consequatur repellat
                  provident, omnis ut, sapiente voluptates veritatis cum
                  deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Vinnay Hudda
                  </h6>
                  <span className="text-xs text-gray-500">24-Jun-2022</span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src={ManishPic}
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p className="text-gray-600">
                  {" "}
                  <span className="font-serif">"</span> Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quaerat repellat perspiciatis
                  excepturi est. Non ipsum iusto aliquam consequatur repellat
                  provident, omnis ut, sapiente voluptates veritatis cum
                  deleniti repudiandae ad doloribus.
                  <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Manish Lohia
                  </h6>
                  <span className="text-xs text-gray-500">27-Jun-2022</span>
                </div>
              </div>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src={RajPic}
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p className="text-gray-600">
                  <span className="font-serif">"</span> Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quaerat repellat perspiciatis
                  excepturi est. Non ipsum iusto aliquam consequatur repellat
                  provident, omnis ut, sapiente voluptates veritatis cum
                  deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">Raj Paul</h6>
                  <span className="text-xs text-gray-500">03-Jul-2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
