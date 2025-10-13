import { useState, useEffect } from 'react';
import SoftImg from './assets/Soft.jpg';
import SoftImg2 from './assets/Soft2.jpg';
import SoftImg3 from './assets/Soft3.jpg';

function SoftwareDevelopment() {
  const images = [SoftImg, SoftImg2, SoftImg3]; // Use the correct variable names
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        maxWidth: '1200px',
        width: '96vw',
        minHeight: '70vh',
        margin: '5rem auto',
        padding: '2.5rem 2rem',
        background: 'linear-gradient(120deg, #f5f5f5 80%, #e7eaff 100%)',
        borderRadius: '24px',
        boxShadow: '0 4px 32px rgba(100,108,255,0.10)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '3rem',
        flexWrap: 'wrap',
      }}
    >
      {/* Image Left */}
      <div
        style={{
          flex: '0 0 340px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '280px',
          position: 'relative',
          height: '720px',
          overflow: 'hidden',
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`software development ${index + 1}`}
            style={{
              width: '320px',
              height: '620px',
              borderRadius: '24px',
              background: '#fff',
              boxShadow: '0 2px 16px rgba(100,108,255,0.13)',
              objectFit: 'cover',
              maxWidth: '100%',
              position: 'absolute',
              top: `${(index - currentImageIndex) * 100}%`,
              left: 0,
              transition: 'top 0.5s ease-in-out',
            }}
          />
        ))}
      </div>

      {/* Content Right */}
      <div
        style={{
          flex: 1,
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '280px',
        }}
      >
        <h1
          style={{
            color: '#646cff',
            fontWeight: 900,
            fontSize: '2.2rem',
            marginBottom: '1.5rem',
          }}
      
        >
          Software Design & Development
        </h1>

        <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
          At Blata Technology, we transform ideas into powerful, user-friendly software solutions that help businesses grow, adapt, and thrive in the digital age. Our team of skilled developers and designers collaborate closely with clients to build custom software that meets their unique goals — from concept to deployment and beyond.
        </p>

        <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
          Our Expertise:
        </strong>
        <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
          We specialize in a wide range of software development services, including:
        </p>
        <ul style={{ marginTop: '0.5rem', fontSize: '1.1rem', color: '#444', paddingLeft: '1.2rem' }}>
          <li>Custom Software Development</li>
          <li>Enterprise Solutions</li>
          <li>eCommerce Platforms</li>
          <li>Cloud-Based Applications</li>
          <li>DevOps & Continuous Integration</li>
          <li>UI/UX Design</li>
          <li>API Integration</li>
          <li>Cloud Solutions</li>
          <li>Maintenance & Support</li>
        </ul>

        <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
          Why Choose Us?
        </strong>
        <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
          We don’t just build software — we build solutions that drive results. Our agile approach, innovative design thinking, and deep technical expertise ensure your product is delivered on time, within budget, and beyond expectations.
        </p>

        <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
          Let's Build Something Great Together
        </strong>
        <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
          Whether you’re launching a startup, upgrading existing systems, or developing a new digital product, Blata Technology is your trusted partner for innovation, reliability, and success. Ready to turn your vision into reality? Contact us today to discuss your software development needs and discover how Blata Technology can help you achieve your business goals.
        </p>
      </div>
    </div>
  );
}

export default SoftwareDevelopment;
