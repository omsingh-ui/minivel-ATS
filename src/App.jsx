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
import PlatformPage from "./pages/PlatformPage";
import WorkflowPage from "./pages/WorkflowPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import SecurityPage from "./pages/SecurityPage";

import useScrollToHash from "./hooks/useScrollToHash";

function GlobalScrollHandler() {
  useScrollToHash();
  return null;
}

function LandingPage() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
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
      <GlobalScrollHandler />
      <Routes>
        {/* Main ATS landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Dedicated ATS Pages */}
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/workflow" element={<WorkflowPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/security" element={<SecurityPage />} />

        {/* Legacy & Demo Pages */}
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/request-demo" element={<RequestDemo />} />
      </Routes>
    </BrowserRouter>
  );
}