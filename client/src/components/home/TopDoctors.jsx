import DoctorList from "../Doctors/DoctorList";
import { IoLockClosedOutline } from "react-icons/io5";

const TopDoctors = () => {
  return (
    <section className=" relative">
      <div className="xl:w-[470px] mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center">
          Our top-rated Doctors
        </h2>
        <p className="text-center mt-4">
          World-class care for everyone. Our health system offers unmatched,
          expert health care.
        </p>
      </div>
      <DoctorList />
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-black text-2xl "
      >
        Coming Soon
        <IoLockClosedOutline className="ml-4" />
      </div>


    </section>

  );
};

export default TopDoctors;
