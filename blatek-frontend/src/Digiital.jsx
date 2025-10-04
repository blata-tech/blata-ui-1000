import digitalImg from "./assets/digital.jpg";

function DigitalMarketing() {
  return (
    <div style={{
      maxWidth: '1250px',
      width: '100vw',
      margin: '8rem auto',
      padding: '2.5rem 2rem',
      background: '#f5f5f5',
      borderRadius: '24px',
      boxShadow: '0 4px 32px rgba(100,108,255,0.10)',
      display: 'flex',
      alignItems: 'center',
      gap: '2.5rem'
    }}>
      <img
        src={digitalImg}
        alt="Digital Marketing"
        style={{
          width: '400px',
          height: '320px',
          objectFit: 'cover',
          borderRadius: '16px',
          background: '#fff',
          boxShadow: '0 2px 8px rgba(100,108,255,0.13)'
        }}
      />
      <div style={{ flex: 1 }}>
        <h1 style={{ color: '#646cff', fontWeight: 700, marginBottom: '1.5rem' }}>Digital Marketing</h1>
        <p style={{ color: '#222', lineHeight: '1.6', fontSize: '1.1rem' }}>
          Boost your business with our comprehensive digital marketing solutions! We offer
          <ul style={{ marginTop: '1rem', marginBottom: '1rem', paddingLeft: '1.2rem'}}>
            <li>SEO</li>
            <li>Social Media Management</li>
            <li>Content Creation</li>
            <li>Email Campaigns</li>
            <li>and more to help you reach your target audience and grow online.</li>
          </ul>
          At Blata, we help businesses grow and succeed in the digital world by delivering tailored digital marketing strategies that reach the right audience and drive measurable results.
        </p>
        <p style={{ color: "#222", lineHeight: "1.6", fontSize: "1.1rem" }}>
          Our services include search engine optimization (SEO) to improve your website’s visibility and attract organic traffic, pay-per-click advertising (PPC) to maximize ROI through targeted campaigns, and social media marketing to build a strong online presence with engaging content and community management.
        </p>
        <p style={{ color: '#222', fontSize: '1.08rem', marginTop: '1.5rem' }}>
          Contact us today to learn how our digital marketing services can help your business thrive!
        </p>
      </div>
    </div>
  );
}

export default DigitalMarketing;