import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState(null);
  const [variant, setVariant] = useState('danger');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sample validation logic
    if (formData.email === '' || formData.password === '') {
      setMessage('Please fill in all fields');
      setVariant('danger');
    } else {
      // Simulate successful login
      setMessage('Login successful!');
      setVariant('success');
    }
  };

  return (
    <>
    <Header/>

    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100 px-3"
      style={{ marginTop: '56px' }} // Adjust if using fixed Header
    >
      <Card className="p-4 shadow w-100" style={{ maxWidth: '400px' }}>
        <h3 className="text-center mb-3">Login</h3>

        {message && <Alert variant={variant}>{message}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
    <Footer/>
    </>
  );
};

export default LoginPage;
