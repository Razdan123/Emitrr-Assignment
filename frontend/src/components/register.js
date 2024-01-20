import React, { useState } from 'react';

const Register = ({ onRegistration }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const userData = {
        phoneNumber: phoneNumber || undefined,
        name,
        email,
        password,
      };

      // Call the onRegistration callback with user data
      await onRegistration(userData);
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle error (show an error message, etc.)
    }
  };

  return (
    <div className="container" style={{ width: '50%', marginTop: '5%' }}>
      <h2 className="text-center mb-4">Register</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number (Optional)</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
