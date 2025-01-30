import { useState } from "react";
import envelop from "../../assets/enevloper.png";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { BASE_URL } from "../../config.js";
import { toast } from "react-hot-toast";


const Sign = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);


  const templateParams = {
    from_name: "HealthSaathi",
    from_email: "akshatgtc@gmail.com",
    to_email: email,
    message: "Thank you for subscribing to HealthSaathi!",
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    axios.post(`${BASE_URL}/subscribe/create`, {
      email: email,
    })


    emailjs
      .send(
        "service_fvshck7",
        "template_xk3pp1q",
        templateParams,
        "bKs4oP1IZMlG27n--"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        toast.success("You are subscribed to our newsletter!")
        setEmail("");
        setSubscribed(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="flex w-full items-center justify-center relative min-h-[100vh] overflow-y-hidden">
      <div className="mx-auto bg-transparent absolute z-[9] opacity-[1.7]">
        <div className="flex bg-black subs items-center justify-center p-[5rem] flex-col m-l-2rem gap-8 w-[75%] m-auto rounded-[2rem]">
          <h3 className="text-1xl font-bold text-[#6ecf6b] tracking-widest uppercase">
            Subscribe to our newsletter
          </h3>
          <p className="text-4xl font-bold text-center overflow-hidden text-white self-center">
            Exclusive Offer Previews, Announcements, and More.
          </p>
          <div className="flex items-center justify-evenly w-full">
            <div className="rounded-[1rem] bg-white h-16 font-bold text-gray-700 text-2xl flex items-center justify-center py-4 px-4 w-1/2">
              <img src={envelop} className="mr-4 bg-transparent" alt="" />
              <input
                type="text"
                id="user-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-full w-full bg-transparent outline-none placeholder-gray-700 placeholder:font-semibold"
                placeholder="Your Email"
              />
            </div>
            <button
              className="rounded-[1rem] bg-[#5d50c6] border-spacing-1 hover:bg-[#7565ec] transition-all duration-300 ease-in-out text-white text-2xl py-4 px-6"
              onClick={handleSubmit}
            >
              Subscribe
            </button>
          </div>
          {/* {subscribed && (
            // <p className="text-white mt-4">You are subscribed to our newsletter!</p>
            toast.success("You are subscribed to our newsletter!")
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Sign;
