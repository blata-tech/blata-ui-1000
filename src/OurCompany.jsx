import Blat from './assets/Blat.jpg';

function OurCompany() {
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
          src={Blat}
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
          Our Company
        </h1>
        <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
          Blata Technology Group is Founded with a passion for problem-solving and digital excellence, we help businesses adapt and grow in the fast-evolving digital world.
          Our services cover a wide range of technology needs, including software development, web and mobile application development, digital marketing, IT consulting, e-learning solutions, cloud hosting, and system administration. By combining technical excellence with strategic insight, we ensure our clients receive solutions that are not only reliable but also aligned with their business goals.<br />

          At Blata Technology Group, we believe in building long-term partnerships with our clients. Our team of professionals is committed to delivering value, enhancing efficiency, and driving measurable results. With a focus on innovation, quality, and customer satisfaction, we strive to be your trusted technology partner for sustainable growth.
        </p>
      </div>
    </div>
  );
}

export default OurCompany;
