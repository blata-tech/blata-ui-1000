import NetworkImg from './assets/Network.jpg';

function Network() {
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
        src={NetworkImg}
        alt="Network"
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
        <h1 style={{ color: '#646cff', fontWeight: 700, marginBottom: '1.5rem' }}>Network And Security Administration</h1>
        <p style={{ color: '#222', lineHeight: '1.6', fontSize: '1.1rem' }}>
            <p>
               we offer reliable network and security administration services to keep your business connected and protected. 
               We handle the full setup of network systems, including installation, configuration, and maintenance of routers, switches, and wireless networks. 
               Our team also ensures your systems are secure with firewalls, antivirus tools, and access controls to protect against cyber threats. 
               With regular monitoring and fast support, we help you maintain a safe and efficient IT environment, so you can focus on your business with confidence.
            </p>
        </p>
      </div>
    </div>
  );
}

export default Network;