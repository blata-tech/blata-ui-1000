import { useState, useEffect } from "react";
import missionImg from './assets/Mission.jpg';

function Mission() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    maxWidth: '1200px',
    width: '96vw',
    minHeight: '70vh',
    margin: '4rem auto',
    padding: isMobile ? '1.5rem 1rem' : '2.5rem 2rem',
    background: 'linear-gradient(120deg, #f5f5f5 80%, #e7eaff 100%)',
    borderRadius: '24px',
    boxShadow: '0 4px 32px rgba(100,108,255,0.10)',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    gap: '3rem'
  };

  const imageContainer = {
    flex: '0 0 340px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: isMobile ? '250px' : '320px',
    height: isMobile ? '250px' : '320px',
    borderRadius: '24px',
    background: '#fff',
    boxShadow: '0 2px 16px rgba(100,108,255,0.13)',
    objectFit: 'contain'
  };

  const contentStyle = {
    flex: 1,
    textAlign: isMobile ? 'center' : 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const headingStyle = {
    color: '#646cff',
    fontWeight: 900,
    fontSize: isMobile ? '1.8rem' : '2.2rem',
    marginBottom: '1.5rem'
  };

  const paragraphStyle = {
    fontSize: '1.18rem',
    color: '#222',
    lineHeight: 1.7
  };

  return (
    <div style={containerStyle}>
      {/* Image Left */}
      <div style={imageContainer}>
        <img src={missionImg} alt="Blata Technology Group Mission" style={imageStyle} />
      </div>

      {/* Content Right */}
      <div style={contentStyle}>
        <h1 style={headingStyle}>Mission</h1>
        <p style={paragraphStyle}>
          To simplify technology and empower businesses with smart, scalable, and secure digital solutions.
        </p>
      </div>
    </div>
  );
}

export default Mission;
