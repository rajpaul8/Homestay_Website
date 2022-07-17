import React from "react";
import ExplorePageBackground from "../assets/ExplorePage/ExplorePageBackground.JPG";
import RishikeshTouristMap from "../assets/ExplorePage/rishikeshTouristMap.jpg";

function Explore() {
  return (
    <>
      {/* Section -1 Explore Page */}
      <div className="relative w-full">
        <header></header>
        <div className="">
          <img
            className="md:block absolute w-full object-cover object-top h-full  md:h-screen inset-0 top-[4.68rem]"
            src={ExplorePageBackground}
            alt="landing page background image mountain"
            loading="lazy"
          />
          <div className="relative container border-l border-r m-auto px-6 md:px-12 lg:px-7 ">
            <div className="py-40 lg:py-56 md:w-9/12 lg:w-7/12 ml-auto ">
              <h1 className=" text-gray-900 font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl">
                Explore as &nbsp;
                <span className="text-gray-100 text-3xl md:block md:text-5xl md:pt-3 ">
                  one destination is never a place, but a new perspective on
                  things
                </span>
              </h1>
              <h3 className="mt-7 text-xl md:text-2xl text-white">
                Escape from the hustle and hassle of your everyday routine and
                come away to the Crazy Clouds
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Section - 2 Rishikesh Tourist Map */}
      <div className="mt-16 md:mt-20 mb-1 container m-auto px-6 border-r border-l md:px-12  lg:pt-[4.8rem] lg:px-7">
        <h1 className="text-2xl text-center md:text-3xl font-bold ">
          Rishikesh Tourist Map
        </h1>

        <p className="justify-center p-5 mx-auto text-center text-md text-gray-800 pt-5">
          Tourist Map of Rishikesh in Uttarakhand. Handcrafted detailed tourist
          map, route map, road map of Rishikesh by <i>@euttranchal</i>.
          Rishikesh Map shows all the tourist attractions and places to see in
          Rishikesh with their distances and direction.
        </p>
        <div className="flex justify-center pb-6">
          <img
            src={RishikeshTouristMap}
            alt="tourist map"
            className="h-full md:h-screen object-contain"
          />
        </div>

        <hr></hr>
      </div>
      {/* Section - 3 Tourist Places Near HomeStay */}
      <div className="mt-20 mb-1 container m-auto px-6 border-r border-l md:px-12  lg:pt-[4.8rem] lg:px-7">
        <h1 className="text-2xl text-center md:text-3xl font-bold ">
          Tourist Places Nearby Crazy Clouds Homestay
        </h1>

        <p className="justify-center p-5 mx-auto text-center text-md text-gray-800 pt-5">
          There are many exciting places to visit in Rishikesh. The entire
          region is a tourist heaven and divine place. And our homestay serves
          as a perfect place to visit each spot within 45 minutes.
        </p>

        {/* Tourism Pics Grids */}
        <div className="mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="border p-3 rounded-sm">
            <div className="flex">
              <div className="w-96 border rounded">
                <img
                  src="https://www.haridwarrishikeshtourism.com/header/kunjapuri.jpg"
                  alt="Image"
                  className="Kunjapuri"
                />
              </div>
            </div>
            <div className="pt-2">
              <p className="font-bold text-center text-md uppercase">
                Maa Kunjapuri Devi Temple
              </p>
              <p className="pl-3 text-gray-500 text-sm">
                DISTANCE: <span className="text-yellow-500">15 km</span>
              </p>
              <p className="pl-3 text-gray-500 text-sm">
                One of the most revered Shakti Peeths of Goddess Shakti in
                Garhwal Himalayas. This is an ancient temple located at about
                1600 meters height.
              </p>
            </div>
          </div>
          <div className="border p-3 rounded-sm">
            <div className="flex">
              <div className="w-96 border rounded">
                <img
                  src="https://is1-3.housingcdn.com/01c16c28/2d24a755355bc13b6f9c349992dc7740/v0/fs/residential_plot-for-sale-laxman_jhula-Rishikesh-others.jpg"
                  alt="Image"
                  className=""
                />
              </div>
            </div>
            <div className="pt-2">
              <p className="font-bold text-center text-md uppercase">
                Laksham Jhula
              </p>
              <p className="pl-3 text-gray-500 text-sm">
                DISTANCE: <span className="text-yellow-500">15 km</span>
              </p>
              <p className="pl-3 text-gray-500 text-sm">
                Enlighten yourself with the culture and history of Laksham
                Jhula, a 140-meter suspended bridge over the Ganges. It is one
                of the most visited places in Rishikesh.
              </p>
            </div>
          </div>
          <div className="border p-3 rounded-sm">
            <div className="flex">
              <div className="w-96 border rounded">
                <img
                  src="https://tirupatitirumalainfo.com/wp-content/uploads/2020/08/Neelkanth-Mahadev-Temple.jpg"
                  alt="Image"
                  className="h-90"
                />
              </div>
            </div>
            <div className="pt-2">
              <p className="font-bold text-center text-md uppercase">
                Neelkanth Mahadev Temple
              </p>
              <p className="pl-3 text-gray-500 text-sm">
                DISTANCE: <span className="text-yellow-500">15 km</span>
              </p>
              <p className="pl-3 text-gray-500 text-sm">
                Neelkanth Mahadev Temple is a Hindu temple dedicated to
                Nilkanth, an aspect of Lord Shiva.The temple architecture is
                very much influenced by the Dravidian style of temple
                architecture.
              </p>
            </div>
          </div>
          <div className="border p-3 rounded-sm">
            <div className="flex">
              <div className="w-96 border rounded">
                <img
                  src="https://www.holidify.com/images/cmsuploads/compressed/541954932_d9a3b67806_o_20190408175523_20190408175539.jpg"
                  alt="Image"
                  className="h-40 w-96 object-cover"
                />
              </div>
            </div>
            <div className="pt-5">
              <p className="font-bold text-center text-md uppercase">
                Neer Waterfall
              </p>
              <p className="pl-3 text-gray-500 text-sm">
                DISTANCE: <span className="text-yellow-500">15 km</span>
              </p>
              <p className="pl-3 text-gray-500 text-sm">
                The jade blue Neergarh waterfalls also known as ‘Neer Gaddu’ are
                located about 5 & 7s km from Lakshman Jhula (Neergarh Waterfall
                I & II) on Rishikesh-Badrinath highway.
              </p>
            </div>
          </div>
          <div className="border p-3 rounded-sm">
            <div className="flex">
              <div className="w-96 border rounded">
                <img
                  src="https://www.chardhamtours.in/gallery/cityImage/1463026325_Tehri-Dam.jpg"
                  alt="Image"
                  className="h-40 w-96 object-cover"
                />
              </div>
            </div>
            <div className="pt-2">
              <p className="font-bold text-center text-md uppercase">
                Tehri Dam
              </p>
              <p className="pl-3 text-gray-500 text-sm">
                DISTANCE: <span className="text-yellow-500">15 km</span>
              </p>
              <p className="pl-3 text-gray-500 text-sm">
                Tehri Lake, is usually flocked with tourists interested in
                boating and is slowly becoming a prominent hub for adventure
                tourism in Uttarakhand.
              </p>
            </div>
          </div>
          <div className="border p-3 rounded-sm">
            <div className="flex">
              <div className="w-96 border rounded">
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/794/959/691/skiing-extreme-sports-wallpaper-preview.jpg"
                  alt="Image"
                  className="h-40 w-96 object-cover"
                />
              </div>
            </div>
            <div className="pt-2">
              <p className="font-bold text-center text-md uppercase">
                Adventure Sports
              </p>
              <p className="pl-3 text-gray-500 text-sm">
                DISTANCE: <span className="text-yellow-500">15 km</span>
              </p>
              <p className="pl-3 text-gray-500 text-sm">
                Rishikesh is famous for White river rafting, Flying fox, Gaint
                swing, Sky cycling, Zip lining, Bungee jumping
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
