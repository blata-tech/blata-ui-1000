import SoftImg from './assets/Soft.jpg';

function SoftwareDevelopment() {
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
            src={SoftImg}
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
            Software Development
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
            At Blata Technology Group, we specialize in creating powerful, reliable, and scalable software solutions tailored to meet the unique needs of businesses. 
            Our software development services cover everything from custom enterprise applications to specialized tools that streamline operations and enhance productivity. 
            By leveraging modern technologies and agile methodologies, we design solutions that are secure, efficient, and adaptable to future growth. 
            With a focus on quality and innovation, our team ensures that every software product we deliver helps businesses optimize processes, improve customer experiences, and achieve long-term success.
          </p>
        </div>
      </div>
    );
  }
  

export default SoftwareDevelopment;