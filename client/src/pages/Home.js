import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TopDivSection from "../components/TopDivSection";
import CategoryDivSection from "../components/CategoryDivSection";
import BottomDivSection from "../components/BottomDivSection";

const Home = () => {
  return (
    <React.Fragment>
      <Nav />
      <TopDivSection />
      <CategoryDivSection />
      <BottomDivSection />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
