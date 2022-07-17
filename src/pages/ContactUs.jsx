import React from "react";
import ExplorePageBackground from "../assets/ContactUsPage/contactUsPageBackground.jpg";
import NatureViewImageThirdSection from "../assets/natureViewThirdSection.JPG";
import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    mail: "",
    description: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  
  return (
    <>
      {/* Contact Form  */}

      <div
        className="relative 
                before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200"
      >
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-full ">
            <div className="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl ">
              <div className="lg:grid lg:grid-cols-2 mt-16 ">
                <div className="rounded-lg lg:block" hidden>
                  <img
                    src="https://images.unsplash.com/photo-1516827003699-2880f453d93b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    className="rounded-l-xl object-cover"
                    loading="lazy"
                    height=""
                    width=""
                    alt="music mood"
                  />
                </div>
                <div className="p-6 sm:p-16">
                  <h1 className="text-4xl text-black font-bold">Contact Us</h1>
                  <h2 className="mb-8 mt-3 text-xl text-gray-700">
                    To Know more or for booking, submit your query request.
                  </h2>
                  <form action="" className="space-y-8">
                    <div className="space-y-2">
                      <label for="email" className="text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="mail"
                        id="mail"
                        value={formData.mail}
                        onChange={onChange}
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label for="text" className="text-gray-700">
                          Description
                        </label>
                      </div>

                      <textarea
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={onChange}
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                            focus:ring-2 focus:ring-sky-300 focus:outline-none
                                            invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>

                    <a
                      className="text-white py-3 mt-3 "
                      target="_blank"
                      href={`mailto:vinayhudda@gmail.com?subject=Crazy Clouds Customer Query!&body=Description: ${formData.description}  Email: ${formData.mail}`}
                    >
                      <p
                        className="w-full py-3 mt-6 px-6 rounded-md bg-gray-600
                                        focus:bg-sky-700 active:bg-gray-500 text-center"
                      >
                        Send Mail
                      </p>
                    </a>

                    <p className="border-t pt-6 text-sm">
                      Or call us at +91 9999451216 &nbsp;
                      <a
                        target="_blank"
                        href="tel:+91 9999451216"
                        className="text-sky-500 "
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
