import { Link } from "react-router-dom";
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

function Footer() {
  return (
    <footer
      style={{
        width: "100vw",
        left: 0,
        background: "#222",
        color: "#fff",
        padding: "2.5rem 1rem 1.5rem 1rem",
        marginTop: "0rem",
        textAlign: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Contact Info */}
        <div style={{ flex: "1 1 220px", textAlign: "left" }}>
          <h3 style={{ color: "#646cff", fontSize: "1.5rem" }}>Contact Us</h3>
          <p style={{ margin: 0, lineHeight: 1.8 }}>
            <strong>Address:</strong> Lemikura, Addis Ababa, Ethiopia<br />
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@blatatechnology.net" style={{ color: "#fff" }}>
              contact@blatatechnology.net
            </a>
            <br />
            <strong>Phone:</strong>{" "}
            <a href="tel:+251982996262" style={{ color: "#fff" }}>
              +251982996262
            </a>
            <br />
            <strong>P.O.Box:</strong> 1079
          </p>
        </div>

        {/* Our Services */}
        <div
          style={{
            flex: "2 1 420px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",

          }}
        >
          <h3 style={{ color: "#646cff", marginBottom: "1rem", fontSize: "1.5rem" }}>Our Services</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            <ul className="service-list" style={{ listStyle: "none", padding: 0, margin: 0, minWidth: 100 }}>
              <li style={{ marginBottom: 1}}>
                <Link to="/itconsult" onClick={scrollToTop} style={{ color: "#fff", textDecoration: "none" }}>
                  IT Consulting & Digital Strategy
                </Link>
              </li>
              <li style={{ marginBottom: 1 }}>
                <Link to="/cloud" onClick={scrollToTop} style={{ color: "#fff", textDecoration: "none" }}>
                  Cloud & Hosting Services
                </Link>
              </li>
              <li style={{ marginBottom: 1 }}>
                <Link to="/network" onClick={scrollToTop} style={{ color: "#fff", textDecoration: "none" }}>
                  Networking & Security
                </Link>
              </li>
              <li style={{ marginBottom: 1 }}>
                <Link to="/elearning" onClick={scrollToTop} style={{ color: "#fff", textDecoration: "none" }}>
                  E-Learning
                </Link>
              </li>
              <li style={{ marginBottom: 1 }}>
                <Link to="/digital" onClick={scrollToTop} style={{ color: "#fff", textDecoration: "none" }}>
                  Digital Marketing
                </Link>
              </li>
            </ul>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, minWidth: 160, lineHeight: 1.6 }}>
              <li style={{ marginBottom: 1 }}>
                <Link to="/softwaredevelopment" onClick={scrollToTop} style={{ color: "#fff", textDecoration: "none" }}>
                  Software Development
                </Link>
              </li>
              <li style={{ marginBottom: 1 }}>
                <Link to="/webdevelopment" onClick={scrollToTop} style={{ color: "#fff", textDecoration: "none" }}>
                  Web Development
                </Link>
              </li>
              <li style={{ marginBottom: 1 }}>
                <Link to="/applicationdevelopment" onClick={scrollToTop} style={{ color: "#fff", textDecoration: "none" }}>
                  Application Development
                </Link>
              </li>
              <li style={{ marginBottom: 1 }}>
                <Link to="/wordpress" onClick={scrollToTop} style={{ color: "#fff", textDecoration: "none" }}>
                  WordPress & CPanel Administration
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Quick Links */}
        <div style={{ flex: "1 1 180px", textAlign: "left" }}>
          <h3 style={{ color: "#646cff", fontSize: "1.5rem" }}>Quick Links</h3>
          <ul className="quick-links" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 1 }}>
              <Link to="/" onClick={scrollToTop} style={{ color: "#fff", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li style={{ marginBottom: 1 }}>
              <Link to="/ourcompany" onClick={scrollToTop} style={{ color: "#fff", textDecoration: "none" }}>
                Our Company
              </Link>
            </li>
            <li style={{ marginBottom: 1 }}>
              <Link to="/contactus" onClick={scrollToTop} style={{ color: "#fff", textDecoration: "none" }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          marginTop: "2.5rem",
          fontSize: "0.95rem",
          color: "#aaa",
          borderTop: "1px solid #333",
          paddingTop: "1rem",
        }}
      >
        &copy; {new Date().getFullYear()} Blata Technology Group. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
