import { useState, useEffect } from "react";
import ElearnImg from "./assets/Elearn.jpg";
import ElearnImg1 from "./assets/Elearn1.jpg";
import ElearnImg2 from "./assets/Elearn2.jpeg";

function Elearning() {
  const images = [ElearnImg, ElearnImg1, ElearnImg2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
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
    margin: "5rem auto",
    padding: isMobile ? "1.5rem 1rem" : "2.5rem 2rem",
    background: "linear-gradient(120deg, #f5f5f5 80%, #e7eaff 100%)",
    borderRadius: "24px",
    boxShadow: "0 4px 32px rgba(100,108,255,0.10)",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    gap: "3rem",
    flexWrap: "wrap",
    overflow: "hidden",
    position: "relative",
  };

  const imageContainer = {
    flex: "0 0 340px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "280px",
    position: "relative",
    height: isMobile ? "250px" : "720px",
    overflow: "hidden",
  };

  const imageStyle = (index) => ({
    width: isMobile ? "250px" : "320px",
    height: isMobile ? "250px" : "620px",
    borderRadius: "24px",
    background: "#fff",
    boxShadow: "0 2px 16px rgba(100,108,255,0.13)",
    objectFit: "cover",
    position: "absolute",
    top: `${(index - currentImageIndex) * 100}%`,
    left: 0,
    transition: "top 0.5s ease-in-out",
    maxWidth: "100%",
  });

  const contentStyle = {
    flex: 1,
    textAlign: isMobile ? "center" : "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: "280px",
  };

  const headingStyle = {
    color: "#646cff",
    fontWeight: 900,
    fontSize: isMobile ? "1.8rem" : "2.2rem",
    marginBottom: "1.5rem",
  };

  const paragraphStyle = {
    fontSize: "1.18rem",
    color: "#222",
    lineHeight: 1.7,
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
    textAlign: isMobile ? "left" : "left",
  };

  return (
    <div style={containerStyle}>
      {/* Image Left with transition */}
      <div style={imageContainer}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`E-Learning ${index + 1}`}
            style={imageStyle(index)}
          />
        ))}
      </div>

      {/* Content Right */}
      <div style={contentStyle}>
        <h1 style={headingStyle}>E-Learning Solutions</h1>
        <p style={paragraphStyle}>
          At Blata Technology, we design and develop custom e-learning platforms tailored to meet the educational and training needs of institutions, businesses, and individuals. Our solutions empower learners and educators with interactive, accessible, and engaging digital experiences.
        </p>

        <strong style={strongStyle}>Our Expertise:</strong>
        <p style={{ ...paragraphStyle, fontSize: "1.1rem", color: "#444", marginTop: "0.3rem" }}>
          We specialize in e-learning solutions that are:
        </p>
        <ul style={ulStyle}>
          <li>User-friendly LMS (Learning Management Systems)</li>
          <li>Multimedia course integration (video, audio, quizzes)</li>
          <li>Mobile-friendly platforms for anytime access</li>
          <li>Tracking and reporting tools for progress analysis</li>
          <li>Secure user management and content control</li>
        </ul>

        <strong style={strongStyle}>Why Choose Us?</strong>
        <p style={{ ...paragraphStyle, fontSize: "1.1rem", color: "#444", marginTop: "0.3rem" }}>
          We combine educational expertise with technical innovation to deliver e-learning platforms that drive results. Our team ensures seamless integration, intuitive navigation, and robust security for all users.
        </p>

        <strong style={strongStyle}>Transform Learning with Blata Technology</strong>
        <p style={{ ...paragraphStyle, fontSize: "1.1rem", color: "#444", marginTop: "0.3rem" }}>
          Whether you’re launching a new online course, upgrading your training system, or building a complete digital campus, Blata Technology is your trusted partner for effective, scalable, and engaging e-learning solutions.
        </p>
      </div>
    </div>
  );
}

export default Elearning;