import { useState, useEffect } from 'react';
import webImg1 from './assets/web1.jpg';
import webImg2 from './assets/web2.jpg';
import webImg3 from './assets/web3.jpg';

function WebDevelopment() {
  const webImg = [webImg1, webImg2, webImg3]; // Use the correct variable names
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % webImg.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [webImg.length]);
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
        {webImg.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Web Development ${index + 1}`}
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
          Web Design & Development
        </h1>
        <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
          At Blata Technology, we design and develop modern, responsive, and high-performing websites that help businesses build a strong digital presence and achieve measurable success. Our creative designers and skilled developers work together to craft websites that not only look visually stunning but also deliver seamless user experiences and real business results. From concept to launch, we ensure every detail reflects your brand identity and supports your goals.
        </p>

        <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
          Our Expertise:
        </strong>
        <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
          We specialize in creating websites that are:
        </p>
        <ul style={{ marginTop: '0.5rem', fontSize: '1.1rem', color: '#444', paddingLeft: '1.2rem' }}>
          <li>Custom-Designed: Tailored to your brand’s vision and audience for maximum impact.</li>
          <li>Responsive & Fast: Optimized for all devices with smooth performance and speed.</li>
          <li>Secure & Scalable: Built with reliable frameworks and modern security standards.</li>
          <li>SEO-Friendly: Structured to improve visibility and drive organic traffic.</li>
          <li>User-Centric: Focused on delivering intuitive navigation and engaging experiences.</li>
        </ul>

        <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
          Why Choose us?
        </strong>
        <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
          We combine creativity, technology, and strategy to build websites that stand out and perform. Our team focuses on usability, design excellence, and technical precision — ensuring your website attracts, engages, and converts visitors effectively.
        </p>

        <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
          Let's Build Something Great Together
        </strong>
        <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
          Whether you’re starting a new business, rebranding, or upgrading your existing website, Blata Technology is your trusted partner for innovative, reliable, and results-driven web design and development solutions.
        </p>
      </div>
    </div>
  );
}

export default WebDevelopment;
