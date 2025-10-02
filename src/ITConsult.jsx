import ITImg from './assets/IT.jpg';

function ITConsult() {
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
           src={ITImg}
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
           IT Consulting & Digital Strategy
         </h1>
         <p style={{ fontSize: '1.18rem', color: '#222', lineHeight: 1.7 }}>
           At Blata Technology Group, our IT consulting and digital strategy services help businesses leverage technology to achieve their goals and stay ahead in a competitive market. 
           We provide expert guidance on IT infrastructure, software solutions, and digital transformation initiatives, ensuring that your technology investments align with your business objectives. 
           Our team works closely with clients to develop comprehensive digital strategies, optimize processes, and implement solutions that enhance efficiency, reduce costs, and drive growth. 
           With a focus on innovation, security, and measurable results, we help organizations turn technology challenges into opportunities for success.
         </p>
       </div>
     </div>
   );
 }
 

export default ITConsult;