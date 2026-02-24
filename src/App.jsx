// FILE: src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

// // FILE: src/App.jsx
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Clients from "./components/Clients";
// import Services from "./components/Services";
// import About from "./components/About";
// import Stats from "./components/Stats";
// import Testimonials from "./components/Testimonials";
// import CTA from "./components/CTA";
// import Footer from "./components/Footer";
// import ContactUs from "./components/ContactUs";

// export default function App() {
//   return (
//     <div className="relative overflow-hidden">
//       <Navbar />
//       <Hero />
//       <div className="divider-line" />
//       <Clients />
//       <div className="divider-line" />
//       <Services />
//       <About />
//       <Stats />
//       <div className="divider-line" />
//       <Testimonials />
//       <ContactUs /> 
//       <CTA />
//       <Footer />
//     </div>
//   );
// }