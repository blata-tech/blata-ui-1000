import SoftImg from './assets/Soft.jpg';

function SoftwareDevelopment() {
  return (
    <div style={{
      maxWidth: '1250px',
      width: '100vw',
      margin: '8rem auto',
      padding: '1.5rem 2rem',
      background: '#f5f5f5',
      borderRadius: '24px',
      boxShadow: '0 4px 32px rgba(100,108,255,0.10)',
      display: 'flex',
      alignItems: 'center',
      gap: '2.5rem'
    }}>
      <img
        src={SoftImg}
        alt="Software Development"
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
        <h1 style={{ color: '#646cff', fontWeight: 900, marginBottom: '1.5rem' }}>Software Development</h1>
        <p style={{ color: 'black' }}>
          We At Blata Technology Group, we design and develop custom software tailored to meet your business needs. 
          Our solutions are built to improve efficiency, automate workflows, and solve real-world problems. 
          From mobile apps to enterprise systems, we ensure scalable, secure, and user-friendly applications across industries.
        </p>
      </div>
    </div>
  );
}

export default SoftwareDevelopment;