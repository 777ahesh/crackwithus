import React from "react";
import Common from "../Common/Common";
import Navbar from "../Navbar/Navbar";
import web from "../../images/hero.png";
const Home = () => {
  return (
    <>
      <Navbar active="activeSide"/>
      <Common name="Start Learning " imgsrc={web} visit="/login" btname="Get Started"/>
    </>
  );
};

export default Home;
