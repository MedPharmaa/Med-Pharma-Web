import useFetchData from "../../hooks/useFetchData"
import { BASE_URL } from "../../config"
import DoctorCard from "../../components/Doctors/DoctorCard"
import Loading from "../../components/Loader/Loading"
import Error from "../../components/Error/Error"

const MyBookings = () => {

    const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);
    return (
        <div>
            {loading && !error && <Loading />}

            {error && !loading && <Error errMessage={error} />}

            {!loading && !error && (
                <div className="grid grid-cols-1 ld:grid-cols-2 gap-5">
                    {
                        appointments.map(doctor =>
                            <DoctorCard doctor={doctor} key={doctor._id} />
                        )
                    }
                </div>
            )}
            {!loading && !error && appointments.length === 0 && <h3 className="mt-5 text-gray-600 leading-7 text-[20px] font-semibold "> You didn&apos;t book any doctor yet</h3>}
        </div>
    );
}
export default MyBookings;

