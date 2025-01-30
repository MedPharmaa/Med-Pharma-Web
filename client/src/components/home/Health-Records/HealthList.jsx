import HealthCard from './HealthCard'
import { Health } from "../../../database/data";
import '../../../index.css'

const HealthList = () => {
    return (
        <div className="container blur-xl relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] relative z-10">
                {Health.map((doctor) => (
                    <HealthCard key={doctor.id} doctor={doctor} />
                ))}
            </div>

        </div>
    );
};

export default HealthList;
