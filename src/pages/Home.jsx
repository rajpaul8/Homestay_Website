import React from "react";
import HomeBackground from "../assets/Home_background_Gif.gif";
import NatureIcon from "../assets/natureIcon.png";
import FoodIcon from "../assets/FoodIcon.png";
import LocationIcon from "../assets/locationIcon.png";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimony from "../components/Testimony";


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
                Homestay&nbsp;
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
      <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
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
      <WhyChooseUs></WhyChooseUs>

      {/* Section 4 Testemonies */}
      <Testimony></Testimony>
    </>
  );
}

export default Home;
