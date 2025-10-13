import React, { useEffect, useState } from "react";
import AppImg from "./assets/App.jpeg";
import AppImg1 from "./assets/App1.jpg";
import AppImg2 from "./assets/App2.jpg";

function ApplicationDevelopment() {
  const images = [AppImg, AppImg1, AppImg2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  // Responsive styles injected dynamically
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media (max-width: 1024px) {
        .app-dev-container {
          flex-direction: column !important;
          text-align: center !important;
          padding: 2rem 1.5rem !important;
        }
        .app-dev-image {
          width: 300px !important;
          height: auto !important;
          margin-bottom: 2rem !important;
        }
        .app-dev-content {
          padding: 0 !important;
          font-size: 1.05rem !important;
        }
        .app-dev-heading {
          font-size: 1.8rem !important;
        }
      }

      @media (max-width: 768px) {
        .app-dev-container {
          padding: 1.5rem 1rem !important;
        }
        .app-dev-heading {
          font-size: 1.5rem !important;
        }
        .app-dev-content {
          font-size: 1rem !important;
        }
        .app-dev-image {
          width: 250px !important;
        }
      }

      @media (max-width: 480px) {
        .app-dev-container {
          padding: 1rem 0.5rem !important;
        }
        .app-dev-heading {
          font-size: 1.25rem !important;
        }
        .app-dev-content {
          font-size: 0.95rem !important;
        }
        .app-dev-image {
          width: 200px !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div
      className="app-dev-container"
      style={{
        maxWidth: "1200px",
        width: "96vw",
        minHeight: "70vh",
        margin: "5rem auto",
        padding: "2.5rem 2rem",
        background: "linear-gradient(120deg, #f5f5f5 80%, #e7eaff 100%)",
        borderRadius: "24px",
        boxShadow: "0 4px 32px rgba(100,108,255,0.10)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "3rem",
         overflow: "hidden", // Ensure images do not overflow the container
        position: "relative",
      }}
    >
      {/* Image Section */}
      <div
        style={{
          flex: "0 0 340px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
           position: "relative", // For stacking images
          height: "720px", // Fixed height for the image container
          overflow: "hidden",
        }}
      >
         {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Application development ${index + 1}`}
          style={{
            width: "320px",
            height: "620px",
            borderRadius: "24px",
            background: "#fff",
            boxShadow: "0 2px 16px rgba(100,108,255,0.13)",
            objectFit: "cover",
             position: "absolute", // Stack images on top of each other
            top: `${(index - currentImageIndex) * 100}%`, // Position images vertically
             left: 0,
            transition: "top 0.5s ease-in-out",
          }}
        />
        ))}
      </div>

      {/* Text Content */}
      <div
        className="app-dev-content"
        style={{
          flex: 1,
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          className="app-dev-heading"
          style={{
            color: "#646cff",
            fontWeight: 900,
            fontSize: "2.2rem",
            marginBottom: "1.5rem",
          }}
        >
          Application Design & Development
        </h1>

        <p style={{ fontSize: "1.18rem", color: "#222", lineHeight: 1.7 }}>
          At Blata Technology, we specialize in creating innovative, high-performance
          applications that deliver seamless experiences across platforms. Our goal is to
          help businesses stay connected with their customers through powerful, user-friendly,
          and scalable mobile and desktop applications.
        </p>

        <strong style={{ marginTop: "1.5rem", fontSize: "1.1rem", color: "#444" }}>
          Our Expertise:
        </strong>
        <p style={{ marginTop: "0.3rem", fontSize: "1.1rem", color: "#444" }}>
          We develop applications that are:
        </p>

        <ul
          style={{
            marginTop: "0.5rem",
            fontSize: "1.1rem",
            color: "#444",
            paddingLeft: "1.2rem",
          }}
        >
          <li>Custom-Built: Designed specifically for your business needs.</li>
          <li>Cross-Platform: Works on Android, iOS, and web platforms.</li>
          <li>Secure & Scalable: Built with modern tech and security standards.</li>
          <li>User-Focused: Engaging interfaces and smooth usability.</li>
          <li>Performance-Optimized: Fast, reliable, and efficient.</li>
        </ul>

        <strong style={{ marginTop: "1.5rem", fontSize: "1.1rem", color: "#444" }}>
          Why Choose Us?
        </strong>
        <p style={{ marginTop: "0.3rem", fontSize: "1.1rem", color: "#444" }}>
          We combine creativity and technical expertise to build applications that make an
          impact. Our agile process ensures flexibility, faster delivery, and high-quality
          results aligned with your business goals.
        </p>

        <strong style={{ marginTop: "1.5rem", fontSize: "1.1rem", color: "#444" }}>
          Let’s Bring Your Ideas to Life
        </strong>
        <p style={{ marginTop: "0.3rem", fontSize: "1.1rem", color: "#444" }}>
          Whether you’re building a new app or improving an existing one, Blata Technology
          is your trusted partner for innovation, reliability, and long-term success in
          application development.
        </p>
      </div>
    </div>
  );
}

export default ApplicationDevelopment;
