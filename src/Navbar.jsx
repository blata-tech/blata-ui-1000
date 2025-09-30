import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import logo from './assets/logo.png';

const navLinks = [
  //{ to: '/', label: 'Home' },
  { label: 'AboutUs', dropdown: [
    { to: '/OurCompany', label: 'Our Company' },
    { to: '/vision', label: 'Vision' },
    { to: '/mission', label: 'Mission' },
    { to: '/team', label: 'Team' }
  ] },
  { label: 'Services',
    dropdown: [
      { to: '/softwaredevelopment', label: 'Software Development' },
      { to: '/webdevelopment', label: 'Website Development' },
      { to: '/applicationdevelopment', label: 'Application Development' },
      { to: '/wordpress', label: 'WordPress & CPanel Administration' },
      { to: '/itconsult', label: 'IT Consulting And Digital Strategy' },
      { to: '/cloud', label: 'Cloud & Hosting Services' },
      { to: '/network', label: 'Networking & Security' },
      { to: '/elearning', label: 'E Learning' },
      { to: '/digital', label: 'Digital Marketing' }
    ]
  },
  { to: '/contactus', label: 'Contact us' }
];

function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownHovered, setDropdownHovered] = useState(null);
  const closeTimeout = useRef();

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setHovered(null);
      setDropdownOpen(false);
      setDropdownHovered(null);
    }, 180); // 180ms delay
  };

  const handleMouseEnter = (idx, hasDropdown) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setHovered(idx);
    if (hasDropdown) setDropdownOpen(true);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 2000,
        background: '#222',
        color: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        padding: '3rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          left: '2rem'
        }}
      >
        <Link to="/">
        <img
          src={logo}
          alt="Company Logo"
          style={{
            height: '120px',
            width: '300px',
            borderRadius: '12px',
            marginRight: '1rem',
            boxShadow: '0 2px 8px rgba(100,108,255,0.15)',
            background: '#fff',
            objectFit: 'cover'
          }}
        />
        </Link>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}
      >
        {navLinks.map((link, idx) => (
          <div
            key={link.to || link.label}
            style={{ position: 'relative', marginRight: '2rem' }}
            onMouseEnter={() => handleMouseEnter(idx, !!link.dropdown)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to={link.to || '#'}
              style={{
                color: hovered === idx ? '#646cff' : '#fff',
                fontWeight: 'bold',
                fontSize: '1.35rem',
                textDecoration: 'none',
                letterSpacing: '1px',
                transition: 'color 0.2s'
              }}
            >
              {link.label}
            </Link>
            {link.dropdown && dropdownOpen && hovered === idx && (
              <div
                style={{
                  position: 'absolute',
                  top: '2.5rem',
                  left: 0,
                  background: 'grey',
                  color: '#222',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(100,108,255,0.15)',
                  minWidth: '270px',
                  zIndex: 3000,
                  padding: '0.5rem 0',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={() => {
                  if (closeTimeout.current) clearTimeout(closeTimeout.current);
                  setDropdownOpen(true);
                }}
                onMouseLeave={handleMouseLeave}
              >
                {link.dropdown.map((item, i) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.85rem 2rem',
                      color: dropdownHovered === i ? '#646cff' : '#222',
                      background: dropdownHovered === i ? '#e7eaff' : 'transparent',
                      textDecoration: 'none',
                      fontWeight: 500,
                      borderBottom: i !== link.dropdown.length - 1 ? '1px solid #eee' : 'none',
                      transition: 'background 0.2s, color 0.2s',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={() => setDropdownHovered(i)}
                    onMouseLeave={() => setDropdownHovered(null)}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                  
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{
        position: 'absolute',
        right: '11rem',
        top: '2.5rem'
      }}>
        <a
          href="https://www.linkedin.com/company/blata-technology-group"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#fff',
            borderRadius: '50%',
            padding: '0.4rem',
            boxShadow: '0 2px 8px rgba(100,108,255,0.13)'
          }}
          title="Blata Technology Group LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="#646cff"
            style={{ verticalAlign: 'middle' }}
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
          </svg>
        </a>
      </div>
      {/* Uncomment and adjust if you want login/register buttons
      <div style={{
        position: 'absolute',
        right: '5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        gap: '1.2rem'
      }}>
        <Link to="/login" style={{
          color: '#fff',
          background: '#646cff',
          padding: '0.5em 1.2em',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 600,
          marginRight: '0.5rem'
        }}>Login</Link>
        <Link to="/register" style={{
          color: '#646cff',
          background: '#fff',
          padding: '0.5em 1.2em',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 600,
          border: '2px solid #646cff'
        }}>Register</Link>
      </div>
      */}
    </nav>
  );
}

export default Navbar;
