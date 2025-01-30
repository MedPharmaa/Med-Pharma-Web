import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config";

const Home = () => {
  const [labTests, setLabTests] = useState([]);

  useEffect(() => {
    getMyAppointments();
  }, []);

  const getMyAppointments = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/admin/adminLab`);
      setLabTests(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center">
        {labTests.map((labTest, index) => (
          <div
            key={index}
            data-aos="flip-right"
            className="bg-cover shadow-2xl rounded-[40px] bg-no-repeat h-[400px] flex flex-col justify-end"
          >
            <div className="bg-white rounded-[40px] h-1/2 py-8 px-4 flex flex-col justify-between gap-3">
              <h1 className="text-3xl font-bold">{labTest.labTestName}</h1>
              <p>Username: {labTest.user}</p>
              <p>Email: {labTest.userEmail}</p>
              <p>Date & Time: {labTest.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
