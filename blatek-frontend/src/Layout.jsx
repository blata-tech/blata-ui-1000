import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 2000,
        padding: '1rem 2rem',
        display: 'flex',
        gap: '1.5rem',
        background: 'transparent'
      }}>
        {/* <Link to="/register" style={{ color: '#646cff', fontWeight: 600, textDecoration: 'none' }}>Register</Link>
        <Link to="/login" style={{ color: '#646cff', fontWeight: 600, textDecoration: 'none' }}>Login</Link> */}
      </div>
      <Navbar />
      <main style={{ maxWidth: 800, textAlign: 'center' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;