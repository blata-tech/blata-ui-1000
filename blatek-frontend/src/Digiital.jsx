import { useState, useEffect } from "react";
import digitalImg from "./assets/Digital.jpg";
import digitalImg1 from "./assets/Digital1.jpg";
import digitalImg2 from "./assets/Digital2.jpg";

function DigitalMarketing() {
  const images = [digitalImg, digitalImg1, digitalImg2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

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
    overflow: "hidden", // Ensure images do not overflow the container
    position: "relative",
  };

  const imageContainer = {
    flex: "0 0 340px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative", // For stacking images
    height: "720px", // Fixed height for the image container
    overflow: "hidden", // Prevent images from overflowing
  };

  const imageStyle = (index) => ({
    width: isMobile ? "250px" : "320px",
    height: isMobile ? "250px" : "620px",
    borderRadius: "24px",
    background: "#fff",
    boxShadow: "0 2px 16px rgba(100,108,255,0.13)",
    objectFit: "cover",
    position: "absolute", // Stack images on top of each other
    top: `${(index - currentImageIndex) * 100}%`, // Position images vertically
    left: 0,
    transition: "top 0.5s ease-in-out", // Smooth vertical transition
  });

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
    marginTop: "1rem",
  };

  const paragraphStyle = {
    marginTop: "0.3rem",
    fontSize: "1.1rem",
    color: "#444",
    lineHeight: 1.7,
  };

  const strongStyle = {
    marginTop: "1.5rem",
    fontSize: "1.1rem",
    color: "#444",
  };

  const ulStyle = {
    textAlign: isMobile ? "left" : "left",
    paddingLeft: "1.2rem",
    marginTop: "0.5rem",
  };

  return (
    <div style={containerStyle}>
      {/* Image Left */}
      <div style={imageContainer}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Digital Marketing ${index + 1}`}
            style={imageStyle(index)}
          />
        ))}
      </div>

      {/* Content Right */}
      <div style={contentStyle}>
        <h1 style={headingStyle}>Digital Marketing</h1>
        <p style={paragraphStyle}>
          At Blata Technology Group, we help businesses grow their online presence and connect with the right audience
          through smart, results-driven digital marketing strategies. Our goal is to transform your online channels into
          powerful tools for visibility, engagement, and sales.
        </p>

        <strong style={strongStyle}>What We Offer:</strong>
        <p style={paragraphStyle}>
          We offer a comprehensive suite of digital marketing services, including:
        </p>
        <ul style={ulStyle}>
          <li>Social Media Marketing – Build your brand and engage with customers across platforms like Facebook, Instagram, LinkedIn, and more.</li>
          <li>Search Engine Optimization (SEO) – Improve your website’s visibility on search engines and attract organic traffic.</li>
          <li>Pay-Per-Click (PPC) Advertising – Drive targeted leads and maximize ROI through Google Ads and social campaigns.</li>
          <li>Content Marketing – Create and share valuable content that builds trust and authority.</li>
          <li>Email Marketing – Reach your audience directly with personalized and impactful campaigns.</li>
          <li>Analytics & Reporting – Track performance and optimize campaigns with data-driven insights.</li>
        </ul>

        <strong style={strongStyle}>Why Choose us?</strong>
        <p style={paragraphStyle}>
          We combine innovation, strategy, and technology to help your business connect, engage, and grow online. Our marketing experts use proven methods to deliver real results — driving traffic, improving conversions, and enhancing brand visibility.
        </p>

        <strong style={strongStyle}>Let’s Grow Your Business Digitally</strong>
        <p style={paragraphStyle}>
          Partner with Blata Technology to take your brand to the next level. Together, we’ll build a strong digital presence that attracts customers, increases loyalty, and delivers sustainable success.
        </p>
      </div>
    </div>
  );
}

export default DigitalMarketing;