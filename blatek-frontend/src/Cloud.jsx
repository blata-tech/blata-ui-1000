import { useEffect, useState } from 'react';
import CloudImg from './assets/CloudC.jpeg';
import CloudImg1 from './assets/Cloud1.jpg';
import CloudImg2 from './assets/Cloud2.png';

function Cloud() {
  const images = [CloudImg, CloudImg1, CloudImg2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  // Handle screen resize for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    gap: isMobile ? '1.5rem' : '3rem',
    overflow: 'hidden',
    position: 'relative',
  };

  const imgContainerStyle = {
    flex: isMobile ? '0 0 auto' : '0 0 340px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '720px',
    overflow: 'hidden',
  };

  const imageStyle = (index) => ({
    width: isMobile ? '90%' : '320px',
    height: isMobile ? '250px' : '620px', // Consistent height for mobile
    borderRadius: '24px',
    background: '#fff',
    boxShadow: '0 2px 16px rgba(100,108,255,0.13)',
    objectFit: 'cover',
    position: 'absolute',
    top: `${(index - currentImageIndex) * 100}%`,
    left: 0,
    transition: 'top 0.5s ease-in-out',
  });

  const contentStyle = {
    flex: 1,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const headingStyle = {
    color: '#646cff',
    fontWeight: 900,
    fontSize: isMobile ? '1.8rem' : '2.2rem',
    marginBottom: '1.5rem',
    marginTop: '1rem',
  };

  const textStyle = {
    fontSize: isMobile ? '1rem' : '1.18rem',
    color: '#222',
    lineHeight: 1.7,
  };

  const strongStyle = {
    marginTop: '1.5rem',
    fontSize: isMobile ? '1rem' : '1.1rem',
    color: '#444',
  };

  const listStyle = {
    marginTop: '0.5rem',
    fontSize: isMobile ? '1rem' : '1.1rem',
    color: '#444',
    paddingLeft: '1.2rem',
  };

  return (
    <div style={containerStyle}>
      {/* Image Left */}
      <div style={imgContainerStyle}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Cloud Image ${index + 1}`}
            style={imageStyle(index)}
          />
        ))}
      </div>

      {/* Content Right */}
      <div style={contentStyle}>
        <h1 style={headingStyle}>Cloud Solutions & Hosting Services</h1>
        <p style={textStyle}>
          At Blata Technology, we provide reliable, secure, and high-performance
          cloud computing and web hosting solutions that empower businesses to
          operate efficiently and scale effortlessly. Our goal is to deliver
          fast, stable, and cost-effective hosting environments that support
          your websites, applications, and data with maximum uptime and
          performance. Whether you’re a growing startup or an established
          enterprise, we offer flexible cloud solutions tailored to your
          business needs.
        </p>

        <strong style={strongStyle}>Our Expertise:</strong>
        <p style={{ ...textStyle, marginTop: '0.3rem' }}>
          We specialize in cloud and hosting services that are:
        </p>
        <ul style={listStyle}>
          <li>Scalable: Designed to grow seamlessly as your business expands.</li>
          <li>Secure: Protected by advanced encryption, firewalls, and regular backups.</li>
          <li>High-Performance: Optimized for speed, reliability, and low downtime.</li>
          <li>Cost-Effective: Providing maximum value without compromising quality.</li>
          <li>
            DevOps & Continuous Integration: Streamlining development and
            deployment processes for faster time-to-market.
          </li>
          <li>24/7 Support: Dedicated technical support to assist you whenever you need it.</li>
        </ul>

        <strong style={strongStyle}>Why Choose us?</strong>
        <p style={{ ...textStyle, marginTop: '0.3rem' }}>
          We combine cutting-edge cloud technology with expert support to ensure
          your digital operations run smoothly and securely. Our hosting
          environments are optimized for performance, scalability, and peace of
          mind — so you can focus on growing your business while we handle the
          rest.
        </p>

        <strong style={strongStyle}>Empower Your Business in the Cloud</strong>
        <p style={{ ...textStyle, marginTop: '0.3rem' }}>
          Partner with Blata Technology for dependable cloud computing and web
          hosting solutions that deliver speed, security, and flexibility.
          Together, we’ll build a digital foundation that keeps your business
          connected and future-ready.
        </p>
      </div>
    </div>
  );
}

export default Cloud;