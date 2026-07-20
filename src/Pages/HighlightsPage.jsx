
import { Helmet } from 'react-helmet-async';
import HighlightsHero from '../components/HighlightsHero';
{/* import HighlightsGrid from '../components/HighlightsGrid'; */}


const HighlightsPage = () => (
  <>
    <Helmet>
      <title>Career Highlights — Vindee Official</title>
    </Helmet>
    <HighlightsHero />
  {/* <HighlightsGrid /> */}
    
  </>
);

export default HighlightsPage;