import React from 'react';
import '../App.css';
import Cards from './Cards';
import HeroSection from './HeroSection';

function header() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default header;