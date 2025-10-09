import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import logo from './assets/logo.png';

const navLinks = [
  {
    label: 'About us',
    dropdown: [
      { to: '/OurCompany', label: 'Our Company' },
      { to: '/vision', label: 'Vision' },
      { to: '/mission', label: 'Mission' },
      { to: '/team', label: 'Team' }
    ]
  },
  {
    label: 'Services',
    dropdown: [
      { to: '/softwaredevelopment', label: 'Software Development' },
      { to: '/webdevelopment', label: 'Website Development' },
      { to: '/applicationdevelopment', label: 'Application Development' },
      { to: '/digital', label: 'Digital Marketing' },
      { to: '/itconsult', label: 'IT Consulting And Digital Strategy' },
      { to: '/cloud', label: 'Cloud & Hosting Services' },
      { to: '/network', label: 'Networking & Security' },
      { to: '/elearning', label: 'E Learning' },
      { to: '/wordpress', label: 'WordPress & CPanel Administration' }
    ]
  },
  { to: '/contactus', label: 'Contact us' }
];

// Social Icons Component
const SocialIcons = ({ size = 22 }) => {
  const icons = [
    {
      title: "Blata Technology Group LinkedIn",
      href: "https://www.linkedin.com/company/blata-technology-group",
      fill: "#646cff",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"
    },
    {
      title: "Blata Technology Group Telegram",
      href: "https://t.me/Blata_technologies",
      fill: "#229ED9",
      path: "M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.93 7.36l-1.6 7.56c-.12.53-.43.66-.87.41l-2.4-1.77-1.16 1.12c-.13.13-.24.24-.49.24l.18-2.53 4.61-4.16c.2-.18-.04-.28-.31-.1l-5.7 3.59-2.45-.77c-.53-.16-.54-.53.11-.78l9.56-3.69c.44-.16.82.1.68.77z"
    },
    {
      title: 'Facebook',
      href: 'https://web.facebook.com/profile.php?id=61581761064358',
      fill: '#1877F3',
      path: 'M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0'
    }
  ];

  return icons.map(icon => (
    <a
      key={icon.title}
      href={icon.href}
      target="_blank"
      rel="noopener noreferrer"
      title={icon.title}
      style={{
        display: 'inline-block',
        background: '#fff',
        borderRadius: '50%',
        padding: '0.4rem',
        boxShadow: '0 2px 8px rgba(100,108,255,0.13)'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={icon.fill}
      >
        <path d={icon.path} />
      </svg>
    </a>
  ));
};

function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownHovered, setDropdownHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const closeTimeout = useRef();

  // Update screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setHovered(null);
      setDropdownOpen(false);
      setDropdownHovered(null);
    }, 180);
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
        background: '#222',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 2000,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        padding: '0',
        height: isMobile ? '70px' : '100px'
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              height: isMobile ? '50px' : '100px',
              width: isMobile ? '150px' : '250px',
              objectFit: 'cover',
              transition: 'all 0.3s ease'
            }}
          />
        </Link>
      </div>

      {/* Hamburger */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
            fontSize: '2rem'
            
          }}
        >
         {menuOpen ? '✖' : '☰'}
        </button>
      )}

      {/* Nav Links */}
      <div
        style={{
          flex: 1,
          display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: isMobile ? 'flex-start' : 'center',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? '1rem' : '2rem',
          position: isMobile ? 'absolute' : 'static',
          top: isMobile ? '70px' : 'auto',
          left: 0,
          width: isMobile ? '100%' : 'auto',
          background: isMobile ? '#222' : 'transparent',
          padding: isMobile ? '1rem 2rem' : '0',
          borderTop: isMobile ? '1px solid rgba(255,255,255,0.1)' : 'none',
          transition: 'all 0.3s ease-in-out',
          zIndex: 1000
        }}
      >
        {navLinks.map((link, idx) => (
          <div
            key={link.to || link.label}
            style={{ position: 'relative', width: isMobile ? '100%' : 'auto' }}
            onMouseEnter={!isMobile ? () => handleMouseEnter(idx, !!link.dropdown) : undefined}
            onMouseLeave={!isMobile ? handleMouseLeave : undefined}
          >
            <Link
              to={link.to || '#'}
              onClick={() => {
                if (isMobile && link.dropdown) {
                  setDropdownOpen(dropdownOpen === idx ? null : idx);
                } else setMenuOpen(false);
              }}
              style={{
                color: hovered === idx ? '#646cff' : '#fff',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                textDecoration: 'none',
                letterSpacing: '1px',
                display: 'block',
                padding: isMobile ? '0.8rem 0' : '0',
                borderBottom: isMobile ? '1px solid rgba(255,255,255,0.08)' : 'none',
                transition: 'color 0.2s'
              }}
            >
              {link.label}
            </Link>

            {/* Dropdown */}
            {link.dropdown &&
              ((dropdownOpen && hovered === idx) ||
                (isMobile && dropdownOpen === idx)) && (
                <div
                  style={{
                    position: isMobile ? 'static' : 'absolute',
                    top: isMobile ? 'auto' : '2.5rem',
                    left: 0,
                    background: isMobile ? 'rgba(255,255,255,0.05)' : '#f5f5f5',
                    color: '#222',
                    borderRadius: isMobile ? '0' : '8px',
                    boxShadow: isMobile ? 'none' : '0 2px 8px rgba(100,108,255,0.15)',
                    minWidth: isMobile ? '100%' : '260px',
                    padding: '0.5rem 0',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {link.dropdown.map((item, i) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => {
                        setDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                      style={{
                        display: 'block',
                        padding: '0.75rem 1.5rem',
                        color: isMobile ? '#fff' : '#222',
                        background: !isMobile && dropdownHovered === i ? '#e7eaff' : 'transparent',
                        textDecoration: 'none',
                        fontWeight: 500,
                        borderBottom: !isMobile && i !== link.dropdown.length - 1 ? '1px solid #eee' : 'none',
                        transition: 'background 0.2s, color 0.2s'
                      }}
                      onMouseEnter={!isMobile ? () => setDropdownHovered(i) : undefined}
                      onMouseLeave={!isMobile ? () => setDropdownHovered(null) : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
          </div>
        ))}

        {/* Mobile Social Icons */}
        {isMobile && menuOpen && (
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              padding: '1rem 0',
              justifyContent: 'flex-start',
              width: '100%',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <SocialIcons size={20} />
          </div>
        )}
      </div>

      {/* Desktop Social Icons */}
      {!isMobile && (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', paddingRight: '1.5rem', borderRadius: '50%' }}>
          <SocialIcons size={24} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
