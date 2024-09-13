import React from "react";

import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";

const Home = () => {
  return (
    <>
      <Hero />

      {/* <HAbout /> */}
      <Testimonal />

      {/* <Hprice /> */}
    </>
  );
};

export default Home;
