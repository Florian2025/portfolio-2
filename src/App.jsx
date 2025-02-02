import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Branding from "./components/Branding";
import Faq from "./components/Faq";
import { CallToAction } from "./components/CallToAction";
import { Points } from "./components/Points";
import { CallToAction2 } from "./components/CallToAction2";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Branding />
        <CallToAction />
        <Faq />
        <Points />
        <CallToAction2 />
        <Footer />
      </div>
    </>
  );
}

export default App;
