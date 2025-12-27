import HeroSection from "../components/Home/HeroSection";
import BrandIntroSection from "../components/Home/BrandIntroSection";
import DistinguishedGuestsSection from "../components/Home/DistinguishedGuestsSection";
import IndiaPresenceSection from "../components/Home/IndiaPresenceSection";
import PopularProductsSection from "../components/Home/PopularProductsSection";
import WomenEmpowermentSection from "../components/Home/WomenEmpowermentSection";

interface HomeProps {
  onNavigate: (sectionId: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <BrandIntroSection />
      <PopularProductsSection />
      <WomenEmpowermentSection />
      <DistinguishedGuestsSection />
      <IndiaPresenceSection />
    </>
  );
};

export default Home;
