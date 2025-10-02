import webImg from './assets/web1.jpg';

function WebDevelopment() {
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
           src={webImg}
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
           Web Development
         </h1>
         <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
           At Blata Technology Group, we deliver professional web development services that help businesses establish a strong and engaging online presence. 
           Our team designs and builds responsive, secure, and scalable websites tailored to your brand and business needs. 
           From simple informational sites to complex e-commerce platforms, we focus on creating user-friendly experiences that attract, engage, and convert visitors. 
           By combining modern technologies, clean design, and performance optimization, we ensure that every website we develop not only looks great but also drives results and supports your business growth.
         </p>
       </div>
     </div>
   );
 }
 

export default WebDevelopment;