import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Container } from 'react-bootstrap';
import Gallery4 from '../utils/img/menu-img.jpg';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userId, setUserId] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      alert(response.data.message);
      onLogin(); // Optional callback for successful login
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/signup', {
        firstName,
        lastName,
        email,
        password,
        userId,
      });
      alert(response.data.message);
      setIsNewUser(false);
    } catch (err) {
      alert(err.response?.data?.message || 'Sign-Up failed');
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: `url(${Gallery4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Form
        onSubmit={isNewUser ? handleSignUp : handleLogin}
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
          maxWidth: '500px',
          width: '100%',
        }}
      >
        <h3>{isNewUser ? 'Sign Up' : 'Login'}</h3>

        {isNewUser && (
          <>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Set User ID</Form.Label>
              <Form.Control
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </Form.Group>
          </>
        )}

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        {isNewUser && (
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
        )}

        <Button type="submit" variant="primary">
          {isNewUser ? 'Sign Up' : 'Login'}
        </Button>

        <div
          style={{ marginTop: '1rem', cursor: 'pointer', color: '#007bff' }}
          onClick={() => setIsNewUser(!isNewUser)}
        >
          {isNewUser ? 'Already have an account? Login' : 'New user? Sign up'}
        </div>
      </Form>
    </Container>
  );
}

export default Login;
