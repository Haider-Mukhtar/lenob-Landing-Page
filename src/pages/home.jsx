import ExpertiseSection from "../components/expertise-section";
import GrowthSection from "../components/growth-section";
import HeroSection from "../components/hero-section";
import MessageSection from "../components/message-section";
import Navbar from "../components/navbar";
import StepsSection from "../components/steps-section";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-blue-100 to-emerald-100">
      <Navbar />
      <HeroSection />
      <MessageSection />
      <ExpertiseSection />
      <GrowthSection />
      <StepsSection />
      {/*
        */}
    </div>
  );
};

export default Home;
