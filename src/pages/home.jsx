import ExpertiseSection from "../components/expertise-section";
import HeroSection from "../components/hero-section";
import MessageSection from "../components/message-section";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-blue-100 to-emerald-100">
      <Navbar />
      <HeroSection />
      <MessageSection />
      <ExpertiseSection />
      {/*
        */}
    </div>
  );
};

export default Home;
