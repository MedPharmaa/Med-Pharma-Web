import { FaSearch } from "react-icons/fa";
import logo from "../../assets/HSL.png";
import { CiShoppingCart } from "react-icons/ci";
import Hero from "../../components/labtest/Hero";
import Template from "../../components/labtest/Template";
// import Diagnostic from "../../components/labtest/Diagnostic";
import Health from "../../components/labtest/Health";
import CheckUp from "../../components/labtest/CheckUp";
import Benefits from "../../components/labtest/Benefits";
import How from "../../components/labtest/How";
import FreqaLabTest from '../../components/labtest/FreqLabTest/LabTests/LabTests';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const LabTest = () => {
  const navigate = useNavigate();
  const [showSearchBox, setShowSearchBox] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowSearchBox(false); // Hide search box on scroll down
      } else {
        setShowSearchBox(true); // Show search box on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mt-20 overflow-x-hidden">
      <header className="flex items-center justify-center w-full z-10 fixed top-0 bg-[#28661E] h-[4.5rem] backdrop-blur-sm bg-clip-padding">
        <nav className="flex items-center justify-center w-full flex-col gap-2">
          <div className="flex items-center justify-between px-6 py-3 border-[#dfdfdf] border-b w-full">
            <div className="flex items-center justify-center gap-2">
              <img src={logo} alt="logo" className="w-12 h-12" />
              <p className="font-lime sm:flex hidden text-2xl text-white">
                HealthSaathi
              </p>
            </div>
            <p
              onClick={() => navigate("/")}
              className="text-xs cursor-pointer s:text-sm sm:text-base font-normal font-popp text-white"
            >
              Home
            </p>
            <p
              onClick={() => navigate("/lab-test")}
              className="text-xs cursor-pointer s:text-sm sm:text-base font-normal font-popp text-white"
            >
              LabTest
            </p>
            <p
              onClick={() => navigate("/lab-test")}
              className="text-xs cursor-pointer s:text-sm sm:text-base font-normal font-popp text-white"
            >
              Sample Collection
            </p>
          </div>
        </nav>
      </header>
      {showSearchBox && (
        <div className="flex fixed z-10 top-[4.5rem] items-center justify-between px-4 md:px-12 py-2 md:flex-row flex-col w-full bg-white bg-opacity-50 gap-2">
          <div className="flex md:flex-row flex-col gap-3 rounded-lg md:w-[85%] w-full">
            <div className="relative w-full md:w-[30rem] border">
              <input
                type="text"
                placeholder="Search for Place"
                className="py-2 pl-10 pr-4 w-full rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-500" />
              </div>
            </div>
            <div className="relative w-full md:w-[30rem] border">
              <input
                type="text"
                placeholder="Search for tests, packages and profiles"
                className="py-2 pl-10 pr-4 w-full rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-500" />
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate("/cart")}
            className="bg-white text-black px-5 py-2 flex flex-row gap-2 justify-center items-center border-2 rounded-md"
          >
            <CiShoppingCart /> Cart
          </button>
        </div>
      )}
      <main className="pt-[8.5rem] px-4 md:px-12 max-w-full">
        <Hero />
        <Template />
        <FreqaLabTest />
        {/* <Diagnostic /> */}
        <Health />
        <CheckUp />
        <Benefits />
        <How />
      </main>
    </div>
  );
};

export default LabTest;
