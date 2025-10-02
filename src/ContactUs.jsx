import { useState } from 'react';
import ContactImg from './assets/Contact.jpg';
function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  // let error = null;
  // if (name === 'name') {
  //   error = validateName();
  // } else if (name === 'email') {
  //   error = validateEmail();
  // } else if (name === 'message') {
  //   error = validateMessage();
  // }
  // setErrors({ ...errors, [name]: error });
  
  };

  const validateName = () => {
const name = form.name.trim();
if(!name) {
  return 'Name is required.';
}
 if (name.length < 2 || name.length > 50) {
      return "Please enter your full name.";
    }
     if (!/^[A-Za-z]+( [A-Za-z]+){1,2}$/.test(name)) {
      return "Please enter your full name.";
    }
     return null;
  };
  const validateEmail = () => {
    const email = form.email.trim();
    if (!email) {
      return 'Email is required.';
    }
    if (!/^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return 'Invalid email format.';
    }
    return null;
  };
  const validateMessage = () =>{
  const message = form.message.trim();
  if(!message){
    return 'message is required.';
  }
  if(message.length <10 || message.length > 500){
    return 'message must be between 10 and 500 characters.';
  }
  return null;
  };
const handleBlur = (e) => {
  let error = null;

  if (e.target.name === 'name') {
    error = validateName();
  } else if (e.target.name === 'email') {
    error = validateEmail();
  } else if (e.target.name === 'message') {
    error = validateMessage();
  }

  setErrors({ ...errors, [e.target.name]: error }); // Update the error state for the specific field
};

  const handleSubmit = async e => {
    e.preventDefault();
    const nameError = validateName();
    const emailError = validateEmail();
    const messageError = validateMessage();
    if (nameError || emailError || messageError) {
      setErrors({ name: nameError, email: emailError, message: messageError });
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/contact', { // Updated URL to match the backend endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.errors.map(err => err.msg).join(', ')}`);
      }
    } catch (err) {
      alert('Failed to send message.');
    }
  };
  // const getNameInputStyle = () => {
  //   if (!form.name) return {};
  //   return errors.name ? { border: '1px solid red' } : { border: '1px solid green' };
  // };

  // const getMessageInputStyle = () => {
  //   if (!form.message) return {};
  //   return errors.message ? { border: '1px solid red' } : { border: '1px solid green' };
  // };

  return (
    <div style={{ width: '100vw', background: '#fff', minHeight: '100vh', paddingTop: '7rem' }}>
      <div
        style={{
          maxWidth: '1100px',
          width: '95vw',
          margin: '2rem auto',
          padding: '2rem',
          background: '#f5f5f5',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          color: '#222',
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        {/* Contact Info Left */}
        <div style={{ flex: 1, minWidth: 220 }}>
          <h2 style={{ color: 'black', marginBottom: '1.5rem', textAlign: 'left' }}>Contact Us</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2', textAlign: 'left' }}>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@blatatechnology.net" style={{ color: '#646cff' }}>
                contact@blatatechnology.net
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <a href="tel:+251982996262" style={{ color: '#646cff' }}>
                +251982996262
              </a>
            </li>
            <li>
              <strong>Address:</strong> Lemikura, Addis Ababa, Ethiopia
            </li>
              <li>
             <strong>P.O. Box:</strong> 1079
            </li>
          </ul>
        </div>
        {/* Form Right */}
        <div style={{ flex: 1, minWidth: 260 }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', color: '#646cff', textAlign: 'center' }}>Send us a message</h3>
          {submitted ? (
            <div style={{ color: 'green', marginBottom: '1rem' }}>Thank you for contacting us!</div>
          ) : (
            <form onSubmit={handleSubmit}>
           <div style={{marginBottom: '1rem', display: 'flex', alignItems: 'center'}}>
            <label htmlFor='name' style={{marginRight: '2.2rem', fontWeight: 'bold' }}>Name:</label>
            <input
            type='text'
            id='name'
            name='name'
            required
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{flex: 1, padding: '0.5rem', borderRadius: '4px', 
      border: !form.name
      ? '1px solid white' // White border if the field is empty
      : errors.name
      ? '1px solid red' // Red border if there is an error
      : '1px solid green', width: '100px'}}
            />
            {errors.name && (
              <div
                style={{
                  color: 'red',
                  marginTop: '0.5rem',
                  position: 'relative',
                }}
              >
                {errors.name}
              </div>
            )}
           </div>
            <div style={{marginBottom: '1rem', display: 'flex', alignItems: 'center'}}>
            <label htmlFor='email' style={{marginRight: '2.2rem', fontWeight: 'bold' }}>Email:</label>
            <input
            type='email'
            id='email'
            name='email'
            required
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{flex: 1, padding: '0.5rem', borderRadius: '4px',  
       border: !form.email
      ? '1px solid white' // White border if the field is empty
      : errors.email
      ? '1px solid red' // Red border if there is an error
      : '1px solid green', width: '100px'}}
            />
            {errors.email && <div style={{ color: 'red', marginTop: '0.5rem' }}>{errors.email}</div>}
           </div>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <label htmlFor="message" style={{marginRight: '1rem', fontWeight: 'bold'}}>Message:</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  style={{
                    flex: '1',
                    padding: '0.5em',
                    borderRadius: '4px',
                    border: !form.message
                  ? '1px solid white' // White border if the field is empty
                  : errors.message
                  ? '1px solid red' // Red border if there is an error
                  : '1px solid green',
                     
                    //...getMessageInputStyle(),
                  }}
                  placeholder="Type your message here..."
                />
                {errors.message && <div style={{ color: 'red', marginTop: '0.5rem' }}>{errors.message}</div>}
              </div>
              <button type="submit" style={{
                background: '#646cff',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '0.75em 2em',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Send
              </button>
            </form>
          )}
        </div>
      </div>
      {/* Google Maps Location */}
      <div style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '2rem auto',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
        <h3 style={{ color: '#646cff', marginBottom: '1rem', textAlign: 'left', paddingLeft: '1rem' }}>
          Our Location
        </h3>
        <iframe
          title="Blata Technology Group Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.2736194270608!2d38.835574130887004!3d9.029248188114723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850013ad8d4d%3A0xe6bcc6e3677fd7a7!2zV29zZW5lIEludGVybmFsIE1lZGljaW5lIFNwZWNpYWxpdHkgQ2xpbmljIHwg4YuI4Yiw4YqUIOGIjeGLqSDhi6jhi43hiLXhjKUg4Yuw4YuMIOGKreGIiuGKkuGKrQ!5e0!3m2!1sen!2set!4v1755092033610!5m2!1sen!2set"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
