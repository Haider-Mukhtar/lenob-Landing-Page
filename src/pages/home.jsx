import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import StepsSection from "../components/steps-section";
import FamilySection from "../components/family-section";
import GrowthSection from "../components/growth-section";
import MessageSection from "../components/message-section";
import ClientsSection from "../components/clients-section";
import ExpertiseSection from "../components/expertise-section";
import VideoTestimonial from "../components/video-testimonial";
import TakeAStepSection from "../components/take-a-step-section";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-blue-100 to-emerald-100">
      <Navbar />
      <HeroSection />
      <MessageSection />
      <ExpertiseSection />
      <GrowthSection />
      <StepsSection />
      <FamilySection />
      <ClientsSection />
      <TakeAStepSection />
      {/*
        <VideoTestimonial />
        */}
    </div>
  );
};

export default Home;
