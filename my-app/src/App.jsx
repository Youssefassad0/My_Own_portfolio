import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="devider" />
      <Hero />
      <div className="devider" />
      <Main />
      <div className="devider" />
      <Contact />
      <div className="devider" />
      <Footer />
    </div>
  );
}

export default App;
