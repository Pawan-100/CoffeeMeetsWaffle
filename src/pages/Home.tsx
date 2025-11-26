import HeroSection from "../components/Home/HeroSection";
import BrandIntroSection from "../components/Home/BrandIntroSection";
import DistinguishedGuestsSection from "../components/Home/DistinguishedGuestsSection";
import IndiaPresenceSection from "../components/Home/IndiaPresenceSection";
import PopularProductsSection from "../components/Home/PopularProductsSection";
import StorySection from "../components/Home/StorySection";
import StatsSection from "../components/Home/StatsSection";
import FoundersSection from "../components/Home/FoundersSection";
import MissionSection from "../components/Home/MissionSection";
import CommunitySection from "../components/Home/CommunitySection";
import AwardsSection from "../components/Home/AwardsSection";

interface HomeProps {
  onNavigate: (sectionId: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <BrandIntroSection />
      <PopularProductsSection />
      <DistinguishedGuestsSection />
      <IndiaPresenceSection />

      {/* <StorySection />
      <StatsSection />
      <FoundersSection />
      <MissionSection />
      <CommunitySection />
      <AwardsSection /> */}
    </>
  );
};

export default Home;
