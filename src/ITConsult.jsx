import ITImg from './assets/IT.jpg';

function ITConsult() {
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
        src={ITImg}
        alt="IT Consulting"
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
        <h1 style={{ color: '#646cff', fontWeight: 700, marginBottom: '1.5rem' }}>IT Consulting And Digital Starategy</h1>
        <p style={{ color: '#222', lineHeight: '1.6', fontSize: '1.1rem' }}>
            <p>
              we specialize in IT consulting and digital strategy services to help businesses navigate the complexities of technology and achieve their goals.
            Our team provides expert guidance on leveraging technology to improve operations, enhance customer experiences, and drive innovation.
            We work closely with clients to guide in choosing the right tools, systems, and platforms that align with your goals.
            From planning digital transformation to improving workflows and solving technical challenges, our team works closely with you to create smart, practical solutions.
            Whether you're starting a new project or upgrading existing systems, we help you build a clear strategy that drives growth, efficiency, and long-term success.
            </p>
            <br /><br />
            
        </p>
      </div>
    </div>
  );
}

export default ITConsult;