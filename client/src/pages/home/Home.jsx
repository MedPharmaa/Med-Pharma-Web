import {
  Ans,
  Facilities,
  // Hero,
  Info,
  Sign,
  Technologies,
  Testimonials,
  HowItWorks
} from "../../components/home";
import TopDoctors from "../../components/home/TopDoctors";
import { techno } from "../../database/data";
import { Her, Grid } from "../../components/experience";

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <Her />
      <Grid />
      {/* <Info /> */}
      <Technologies techno={techno} />
      <HowItWorks />
      <Facilities />
      <TopDoctors />
      <Sign />
      <Testimonials />
      <Ans />
    </>
  );
};

export default Home;
