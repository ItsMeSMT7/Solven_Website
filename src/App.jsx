// FILE: src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import About from "./components/About";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <div className="divider-line" />
      <Clients />
      <div className="divider-line" />
      <Services />
      <About />
      <Stats />
      <div className="divider-line" />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}