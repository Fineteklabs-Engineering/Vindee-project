
import { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';

import '../styles/book-page.css';

const formCardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 } },
};

const infoListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const infoItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const BookPage = () => {
  const reveal = useScrollReveal(0.1);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact request:', formData);
  };

  return (

    
    <div className="bookPageWrap">
       <Helmet>
      <title>Book Vindee — Vindee Official</title>
    </Helmet>
      <Navbar forceLight />

      <section className="bookSection" ref={reveal.ref}>
        <div className="bookGrid">
          <motion.div
            className="bookFormCard"
            variants={formCardVariants}
            initial="hidden"
            animate={reveal.controls}
          >
            <p className="bookEyebrow">Get in Touch</p>
            <h1 className="bookTitle">Let's Chat, Reach Out to Us</h1>
            <p className="bookSubtitle">
              Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.
            </p>

            <div className="bookDivider" />

            <form className="bookForm" onSubmit={handleSubmit}>
              <div className="bookFormRow">
                <div className="bookField">
                  <label className="bookLabel" htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="bookInput"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="bookField">
                  <label className="bookLabel" htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="bookInput"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="bookField">
                <label className="bookLabel" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bookInput"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="bookField">
                <label className="bookLabel" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="bookTextarea"
                  placeholder="Leave us message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

             

              <button type="submit" className="bookSubmit">Send message</button>
            </form>
          </motion.div>

          <motion.div
            className="bookImageColumn"
            variants={imageVariants}
            initial="hidden"
            animate={reveal.controls}
          >
            <div className="bookImageWrap">
              <img src="/images/vindee-contact.jpeg" alt="Vindee Official" className="bookImage" />
            </div>

          <motion.div
              className="bookInfoList"
              variants={infoListVariants}
              initial="hidden"
              animate={reveal.controls}
            >
              <motion.div className="bookInfoCard" variants={infoItemVariants}>
                <span className="bookInfoIcon">
                  <FiPhone size={18} />
                </span>
                <div>
                  <p className="bookInfoLabel">Phone</p>
                  <a href="tel:+254705225797" className="bookInfoValue bookInfoValueLink">
                    +254 705 225 797, +254 740 202 159
                    
                  </a>
                </div>
              </motion.div>

              <motion.div className="bookInfoCard" variants={infoItemVariants}>
                <span className="bookInfoIcon">
                  <FiMail size={18} />
                </span>
                <div>
                  <p className="bookInfoLabel">Email</p>
                  <a href="mailto:vindeeofficialmarketing@gmail.com" className="bookInfoValue bookInfoValueLink">
                    marketing@vindeeofficial.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="bookInfoCard" variants={infoItemVariants}>
                <span className="bookInfoIcon">
                  <FiMapPin size={18} />
                </span>
                <div>
                  <p className="bookInfoLabel">Location</p>
                  <p className="bookInfoValue">Nairobi, Kenya</p>
                </div>
              </motion.div>
            </motion.div>
            </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookPage;