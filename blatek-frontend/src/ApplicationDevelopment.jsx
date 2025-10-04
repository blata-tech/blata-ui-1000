import AppImg from './assets/App.jpeg';

function ApplicationDevelopment() {
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
        src={AppImg}
        alt="Application Development"
        style={{
          width: '500px',
          height: '320px',
          objectFit: 'cover',
          borderRadius: '16px',
          background: '#fff',
          boxShadow: '0 2px 8px rgba(100,108,255,0.13)'
        }}
      />
      <div style={{ flex: 1 }}>
        <h1 style={{ color: '#646cff', fontWeight: 900, marginBottom: '1.5rem' }}>Application Development</h1>
        <p style={{ color: '#222', lineHeight: '1.6', fontSize: '1.1rem' }}>
            We create responsive, modern, and high-performing applications that reflect your brand and support your business goals. 
            Whether it’s a mobile app, a web application, or a desktop software, we build from the ground up with a focus on performance, SEO, and user experience.
        </p>
      </div>
    </div>
  );
}

export default ApplicationDevelopment;