import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import DivSection from "../components/DivSections";
import CategoryDivSection from "../components/CategoryDivSection"

const Home = () => {
  return (
    <React.Fragment>
      <Nav />
      <DivSection />
      <CategoryDivSection />
      <DivSection />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
