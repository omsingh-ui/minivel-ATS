import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import WorkflowExperience from "./components/WorkflowExperience";
import Integrations from "./components/Integrations";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import TrustCompliance from "./components/TrustCompliance";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import RequestDemo from "./pages/RequestDemo";
import FeaturesPage from "./pages/FeaturesPage";

function LandingPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <SocialProof />
        <Features />
        <WorkflowExperience />
        <Integrations />
        <Stats />
        <FAQ />
        <TrustCompliance />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main ATS landing page */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/features" element={<FeaturesPage />} />

        {/* Demo page */}
        <Route path="/request-demo" element={<RequestDemo />} />
      </Routes>
    </BrowserRouter>
  );
}