
// filepath: c:\Users\Administrator\Blata-React-project\src\Services.jsx
import SoftImg from './assets/Soft.jpg';
import WebImg from './assets/web1.jpg';
import WordpImg from './assets/wordp.jpg';
import ITImg from './assets/IT.jpg';
import ElearnImg from './assets/Elearn.jpg';
function Services() {
  return (
    <>
    <section
      style={{
        width: '100vw',
        maxWidth: '100vw',
        margin: '0 auto',
        background: '#fff',
        borderRadius: '0',
        boxShadow: 'none',
        padding: '4rem 0',
        color: '#222'
      }}
    >
      <h2 style={{ color: '#646cff', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Our Services</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%', alignItems: 'center' }}>
        {/* 1. Custom Software Development */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1100px',
          gap: '2rem'
        }}>
          <img
            src={SoftImg}
            alt="Custom Software Development"
            style={{
              width: '440px',
              height: '340px',
              objectFit: 'cover',
              borderRadius: '16px',
              marginRight: '2rem',
              boxShadow: '0 2px 8px rgba(17, 19, 68, 0.15)'
            }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#213547', marginBottom: '0.5rem', fontWeight: 900 }}> Software Design & Development</h3>
            <p>We build reliable, scalable, and secure software solutions customized to your business needs.</p>
            <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
              <li>Desktop and cloud-based applications</li>
              <li>Enterprise software solutions</li>
              <li>API integration and automation</li>
              <li>Ongoing support and maintenance</li>
            </ul>
          </div>
        </div>
        {/* 2. Website Design & Development */}
        <div style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1100px',
          gap: '2rem'
        }}>
          <img
            src={WebImg}
            alt="Website Design & Development"
            style={{
              width: '440px',
              height: '340px',
              objectFit: 'cover',
              borderRadius: '16px',
              marginLeft: '2rem',
              boxShadow: '0 2px 8px rgba(100,108,255,0.15)'
            }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#213547', marginBottom: '0.5rem' }}>Website Design & Development</h3>
            <p>Create a modern, responsive, and engaging website that reflects your brand.</p>
            <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
              <li>Business websites</li>
              <li>E-commerce platforms</li>
              <li>Responsive design (mobile/tablet friendly)</li>
              <li>SEO-friendly structure</li>
            </ul>
          </div>
        </div>
        {/* 3. WordPress & cPanel Administration */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1100px',
          gap: '2rem'
        }}>
          <img
            src={WordpImg}
            alt="WordPress & cPanel Administration"
            style={{
              width: '490px',
              height: '340px',
              objectFit: 'cover',
              borderRadius: '16px',
              marginLeft: '2rem',
              boxShadow: '0 2px 8px rgba(100,108,255,0.15)'
            }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#213547', marginBottom: '0.5rem' }}>WordPress & cPanel Administration</h3>
            <p>Manage your WordPress site and hosting the right way with expert-level support.</p>
            <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
              <li>WordPress installation, setup, and customization</li>
              <li>Plugin and theme management</li>
              <li>cPanel configuration and hosting setup</li>
              <li>Website backups and security</li>
            </ul>
          </div>
        </div>
        {/* 4. IT Consulting & Digital Strategy */}
        <div style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1100px',
          gap: '2rem'
        }}>
          <img
            src={ITImg}
            alt="IT Consulting & Digital Strategy"
            style={{
              width: '440px',
              height: '340px',
              objectFit: 'cover',
              borderRadius: '16px',
              marginRight: '2rem',
              boxShadow: '0 2px 8px rgba(100,108,255,0.15)'
            }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#213547', marginBottom: '0.5rem' }}>IT Consulting & Digital Strategy</h3>
            <p>Make smarter technology decisions with our professional IT consulting services.</p>
            <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
              <li>Technology strategy and planning</li>
              <li>System analysis and optimization</li>
              <li>Infrastructure advice and cloud solutions</li>
              <li>Project management and digital transformation</li>
            </ul>
          </div>
        </div>
        {/* 5. E-Learning Solutions */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1100px',
          gap: '2rem'
        }}>
          <img
            src={ElearnImg}
            alt="E-Learning Solutions"
            style={{
              width: '440px',
              height: '340px',
              objectFit: 'cover',
              borderRadius: '16px',
              marginLeft: '2rem',
              boxShadow: '0 2px 8px rgba(100,108,255,0.15)'
            }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#213547', marginBottom: '0.5rem', fontWeight: 900 }}>E-Learning Solutions</h3>
            <p>
              We design and develop custom e-learning platforms tailored to meet the educational and training needs of institutions, businesses, and individuals. From interactive courses to virtual classrooms, our solutions enhance digital learning experiences with:
            </p>
            <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
              <li>User-friendly LMS (Learning Management Systems)</li>
              <li>Multimedia course integration (video, audio, quizzes)</li>
              <li>Mobile-friendly platforms for anytime access</li>
              <li>Tracking and reporting tools for progress analysis</li>
              <li>Secure user management and content control</li>
            </ul>
            <p>
              Whether you're launching an online school, corporate training system, or educational content portal, we provide the technology to deliver impactful digital learning.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Services;
