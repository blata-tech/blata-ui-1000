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
import Hom from './assets/hom.jpg';
import SoftImg from './assets/Soft.jpg';
import WebImg from './assets/web1.jpg';
import WordpImg from './assets/wordp.jpg';
import ITImg from './assets/IT.jpg';
import ElearnImg from './assets/Elearn.jpg';
import AppImg from './assets/App.jpeg'; 
import CloudCImg from './assets/CloudC.jpeg';   
import NetworkImg from './assets/network.jpg';
function Home({ count, setCount }) {
  const navigate = useNavigate();
  return (
    <>
    
      <div style={{ position: 'relative', margin: 0, padding: 0, width: '100vw', background: '#fff' }}>
        <img src={Hom} className="logo" alt="Blata Technology Group image" />
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
                We build reliable and scalable software solutions customized to your
                business needs. Our team specializes in creating software that
                enhances productivity, automates processes, and drives innovation.
                We deliver high-quality software that meets your requirements.
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
                Create a modern, responsive, and engaging website that reflects your
                brand. We specialize in creating websites that not only look great
                but also perform well. Our team follows best practices in web design
                and development to ensure your site is user-friendly, fast, and secure.
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
                Manage your WordPress site and hosting the right way with expert-level
                support. Our team provides comprehensive WordPress and cPanel
                administration services, ensuring your site runs smoothly, securely,
                and efficiently. We handle everything from setup to maintenance.
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
                Make smarter technology decisions with our professional IT consulting
                services. Our IT consulting services help you align technology with
                your business goals. We provide strategic insights and solutions to
                optimize your IT infrastructure and drive digital transformation.
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
                We design and develop custom e-learning platforms tailored to meet the
                educational and training needs of institutions, businesses, and
                individuals. From interactive courses to virtual classrooms, our
                solutions enhance digital learning experiences.
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
                We create responsive, modern, and high-performing applications that 
                reflect your brand and support your business goals. 
                Whether it’s a mobile app, a web application, or a desktop software, we build from the ground up with a focus on 
                performance, SEO, and user experience.
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
                Reliable cloud solutions and hosting services to keep your business
                online, scalable, and secure.
                Our cloud solutions offer scalable and secure environments for 
                data storage, application deployment, and remote access, allowing your business to operate efficiently from anywhere.
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
                Protect your business with our advanced networking and cybersecurity
                solutions. We offer reliable network and security administration services to keep your business connected and protected.
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
      </Routes>
    </BrowserRouter>
  )
}

export default App