import digitalImg from "./assets/digital.jpg";

function DigitalMarketing() {
   return (
    <div
      style={{
        maxWidth: '1200px',
        width: '96vw',
        minHeight: '70vh',
        margin: '4rem auto',
        padding: '2.5rem 2rem',
        background: 'linear-gradient(120deg, #f5f5f5 80%, #e7eaff 100%)',
        borderRadius: '24px',
        boxShadow: '0 4px 32px rgba(100,108,255,0.10)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '3rem'
      }}
    >
      {/* Logo Left */}
      <div style={{
        flex: '0 0 340px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img
          src={digitalImg}
          alt="Blata Technology Group Logo"
          style={{
            width: '320px',
            height: '320px',
            borderRadius: '24px',
            background: '#fff',
            boxShadow: '0 2px 16px rgba(100,108,255,0.13)',
            objectFit: 'contain'
          }}
        />
      </div>
      {/* Content Right */}
      <div style={{
        flex: 1,
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h1 style={{
          color: '#646cff',
          fontWeight: 900,
          fontSize: '2.2rem',
          marginBottom: '1.5rem'
        }}>
          Digital Marketing
        </h1>
        <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
          At Blata Technology Group, our digital marketing services help businesses grow their online presence, reach the right audience, and achieve measurable results. 
          We provide tailored strategies that combine creativity and analytics to ensure maximum impact across all digital channels, including social media marketing, search engine optimization (SEO), pay-per-click (PPC) advertising, content marketing, and email campaigns. 
          Our approach focuses on maximizing your Return on Investment (ROI), making sure that every dollar spent translates into increased visibility, quality leads, and higher sales. 
          With data-driven insights and continuous optimization, we deliver digital campaigns that build your brand and drive sustainable growth.
        </p>
      </div>
    </div>
  );
}

export default DigitalMarketing;