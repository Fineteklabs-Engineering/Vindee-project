import { FaTiktok, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import '../styles/social-media.css';

const socials = [
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@vindee_official',
    icon: <FaTiktok size={14} />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/vindee_official/',
    icon: <FaInstagram size={14} />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100063672132006#',
    icon: <FaFacebook size={14} />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@vindee_official./streams',
    icon: <FaYoutube size={14} />,
  },
];

const SocialMedia = () => {
  return (
    <div className="socialFloat">
      {socials.map((social, index) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="socialFloatBtn"
          aria-label={social.name}
          style={{ animationDelay: `${0.4 + index * 0.12}s` }}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;