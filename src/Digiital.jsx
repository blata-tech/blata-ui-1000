import digitalImg from "./assets/digital.jpg";

function DigitalMarketing() {
  return (
    <div
         style={{
           maxWidth: '1200px',
           width: '96vw',
           minHeight: '70vh',
           margin: '4rem auto',
           padding: '2.5rem 2rem',
           background: 'linear-gradient(120deg, #f5f5f5 80%, #e7eaff 100%)',
           borderRadius: '24px',
           boxShadow: '0 4px 32px rgba(100,108,255,0.10)',
           display: 'flex',
           flexDirection: 'row',
           alignItems: 'center',
           gap: '3rem'
         }}
       >
         {/* Logo Left */}
         <div style={{
           flex: '0 0 340px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center'
         }}>
           <img
             src={digitalImg}
             alt="Blata Technology Group Logo"
             style={{
               width: '320px',
               height: '320px',
               borderRadius: '24px',
               background: '#fff',
               boxShadow: '0 2px 16px rgba(100,108,255,0.13)',
               objectFit: 'contain'
             }}
           />
         </div>
         {/* Content Right */}
         <div style={{
           flex: 1,
           textAlign: 'left',
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center'
         }}>
           <h1 style={{
             color: '#646cff',
             fontWeight: 900,
             fontSize: '2.2rem',
             marginBottom: '1.5rem'
           }}>
             Digital Marketing
           </h1>
           <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
             At Blata Technology Group, we help businesses grow their online presence and connect with the right audience through smart, results-driven digital marketing strategies. Our goal is to transform your online channels into powerful tools for visibility, engagement, and sales.<br />

            <p style={{ fontSize: '1.18rem', color: '#6e2399ff', lineHeight: 1.7 }}>What We Offer </p>

              <strong>Social Media Marketing </strong>– Build your brand and engage with customers across platforms like Facebook, Instagram, LinkedIn, and more.<br />

              <strong>Search Engine Optimization (SEO) </strong>– Improve your website’s visibility on search engines and attract organic traffic.<br />

              <strong>Pay-Per-Click (PPC) Advertising</strong> – Drive targeted leads and maximize ROI(return on investment) through Google Ads and social campaigns.<br />

              <strong>Content Marketing</strong> – Create and share valuable content that builds trust and authority.<br />

              <strong>Email Marketing</strong> – Reach your audience directly with personalized and impactful campaigns.<br />

              <strong>Analytics & Reporting</strong> – Track performance and optimize campaigns with data-driven insights.<br />

             Our team blends creativity with analytics to deliver campaigns that not only look good but also deliver measurable results. Whether you want to increase brand awareness, generate leads, or boost online sales, we design strategies tailored to your goals.
           </p>
         </div>
       </div>
     );
   }
   
   export default DigitalMarketing;