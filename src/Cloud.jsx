import CloudImg from './assets/Cloudc.jpeg';

function Cloud() {
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
        src={CloudImg}
        alt="Cloud Computing"
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
        <h1 style={{ color: '#646cff', fontWeight: 700, marginBottom: '1.5rem' }}>Cloud Computing And Web Hosting</h1>
        <p style={{ color: '#222', lineHeight: '1.6', fontSize: '1.1rem' }}>
            <p>
             we provide reliable cloud computing and web hosting services to support the digital infrastructure of modern businesses. 
             Our cloud solutions offer scalable and secure environments for data storage, application deployment, and remote access, allowing your business to operate efficiently from anywhere. 
             We help organizations migrate to the cloud, optimize their operations, and reduce IT costs through flexible and managed cloud infrastructure. Alongside this, our web hosting services ensure your websites are fast, secure, and always available. 
             With features like domain management, email setup, regular backups, and intuitive cPanel access, we make it easy for you to manage your online presence with confidence. 
             Whether you're launching a small business website or running enterprise applications, our hosting and cloud services are built to grow with you.
            </p>
            <br /><br />
            
        </p>
      </div>
    </div>
  );
}

export default Cloud;