import logo from "../../assets/HSL.png";

const Info = () => {
  return (
    <div className="bg-[#28661E] w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center">
      <div className="flex md:flex-row flex-col lg:w-[40%] md:w-[60%] gap-6 text-white">
        <div className="w-64">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col  justify-start items-start gap-3">
          <p className="lg:text-4xl md:text-3xl text-4xl font-bold">
            HealthSaathi
          </p>
          <p className="lg:text-xl text-base text-gray-200 ">
            Meet HealthSaathi! We’re here to revolutionize healthcare and bring your
            clinic experience online. Forget the long waiting lines and
            inconvenient visits. Your solutions are now just a few clicks away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
