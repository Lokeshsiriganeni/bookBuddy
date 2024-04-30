// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignInPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // If user is already signed in, redirect to Home
//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) {
//       navigate('/home');
//     }
//   }, [navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Store sign-in information locally
//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);
//     navigate('/home'); // Redirect to home page after sign-in
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button type="submit">Sign In</button>
//     </form>
//   );
// };

// export default SignInPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; // Import the CSS file for the Sign-In page

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    navigate('/home'); // Redirect to the Home page after signing in
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
