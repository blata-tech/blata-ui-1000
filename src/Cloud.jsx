import CloudImg from './assets/Cloudc.jpeg';

function Cloud() {
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
          src={CloudImg}
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
          Cloud Computing And Web Hosting
        </h1>
        <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
          At Blata Technology Group, our cloud computing and web hosting services provide businesses with reliable, scalable, and secure solutions to manage their online operations efficiently. 
          We offer flexible cloud infrastructure, virtual servers, and managed hosting services that ensure high availability, performance, and data protection. 
          Our team helps clients migrate to the cloud, optimize resources, and maintain seamless website and application performance, allowing businesses to focus on growth while we handle the technical backbone. 
          With advanced technologies and proactive monitoring, we deliver hosting and cloud solutions that are secure, cost-effective, and tailored to your unique needs.
        </p>
      </div>
    </div>
  );
}


export default Cloud;