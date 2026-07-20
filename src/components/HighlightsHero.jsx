import Navbar from './Navbar';
import '../styles/highlights-hero.css';
import { href } from 'react-router-dom';

const HighlightsHero = () => {
  return (
    <section className="highlightsHeroWrap">
      <img src="/images/vindee-japanese.png" alt="" className="highlightsHeroBg" />
      <div className="highlightsHeroOverlay" />

      <Navbar />

      <div className="highlightsHeroTopGroup">
        <div className="highlightsHeroCard">
          <div className="highlightsHeroCardImageWrap">
            <img src="/images/vindee-30day.png" alt="" className="highlightsHeroCardImage" />
          </div>
          <div className="highlightsHeroCardBody">
            <p className="highlightsHeroCardLabel">30-DAY<br />MARATHON</p>
            <button className="highlightsHeroCardBtn">Learn More</button>
          </div>
          <div className="highlightsHeroCardDots">
            <span /><span /><span />
          </div>
        </div>

        <div className="highlightsHeroMid">
          <p className="highlightsHeroText">
            Marathons, milestones, and mega streams - every moment that
            built Kenya's IRL streaming movement.
          </p>
          <button className="highlightsHeroCta" onClick={()=> window.location.href = 'https://www.youtube.com/watch?v=8f1qh1bYYJw'}>VIEW HIGHLIGHTS</button>
        </div>
      </div>

      <h1 className="highlightsHeroTitle">
        <span className="highlightsHeroTitleSolid">STREET TO</span>
        <span className="highlightsHeroTitleFade">STARDOM</span>
      </h1>
    </section>
  );
};

export default HighlightsHero;