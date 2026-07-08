// AboutSection.jsx
import '../styles/about-section.css'

const AboutSection = () => {
  return (
    <section className="aboutWrap">
      <img src="/images/vindee-image2.png" alt="" className="aboutBg" />
      <div className="aboutFade" />

      <div className="aboutStage">
        <div className="aboutDots" />
        <div className="aboutSquareAccent" />
        <div className="aboutColorBlock">
          <p className="aboutBlockKicker">the face of</p>
          <p className="aboutBlockTitle">IRL LIVE<br />with Vindee</p>
        </div>
        <img src="/images/vindee-image4.png" alt="Vindee Official" className="aboutPhoto" />
      </div>

      <div className="aboutContent">
        <p className="aboutEyebrow">— ABOUT VINDEE</p>
        <p className="aboutHeadline">
           From viral street pranks to pioneering IRL livestreaming in East
  Africa. Ranked 3rd Most Influential Streamer in Africa, elevating
  Kenyan content to a global stage.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;