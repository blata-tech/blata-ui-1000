import SoftImg from './assets/Soft.jpg';
import WebImg from './assets/web1.jpg';
import WordpImg from './assets/w2.jpg';
import ITImg from './assets/IT.jpg';
import ElearnImg from './assets/Elearn.jpg';

function Services() {
  const serviceItems = [
    {
      img: SoftImg,
      title: 'Software Design & Development',
      description:
        'We build reliable, scalable, and secure software solutions customized to your business needs.',
      points: [
        'Desktop and cloud-based applications',
        'Enterprise software solutions',
        'API integration and automation',
        'Ongoing support and maintenance',
      ],
      reverse: false,
    },
    {
      img: WebImg,
      title: 'Website Design & Development',
      description: 'Create a modern, responsive, and engaging website that reflects your brand.',
      points: [
        'Business websites',
        'E-commerce platforms',
        'Responsive design (mobile/tablet friendly)',
        'SEO-friendly structure',
      ],
      reverse: true,
    },
    {
      img: WordpImg,
      title: 'WordPress & cPanel Administration',
      description: 'Manage your WordPress site and hosting the right way with expert-level support.',
      points: [
        'WordPress installation, setup, and customization',
        'Plugin and theme management',
        'cPanel configuration and hosting setup',
        'Website backups and security',
      ],
      reverse: false,
    },
    {
      img: ITImg,
      title: 'IT Consulting & Digital Strategy',
      description: 'Make smarter technology decisions with our professional IT consulting services.',
      points: [
        'Technology strategy and planning',
        'System analysis and optimization',
        'Infrastructure advice and cloud solutions',
        'Project management and digital transformation',
      ],
      reverse: true,
    },
    {
      img: ElearnImg,
      title: 'E-Learning Solutions',
      description:
        'We design and develop custom e-learning platforms tailored to meet the educational and training needs of institutions, businesses, and individuals.',
      points: [
        'User-friendly LMS (Learning Management Systems)',
        'Multimedia course integration (video, audio, quizzes)',
        'Mobile-friendly platforms for anytime access',
        'Tracking and reporting tools for progress analysis',
        'Secure user management and content control',
      ],
      reverse: false,
    },
  ];

  return (
    <section
      style={{
        width: '100%',
        padding: '4rem 1rem',
        background: '#fff',
        color: '#222',
      }}
    >
      <h2
        style={{
          color: '#646cff',
          textAlign: 'center',
          marginBottom: '3rem',
          fontWeight: 600,
          fontSize: '2rem',
        }}
      >
        Our Services
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {serviceItems.map((service, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              flexDirection: service.reverse ? 'row-reverse' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap', // makes it responsive
              gap: '2rem',
              maxWidth: '1100px',
              width: '100%',
            }}
          >
            <img
              src={service.img}
              alt={service.title}
              style={{
                width: '440px',
                maxWidth: '90vw', // responsive on smaller screens
                height: '340px',
                objectFit: 'cover',
                borderRadius: '16px',
                boxShadow: '0 2px 8px rgba(100,108,255,0.15)',
              }}
            />
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h3
                style={{
                  color: '#213547',
                  fontWeight: 900,
                  fontSize: '1.7rem',
                  marginBottom: '1rem',
                }}
              >
                {service.title}
              </h3>
              <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                {service.description}
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
                {service.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
