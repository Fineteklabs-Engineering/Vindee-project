import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Vindee Official — The Face of Kenyan IRL Livestreaming</title>
        <meta
          name="description"
          content="Vincent 'Vindee' Owino is Kenya's top IRL livestreamer, ranked 3rd Most Influential Streamer in Africa. High-energy street culture, celebrity collabs, and multi-hour broadcasts."
        />
        <meta property="og:title" content="Vindee Official - The Face of Kenyan IRL Livestreaming" />
        <meta
          property="og:description"
          content="Kenya's top IRL livestreamer bringing raw, high-energy broadcasts of street culture, food, and celebrity collaborations to the world."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/vindiee-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <CareerHighlights />
      <FeaturedStreams />
      <BrandPartnerships />
      <ContactBooking />
      <ArchiveSection />
      <Footer />
    </>
  );
};

export default Home;