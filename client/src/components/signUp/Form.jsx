import logo from "../../assets/HSL.png";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import banner from '../../assets/BannSingUp.svg'
import {BASE_URL} from "../../config.js";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from "@material-ui/core";

const Form = () => {
  const [btn, setBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const onclick = () => {
    setBtn(!btn);
  };

  const handleChange = (event) => {
    setRole(event.target.value);
    setData({ ...data, role: event.target.value });
  };

  const RegisterForm = async (e) => {
    e.preventDefault();
    const { name, email, password, role } = data;

    try {
      setLoading(true);
      const { data } = await axios.post(`${BASE_URL}/auth/register`, {
        name,
        email,
        password,
        role,
      });

      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        toast.success(data.message);
        // Clear the form data
        setData({
          name: "",
          email: "",
          password: "",
          role: "",
        });

        setTimeout(() => {
          navigate("/sign-in");
        }, 2000);

        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <div className="pt-7 flex select-none font-mons gap-20 items-center justify-center min-h-screen h-full " data-aos="fade-up " data-aos-duration="2000">
        <div className="md:w-[100%]">
          <img src={banner} alt="" className=" object-contain" data-aos="fade-right" />
        </div>
        <div className=" flex items-center justify-center w-full">
          <div className="flex flex-col-reverse md:flex-row w-full lg:gap-12 md:gap-16 gap-8">
            <div className="md:w-[90%] w-full flex flex-col justify-between items-start p-8 h-screen md:rounded-r-[20px] md:rounded-tl-none rounded-t-[20px] lg:gap-10 gap-5">

              <div className="flex mt-16 flex-col justify-center items-center md:items-start w-full">
                <div className="flex flex-col justify-center w-[90%] items-start gap-3">
                  <h1 className="font-bold lg:text-4xl text-[#272727] md:text-2xl text-xl" data-aos="fade-up" data-aos-duration="1000">
                    Join Us !
                  </h1>
                  <p className="font-normal lg:text-lg md:text-base text-sm text-[#525252] cursor-text" data-aos="fade-up" data-aos-duration="1000">
                    experience the joy of holistic healthcare.
                  </p>
                </div>
                <form
                  action="#"
                  method="POST"
                  onSubmit={RegisterForm}
                  className="flex flex-col gap-5 md:justify-start md:items-start justify-center items-start md:w-[90%] w-full"
                >
                  <input
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    type="text"
                    required
                    placeholder="Enter Your Name"
                    data-aos="fade-up" data-aos-duration="1000"
                    className="outline-none border-2 border-[#8D8D8D] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[90%]"
                  />
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    required
                    placeholder="Enter Your Email"
                    data-aos="fade-up" data-aos-duration="1100"
                    className="outline-none border-2 border-[#8D8D8D] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[90%]"
                  />
                  <input
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    type="password"
                    required
                    placeholder="Password"
                    data-aos="fade-up" data-aos-duration="1300"
                    className="outline-none border-2 border-[#8D8D8D] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[90%]"
                  />
                  <div className="flex flex-row items-center w-full justify-between ">
                    <div >
                      <input
                        type="checkbox"
                        name="check"
                        id="check"
                        checked={btn}
                        className={`mt-1 rounded-md text-[#8D8D8D] border-[#8D8D8D]`}
                      />
                      <label
                        htmlFor="#check"
                        className="lg:text-lg md:text-base text-[#8D8D8D]"
                        onClick={onclick}
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="w-[19%]">
                      <Box border="1px solid black" sx={{ minWidth: 140 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Role
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={role}
                            label="role"
                            onChange={handleChange}
                          >
                            <MenuItem value="patient">Patient</MenuItem>
                            <MenuItem value="doctor">Doctor</MenuItem>
                            <MenuItem value="pharmacist">Pharmacist</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="md:w-[90%] flex flex-row justify-center items-center gap-1 w-full uppercase text-white font-bold lg:text-lg md:text-base text-sm py-3 bg-[#28661E] rounded-[20px] shadow-md hover:shadow-lg cursor-pointer text-center transition-all duration-300 ease-in-out"
                  >
                    {loading ? "Loading..." : "Sign Up"}
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.45831 9.5H15.5416"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 3.95834L15.5417 9.50001L10 15.0417"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>

                <p className="flex flex-row gap-2  text-[#525252] lg:text-base text-sm">
                  Already have an account?
                  <span
                    onClick={() => navigate("/sign-in")}
                    className="text-[#28661E] font-semibold underline"
                  >
                    Sign In
                  </span>
                </p>
              </div>
              <div className="text-center mt-[-8px] w-full">
                <p className="md:text-base text-sm text-[#525252]">
                  &copy; HealthSaathi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
