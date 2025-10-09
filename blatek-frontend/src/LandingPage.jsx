// ModernLandingPage.jsx
import { useState, useEffect } from "react";
import logo from './assets/logo.png';

function ModernLandingPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionStyle = {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, rgb(9, 12, 179) 0%, hsl(246, 77.8%, 42.4%) 100%)',
    padding: isMobile ? '1.5rem 1rem' : '2rem',
    textAlign: 'center',
  };

  const logoStyle = {
    width: isMobile ? '120px' : '160px',
    height: isMobile ? '120px' : '160px',
    borderRadius: '50%',
    boxShadow: '0 4px 24px rgba(100,108,255,0.12)',
    marginBottom: '1.5rem',
    background: '#fff',
  };

  const headingStyle = {
    fontSize: isMobile ? '2rem' : '2.5rem',
    color: '#213547',
    marginBottom: '1rem',
    fontWeight: 700,
    letterSpacing: '1px',
  };

  const paragraphStyle = {
    fontSize: isMobile ? '1rem' : '1.25rem',
    color: '#555',
    maxWidth: '500px',
    marginBottom: '2rem',
  };

  const buttonStyle = {
    padding: '0.75rem 2rem',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '1rem',
    textDecoration: 'none',
    boxShadow: '0 2px 8px rgba(100,108,255,0.08)',
    margin: isMobile ? '0.5rem 0' : '0 0.5rem',
    display: 'inline-block',
  };

  return (
    <section style={sectionStyle}>
      <img src={logo} alt="Blata Technology Group Logo" style={logoStyle} />
      <h1 style={headingStyle}>Welcome to Blata Technology Group</h1>
      <p style={paragraphStyle}>
        Empowering your business with innovative technology solutions. Discover our services and let’s grow together!
      </p>
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem' }}>
        <a
          href="/services"
          style={{ ...buttonStyle, background: '#646cff', color: '#fff', border: 'none' }}
        >
          Our Services
        </a>
        <a
          href="/contactus"
          style={{ ...buttonStyle, background: '#fff', color: '#646cff', border: '2px solid #646cff' }}
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default ModernLandingPage;
