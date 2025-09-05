import WordpImg from './assets/Wordp.jpg';

function WordPress() {
  return (
    <div style={{
      maxWidth: '1250px',
      width: '100vw',
      margin: '8rem auto',
      padding: '2.5rem 2rem',
      background: '#f5f5f5',
      borderRadius: '24px',
      boxShadow: '0 4px 32px rgba(100,108,255,0.10)',
      display: 'flex',
      alignItems: 'center',
      gap: '2.5rem'
    }}>
      <img
        src={WordpImg}
        alt="Wordpess"
        style={{
          width: '400px',
          height: '320px',
          objectFit: 'cover',
          borderRadius: '16px',
          background: '#fff',
          boxShadow: '0 2px 8px rgba(100,108,255,0.13)'
        }}
      />
      <div style={{ flex: 1 }}>
        <h1 style={{ color: '#646cff', fontWeight: 700, marginBottom: '1.5rem' }}>WordPress and Cpanel Administration</h1>
            <p style={{ color: '#333', fontSize: '1.125rem', lineHeight: '1.75', marginBottom: '1.5rem' }}>
            we specialize in professional WordPress and cPanel administration services to help businesses manage and maintain their websites with ease. 
            Our team handles everything from installing and customizing themes and plugins to optimizing website performance and ensuring strong security. 
            We take care of regular updates, backups, and SEO-friendly configurations to keep your site running at its best. 
            On the cPanel side, we manage domains, emails, databases, files, and server resources efficiently. 
            We also handle SSL setup, monitor for issues, and provide reliable troubleshooting and support.
            With our services, you can focus on growing your business while we take care of the technical side of your website.
            </p>
      </div>
    </div>
  );
}

export default WordPress;