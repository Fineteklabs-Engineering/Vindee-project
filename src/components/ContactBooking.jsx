import { useState } from 'react';
import '../styles/contact-booking.css'

const eventTypes = [
  'Brand sponsorship',
  'Event hosting',
  'Media appearance',
  'Live activation',
  'Other',
];

const ContactBooking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    eventType: '',
    eventDate: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Booking request:', formData);
  };

  return (
    <section id="contact-booking" className="bookingWrap">
      <div className="bookingOverlay" />

      <div className="bookingCard">
        <h2 className="bookingTitle">Ready to book?</h2>
        <p className="bookingSubtitle">Fill out the form below and we'll get back to you within 24 hours</p>

        <form className="bookingForm" onSubmit={handleSubmit}>
          <div className="bookingRow">
            <div className="bookingField">
              <label className="bookingLabel" htmlFor="fullName">Full name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="bookingInput"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="bookingField">
              <label className="bookingLabel" htmlFor="email">Email address *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="bookingInput"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="bookingRow">
            <div className="bookingField">
              <label className="bookingLabel" htmlFor="eventType">Event type *</label>
              <select
                id="eventType"
                name="eventType"
                className="bookingInput"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select event type</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="bookingField">
              <label className="bookingLabel" htmlFor="eventDate">Event date</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                className="bookingInput"
                value={formData.eventDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="bookingField">
            <label className="bookingLabel" htmlFor="details">Event details & requirements *</label>
            <textarea
              id="details"
              name="details"
              className="bookingTextarea"
              placeholder="Tell us about your event, expected audience size, venue, and any specific requirements..."
              value={formData.details}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>

          <button type="submit" className="bookingSubmit">Send booking request</button>
        </form>
      </div>
    </section>
  );
};

export default ContactBooking;