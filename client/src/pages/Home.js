import React from 'react';
import TopDivSection from '../components/TopDivSection';
import CategoryDivSection from '../components/CategoryDivSection';
import BottomDivSection from '../components/BottomDivSection';

const Home = () => {
  return (
    <React.Fragment>
      {/* Rendering the top section */}
      <TopDivSection />
      {/* Rendering the category section */}
      <CategoryDivSection />
      {/* Rendering the bottom section */}
      <BottomDivSection />
    </React.Fragment>
  );
};

export default Home;
