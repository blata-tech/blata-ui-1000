import TadeleImg from './assets/Tadele.png';
import EsubalewImg from './assets/Esubalew.jpg';
import TewodrosImg from './assets/Tewodros.jpg';

function Team() {
  return (
    <div
      style={{
        width: '100vw',
        margin: '4rem auto',
        padding: '2.5rem 2rem',
        background: '#f5f5f5',
        borderRadius: '24px',
        boxShadow: '0 4px 32px rgba(100,108,255,0.10)',
        textAlign: 'center'
      }}
    >
      <h1 style={{ color: '#646cff', fontWeight: 900, marginBottom: '2rem' }}>Our Team</h1>
      {/* General Manager */}
      <div style={{ marginBottom: '3rem' }}>
        <img
          src={TadeleImg}
          alt="Tadele - General Manager"
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 2px 16px rgba(100,108,255,0.13)',
            background: '#fff',
            marginBottom: '1rem'
          }}
        />
        <h2 style={{ margin: 0, color: '#213547' }}>Tadele Admass</h2>
        <div style={{ color: '#888', fontWeight: 600, marginBottom: '0.5rem' }}>General Manager</div>
                <a
          href="https://www.linkedin.com/in/tadelegerem"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '0.5rem'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="#646cff"
            style={{ verticalAlign: 'middle' }}
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
          </svg>
        </a>
      </div>
      {/* Software Developers */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '6rem',
        flexWrap: 'wrap'
      }}>
        <div>
          <img
            src={EsubalewImg}
            alt="Esubalew - Software Developer"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 2px 16px rgba(100,108,255,0.13)',
              background: '#fff',
              marginBottom: '0.5rem'
            }}
          />
          <h3 style={{ margin: 0, color: '#213547' }}>Esubalew Gashaw</h3>
          <div style={{ color: '#888', fontWeight: 600 }}>Software Developer</div>
                        <a
              href="https://www.linkedin.com/in/esubalew-gashaw"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '0.5rem'
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="#646cff"
                style={{ verticalAlign: 'middle' }}
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
              </svg>
            </a>
        </div>
        <div>
          <img
            src={TewodrosImg}
            alt="Tewodros - Software Developer"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 2px 16px rgba(100,108,255,0.13)',
              background: '#fff',
              marginBottom: '0.5rem'
            }}
          />
          <h3 style={{ margin: 0, color: '#213547' }}>Tewodros Admass</h3>
          <div style={{ color: '#888', fontWeight: 600 }}>Software Developer</div>
                    <a
            href="https://www.linkedin.com/in/tewodros-admass-26005422a"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '0.5rem'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="#646cff"
              style={{ verticalAlign: 'middle' }}
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Team;