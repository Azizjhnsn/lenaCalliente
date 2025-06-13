import React from "react";
import Footer from "../Components/Footer";
import Navigationbar from "../Components/Navbar";
import LocationBar from "../Components/LocationBar";
import HeroSection from "../Components/HeroSection";
import FeaturesSection from "../Components/FeatureSection";
import HomeSections from "../Components/HomeSections";
import bgImg from "../assets/ppellets.jpg";


function Home() {
  return (
    <React.Fragment>
      <Navigationbar />
      <LocationBar currentPage={"Home"} />
      <HeroSection bgImg={bgImg} />
      <div className="mt-4 mb-4">
        <FeaturesSection />
      </div>
      <HomeSections/>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
