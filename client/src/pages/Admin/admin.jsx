import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center">
        <div className="w-auto px-2 md:px-8 lg:px-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <Link to="/admin-lab">
            <div
              data-aos="flip-right"
              className="bg-cover shadow-2xl rounded-[40px] bg-no-repeat h-[400px] flex flex-col justify-end"
              style={{
                backgroundImage: `url(https://media.istockphoto.com/id/1300036735/photo/blood-test-results-in-a-medical-lab.jpg?s=612x612&w=0&k=20&c=FcEXVAP1EgimwH-gLQ37zRMen7AALY4G5kx7q1xz3rA=)`,
              }}
            >
              <div className="bg-white rounded-[40px] h-1/2 py-8 px-4 flex flex-col justify-between gap-3">
                <h1 className="text-3xl font-bold">Lab Test</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
