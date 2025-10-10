import React from "react";

function AboutUs() {
  const sections = [
    {
      title: (
        <>
          <span role="img" aria-label="compass">🧭</span> Our Company
        </>
      ),
      content: (
        <p>
          Blata Technology Group is a technology-driven company dedicated to delivering innovative software, web solutions, IT consulting, and digital strategy services. Founded with a passion for problem-solving and digital excellence, we help businesses adapt and grow in the fast-evolving digital world.
        </p>
      ),
    },
    {
      title: (
        <>
          <span role="img" aria-label="rocket">🚀</span> What We Do
        </>
      ),
      content: (
        <>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>Software Design &amp; Development</li>
            <li>Website Development &amp; Design</li>
            <li>WordPress &amp; CPanel Administration</li>
            <li>IT Consulting &amp; Digital Strategy</li>
          </ul>
          <p>
            Every solution is tailored to meet the specific goals of our clients — from startups to enterprises.
          </p>
        </>
      ),
    },
    {
      title: (
        <>
          <span role="img" aria-label="target">🎯</span> Our Mission
        </>
      ),
      content: (
        <p>
          To simplify technology and empower businesses with smart, scalable, and secure digital solutions.
        </p>
      ),
    },
    {
      title: (
        <>
          <span role="img" aria-label="earth">🌍</span> Our Vision
        </>
      ),
      content: (
        <p>
          To become an inspiring digital innovator and drive sustainable progress.
        </p>
      ),
    },
    {
      title: (
        <>
          <span role="img" aria-label="bulb">💡</span> Why Choose Us?
        </>
      ),
      content: (
        <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li>Client-first approach</li>
          <li>Transparent and timely delivery</li>
          <li>Skilled and passionate team</li>
          <li>Customized digital strategies</li>
        </ul>
      ),
    },
    {
      title: (
        <>
          <span role="img" aria-label="handshake">🤝</span> Let’s Work Together
        </>
      ),
      content: (
        <p>
          We believe in long-term partnerships built on trust, innovation, and measurable impact.
        </p>
      ),
    },
  ];

  // Responsive styles using CSS-in-JS
  const containerStyle = {
    maxWidth: '1100px',
    width: '98vw',
    margin: '3rem auto',
    padding: '2.5rem 2rem',
    background: '#f5f5f5',
    borderRadius: '16px',
    boxShadow: '0 2px 16px rgba(100,108,255,0.10)',
    color: '#222',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#646cff',
    fontWeight: 800,
    marginBottom: '2.5rem',
    fontSize: '2.2rem',
  };

  // Add a <style> tag for media queries
  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media (max-width: 900px) {
        .about-section-row {
          flex-direction: column !important;
          gap: 0.5rem !important;
        }
        .about-section-title {
          min-width: 0 !important;
          max-width: 100% !important;
          font-size: 1.08rem !important;
          text-align: left !important;
          padding-top: 0 !important;
          margin-bottom: 0.5rem !important;
        }
        .about-section-content {
          font-size: 1rem !important;
        }
        .about-container {
          padding: 1.2rem 0.5rem !important;
        }
        .about-heading {
          font-size: 1.4rem !important;
        }
      }
      @media (max-width: 600px) {
        .about-container {
          padding: 0.7rem 0.2rem !important;
        }
        .about-heading {
          font-size: 1.1rem !important;
        }
        .about-section-title {
          font-size: 1rem !important;
        }
        .about-section-content {
          font-size: 0.98rem !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="about-container" style={containerStyle}>
      <h1 className="about-heading" style={headingStyle}>
        Empowering Digital Transformation
      </h1>
      {sections.map((section, idx) => (
        <div
          key={idx}
          className="about-section-row"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginBottom: '2.2rem',
            gap: '2rem',
          }}
        >
          <div
            className="about-section-title"
            style={{
              minWidth: 180,
              maxWidth: 220,
              fontWeight: 700,
              color: '#213547',
              fontSize: '1.15rem',
              textAlign: 'left',
              paddingTop: '0.2rem',
            }}
          >
            {section.title}
          </div>
          <div
            className="about-section-content"
            style={{
              flex: 1,
              fontSize: '1.08rem',
              lineHeight: 1.7,
            }}
          >
            {section.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutUs;