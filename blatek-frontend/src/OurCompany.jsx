import campImg from './assets/Camp.jpg';

function OurCompany() {
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
        gap: '3rem',
        flexWrap: 'wrap', // makes it responsive
      }}
    >
      {/* Logo Left */}
      <div
        style={{
          flex: '0 0 340px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={campImg}
          alt="Blata Technology Group Company"
          style={{
            width: '320px',
            height: '320px',
            borderRadius: '24px',
            background: '#fff',
            boxShadow: '0 2px 16px rgba(100,108,255,0.13)',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Content Right */}
      <div
        style={{
          flex: 1,
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            color: '#646cff',
            fontWeight: 900,
            fontSize: '2.2rem',
            marginBottom: '1.5rem',
          }}
        >
          Our Company
        </h1>
        <p
          style={{
            fontSize: '1.18rem',
            color: '#222',
            lineHeight: 1.7,
          }}
        >
          Blata Technology was founded by passionate tech professionals who saw a
          need for reliable, innovative digital solutions that help businesses grow
          and succeed in a rapidly changing world. We were created to bridge the gap
          between cutting-edge technology and real business needs, delivering software,
          web, and digital services tailored to each client. It is a technology-driven
          company dedicated to delivering innovative software, web solutions, IT
          consulting, and digital strategy services. Founded with a passion for
          problem-solving and digital excellence, we help businesses adapt and grow
          in the fast-evolving digital world.
        </p>
      </div>
    </div>
  );
}

export default OurCompany;
