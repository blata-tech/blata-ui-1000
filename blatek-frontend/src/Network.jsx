import NetworkImg from './assets/Network.jpg';

function Network() {
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
        flexWrap: 'wrap', // ✅ allows wrapping for smaller screens
      }}
    >
      {/* Image Section */}
      <div
        style={{
          flex: '0 0 340px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <img
          src={NetworkImg}
          alt="Blata Technology Group Networking and Security"
          style={{
            width: '100%',
            maxWidth: '340px',
            height: 'auto',
            borderRadius: '24px',
            background: '#fff',
            boxShadow: '0 2px 16px rgba(100,108,255,0.13)',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Text Section */}
      <div
        style={{
          flex: 1,
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '300px',
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
          Network & Security Solutions
        </h1>

        <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
          At Blata Technology, we deliver robust network and security solutions designed to protect your business from digital threats while ensuring seamless connectivity and performance. In today’s connected world, data protection and network reliability are essential — that’s why we provide end-to-end solutions that keep your systems secure, efficient, and resilient. Our expert team helps businesses build, manage, and safeguard IT infrastructures that support growth and innovation without compromising safety.
        </p>

        <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
          Our Expertise:
        </strong>
        <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
          We specialize in network and security systems that are:
        </p>
        <ul
          style={{
            marginTop: '0.5rem',
            fontSize: '1.1rem',
            color: '#444',
            paddingLeft: '1.2rem',
          }}
        >
          <li>Reliable: Ensuring stable, high-speed, and uninterrupted connectivity.</li>
          <li>Secure: Built with advanced protection against cyberattacks and data breaches.</li>
          <li>Scalable: Capable of adapting to your business as it grows and evolves.</li>
          <li>Monitored: Continuously supervised to detect and respond to potential threats instantly.</li>
          <li>Compliant: Adhering to industry standards and regulations to safeguard sensitive information.</li>
        </ul>

        <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
          Why Choose us?
        </strong>
        <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
          We combine deep technical expertise with proactive security measures to deliver network solutions that perform and protect. Our approach ensures that your organization operates efficiently, securely, and confidently in today’s digital environment.
        </p>

        <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
          Secure Your Business with Confidence
        </strong>
        <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
          Partner with Blata Technology to strengthen your IT infrastructure with advanced network and security solutions. Together, we’ll protect your data, enhance performance, and ensure your business remains connected and secure at all times.
        </p>
      </div>

      {/* ✅ Responsive media query inside inline CSS */}
      <style>
        {`
          @media (max-width: 900px) {
            div[style*="display: flex"][style*="row"] {
              flex-direction: column !important;
              text-align: center;
            }
            img {
              max-width: 90% !important;
              margin-bottom: 2rem;
            }
            h1 {
              font-size: 1.8rem !important;
            }
            p, li {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Network;
