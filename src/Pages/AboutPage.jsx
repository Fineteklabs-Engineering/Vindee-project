
import { Helmet } from 'react-helmet-async';
import AboutHero from '../components/AboutHero';
import BioSection from '../components/BioSection';
import TimelineSection from '../components/TimelineSection';
import Footer from '../components/Footer';


const AboutPage = () => (
  <>
    <Helmet>
      <title>About Vindee — Vindee Official</title>
    </Helmet>
    <AboutHero />
    <BioSection />
    <TimelineSection />
    <Footer />
    
  </>
);

export default AboutPage;