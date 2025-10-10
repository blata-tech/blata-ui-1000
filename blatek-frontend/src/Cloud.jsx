import { useEffect, useState } from 'react';
import CloudImg from './assets/Cloudc.jpeg';

function Cloud() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
  };

  const imgContainerStyle = {
    flex: isMobile ? '0 0 auto' : '0 0 340px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: isMobile ? '90%' : '320px',
    height: isMobile ? 'auto' : '620px',
    borderRadius: '24px',
    background: '#fff',
    boxShadow: '0 2px 16px rgba(100,108,255,0.13)',
    objectFit: 'contain',
  };

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
      {/* Logo Left */}
      <div style={imgContainerStyle}>
        <img
          src={CloudImg}
          alt="Blata Technology Group Cloud Solutions"
          style={imageStyle}
        />
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
