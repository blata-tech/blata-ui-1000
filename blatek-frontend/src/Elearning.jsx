import ElearnImg from './assets/Elearn.jpg';

function Elearning() {
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
        src={ElearnImg}
        alt="E-Learning"
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
        <h1 style={{ color: '#646cff', fontWeight: 700, marginBottom: '1.5rem' }}>E-Learning Solutions</h1>
        <p style={{ color: '#222', lineHeight: '1.6', fontSize: '1.1rem' }}>
            <p>
              we provide modern and scalable e-learning solutions designed to support digital education and training. 
              Our services include the development of interactive learning platforms, online course management systems, and custom learning portals tailored to schools, institutions, and businesses. 
              We focus on user-friendly design, mobile accessibility, and content integration to ensure effective learning experiences. 
              Whether you are delivering academic courses or professional training, our e-learning systems are built to enhance engagement, track progress, and deliver knowledge efficiently in today’s digital world.
            </p>   
        </p>
      </div>
    </div>
  );
}

export default Elearning;