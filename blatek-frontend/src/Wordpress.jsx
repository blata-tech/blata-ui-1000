import { useState, useEffect } from 'react';
import WordpImg1 from './assets/w1.png';
import WordpImg2 from './assets/W2.jpg';
import WordpImg3 from './assets/W3.png';
function WordPress() {
  const wordpressImages = [WordpImg1, WordpImg2, WordpImg3]; // Use the correct variable names
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % wordpressImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [wordpressImages.length]);

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
        {wordpressImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`WordPress & cPanel Administration ${index + 1}`}
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
          WordPress & cPanel Administration
        </h1>

        <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
          At Blata Technology, we provide expert WordPress and cPanel administration services that ensure your websites run smoothly, securely, and efficiently. Our team manages every aspect of website administration — from setup and customization to maintenance and optimization — so you can focus on growing your business while we handle the technical details. Whether it’s a simple blog, a corporate site, or a complex eCommerce platform, we ensure your website performs at its best.
        </p>

        <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
          Our Expertise:
        </strong>
        <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
          We specialize in WordPress and cPanel solutions that are:
        </p>
        <ul style={{ marginTop: '0.5rem', fontSize: '1.1rem', color: '#444', paddingLeft: '1.2rem' }}>
          <li>Fully Managed: Handling installation, configuration, updates, and security.</li>
          <li>Secure: Implementing best practices to protect against hacks and vulnerabilities.</li>
          <li>Optimized: Ensuring fast load times, SEO readiness, and high performance.</li>
          <li>Customizable: Tailored to meet your design and functional requirements.</li>
          <li>Reliable: Regular backups, monitoring, and troubleshooting to minimize downtime.</li>
        </ul>

        <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
          Why Choose Us?
        </strong>
        <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
          We combine technical expertise with hands-on experience to provide reliable and hassle-free WordPress and cPanel administration. Our goal is to keep your website secure, optimized, and fully functional, allowing your business to thrive online.
        </p>

        <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
          Let Us Manage Your Website
        </strong>
        <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
          Partner with Blata Technology to ensure your WordPress website and server environment are expertly managed, secure, and performing at their best — giving you peace of mind and the freedom to focus on your business.
        </p>
      </div>
    </div>
  );
}

export default WordPress;
