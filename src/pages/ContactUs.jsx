import React from "react";
import ExplorePageBackground from "../assets/ContactUsPage/contactUsPageBackground.jpg";
import NatureViewImageThirdSection from "../assets/natureViewThirdSection.JPG";
function ContactUs() {
  return (
    <>
      {/* Section -1 Explore Page */}
      <div className="relative w-full">
        <header></header>
        <div className="">
          <img
            className="md:block absolute w-full object-cover object-top h-3/4  md:h-3/4 inset-0 top-[4.68rem]"
            src={ExplorePageBackground}
            alt="landing page background image mountain"
            loading="lazy"
          />
          <div className="relative container border-l border-r m-auto px-6 md:px-12 lg:px-7 ">
            <div className="py-36 lg:py-56 flex justify-center ml-auto">
              <h1 className=" text-gray-900 font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl">
                Contact Us &nbsp;
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form  */}

      <div
        class="relative 
                before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200"
      >
        <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div class="m-auto md:w-8/12 lg:w-full">
            <div class="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
              <div class="lg:grid lg:grid-cols-2">
                <div class="rounded-lg lg:block" hidden>
                  <img
                    src={ExplorePageBackground}
                    class="rounded-l-xl object-cover"
                    loading="lazy"
                    height=""
                    width=""
                    alt="music mood"
                  />
                </div>
                <div class="p-6 sm:p-16">
                  <h2 class="mb-8 text-2xl text-cyan-900 font-bold">
                    Submit your query to request for service consultation or to
                    know more
                  </h2>
                  <form action="" class="space-y-8">
                    <div class="space-y-2">
                      <label for="email" class="text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>

                    <div>
                      <div class="flex items-center justify-between">
                        <label for="text" class="text-gray-700">
                          Description
                        </label>
                      </div>

                      <textarea
                        name="message"
                        id="message"
                        class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                            focus:ring-2 focus:ring-sky-300 focus:outline-none
                                            invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>

                    <a
                      class="text-white py-3 mt-3"
                      target="_blank"
                      href="mailto:vinnayhudda@gmail.com"
                    >
                      <p
                        class="w-full py-3 mt-6 px-6 rounded-md bg-gray-600
                                        focus:bg-sky-700 active:bg-gray-500"
                      >
                        Send Mail
                      </p>
                    </a>

                    <p class="border-t pt-6 text-sm">
                      Or call us at +91 9999451216 &nbsp;
                      <a
                        target="_blank"
                        href="tel:+91 9999451216"
                        class="text-sky-500"
                      >
                        Happy Connecting!
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
