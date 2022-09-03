import React from 'react';
import NavBar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import { Sections } from '../../components/sections/Sections';

const Landing = () => {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <Sections.HeroSection />
      <Sections.AboutSection />
      <Sections.ProductsSection />
      <Sections.ContactUsSection />
      <Sections.FooterSection />
    </div>
  );
};

export default Landing;
