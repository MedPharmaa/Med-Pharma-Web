import { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import HasLoader from 'react-spinners/HashLoader'
import { PropTypes } from "prop-types";
import { BASE_URL } from "../../config";
import { AuthContext } from "../../context/AuthContext";


const ProfileSetting = ({ user }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { token } = useContext(AuthContext);

    useEffect(() => {
        setData({
            name: user.name,
            email: user.email,
            password: user.password,
        })
    }, [user])

    const submitHandler = async event => {

        event.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/users/${user._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            const { message } = await res.json();

            if (!res.ok) {
                throw new Error(message);
            }

            setLoading(false);
            toast.success("Profile Updated Successfully");
            navigate('/users/profile/me');

        } catch (error) {
            setLoading(false);
            toast.error(error.res.data.message);
        }
    }



    return (
        <>
            <div className="flex select-none font-mons items-center justify-center" data-aos="fade-up">
                <div className=" flex items-center justify-center w-full">
                    <div className="flex flex-col-reverse md:flex-row w-full lg:gap-12 md:gap-16 gap-8">
                        <div className="md:w-[90%] w-full flex flex-col justify-between items-start md:rounded-r-[20px]">
                            <div className="flex mt-16 flex-col justify-center items-center md:items-start w-full">
                                {/* <h1>update the profile !</h1> */}

                                <form
                                    action="#"
                                    method="POST"
                                    onSubmit={submitHandler}
                                    className="flex flex-col gap-5 md:justify-start md:items-start justify-center items-start md:w-[90%] w-full"
                                >
                                    <input
                                        value={data.name}
                                        onChange={(e) => setData({ ...data, name: e.target.value })}
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="outline-none border-2 border-[#8D8D8D] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[90%]"
                                    />
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData({ ...data, email: e.target.value })
                                        }
                                        placeholder="Enter Your Email"
                                        disabled
                                        className="outline-none border-2 border-[#8D8D8D] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[90%]"
                                    />
                                    <input
                                        value={data.password}
                                        onChange={(e) =>
                                            setData({ ...data, password: e.target.value })
                                        }
                                        type="password"
                                        placeholder="Password"
                                        className="outline-none border-2 border-[#8D8D8D] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[90%]"
                                    />

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="md:w-[90%] flex flex-row justify-center items-center gap-1 w-full uppercase text-white font-bold lg:text-lg md:text-base text-sm py-3 bg-[#28661E] rounded-[20px] shadow-md hover:shadow-lg cursor-pointer text-center transition-all duration-300 ease-in-out"
                                    >
                                        {loading ? <HasLoader color="white" /> : "Update"}

                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

ProfileSetting.propTypes = {
    user: PropTypes.object.isRequired,
};

export default ProfileSetting;
