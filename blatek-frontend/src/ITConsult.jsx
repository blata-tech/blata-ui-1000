import ITImg from './assets/IT.jpg';

function ITConsult() {
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
            src={ITImg}
            alt="Blata Technology Group IT Consulting"
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
            IT Consulting and Digital Strategy
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
            At Blata Technology, we empower businesses to make smarter technology decisions and achieve long-term growth through expert IT consulting and digital strategy services. Our team works closely with clients to understand their goals, assess their current systems, and develop customized strategies that align technology with business objectives. We help organizations modernize their operations, optimize performance, and stay ahead in today’s fast-changing digital world.
          </p>
          <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
            Our Expertise:
          </strong>
          <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
            We focus on strategies that are:
          </p>
          <ul style={{ marginTop: '0.5rem', fontSize: '1.1rem', color: '#444', paddingLeft: '1.2rem' }}>
            <li>Business-Aligned: Tailored to match your vision, goals, and industry needs.</li>
            <li>Scalable & Future-Ready: Designed to adapt as your business grows.</li>
            <li>Secure & Efficient: Focused on improving performance while ensuring data protection</li>
            <li>Innovation-Driven: Helping you leverage emerging technologies for a competitive edge.</li>
            <li>Comprehensive Support: From strategy development to implementation and ongoing management.</li>
          </ul>
          <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
            Why Choose us?
          </strong>
          <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
            We blend deep technical knowledge with strategic insight to deliver actionable solutions that drive success. Our consultants work hand-in-hand with your team to streamline processes, reduce costs, and improve overall digital efficiency — ensuring your business stays innovative and future-ready.
          </p>
          <strong style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
            Let’s Build a Smarter Future Together
          </strong>
          <p style={{ marginTop: '0.3rem', fontSize: '1.1rem', color: '#444' }}>
           Whether you’re planning a digital transformation, upgrading IT systems, or looking to enhance your business strategy, Blata Technology is your trusted partner for expert consulting and sustainable digital growth.
          </p>
        </div>
      </div>
    );
  }

export default ITConsult;