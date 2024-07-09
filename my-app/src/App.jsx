import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ParticleRing from "./components/ParticleRing/ParticleRing";
import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    });
  }, []);
  return (

    <>
      <Hero />
      <div className="devider" />
      <Main />
      <div className="devider" />
      <Contact />
      <div className="devider" />
      <ParticleRing />
      <div className="devider" />
      <Footer />

      <a href="#up" style={{ opacity: status ? 1 : 0, transition: "2s" }}>
        <button className="icon-circle-up scroll2Top"></button>
      </a>
    </>
  );
}

export default App;
