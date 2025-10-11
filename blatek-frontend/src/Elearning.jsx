import digitalImg from "./assets/digital.jpg";

function DigitalMarketing() {
  return (
    <div
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
        flexWrap: "wrap",
        alignItems: "center",
        gap: "3rem",
      }}
    >
      {/* Image */}
      <div
        style={{
          flex: "0 0 340px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={digitalImg}
          alt="Blata Technology Group Digital Marketing"
          style={{
            width: "100%",
            maxWidth: "320px",
            height: "auto",
            borderRadius: "24px",
            background: "#fff",
            boxShadow: "0 2px 16px rgba(100,108,255,0.13)",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minWidth: "260px",
        }}
      >
        <h1
          style={{
            color: "#646cff",
            fontWeight: 900,
            fontSize: "2.2rem",
            marginBottom: "1.5rem",
          }}
        >
          Digital Marketing
        </h1>

        <p style={{ fontSize: "1.1rem", color: "#444", lineHeight: 1.7 }}>
          At Blata Technology Group, we help businesses grow their online presence
          and connect with the right audience through smart, results-driven digital
          marketing strategies. Our goal is to transform your online channels into
          powerful tools for visibility, engagement, and sales.
        </p>

        <strong style={{ marginTop: "1.5rem", fontSize: "1.1rem", color: "#444" }}>
          What We Offer:
        </strong>
        <p style={{ fontSize: "1.1rem", color: "#444", marginTop: "0.3rem" }}>
          We offer a comprehensive suite of digital marketing services, including:
        </p>

        <ul style={{ fontSize: "1.1rem", color: "#444", paddingLeft: "1.2rem" }}>
          <li>Social Media Marketing – Build your brand and engage with customers across platforms like Facebook, Instagram, LinkedIn, and more.</li>
          <li>Search Engine Optimization (SEO) – Improve your website’s visibility on search engines and attract organic traffic.</li>
          <li>Pay-Per-Click (PPC) Advertising – Drive targeted leads and maximize ROI through Google Ads and social campaigns.</li>
          <li>Content Marketing – Create and share valuable content that builds trust and authority.</li>
          <li>Email Marketing – Reach your audience directly with personalized and impactful campaigns.</li>
          <li>Analytics & Reporting – Track performance and optimize campaigns with data-driven insights.</li>
        </ul>

        <strong style={{ marginTop: "1.5rem", fontSize: "1.1rem", color: "#444" }}>
          Why Choose us?
        </strong>
        <p style={{ fontSize: "1.1rem", color: "#444", marginTop: "0.3rem" }}>
          We combine innovation, strategy, and technology to help your business
          connect, engage, and grow online. Our marketing experts use proven methods
          to deliver real results — driving traffic, improving conversions, and
          enhancing brand visibility.
        </p>

        <strong style={{ marginTop: "1.5rem", fontSize: "1.1rem", color: "#444" }}>
          Let’s Grow Your Business Digitally
        </strong>
        <p style={{ fontSize: "1.1rem", color: "#444", marginTop: "0.3rem" }}>
          Partner with Blata Technology to take your brand to the next level. Together,
          we’ll build a strong digital presence that attracts customers, increases
          loyalty, and delivers sustainable success.
        </p>
      </div>
    </div>
  );
}

export default DigitalMarketing;
