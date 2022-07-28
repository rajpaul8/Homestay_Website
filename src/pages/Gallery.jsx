import React from 'react'
import PageNotFound from '../assets/Gallery/PageNotFound.jpg'

function Gallery() {
  return (
    <>
    <div className="relative w-full">
        <header></header>
        <div className="">
          <img
            className="md:block absolute w-full object-cover object-top h-3/4 inset-0 top-[4.68rem]"
            src={PageNotFound}
            alt="landing page background image mountain"
            loading="lazy"
          />
          <div className="relative container border-l border-r m-auto px-6 md:px-12 lg:px-7 ">
            <div className="py-24 lg:py-56 ml-auto ">
              <h1 className="text-gray-900 text-center font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl">
                 &nbsp;
                <span className="hidden md:text-gray-700 text-3xl md:block md:text-5xl md:pt-3 ">
                 Page Under Development
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery