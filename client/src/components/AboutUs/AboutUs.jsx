import React from "react";
import Common from "../Common/Common";
import Navbar from "../Navbar/Navbar";
import web from "../../images/hero.png";
const Home = () => {
  return (
    <>
      <Navbar active="activeSide"/>
      <Common name="About Us " imgsrc={web} visit="/contact" btname="Contact Us"/>
    </>
  );
};

export default Home;
