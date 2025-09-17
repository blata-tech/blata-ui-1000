import { useState } from 'react';
import ContactImg from './assets/Contact.jpg';

function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/contact', { // Updated URL to match the backend endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.errors.map(err => err.msg).join(', ')}`);
      }
    } catch (err) {
      alert('Failed to send message.');
    }
  };

  return (
    <div style={{ width: '100vw', background: '#fff', minHeight: '100vh', paddingTop: '7rem' }}>
      <div
        style={{
          maxWidth: '1100px',
          width: '95vw',
          margin: '2rem auto',
          padding: '2rem',
          background: '#f5f5f5',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          color: '#222',
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        {/* Contact Info Left */}
        <div style={{ flex: 1, minWidth: 220 }}>
          <h2 style={{ color: 'black', marginBottom: '1.5rem', textAlign: 'left' }}>Contact Us</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2', textAlign: 'left' }}>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@blatatechnology.net" style={{ color: '#646cff' }}>
                contact@blatatechnology.net
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <a href="tel:+251982996262" style={{ color: '#646cff' }}>
                +251982996262
              </a>
            </li>
            <li>
              <strong>Address:</strong> Lemikura, Addis Ababa, Ethiopia
            </li>
          </ul>
        </div>
        {/* Form Right */}
        <div style={{ flex: 1, minWidth: 260 }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', color: '#646cff', textAlign: 'left' }}>Send us a message</h3>
          {submitted ? (
            <div style={{ color: 'green', marginBottom: '1rem' }}>Thank you for contacting us!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="name">Name</label><br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5em', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email">Email</label><br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5em', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="message">Message</label><br />
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  style={{ width: '100%', padding: '0.5em', borderRadius: '4px', border: '1px solid #ccc' }}
                  placeholder="Type your message here..."
                />
              </div>
              <button type="submit" style={{
                background: '#646cff',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '0.75em 2em',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Send
              </button>
            </form>
          )}
        </div>
      </div>
      {/* Google Maps Location */}
      <div style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '2rem auto',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
        <h3 style={{ color: '#646cff', marginBottom: '1rem', textAlign: 'left', paddingLeft: '1rem' }}>
          Our Location
        </h3>
        <iframe
          title="Blata Technology Group Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.2736194270608!2d38.835574130887004!3d9.029248188114723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850013ad8d4d%3A0xe6bcc6e3677fd7a7!2zV29zZW5lIEludGVybmFsIE1lZGljaW5lIFNwZWNpYWxpdHkgQ2xpbmljIHwg4YuI4Yiw4YqUIOGIjeGLqSDhi6jhi43hiLXhjKUg4Yuw4YuMIOGKreGIiuGKkuGKrQ!5e0!3m2!1sen!2set!4v1755092033610!5m2!1sen!2set"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
