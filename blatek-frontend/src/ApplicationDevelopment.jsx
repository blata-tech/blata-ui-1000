import AppImg from './assets/App.jpeg';

function ApplicationDevelopment() {
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
            src={AppImg}
            alt="Blata Technology Group Application Development"
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
            Application Design & Development
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
             At Blata Technology, we specialize in creating innovative, high-performance applications that deliver seamless experiences across platforms. Our goal is to help businesses stay connected with their customers through powerful, user-friendly, and scalable mobile and desktop applications. From initial concept and design to development and deployment, our expert team ensures every app we build is intuitive, reliable, and tailored to meet your business objectives.
          </p>
          <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
            Our Expertise:
          </strong>
          <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
           We develop applications that are:
          </p>
          <ul style={{ marginTop: '0.5rem', fontSize: '1.1rem', color: '#444', paddingLeft: '1.2rem' }}>
            <li>Custom-Built: Designed specifically for your business needs and target users.</li>
            <li>Cross-Platform: Built to perform flawlessly on Android, iOS, and web platforms.</li>
            <li>Secure & Scalable: Developed with advanced technologies and strong security protocols.</li>
            <li>User-Focused: Designed with engaging interfaces and exceptional usability in mind.</li>
            <li>Performance-Optimized: Engineered for speed, reliability, and smooth functionality.</li>
          </ul>
          <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
            Why Choose us?
          </strong>
          <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
          We combine creativity and technical expertise to build applications that make an impact. Our agile development process ensures flexibility, faster delivery, and high-quality results that align perfectly with your vision and business goals.          </p>
          <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
            Let’s Bring Your Ideas to Life
          </strong>
          <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
           Whether you’re building a new mobile app, enhancing an existing one, or creating a cross-platform solution, Blata Technology is your trusted partner for innovation, reliability, and long-term success in application design and development.
          </p>
        </div>
      </div>
    );
  }

export default ApplicationDevelopment;