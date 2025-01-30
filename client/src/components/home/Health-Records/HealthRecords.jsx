import HealthList from "./HealthList";
import { IoLockClosedOutline } from "react-icons/io5";

const HealthRecords = () => {
    return (
        <section className=" relative">
            <HealthList />
            <div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-black text-2xl "
            >
                Coming Soon
                <IoLockClosedOutline className="ml-4" />
            </div>


        </section>

    );
};

export default HealthRecords;
