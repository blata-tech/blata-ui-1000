import ElearnImg from './assets/Elearn.jpg';

function Elearning() {
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
            src={ElearnImg}
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
            E-Learning Solutions
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
            At Blata Technology Group, our e-learning solutions help organizations create engaging, interactive, and effective digital learning experiences. 
            We design and develop online training platforms, learning management systems (LMS), and educational applications tailored to meet the needs of students, employees, and clients. 
            By combining intuitive design, multimedia content, and advanced technology, our e-learning solutions enhance knowledge retention, streamline training processes, and provide measurable learning outcomes. 
            Whether for corporate training, online courses, or skill development programs, we deliver flexible and scalable solutions that empower learners and drive organizational growth.
          </p>
        </div>
      </div>
    );
  }
  

export default Elearning;