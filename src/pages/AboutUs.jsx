import React from "react";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutUsBackroundTop from "../assets/AboutUsPage/aboutUsPageBackground.jpg";
import AboutUsBackroundSecondSectionImage from "../assets/AboutUsPage/AboutUsSecondSectionImg.png";
import Testimony from "../components/Testimony";
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <>
      <div className="relative w-full">
        <header></header>
        <div className="">
          <img
            className="md:block absolute w-full object-cover object-top h-5/6  md:h-5/6 inset-0 top-[4.68rem]"
            src={AboutUsBackroundTop}
            alt="landing page background image mountain"
            loading="lazy"
          />
          <div className="relative container border-l border-r m-auto px-6 md:px-12 lg:px-7 ">
            <div className="py-24 lg:py-56 ml-auto ">
              <h1 className="text-gray-900 text-center font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl">
                About &nbsp;
                <span className="hidden md:text-gray-700 text-3xl md:block md:text-5xl md:pt-3 ">
                  Homestay 
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* About us - Second Section */}
      <div className="py-8 bg-blue-50 relative w-full mb-6 md:mb-24">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src={AboutUsBackroundSecondSectionImage}
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Homestay welcomes you in a friendly and comfortable
                environment
              </h2>
              <p className="mt-6 text-gray-600">
                Homestay is a place where the mind, body, and soul
                can join together harmoniously. Situated up in the foothills of
                the Himalayan Mountains, the natural atmosphere will inspire you
                to delve deeper into yourself. ​ We are located in India near
                Rishikesh, commonly known as the World Capital of Yoga. Our
                facility is away from the city noise and is closer to nature.
                While staying here, you'll feel the calmness of nature which
                will have a soothing effect on your mind and body
              </p>
              <p className="mt-4 text-gray-600">
                It is a spectacle to watch when it rains in the mountains.
                Clouds surround the mountains and the sound of rain fills up the
                valley. ​ From our facility, you'll be able to feel and see
                clouds moving around. You'll see clouds roaming beneath you in
                the valley and you'll see clouds coming down from the top of the
                hills. It is a sight that will mesmerize you.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About-Us - Third Section */}
      <WhyChooseUs></WhyChooseUs>
      {/*About us - Fourth Testemony Section */}
      <Testimony></Testimony>

      {/* Book Now Section */}
      <div className="py-16 mb-16 bg-gradient-to-br from-purple-900 to-blue-500 md:bg-gradient-to-r">
        <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
          <h2 className="mb-8 text-4xl text-white font-bold md:text-4xl">
            BOOK YOUR STAY TODAY!<br></br>
            <span className="text-xl">
              CALL US AT
              <br></br>
              <span className="text-2xl text-yellow-300">+91 9XXXXXXXXX</span>
            </span>
          </h2>

          <Link
            to='/contact-us'
            title="Create account"
            className="w-max py-3 px-12 text-center rounded-xl transition bg-white shadow-md hover:bg-purple-100 active:bg-purple-200 focus:bg-purple-100"
          >
            <span className="text-purple-600 font-semibold">
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
