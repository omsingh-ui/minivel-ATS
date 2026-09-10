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

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
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