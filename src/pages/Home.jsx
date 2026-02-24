import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Features from "../components/Features";
import ProductDemo from "../components/ProductDemo";
import Stats from "../components/Stats";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      {/* <Features /> */}
      {/* <ProductDemo /> */}
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <ContactUs />
      
      <CTA />
    </>
  );
}