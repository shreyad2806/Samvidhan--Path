import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Constitution from "./components/pages/constitution";
import Explore from "./components/pages/explore";
import Learn from "./components/pages/Learn";
import Citizen from "./components/pages/citizen";
import Contact from "./components/pages/contact";
import Engage from "./components/pages/engage";
import Games from "./components/pages/games";
import Ebooks from "./components/pages/ebooks";
import CaseStudies from "./components/pages/casestudies";
import Navbar from "./components/Navbar/Navbar";
import Preamble from "./components/pages/constitution/preamble";
import History from "./components/pages/constitution/history";
import Rights from "./components/pages/Citizens/rights";
import Duties from "./components/pages/Citizens/duties";
import MarkdownViewer from "./components/MarkdownViewer";  

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden bg-white text-dark">
        {/* Navbar or any other persistent components can go here */}
        <Navbar />
        <Routes>
          {/* Define the routes for the application */}
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/banner2" element={<Banner2 />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/constitution" element={<Constitution />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/citizen" element={<Citizen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/engage" element={<Engage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/constitution/preamble" element={<Preamble />} />
          <Route path="/constitution/history" element={<History />} />
          <Route path="/citizen/rights" element={<Rights />} />
          <Route path="/citizen/duties" element={<Duties />} />
          <Route path="/docs/:fileName" element={<MarkdownViewer />} />

        </Routes>

        {/* Footer or other global sections can go here */}
        <Footer />
        <Analytics />
      </main>
    </Router>
  );
};

export default App;