import { useState, useContext, useEffect } from "react";
import logo from "../../assets/HSL.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import avatar from '../../assets/avatar.svg'
import { toast } from "react-hot-toast";
import PincodeDrawer from "../../components/Product/PincodeDrawer/PincodeDrawer.jsx";

const navItems = [
  { value: "Home", path: "/" },
  { value: "Pharmacy", path: "/pharmacy" },
  { value: "Medicines", path: "/products" },
  { value: "Lab Test", path: "/lab-test" },
  { value: "Contact", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, role, token, dispatch } = useContext(AuthContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = () => {
    dispatch({ type: "LOGOUT" });
    toast.success("Logged out successfully");
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`bg-white font-popp py-3 px-5 lg:px-20 flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center z-[1000] fixed top-0 w-full transition-all duration-300 ${scrolling ? 'shadow-md' : ''
        }`}>
        <div className="flex justify-between items-center w-full lg:w-auto">
          <img src={logo} alt="logo" className="h-16 w-16 cursor-pointer select-none" onClick={() => navigate("/")} />
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-black focus:outline-none focus:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isSidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <nav className="hidden lg:flex flex-row gap-8 items-center">
          
          {navItems.map((item, ind) => ( 
            <Link key={ind} to={item.path} className="lg:text-lg text-base cursor-pointer select-none">
              
              {item.value}
            </Link>
          ))}

          <PincodeDrawer />

          {user ? (
            <div className="relative w-9">
              <div onClick={toggleDropdown} className="cursor-pointer">
                <img
                  src={avatar}
                  alt="User Image"
                  width={60}
                  height={50}
                  className="w-12 h-12 rounded-full object-contain"
                />
              </div>
              {showDropdown && (
                <ul className="absolute lg:w-[13vw] text-center justify-center right-0 mt-6 m-auto text-[#000000] bg-white border-none border-gray-200 rounded-md shadow-2xl">
                  {token && user && (
                    <p className="text-sm font-semibold my-4 mt-4">
                      Welcome{' '}
                      <span className="text-blue-300 font-semibold">
                        @{user.name} <br />
                      </span>
                      <div className="mt-2 font-thin">
                        <span className="italic font-extralight text-gray-500 text-sm ">Role : {role}</span>
                      </div>
                    </p>
                  )}
                  <div className="flex flex-col gap-2">
                    <Link to={role === 'patient' ? '/users/profile/me' : '/doctors/profile/me'}>My Profile</Link>
                    {role === 'pharmacist' ? (
                      <Link to="/pharma/dashboard" className=" hover:text-blue-400 transition ease-in">Dashboard</Link>
                    ) : null}
                  </div>
                  <hr className=" m-auto justify-center text-center" />
                  <button
                    className="py-2 px-4 my-5 cursor-pointer hover:bg-white transition-all hover:border hover:border-black ease-in hover:text-black bg-black rounded-full text-white"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </ul>
              )}
            </div>
          ) : (
            <div className="flex flex-row gap-6 items-center">
              <button
                onClick={() => navigate("/sign-in")}
                className="bg-white p-3 w-28 rounded-full border-2 border-[#2a8981] font-semibold text-[#2a8981]"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/sign-up")}
                className="bg-[#2a8981] p-3 w-28 rounded-full border-2 border-[#2a8981] font-semibold text-white"
              >
                Sign Up
              </button>
            </div>
          )}
        </nav>

        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isSidebarOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className={`${isSidebarOpen ? "h-full w-screen backdrop-blur-sm absolute top-0 left-0 z-[90]" : ""}`}
          ></motion.div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isSidebarOpen ? "0%" : "100%" }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 right-0 h-screen w-64 bg-white z-[1000]`}
          >
            <button
              onClick={toggleSidebar}
              className="text-black float-right focus:outline-none focus:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="black"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="pt-5 flex flex-col gap-8">
              {navItems?.map((item, ind) => (
                <div key={ind} className="mt-6 cursor-pointer select-none" onClick={() => navigate(`${item.path}`)}>
                  <p className="text-xl text-center cursor-pointer font-semibold">{item.value}</p>
                </div>
              ))}
              <button
                onClick={() => navigate("/sign-in")}
                className="bg-white px-7 py-2 rounded-full border-2 border-[#3A4F39] font-semibold text-[#3a4f39]"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/sign-up")}
                className="bg-[#28661E] px-6 py-2 rounded-full border-2 border-[#28661E] font-semibold text-white"
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
