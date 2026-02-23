import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

import Navigation from "../components/Navigation";
import Tickets from "../sections/Tickets";
import About from "../sections/About";
import Speakers from "../sections/Speakers";
// import Community from "./sections/Community";
import Performances from "../sections/Performances";
// import Partners from "./sections/Partners";
import Gallery from "../sections/Gallery";
import Team from "../sections/Team";
// import FAQ from "./sections/FAQ";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import PreviousSpeakers from "../sections/PreviousSpeakers";

function HomePage() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 0,
      disable: false,
      startEvent: "DOMContentLoaded",
    });

    // Refresh AOS after initialization
    setTimeout(() => AOS.refresh(), 100);
  }, []);

  return (
    <div className="main-container relative bg-tedx-charcoal min-h-screen w-full m-0 p-0">
      {/* Plasma background layer */}

      {/* Noise Overlay */}
      <div className="noise-overlay w-full right-0" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 w-full bg-black">
        <Hero />
        <About />
        <Speakers />
        <Tickets />
        <PreviousSpeakers />
        {/* <Community /> */}
        <Performances />
        {/* <Partners /> */}
        <Gallery />
        <Team />
        {/* <FAQ /> */}
        <Footer />
      </main>
    </div>
  );
}

export default HomePage;
