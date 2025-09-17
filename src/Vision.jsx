import logo from './assets/logo.png';

function Vision() {
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
          src={logo}
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
          Vision
        </h1>
        <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
          To become an inspiring digital innovator and drive sustainable progress.
        </p>
      </div>
    </div>
    );
}
export default Vision;