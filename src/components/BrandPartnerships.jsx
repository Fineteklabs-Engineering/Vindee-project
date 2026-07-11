import '../styles/brand-partnerships.css'


const partners = [
  { name: 'Chapa Dimba', logo: '/images/chapa-dimba.jpg', className: 'partnerChapaDimba' },
  { name: 'Nescafé', logo: '/images/nescafe2.png', className: 'partnerNescafe' },
  { name: 'Safaricom', logo: '/images/safaricom.png', className: 'partnerSafaricom' },
  
  { name: 'M-Pesa', logo: '/images/mpesa.png', className: 'partnerMpesa' },
  { name: 'iPhone', logo: '/images/iphone.png', className: 'partnerIphone' },
];

const BrandPartnerships = () => {
  return (
    <section className="partnersWrap">
      <p className="partnersHeadline">Trusted by leading brands across Kenya</p>

      <div className="partnersRow">
        {partners.map((partner) => (
          <div key={partner.name} className="partnerItem">
            <img src={partner.logo} alt={`${partner.name} logo`} className="partnerIcon" />
           {/* <span className={`partnerLogo ${partner.className}`}>{partner.name}</span> */} 
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandPartnerships;