import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { TbDiscount2 } from "react-icons/tb";
import PincodeDrawer from "../PincodeDrawer/PincodeDrawer";
// import Login from "../Login/Login";
import { Button } from "@chakra-ui/react";
import logo from '../../../assets/MedoLogoProduct.png'

const Navbar = () => {
  const navigate = useNavigate();
  const GoToHomePage = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        position: "sticky",
        top: "0px",
        zIndex: "1000",
        borderBottom: "1px solid #dfdfdf",
        height: "62px",
      }}
    >
      <div className={styles.navbar}>
        <div className={styles.imageDiv}>
          <img
            style={{ cursor: "pointer" }}
            onClick={GoToHomePage}
            className="w-36 h-[2.6rem]"
            // src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
            src={logo}
            alt=""
          />
        </div>
        <div className={styles.LinkDiv}>
          <div style={{ display: "flex" }}>
            <PincodeDrawer />
          </div>
          <div className={styles.links2}>
            <div>
              {/* <a
                href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643"
                target={"_blank"}
              > */}
              <Button backgroundColor={"#EEF4FE"} fontSize="14px" className="p-2 rounded-xl font-semibold">
                <AiOutlineMobile
                  style={{ fontSize: "25px", marginRight: "10px" }}
                />
                Download App
              </Button>
              {/* </a> */}
            </div>
            {/* <div className={styles.links2Icons}>
              <HiOutlineUser style={{ fontSize: "20px", marginRight: "0px" }} /> */}
            {/* <Login /> */}
            {/* </div> */}
            <div className={styles.links2Icons}>
              <HiOutlineUser style={{ fontSize: "20px", marginRight: "10px" }} />
              <a href="#offers" style={{ fontSize: "14px", fontWeight: "500" }}>
                Hello Log in
              </a>
            </div>
            <div className={styles.links2Icons}>
              <TbDiscount2 style={{ fontSize: "20px", marginRight: "10px" }} />
              <a href="#offers" style={{ fontSize: "14px", fontWeight: "500" }}>
                Offers
              </a>
            </div>
            <div className={styles.links2Icons}>
              <BsCart2 style={{ fontSize: "20px", marginRight: "10px" }} />
              <a href="/cart" style={{ fontSize: "14px", fontWeight: "500" }}>
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
