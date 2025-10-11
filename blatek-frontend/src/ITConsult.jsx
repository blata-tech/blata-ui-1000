import { useState, useEffect } from "react";
import ITImg from './assets/IT.jpg';

function ITConsult() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    maxWidth: "1200px",
    width: "96vw",
    minHeight: "70vh",
    margin: "4rem auto",
    padding: isMobile ? "1.5rem 1rem" : "2.5rem 2rem",
    background: "linear-gradient(120deg, #f5f5f5 80%, #e7eaff 100%)",
    borderRadius: "24px",
    boxShadow: "0 4px 32px rgba(100,108,255,0.10)",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    gap: "3rem",
  };

  const imageContainer = {
    flex: "0 0 340px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageStyle = {
    width: isMobile ? "250px" : "320px",
    height: isMobile ? "250px" : "620px",
    borderRadius: "24px",
    background: "#fff",
    boxShadow: "0 2px 16px rgba(100,108,255,0.13)",
    objectFit: "contain",
  };

  const contentStyle = {
    flex: 1,
    textAlign: isMobile ? "center" : "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const headingStyle = {
    color: "#646cff",
    fontWeight: 900,
    fontSize: isMobile ? "1.8rem" : "2.2rem",
    marginBottom: "1.5rem",
    marginTop: '1rem'
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    color: "#444",
    lineHeight: 1.7,
    marginTop: "0.3rem",
  };

  const strongStyle = {
    marginTop: "1.5rem",
    fontSize: "1.1rem",
    color: "#444",
  };

  const ulStyle = {
    marginTop: "0.5rem",
    fontSize: "1.1rem",
    color: "#444",
    paddingLeft: "1.2rem",
  };

  return (
    <div style={containerStyle}>
      {/* Image Left */}
      <div style={imageContainer}>
        <img src={ITImg} alt="Blata Technology Group IT Consulting" style={imageStyle} />
      </div>

      {/* Content Right */}
      <div style={contentStyle}>
        <h1 style={headingStyle}>IT Consulting and Digital Strategy</h1>

        <p style={paragraphStyle}>
          At Blata Technology, we empower businesses to make smarter technology decisions and achieve long-term growth through expert IT consulting and digital strategy services. Our team works closely with clients to understand their goals, assess their current systems, and develop customized strategies that align technology with business objectives. We help organizations modernize their operations, optimize performance, and stay ahead in today’s fast-changing digital world.
        </p>

        <strong style={strongStyle}>Our Expertise:</strong>
        <p style={paragraphStyle}>We focus on strategies that are:</p>
        <ul style={ulStyle}>
          <li>Business-Aligned: Tailored to match your vision, goals, and industry needs.</li>
          <li>Scalable & Future-Ready: Designed to adapt as your business grows.</li>
          <li>Secure & Efficient: Focused on improving performance while ensuring data protection.</li>
          <li>Innovation-Driven: Helping you leverage emerging technologies for a competitive edge.</li>
          <li>Comprehensive Support: From strategy development to implementation and ongoing management.</li>
        </ul>

        <strong style={strongStyle}>Why Choose us?</strong>
        <p style={paragraphStyle}>
          We blend deep technical knowledge with strategic insight to deliver actionable solutions that drive success. Our consultants work hand-in-hand with your team to streamline processes, reduce costs, and improve overall digital efficiency — ensuring your business stays innovative and future-ready.
        </p>

        <strong style={strongStyle}>Let’s Build a Smarter Future Together</strong>
        <p style={paragraphStyle}>
          Whether you’re planning a digital transformation, upgrading IT systems, or looking to enhance your business strategy, Blata Technology is your trusted partner for expert consulting and sustainable digital growth.
        </p>
      </div>
    </div>
  );
}

export default ITConsult;
