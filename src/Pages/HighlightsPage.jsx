
import { Helmet } from 'react-helmet-async';
import HighlightsHero from '../components/HighlightsHero';
import HighlightsGrid from '../components/HighlightsGrid';
import Footer from '../components/Footer';
import StatsBar from '../components/StatsBar';
import ArchiveSection from '../components/ArchiveSection';

const HighlightsPage = () => (
  <>
    <Helmet>
      <title>Career Highlights - Vindee Official</title>
    </Helmet>
    <HighlightsHero />
     <StatsBar />
    <HighlightsGrid />
    <ArchiveSection />
   
    <Footer />
  </>
);

export default HighlightsPage;