import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.png';

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
import ITConsult from './ITConsult.jsx';

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
import digitalImg from './assets/digital.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div style={{ position: 'relative', width: '100vw', background: '#fff' }}>
        <img
          src={Hom}
          className="logo"
          alt="Blata Technology Group"
          style={{ width: '100%', height: 'auto', cursor: 'pointer',marginLeft: '0px' }}
          onClick={() => navigate('/')}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(34,34,34,0.65)',
            color: '#fff',
            padding: '2rem 3rem',
            borderRadius: '16px',
            fontSize: '2.5rem',
            fontWeight: 700,
            letterSpacing: '2px',
            textAlign: 'center',
            maxWidth: '90vw',
          }}
        >
          Connecting with the Future of Technology
        </div>
      </div>

      {/* Services Section */}
      <section style={{ width: '100vw', background: '#fff', padding: '2rem 0' }}>
        <h2
          style={{
            color: '#646cff',
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: 600,
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Each service block */}
          {[
            {
              title: 'Software Design and Development',
              img: SoftImg,
              link: '/softwaredevelopment',
              desc: [
                'Custom software solutions tailored to your business needs',
                'Automation of processes to enhance productivity',
                'Scalable and innovative software designs',
                'Reliable solutions to drive business growth',
              ],
            },
            {
              title: 'Website Design and Development',
              img: WebImg,
              link: '/webdevelopment',
              reverse: true,
              desc: [
                'Modern and responsive website design',
                'Engaging and user-friendly interfaces',
                'Fast, secure, and optimized websites',
              ],
            },
            {
              title: 'WordPress and CPanel Administration',
              img: WordpImg,
              link: '/wordpress',
              desc: [
                'Expert-level WordPress and cPanel support',
                'Setup and maintenance services',
                'Secure, optimized, and efficient sites',
              ],
            },
            {
              title: 'IT Consulting and Digital Strategy',
              img: ITImg,
              link: '/itconsult',
              reverse: true,
              desc: [
                'Align technology with your business goals',
                'Optimize IT infrastructure for efficiency',
                'Strategic insights and tailored solutions',
              ],
            },
            {
              title: 'E-Learning Solutions',
              img: ElearnImg,
              link: '/elearning',
              desc: [
                'Custom e-learning platforms',
                'Interactive courses and virtual classrooms',
                'Solutions for education and training',
              ],
            },
            {
              title: 'Application Design and Development',
              img: AppImg,
              link: '/applicationdevelopment',
              reverse: true,
              desc: [
                'Responsive and modern apps',
                'Cross-platform compatibility',
                'Optimized performance and UX',
              ],
            },
            {
              title: 'Cloud and Hosting Service',
              img: CloudCImg,
              link: '/cloud',
              desc: [
                'Reliable cloud solutions',
                'Secure and scalable environments',
                'Efficient deployment and remote access',
              ],
            },
            {
              title: 'Networking and Security',
              img: NetworkImg,
              link: '/network',
              reverse: true,
              desc: [
                'Advanced networking and cybersecurity',
                'Data protection and secure access',
                'Proactive monitoring and threat prevention',
              ],
            },
            {
              title: 'Digital Marketing',
              img: digitalImg,
              link: '/digital',
              desc: [
                'SEO and content marketing',
                'Social media and advertising campaigns',
                'Data-driven strategies for growth',
              ],
            },
          ].map((service, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: service.reverse ? 'row-reverse' : 'row',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f8f9ff',
                borderRadius: '18px',
                boxShadow: '0 4px 18px rgba(100,108,255,0.09)',
                padding: '2.5rem',
                maxWidth: '1100px',
                width: '100%',
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                style={{
                  width: '340px',
                  height: '210px',
                  borderRadius: '16px',
                  objectFit: 'cover',
                  margin: service.reverse ? '0 0 0 2.5rem' : '0 2.5rem 0 0',
                }}
              />
              <div style={{ flex: 1, textAlign: 'left' }}>
                <h3
                  style={{
                    color: '#213547',
                    marginBottom: '0.7rem',
                    fontWeight: 900,
                    fontSize: '1.45rem',
                  }}
                >
                  {service.title}
                </h3>
                <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: '#444' }}>
                  {service.desc.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
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
                  }}
                  onClick={() => navigate(service.link)}
                >
                  More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/aboutus" element={<Layout><AboutUs /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/contactus" element={<Layout><ContactUs /></Layout>} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/landingpage" element={<Layout><ModernLandingPage /></Layout>} />
        <Route path="/footer" element={<Layout><Footer /></Layout>} />
        <Route path="/ourcompany" element={<Layout><OurCompany /></Layout>} />
        <Route path="/vision" element={<Layout><Vision /></Layout>} />
        <Route path="/mission" element={<Layout><Mission /></Layout>} />
        <Route path="/team" element={<Layout><Team /></Layout>} />
        <Route path="/softwaredevelopment" element={<Layout><SoftwareDevelopment /></Layout>} />
        <Route path="/webdevelopment" element={<Layout><WebDevelopment /></Layout>} />
        <Route path="/applicationdevelopment" element={<Layout><ApplicationDevelopment /></Layout>} />
        <Route path="/wordpress" element={<Layout><WordPress /></Layout>} />
        <Route path="/elearning" element={<Layout><Elearning /></Layout>} />
        <Route path="/itconsult" element={<Layout><ITConsult /></Layout>} />
        <Route path="/cloud" element={<Layout><Cloud /></Layout>} />
        <Route path="/network" element={<Layout><Network /></Layout>} />
        <Route path="/digital" element={<Layout><DigitalMarketing /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
