import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './assets/logo.png';
import './App.css'
import Register from './Register.jsx';
import Navbar from './Navbar.jsx';
import AboutUs from './AboutUs.jsx';
import Services from './Services.jsx';
import ContactUs from './ContactUs.jsx';
import Layout from './Layout.jsx';
import Login from './Login.jsx';  
import ModernLandingPage from './LandingPage.jsx';
import Footer from './Footer.jsx';
import OurCompany from './OurCompany.jsx';
import Vision from './Vision.jsx';
import Mission from './Mission.jsx';
import Team from './Team.jsx';
import SoftwareDevelopment from './SoftwareDevelopment.jsx';
import WebDevelopment from './WebDevelopment.jsx';
import ApplicationDevelopment from './ApplicationDevelopment.jsx';
import WordPress from './Wordpress.jsx';
import Elearning from './Elearning.jsx';
import ITConsult from './ITconsult.jsx';
import Cloud from './Cloud.jsx';
import Network from './Network.jsx';
import DigitalMarketing from './Digiital.jsx';
import Hom from './assets/hom.jpg';
import SoftImg from './assets/Soft.jpg';
import WebImg from './assets/web1.jpg';
import WordpImg from './assets/wordp.jpg';
import ITImg from './assets/IT.jpg';
import ElearnImg from './assets/Elearn.jpg';
import AppImg from './assets/App.jpeg'; 
import CloudCImg from './assets/CloudC.jpeg';   
import NetworkImg from './assets/network.jpg';
import digitalImg from "./assets/digital.jpg";
function Home({ count, setCount }) {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ position: 'relative', margin: 0, padding: 0, width: '100vw', background: '#fff' }}>
        <img
          src={Hom}
          className="logo"
          alt="Blata Technology Group image"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(34, 34, 34, 0.65)',
            color: '#fff',
            padding: '2rem 3rem',
            borderRadius: '16px',
            fontSize: '2.5rem',
            fontWeight: 700,
            letterSpacing: '2px',
            boxShadow: '0 4px 24px rgba(100,108,255,0.12)',
            textAlign: 'center',
            zIndex: 2,
            maxWidth: '90vw'
          }}>
          Connecting with the future of technology
        </div>
      </div>
       <section
        style={{
          width: '100vw',
          maxWidth: '100vw',
          margin: '0 auto',
          background: '#fff',
          borderRadius: '0',
          boxShadow: 'none',
          padding: '2rem 0',
          color: '#222'
        }}
      >
        <h2
          style={{
            color: '#646cff',
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: 600
          }}
        >
          Our Services
        </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            width: '100%',
            alignItems: 'center'
          }}
        >
          {/* 1. Custom Software Development */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '1100px',
              gap: '2.5rem',
              background: '#f8f9ff',
              borderRadius: '18px',
              boxShadow: '0 4px 18px rgba(100,108,255,0.09)',
              padding: '2.5rem 2rem',
              marginBottom: '1.5rem'
            }}
          >
            <img
              src={SoftImg}
              alt="Custom Software Development"
              style={{
                width: '340px',
                height: '210px',
                objectFit: 'cover',
                borderRadius: '16px',
                marginRight: '2.5rem',
                boxShadow: '0 2px 8px rgba(17, 19, 68, 0.13)'
              }}
            />
            <div
              style={{
                flex: 1,
                textAlign: 'left',
                paddingLeft: '2.5rem'
              }}
            >
              <h3
                style={{
                  color: '#213547',
                  marginBottom: '0.7rem',
                  fontWeight: 900,
                  fontSize: '1.45rem',
                  letterSpacing: '0.5px'
                }}
              >
                Software Design<br />and Development
              </h3>
              <p
                style={{
                  color: '#444',
                  fontSize: '1.08rem',
                  marginBottom: '0.5rem',
                  lineHeight: 1.7
                }}
              >
              <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
    <li>Custom software solutions tailored to your business needs</li>
    <li>Automation of processes to enhance productivity</li>
    <li>Scalable and innovative software designs</li>
    <li>High-quality software that meets industry standards</li>
    <li>Reliable solutions to drive business growth</li>
  </ul>
              </p>
              <button
                style={{
                  background: 'linear-gradient(90deg, #646cff 60%, #4f54c7 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.7em 2.2em',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  marginTop: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(100,108,255,0.13)',
                  transition: 'background 0.2s'
                }}
                onClick={() => navigate('/softwaredevelopment')}
              >
                More
              </button>
            </div>
          </div>
      
          {/* 2. Website Design & Development */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '1100px',
              gap: '2.5rem',
              background: '#f8f9ff',
              borderRadius: '18px',
              boxShadow: '0 4px 18px rgba(100,108,255,0.09)',
              padding: '2.5rem 2rem',
              marginBottom: '1.5rem'
            }}
          >
            <img
              src={WebImg}
              alt="Website Design & Development"
              style={{
                width: '340px',
                height: '210px',
                objectFit: 'cover',
                borderRadius: '16px',
                marginLeft: '2.5rem',
                boxShadow: '0 2px 8px rgba(100,108,255,0.15)'
              }}
            />
            <div
              style={{
                flex: 1,
                textAlign: 'left',
                paddingRight: '2.5rem'
              }}
            >
              <h3
                style={{
                  color: '#213547',
                  marginBottom: '0.7rem',
                  fontWeight: 900,
                  fontSize: '1.45rem',
                  letterSpacing: '0.5px'
                }}
              >
                Website Design <br /> and Development
              </h3>
              <p
                style={{
                  color: '#444',
                  fontSize: '1.08rem',
                  marginBottom: '0.5rem',
                  lineHeight: 1.7
                }}
              >
                <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
    <li>Modern and responsive website design</li>
    <li>Engaging and user-friendly interfaces</li>
    <li>Best practices in web design and development</li>
    <li>Fast, secure, and optimized websites</li>
    <li>Custom solutions tailored to your brand</li>
  </ul>
              </p>
              <button
                style={{
                  background: '#646cff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.7em 2.2em',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  marginTop: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(100,108,255,0.13)',
                  transition: 'background 0.2s'
                }}
                onClick={() => navigate('/webdevelopment')}
              >
                More
              </button>
            </div>
          </div>
      
          {/* 3. WordPress & cPanel Administration */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '1100px',
              gap: '2.5rem',
              background: '#f8f9ff',
              borderRadius: '18px',
              boxShadow: '0 4px 18px rgba(100,108,255,0.09)',
              padding: '2.5rem 2rem',
              marginBottom: '1.5rem'
            }}
          >
            <img
              src={WordpImg}
              alt="WordPress & cPanel Administration"
              style={{
                width: '340px',
                height: '210px',
                objectFit: 'cover',
                borderRadius: '16px',
                marginRight: '2.5rem',
                boxShadow: '0 2px 8px rgba(100,108,255,0.15)'
              }}
            />
            <div
              style={{
                flex: 1,
                textAlign: 'left',
                paddingLeft: '2.5rem'
              }}
            >
              <h3
                style={{
                  color: '#213547',
                  marginBottom: '0.7rem',
                  fontWeight: 900,
                  fontSize: '1.45rem',
                  letterSpacing: '0.5px'
                }}
              >
                WordPress and CPanel <br /> Administration
              </h3>
              <p
                style={{
                  color: '#444',
                  fontSize: '1.08rem',
                  marginBottom: '0.5rem',
                  lineHeight: 1.7
                }}
              >
              <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
    <li>Expert-level support for WordPress and cPanel administration</li>
    <li>Comprehensive setup and maintenance services</li>
    <li>Ensure your site runs smoothly, securely, and efficiently</li>
    <li>Optimize hosting and website performance</li>
    <li>Reliable solutions tailored to your business needs</li>
  </ul>
              </p>
              <button
                style={{
                  background: '#646cff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.7em 2.2em',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  marginTop: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(100,108,255,0.13)',
                  transition: 'background 0.2s'
                }}
                onClick={() => navigate('/wordpress')}
              >
                More
              </button>
            </div>
          </div>
      
          {/* 4. IT Consulting & Digital Strategy */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '1100px',
              gap: '2.5rem',
              background: '#f8f9ff',
              borderRadius: '18px',
              boxShadow: '0 4px 18px rgba(100,108,255,0.09)',
              padding: '2.5rem 2rem',
              marginBottom: '1.5rem'
            }}
          >
            <img
              src={ITImg}
              alt="IT Consulting & Digital Strategy"
              style={{
                width: '340px',
                height: '210px',
                objectFit: 'cover',
                borderRadius: '16px',
                marginLeft: '2.5rem',
                boxShadow: '0 2px 8px rgba(100,108,255,0.15)'
              }}
            />
            <div
              style={{
                flex: 1,
                textAlign: 'left',
                paddingRight: '2.5rem'
              }}
            >
              <h3
                style={{
                  color: '#213547',
                  marginBottom: '0.7rem',
                  fontWeight: 900,
                  fontSize: '1.45rem',
                  letterSpacing: '0.5px'
                }}
              >
                IT Consulting and <br /> Digital Strategy
              </h3>
              <p
                style={{
                  color: '#444',
                  fontSize: '1.08rem',
                  marginBottom: '0.5rem',
                  lineHeight: 1.7
                }}
              >
               <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
    <li>Align technology with your business goals</li>
    <li>Receive strategic insights and tailored solutions</li>
    <li>Optimize your IT infrastructure for efficiency</li>
    <li>Drive digital transformation and innovation</li>
    <li>Make smarter technology decisions with expert guidance</li>
  </ul>
              </p>
              <button
                style={{
                  background: '#646cff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.7em 2.2em',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  marginTop: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(100,108,255,0.13)',
                  transition: 'background 0.2s'
                }}
                onClick={() => navigate('/itconsult')}
              >
                More
              </button>
            </div>
          </div>
      
          {/* 5. E-Learning Solutions */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '1100px',
              gap: '2.5rem',
              background: '#f8f9ff',
              borderRadius: '18px',
              boxShadow: '0 4px 18px rgba(100,108,255,0.09)',
              padding: '2.5rem 2rem',
              marginBottom: '1.5rem'
            }}
          >
            <img
              src={ElearnImg}
              alt="E-Learning Solutions"
              style={{
                width: '340px',
                height: '210px',
                objectFit: 'cover',
                borderRadius: '16px',
                marginRight: '2.5rem',
                boxShadow: '0 2px 8px rgba(100,108,255,0.15)'
              }}
            />
            <div
              style={{
                flex: 1,
                textAlign: 'left',
                paddingLeft: '2.5rem'
              }}
            >
              <h3
                style={{
                  color: '#213547',
                  marginBottom: '0.7rem',
                  fontWeight: 900,
                  fontSize: '1.45rem',
                  letterSpacing: '0.5px'
                }}
              >
                E-Learning Solutions
              </h3>
              <p
                style={{
                  color: '#444',
                  fontSize: '1.08rem',
                  marginBottom: '0.5rem',
                  lineHeight: 1.7
                }}
              >
                  <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
    <li>Custom e-learning platforms tailored to your needs</li>
    <li>Interactive courses for engaging learning experiences</li>
    <li>Virtual classrooms for remote education and training</li>
    <li>Solutions designed for institutions, businesses, and individuals</li>
    <li>Enhance digital learning with innovative technologies</li>
  </ul>
              </p>
              <button
                style={{
                  background: '#646cff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.7em 2.2em',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  marginTop: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(100,108,255,0.13)',
                  transition: 'background 0.2s'
                }}
                onClick={() => navigate('/elearning')}
              >
                More
              </button>
            </div>
          </div>
      
          {/* 6. Application Development */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '1100px',
              gap: '2.5rem',
              background: '#f8f9ff',
              borderRadius: '18px',
              boxShadow: '0 4px 18px rgba(100,108,255,0.09)',
              padding: '2.5rem 2rem',
              marginBottom: '1.5rem'
            }}
          >
            <img
              src={AppImg}
              alt="Application Development"
              style={{
                width: '340px',
                height: '210px',
                objectFit: 'cover',
                borderRadius: '16px',
                marginLeft: '2.5rem',
                boxShadow: '0 2px 8px rgba(17, 19, 68, 0.15)'
              }}
            />
            <div
              style={{
                flex: 1,
                textAlign: 'left',
                paddingRight: '2.5rem'
              }}
            >
              <h3
                style={{
                  color: '#213547',
                  marginBottom: '0.7rem',
                  fontWeight: 900,
                  fontSize: '1.45rem',
                  letterSpacing: '0.5px'
                }}
              >
                Application Design <br /> and Development
              </h3>
              <p
                style={{
                  color: '#444',
                  fontSize: '1.08rem',
                  marginBottom: '0.5rem',
                  lineHeight: 1.7
                }}
              >
             <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
    <li>Responsive and modern application designs</li>
    <li>High-performing applications tailored to your brand</li>
    <li>Support for mobile, web, and desktop platforms</li>
    <li>Built from the ground up with a focus on performance</li>
    <li>Optimized for SEO and exceptional user experience</li>
  </ul>
              </p>
              <button
                style={{
                  background: '#646cff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.7em 2.2em',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  marginTop: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(100,108,255,0.13)',
                  transition: 'background 0.2s'
                }}
                onClick={() => navigate('/applicationdevelopment')}
              >
                More
              </button>
            </div>
          </div>
      
          {/* 7. Cloud & Hosting Service */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '1100px',
              gap: '2.5rem',
              background: '#f8f9ff',
              borderRadius: '18px',
              boxShadow: '0 4px 18px rgba(100,108,255,0.09)',
              padding: '2.5rem 2rem',
              marginBottom: '1.5rem'
            }}
          >
            <img
              src={CloudCImg}
              alt="Cloud & Hosting Service"
              style={{
                width: '340px',
                height: '210px',
                objectFit: 'cover',
                borderRadius: '16px',
                marginRight: '2.5rem',
                boxShadow: '0 2px 8px rgba(100,108,255,0.15)'
              }}
            />
            <div
              style={{
                flex: 1,
                textAlign: 'left',
                paddingLeft: '2.5rem'
              }}
            >
              <h3
                style={{
                  color: '#213547',
                  marginBottom: '0.7rem',
                  fontWeight: 900,
                  fontSize: '1.45rem',
                  letterSpacing: '0.5px'
                }}
              >
                Cloud and <br /> Hosting Service
              </h3>
              <p
                style={{
                  color: '#444',
                  fontSize: '1.08rem',
                  marginBottom: '0.5rem',
                  lineHeight: 1.7
                }}
              >
                  <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
    <li>Reliable cloud solutions to keep your business online</li>
    <li>Scalable and secure environments for data storage</li>
    <li>Efficient application deployment and remote access</li>
    <li>Ensure your business operates smoothly from anywhere</li>
  </ul>
              </p>
              <button
                style={{
                  background: '#646cff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.7em 2.2em',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  marginTop: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(100,108,255,0.13)',
                  transition: 'background 0.2s'
                }}
                onClick={() => navigate('/cloud')}
              >
                More
              </button>
            </div>
          </div>
      
          {/* 8. Networking & Security */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '1100px',
              gap: '2.5rem',
              background: '#f8f9ff',
              borderRadius: '18px',
              boxShadow: '0 4px 18px rgba(100,108,255,0.09)',
              padding: '2.5rem 2rem',
              marginBottom: '1.5rem'
            }}
          >
            <img
              src={NetworkImg}
              alt="Networking & Security"
              style={{
                width: '340px',
                height: '210px',
                objectFit: 'cover',
                borderRadius: '16px',
                marginLeft: '2.5rem',
                boxShadow: '0 2px 8px rgba(17, 19, 68, 0.15)'
              }}
            />
            <div
              style={{
                flex: 1,
                textAlign: 'left',
                paddingRight: '2.5rem'
              }}
            >
              <h3
                style={{
                  color: '#213547',
                  marginBottom: '0.7rem',
                  fontWeight: 900,
                  fontSize: '1.45rem',
                  letterSpacing: '0.5px'
                }}
              >
                Networking and <br /> Security
              </h3>
              <p
                style={{
                  color: '#444',
                  fontSize: '1.08rem',
                  marginBottom: '0.5rem',
                  lineHeight: 1.7
                }}
              >
             <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
    <li>Protect your business with advanced networking and cybersecurity solutions</li>
    <li>Reliable network and security administration services</li>
    <li>Safeguard sensitive data with robust encryption and firewalls</li>
    <li>Prevent cyber threats with proactive monitoring and threat detection</li>
    <li>Ensure seamless connectivity and secure remote access</li>
    <li>Customized solutions to meet your business's unique security needs</li>
  </ul>   
              </p>
              <button
                style={{
                  background: '#646cff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.7em 2.2em',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  marginTop: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(100,108,255,0.13)',
                  transition: 'background 0.2s'
                }}
                onClick={() => navigate('/network')}
              >
                More
              </button>
            </div>
          </div>
      
          {/* 9. Digital Marketing */}
             <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '1100px',
              gap: '2.5rem',
              background: '#f8f9ff',
              borderRadius: '18px',
              boxShadow: '0 4px 18px rgba(100,108,255,0.09)',
              padding: '2.5rem 2rem',
              marginBottom: '1.5rem'
            }}
          >
            <img
              src={digitalImg}
              alt="Networking & Security"
              style={{
                width: '340px',
                height: '210px',
                objectFit: 'cover',
                borderRadius: '16px',
                marginLeft: '2.5rem',
                boxShadow: '0 2px 8px rgba(17, 19, 68, 0.15)'
              }}
            />
            <div
              style={{
                flex: 1,
                textAlign: 'left',
                paddingRight: '2.5rem'
              }}
            >
              <h3
                style={{
                  color: '#213547',
                  marginBottom: '0.7rem',
                  fontWeight: 900,
                  fontSize: '1.45rem',
                  letterSpacing: '0.5px'
                }}
              >
                Digital Marketing
              </h3>
              <p
                style={{
                  color: '#444',
                  fontSize: '1.08rem',
                  marginBottom: '0.5rem',
                  lineHeight: 1.7
                }}
              >
               <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
    <li>Grow your online presence and reach the right audience</li>
    <li>Specialize in search engine optimization (SEO) to improve visibility</li>
    <li>Manage social media platforms to enhance engagement</li>
    <li>Create compelling content marketing strategies</li>
    <li>Run effective email campaigns to nurture leads</li>
    <li>Leverage paid advertising to drive traffic and boost sales</li>
    <li>Analyze data and trends to create tailored strategies</li>
    <li>Deliver measurable results to maximize brand engagement</li>
    <li>Focus on ROI-driven campaigns to ensure business growth</li>
  </ul>
              </p>
              <button
                style={{
                  background: '#646cff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.7em 2.2em',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  marginTop: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(100,108,255,0.13)',
                  transition: 'background 0.2s'
                }}
                onClick={() => navigate('/Digital')}
              >
                More
              </button>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/register" element={
            <Register />
        } />
        <Route path="/aboutus" element={
          <Layout>
            <AboutUs />
          </Layout>
        } />
        <Route path="/services" element={
          <Layout>
            <Services />
          </Layout>
        } />
        <Route path="/contactus" element={
          <Layout>
            <ContactUs />
          </Layout>
        } />
        <Route path="/login" element={
            <Login />
        } />
        <Route path="/landingpage" element={
          <Layout>
            <ModernLandingPage />
          </Layout>
        } />
        <Route path="/footer" element={
          <Layout>
            <Footer />
          </Layout>
        } />
        <Route path="/OurCompany" element={
          <Layout>
            <OurCompany />
          </Layout>
        } />
        <Route path="/vision" element={
          <Layout>
            <Vision />
          </Layout>
        } />
        <Route path="/mission" element={
          <Layout>
            <Mission />
          </Layout>
        } />
        <Route path="/team" element={
          <Layout>
            <Team />
          </Layout>
        } />
        <Route path="/softwaredevelopment" element={
          <Layout>
            <SoftwareDevelopment />
          </Layout>
        } />
        <Route path="/webdevelopment" element={
          <Layout>
            <WebDevelopment />
          </Layout>
        } />
        <Route path="/applicationdevelopment" element={
          <Layout>
            <ApplicationDevelopment />
          </Layout>
        } />
        <Route path="/wordpress" element={
          <Layout>
            <WordPress/>
          </Layout>
        } />
        <Route path="/elearning" element={
          <Layout>
            <Elearning />
          </Layout>
        } />
        <Route path="/itconsult" element={
          <Layout>
            <ITConsult />
          </Layout>
        } />
        <Route path="/cloud" element={
          <Layout>
            <Cloud />
          </Layout>
        } />
        <Route path="/network" element={
          <Layout>
            <Network />
          </Layout>
        } />
        <Route path="/digital" element={
          <Layout>
            <DigitalMarketing />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App