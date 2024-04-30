// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProfilePage = () => {
//   const navigate = useNavigate();
//   const [language, setLanguage] = useState('English');

//   const handleHome = ()=>{
//     navigate('/home')
// }

//   useEffect(() => {
//     const storedLanguage = localStorage.getItem('language');
//     if (storedLanguage) {
//       setLanguage(storedLanguage);
//     }
//   }, []);

//   const handleLanguageChange = (e) => {
//     const newLanguage = e.target.value;
//     setLanguage(newLanguage);
//     localStorage.setItem('language', newLanguage);
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem('username');
//     localStorage.removeItem('password');
//     navigate('/');
//   };



//   return (
//     <div>
//       <h2>Profile</h2>
//       <div>
//         <label htmlFor="language">Preferred Language:</label>
//         <select id="language" value={language} onChange={handleLanguageChange}>
//           <option value="English">English</option>
//           <option value="Spanish">Spanish</option>
//         </select>
//       </div>
//       <button onClick={handleSignOut}>Sign Out</button>
//       <button onClick={handleHome}>return Home page</button>
//     </div>
//   );
// };

// export default ProfilePage;



import React, { useState, useEffect } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import './index.css'; // Import the CSS file for the Profile Page

const ProfilePage = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('English');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);


  const handleSignOut = () => {
    localStorage.removeItem('username');
    navigate('/'); 
  };
  const handleHomePage = () => {
    navigate('/home');
  };
  return (
   <div className = "profile-container">
    <div className = 'header '> 
    <button calssName = 'bt1' onClick={handleSignOut}>Sign Out</button>
    <button onClick = {handleHomePage}>home page</button>
    </div>
    <div className="">
     <div>
      <h1>Profile</h1>
      <img className = 'profile-img' src = 'https://res.cloudinary.com/dx1qxaknp/image/upload/f_auto,q_auto/swi6u3ekjqx4oqb9chzq' alt  = "profile"/>
      <div className = 'about-section'>
        <h2>About</h2>
        <p>Hello, Iam my names is Lokesh Siriganeni I am very fascinated about web developemt and I have a deep understanding of front-end technologies like HTML, CSS, and JavaScript, and I often work with frameworks like React or Angular to create interactive and responsive user interfaces.</p>
      </div>
     </div>
     <div className='footer'>
      <FaLinkedin className='footer-icon'/>
      <FaGithub className='footer-icon'/>
    </div>
    </div>
    
    </div>
  );
};

export default ProfilePage;
