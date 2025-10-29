import React from "react";
import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import Resume from "../Resume/Resume";
import Contact from "../../components/Contact/Contact";
import CTA from "../../components/CallToAction/CallToAction";
import Portfolio from "../../components/Portfolio/PortfolioPage";
// import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <CTA/>
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
