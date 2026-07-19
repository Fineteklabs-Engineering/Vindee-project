
import '../styles/bio-section.css';

const BioSection = () => {
  return (
    <div className="bioOuterWrap">
      <section className="bioWrap">
        <div className="bioImageCol">
          <img src="/images/vindee-bio-photo.jpg" alt="Vindee Official" className="bioImage" />
        </div>

        <div className="bioContentCol">
          <p className="bioKicker">The Origin</p>
          <h2 className="bioHeadline">
            From street pranks to<br /><em>primetime streams.</em>
          </h2>

          <p className="bioParagraph">
            Vincent "Vindee" Owino transitioned from viral "Ntakushandaa" street
            pranks to pioneering high-stakes IRL livestreaming in East Africa.
            His high-energy, raw, and authentic multi-hour broadcasts bring
            thousands of live viewers along as he explores local food, street
            culture, and high-profile collaborations across the globe.
          </p>

          <p className="bioParagraph">
            Now ranked the 3rd Most Influential Streamer in Africa, his mission
            remains the same one that started it all — elevating the Kenyan
            content creation scene to a global standard.
          </p>

          <p className="bioMission">
            The streets of Nairobi, told live, unscripted.
          </p>

          <a href="/streams" className="bioLink">Watch the streams</a>
        </div>
      </section>
    </div>
  );
};

export default BioSection;