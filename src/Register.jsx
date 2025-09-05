import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.firstName || !form.lastName || !form.email || !form.password || !form.confirmPassword || !form.phone) {
      return 'All fields are required.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return 'Invalid email address.';
    }
    if (form.password.length < 6) {
      return 'Password must be at least 6 characters.';
    }
    if (form.password !== form.confirmPassword) {
      return 'Passwords do not match.';
    }
    if (!/^\d{9}$/.test(form.phone)) {
      return 'Phone number must be 9 digits after +251.';
    }
    return '';
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    navigate('/');
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5'
      }}
    >
      <div style={{
        padding: '2rem',
        borderRadius: '12px',
        background: '#9097C1',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        minWidth: '320px'
      }}>
        <h2 style={{ textAlign: 'center' }}>Register</h2>
        <form style={{ maxWidth: '400px', margin: '0 auto' }} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label><br />
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={form.firstName}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label><br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={form.lastName}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label><br />
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <input
              type="password"
              id="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label><br />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{
                padding: '0.5em 0.75em',
                background: 'black',
                border: '1px solid #ccc',
                borderRadius: '4px 0 0 4px',
                fontSize: '1em',
                color: '#fff'
              }}>+251</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                style={{
                  width: '100%',
                  borderRadius: '0 4px 4px 0',
                  border: '1px solid #ccc',
                  borderLeft: 'none',
                  padding: '0.5em'
                }}
                maxLength={9}
                pattern="\d{9}"
                placeholder="9 digit number"
              />
            </div>
          </div>
          {error && (
            <div style={{ color: 'red', marginTop: '1em' }}>{error}</div>
          )}
          <button type="submit" style={{ marginTop: '16px' }}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;