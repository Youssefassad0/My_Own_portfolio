import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import ParticleRing from "./components/ParticleRing/ParticleRing";

function App() {
  return (
    <BrowserRouter>
      <div className="container" id="up" >
        <Header />
        <Hero />
        <div className="devider" />
        <Main />
        <div className="devider" />
        <Contact />
        <div className="devider" />
        <ParticleRing />
        <div className="devider" />
        <Footer />
        <a href="#up">
          <button className="icon-circle-up scroll2Top"></button>
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
