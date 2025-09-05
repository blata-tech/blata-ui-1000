// ModernLandingPage.jsx
import logo from './assets/logo.png';

function ModernLandingPage() {
  return (
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg,rgb(9, 12, 179) 0%,hsl(246, 77.80%, 42.40%) 100%)',
      padding: '2rem'
    }}>
      <img
        src={logo}
        alt="Blata Technology Group Logo"
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          boxShadow: '0 4px 24px rgba(100,108,255,0.12)',
          marginBottom: '2rem',
          background: '#fff'
        }}
      />
      <h1 style={{
        fontSize: '2.5rem',
        color: '#213547',
        marginBottom: '1rem',
        fontWeight: 700,
        letterSpacing: '1px'
      }}>
        Welcome to Blata Technology Group
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: '#555',
        maxWidth: '500px',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        Empowering your business with innovative technology solutions. Discover our services and let’s grow together!
      </p>
      <div>
        <a
          href="/services"
          style={{
            padding: '0.75rem 2rem',
            background: '#646cff',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1rem',
            marginRight: '1rem',
            boxShadow: '0 2px 8px rgba(100,108,255,0.08)'
          }}
        >
          Our Services
        </a>
        <a
          href="/contactus"
          style={{
            padding: '0.75rem 2rem',
            background: '#fff',
            color: '#646cff',
            border: '2px solid #646cff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1rem'
          }}
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default ModernLandingPage;