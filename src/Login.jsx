import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email === 'esubalew.gashaw@gmail.com' &&
      password === 'esuba'
    ) {
      setError('');
      navigate('/'); // Redirect to the landing page on successful login
    } else {
      setError('Incorrect username or password.');
    }
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
      background: '#BCABCF',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      minWidth: '320px'
    }}>
      <h2 style={{ textAlign: 'center' }}>Blata Administrator</h2>
      <form style={{ maxWidth: '400px', margin: '0 auto' }} onSubmit={handleSubmit}>
        {/* ...your form fields... */}
        <div>
          <label htmlFor="email">Email Address</label><br />
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        {error && (
          <div style={{ color: 'red', marginTop: '1em' }}>{error}</div>
        )}
        <button type="submit" style={{ marginTop: '16px' }}>Login</button>
      </form>
    </div>
  </div>
);
}

export default Login;
