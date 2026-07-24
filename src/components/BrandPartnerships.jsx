
import '../styles/brand-partnerships.css';

const partners = [
  { name: 'Chapa Dimba', logo: '/images/chapa-dimba.jpg' },
  { name: 'Nescafé', logo: '/images/nescafe2.png' },
  { name: 'Gagdetopiah', logo: '/images/gadgetopiah.png' },
  { name: 'Betchapaa', logo: '/images/betchapaa2.png' },
  { name: 'Bedpalace', logo: '/images/bedpalace2.png' },
];

const BrandPartnerships = () => {
  return (
    <section className="partnersWrap">
      <p className="partnersHeadline">Trusted by leading brands across Kenya</p>

      <div className="partnersMarqueeWrap">
        <div className="partnersMarqueeTrack">
          {[...partners, ...partners].map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="partnerMarqueeItem">
              <img src={partner.logo} alt={`${partner.name} logo`} className="partnerMarqueeIcon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartnerships;