import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logoCrazyClouds.png";

function Navbar() {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  const toggleNavbar = () => {
    setToggle((prevState)=>!prevState);
}
  return (
    <>
      <nav className="fixed z-10 w-full border-b absolute md:bg-gray-900">
        <div className="container m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:py-4 md:gap-0">
            <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
              <Link to="/">
                <img
                  src={logo}
                  alt="crazy clouds logo"
                  className="flex space-x-2 items-center h-10 rounded-md"
                />
              </Link>
              <button
                aria-label="humburger"
                id="hamburger"
                className="relative w-10 h-10 -mr-2 lg:hidden"
                onClick={toggleNavbar}
              >
                <div
                  aria-hidden="true"
                  id="line"
                  className="inset-0 w-6 h-0.5 m-auto rounded bg-blue-900 transtion duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-blue-900 transtion duration-300"
                ></div>
              </button>
            </div>

            <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
              <div className="text-gray-600 lg:pr-4">
                <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                  <li>
                    <Link
                      to="/"
                      className={
                        location.pathname === "/"
                          ? "block md:px-4 transition text-blue-400 hover:text-blue-400"
                          : "block md:px-4 transition text-gray-400 hover:text-blue-400"
                      }
                    >
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/explore"
                      className={
                        location.pathname === "/explore"
                          ? "block md:px-4 transition text-blue-400 hover:text-blue-400"
                          : "block md:px-4 transition text-gray-400 hover:text-blue-400"
                      }
                    >
                      <span>Explore</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      className={
                        location.pathname === "/gallery"
                          ? "block md:px-4 transition text-blue-400 hover:text-blue-400"
                          : "block md:px-4 transition text-gray-400 hover:text-blue-400"
                      }
                    >
                      <span>Gallery</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us"
                      className={
                        location.pathname === "/about-us"
                          ? "block md:px-4 transition text-blue-400 hover:text-blue-400"
                          : "block md:px-4 transition text-gray-400 hover:text-blue-400"
                      }
                    >
                      <span>About Us</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full space-y-2 border-blue-200 lg:space-y-0 md:w-max lg:border-l">
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center rounded-full transition active:bg-blue-200 focus:bg-blue-100 sm:w-max"
                >
                  <span className="block text-gray-400 font-semibold text-sm">
                    Contact Us
                  </span>
                </button>
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 hover:bg-blue-100 active:bg-blue-400 focus:bg-blue-300 sm:w-max"
                >
                  <span className="block text-gray-100 font-semibold text-sm">
                    Book Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Hamburger */}
        {toggle === true && (
          <div className="w-full flex justify-end items-center p-2 flex-nowrap w-7/12 ">
            <ul className="tracking-wide font-medium text-sm  p-4  bg-black bg-opacity-70 rounded-xl space-y-2">
              <li>
                <Link
                  to="/"
                  className={
                    location.pathname === "/"
                      ? "block md:px-4 transition text-blue-400 hover:text-blue-400"
                      : "block md:px-4 transition text-gray-400 hover:text-blue-400"
                  }
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  className={
                    location.pathname === "/explore"
                      ? "block md:px-4 transition text-blue-400 hover:text-blue-400"
                      : "block md:px-4 transition text-gray-400 hover:text-blue-400"
                  }
                >
                  <span>Explore</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className={
                    location.pathname === "/gallery"
                      ? "block md:px-4 transition text-blue-400 hover:text-blue-400"
                      : "block md:px-4 transition text-gray-400 hover:text-blue-400"
                  }
                >
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={
                    location.pathname === "/about-us"
                      ? "block md:px-4 transition text-blue-400 hover:text-blue-400"
                      : "block md:px-4 transition text-gray-400 hover:text-blue-400"
                  }
                >
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className={
                    location.pathname === "/about-us"
                      ? "block bg-white rounded-md md:px-4 transition text-blue-400 hover:text-blue-400"
                      : "block  bg-white rounded-md md:px-4 transition text-gray-400 hover:text-blue-400"
                  }
                >
                  <span className="p-1">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

