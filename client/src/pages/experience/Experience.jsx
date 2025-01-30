import { Grid, Her } from "../../components/experience";
import {
  Ans,
  Facilities,
  Sign,
  Technologies,
} from "../../components/home";
import { techno } from "../../database/data";

const Experience = () => {
  return (
    <>
      <Her />
      <Grid />
      <Technologies techno={techno} />
      <Facilities />
      <Sign />
      <Ans />
    </>
  );
};

export default Experience;
