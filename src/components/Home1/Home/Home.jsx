import React from "react";
import Header from "../../Share/Header/Header";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import "./Home.css";
import "../../Share/default.css";
import "../../Share/style.css";
import "../../Share/responsive.css";
import CtaArea from "../CtaArea/CtaArea";
import Team from "../Team/Team";
// import CaseStudy from '../CaseStudy/CaseStudy';
import Contact from "../Contact/Contact";
import Articles from "../Articles/Articles";
import Clients from "../Clients/Clients";
import Footer from "../../Share/Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import ProjectsDetail from "../ProjectsDetail/ProjectsDetail";
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <CtaArea />
      <Services />
      <Team />
      {/* <CaseStudy /> */}
      <ProjectsDetail />
      <Testimonials />
      <Articles />
      <Contact />
      <Clients />
      <Footer />
    </div>
  );
};

export default Home;
