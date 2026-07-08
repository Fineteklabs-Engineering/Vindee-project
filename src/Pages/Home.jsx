import AboutSection from '../components/AboutSection';
import ArchiveSection from '../components/ArchiveSection';
import BrandPartnerships from '../components/BrandPartnerships';
import CareerHighlights from '../components/CareerHighlights';
import ContactBooking from '../components/ContactBooking';
import FeaturedStreams from '../components/FeaturedStreams';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
     
      <AboutSection />
      <StatsBar />
      <CareerHighlights />
      <FeaturedStreams />
      <BrandPartnerships />
      <ArchiveSection />
      <ContactBooking />
      <Footer />
    </>
  );
};

export default Home;