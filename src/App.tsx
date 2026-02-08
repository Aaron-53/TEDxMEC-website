import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Navigation from "./components/Navigation";
import Tickets from "./sections/Tickets";
import About from "./sections/About";
import Speakers from "./sections/Speakers";
import Experience from "./sections/Experience";
import Community from "./sections/Community";
import Performances from "./sections/Performances";
import Partners from "./sections/Partners";
import Gallery from "./sections/Gallery";
import Team from "./sections/Team";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Page from "./sections/Hero_Container";

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true, // Animation happens only once
      offset: 100,
      delay: 0,
    });

    // Refresh AOS when needed
    AOS.refresh();
  }, []);

  return (
  <div className="relative bg-tedx-charcoal">

    {/* Plasma background layer */}
    <Page />

    {/* Noise Overlay */}
    <div className="noise-overlay" />

    {/* Navigation */}
    <Navigation />

    {/* Main Content */}
    <main className="relative z-10 bg-black">
      <Tickets />
      <About />
      <Speakers />
      <Experience />
      <Community />
      <Performances />
      <Partners />
      <Gallery />
      <Team />
      <FAQ />
      <Footer />
    </main>
  </div>
);

}

export default App;
