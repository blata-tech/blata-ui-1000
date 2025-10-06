import TadeleImg from "./assets/Tadele.Png";
import esubalewImg from "./assets/esubalew.jpg";
import tewodrosImg from "./assets/tewodros.jpg";
import womenImg from "./assets/women.jpg";

// Add LinkedIn URLs for each member (replace '#' with real URLs if available)
const managers = [
  {
    title: "Finance Manager",
    name: "Yonatan G/michael",
    img: TadeleImg,
    linkedin: "#",
    children: [
      {
        title: "Accountant",
        name: "Meseret Alemu",
        img: womenImg,
        linkedin: "#",
      },
    ],
  },
  {
    title: "Marketing Analyst",
    name: "Kalkidan Amare",
    img: womenImg,
    linkedin: "#",
  },
  {
    title: "IT Manager",
    name: "Yoseph Mideksa",
    img: TadeleImg,
    linkedin: "#",
    children: [
      {
        title: "Software Developer",
        name: "Esubalew Gashaw",
        img: esubalewImg,
        linkedin: "https://www.linkedin.com/in/esubalew-gashaw?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BI4jSuPhkSSGrI9BYqh9DTQ%3D%3D",
      },
      {
        title: "Software Developer",
        name: "Tewodros Admas",
        img: tewodrosImg,
        linkedin: "https://www.linkedin.com/in/tewodros-admass-26005422a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2F%2FepRQaGTJOplFjgoWuMJQ%3D%3D",
      },
      {
        title: "Software Developer",
        name: "Natinael Teshome",
        img: TadeleImg,
        linkedin: "#",
      },
    ],
  },
  {
    title: "Scrum Master",
    name: "Sulieman Ahmed",
    img: TadeleImg,
    linkedin: "#",
  },
];

function LinkedInIcon({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        marginTop: 6,
        marginBottom: 2,
      }}
      title="LinkedIn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="#0A66C2"
        style={{ verticalAlign: "middle" }}
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
      </svg>
    </a>
  );
}

function TeamCard({ member }) {
  const isITManager =
    member.title === "IT Manager" && Array.isArray(member.children);
  const isFinanceManager =
    member.title === "Finance Manager" && Array.isArray(member.children);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 1rem",
        minWidth: 110,
        background: "#e5e7eb", // grey background for card
        borderRadius: 16,
        boxShadow: "0 2px 8px rgba(100,108,255,0.07)",
        padding: "1.2rem 1.2rem 0.5rem 1.2rem",
      }}
    >
      <img
        src={member.img}
        alt={member.name}
        style={{
          width: 70,
          height: 70,
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #646cff",
          background: "#fff",
        }}
      />
      <div
        style={{
          color: "#000000",
          fontWeight: 800,
          fontSize: "1.15rem",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        {member.name}
      </div>
      <div
        style={{
          color: "#000000",
          fontWeight: 600,
          fontSize: "0.95rem",
          marginTop: 2,
          marginBottom: 2,
          textAlign: "center",
          letterSpacing: "0.5px",
        }}
      >
        {member.title}
      </div>
      <LinkedInIcon url={member.linkedin || "#"} />
      {/* Children (Accountant or Developers) */}
      {member.children && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 48,
            gap: isITManager ? 4 : isFinanceManager ? 0 : 12,
          }}
        >
          {member.children.map((child, idx) => (
            <TeamCard key={idx} member={child} />
          ))}
        </div>
      )}
    </div>
  );
}

function Team() {
  return (
    <div style={{ minHeight: "100vh", background: "#e5e7eb", width: "100vw" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "4rem auto",
          padding: "2rem",
          background: "#e5e7eb", // grey background for main card area
          borderRadius: 24,
          boxShadow: "0 4px 32px rgba(100,108,255,0.08)",
        }}
      >
        <h1
          style={{
            color: "#09229cff",
            fontWeight: 800,
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          Our Team
        </h1>
        {/* General Manager at the top center */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          <TeamCard
            member={{
              title: "General Manager",
              name: "Tadele Admas",
              img: TadeleImg,
              linkedin: "https://www.linkedin.com/in/tadelegerem?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzuxTUlzHS2CbjEmmO4KJOA%3D%3D",
            }}
          />
        </div>
        {/* Managers row: always horizontal, no wrap */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "5.5rem",
          }}
        >
          {managers.map((manager, idx) => (
            <TeamCard key={idx} member={manager} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;