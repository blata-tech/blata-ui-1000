import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      width: '100vw',
      left: 0,
      background: '#222',
      color: '#fff',
      padding: '2.5rem 0 1.5rem 0',
      marginTop: '0rem',
      textAlign: 'center',
      boxSizing: 'border-box',
      position: 'relative'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        gap: '4rem',
        boxSizing: 'border-box',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        {/* Contact Info */}
        <div style={{ minWidth: 220, textAlign: 'left' }}>
          <h3 style={{ color: '#646cff' }}>Contact Us</h3>
          <p style={{ margin: 0 }}>
            <strong>Address:</strong><br />
            Lemikura, Addis Ababa, Ethiopia<br />
            <strong>Email:</strong> <a href="mailto:contact@blatatechnology.net" style={{ color: '#fff' }}>contact@blatatechnology.net</a><br />
            <strong>Phone:</strong> <a href="tel:+251982996262" style={{ color: '#fff' }}>+251982996262</a>
          </p>
        </div>
        {/* Our Services */}
                {/* Our Services (centered heading for both columns) */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 420,
          margin: '0 2rem'
        }}>
          <h3 style={{ color: '#646cff', marginBottom: '0.5rem' }}>Our Services</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2.5rem'
          }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
              <li><Link to="/itconsult" style={{ color: '#fff', textDecoration: 'none' }}>IT Consulting & Digital Strategy</Link></li>
              <li><Link to="/cloud" style={{ color: '#fff', textDecoration: 'none' }}>Cloud & Hosting Services</Link></li>
              <li><Link to="/network" style={{ color: '#fff', textDecoration: 'none' }}>Networking & Security</Link></li>
              <li><Link to="/elearning" style={{ color: '#fff', textDecoration: 'none' }}>E-Learning</Link></li>
            </ul>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
              <li><Link to="/softwaredevelopment" style={{ color: '#fff', textDecoration: 'none' }}>Software Development</Link></li>
              <li><Link to="/webdevelopment" style={{ color: '#fff', textDecoration: 'none' }}>Web Development</Link></li>
              <li><Link to="/applicationdevelopment" style={{ color: '#fff', textDecoration: 'none' }}>Application Development</Link></li>
              <li><Link to="/wordpress" style={{ color: '#fff', textDecoration: 'none' }}>WordPress & CPanel Administration</Link></li>
            </ul>
          </div>
        </div>
        {/* Quick Links */}
        <div style={{ minWidth: 180, textAlign: 'left' }}>
          <h3 style={{ color: '#646cff' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/ourcompany" style={{ color: '#fff', textDecoration: 'none' }}>Our Company</Link></li>
            <li><Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link></li>
            <li><Link to="/contactus" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div style={{
        marginTop: '2.5rem',
        fontSize: '0.95rem',
        color: '#aaa',
        borderTop: '1px solid #333',
        paddingTop: '1rem'
      }}>
        &copy; {new Date().getFullYear()} Blata Technology Group. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;