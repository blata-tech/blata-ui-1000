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
            alt="Blata Technology Group Elearning"
            style={{
              width: '320px',
              height: '620px',
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
            E-Learning & Training Solutions
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
            At Blata Technology, we create engaging, interactive, and scalable e-learning solutions that empower organizations, educators, and learners to achieve their educational goals. Our team develops customized digital learning platforms and training programs designed to deliver content effectively, enhance engagement, and improve knowledge retention. From corporate training to academic courses, we provide solutions that make learning accessible, flexible, and impactful.
          </p>
          <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
            Our Expertise:
          </strong>
          <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
            We specialize in e-learning solutions that are:          </p>
          <ul style={{ marginTop: '0.5rem', fontSize: '1.1rem', color: '#444', paddingLeft: '1.2rem' }}>
            <li>Customizable: Tailored to meet the unique needs of learners and organizations.</li>
            <li>Interactive: Designed to engage users through multimedia, quizzes, and simulations.</li>
            <li>Scalable: Capable of supporting any number of learners with consistent performance.</li>
            <li>Accessible: Optimized for all devices, ensuring learning anytime, anywhere.</li>
            <li>Data-Driven: Integrated analytics to track progress and measure effectiveness.</li>
          </ul>
          <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
            Why Choose us?
          </strong>
          <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
            We combine instructional design expertise with cutting-edge technology to deliver effective and engaging e-learning experiences. Our solutions are designed to maximize learning outcomes, improve engagement, and support the growth of your organization.
          </p>
          <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
            Transform Learning with Blata Technology
          </strong>
          <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
            Whether you’re building a corporate training program, online courses, or a full-scale e-learning platform, Blata Technology is your trusted partner for innovative, reliable, and results-driven digital learning solutions.
          </p>
        </div>
      </div>
    );
  }

export default Elearning;