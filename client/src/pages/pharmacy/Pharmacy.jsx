import LabTests from "../../components/labtest/FreqLabTest/LabTests/LabTests";
import {
  Blog,
  Boxes,
  Freq,
  Hero,
  Ser,
  Shop,
  // Slide,
  Spec,
  OfferCards
} from "../../components/pharmecy";
import Prescription from "../../components/pharmecy/Prescription";

const Pharmacy = () => {
  return (
    <>
      <Hero />
      <LabTests />
      <Shop />
      {/* <Slide /> */}
      <OfferCards />
      <Ser />
      <Boxes />
      <Spec />
      <Prescription />
      <Blog />
      <Freq />
    </>
  );
};

export default Pharmacy;
