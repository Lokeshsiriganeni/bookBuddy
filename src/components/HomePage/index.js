import React, { useEffect, useState,useContext} from 'react';
import './index.css'; // Import the CSS file for the Home Page
import { redirect,useNavigate} from 'react-router-dom';
import {FiSun} from 'react-icons/fi'

import { UserContext } from '../../App';

function HomePage() {

  const [search, setSearch] = useState('');
  const {theme,toggleTheme} = useContext(UserContext)
  const bgColor = theme?'darkTheme':'lightTheme'
  const textColor = theme?'darkText':'lightText'
  const navigate = useNavigate();
  const redirectProfile = () => {
    navigate('/profile');
  };

  const books = [
    { title: 'The Great Gatsby ', author: ' F. Scott Fitzgerald', img:'https://res.cloudinary.com/df8sosvav/image/upload/f_auto,q_auto/dfpg9zyjvw49se5dmfst',available: true },
    { title: 'The Echo of old Books', author: 'George Orwell',img:"https://res.cloudinary.com/df8sosvav/image/upload/f_auto,q_auto/c5kpjzjoxdlbtbv8vbht", available: true },
    { title: 'Let Us Descend', author: 'Jesmyn Ward', img:"https://res.cloudinary.com/df8sosvav/image/upload/f_auto,q_auto/iy2oblu8asx0p5qulwsq",available: true },
    { title: 'Night Crawling', author: 'LEILA MOTTLEY',img:"https://res.cloudinary.com/df8sosvav/image/upload/f_auto,q_auto/bkw142vllmih3ndo4vo8", available: false },
    { title: 'The Rule Book', author: 'Sarah Addams',img:"https://res.cloudinary.com/df8sosvav/image/upload/f_auto,q_auto/bkl2sxpquanihei2pdiv", available: true },
  ];

  const filteredBooks = books.filter(
    (book) => book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  const handleSignOut = () => {
    localStorage.removeItem('username');
    navigate('/'); 
  };

  return (
    <div className= 'home'>
    <nav>
    <img className = 'logo' src = "https://res.cloudinary.com/dovk61e0h/image/upload/v1663608571/Bookhub/Group_7731Website_Logo_o1zltx_zndaus.png"/>
      <h1 className='logoutBtn' onClick = {handleSignOut}>Logout</h1>
      <FiSun className = 'theme-logo' onClick = {toggleTheme} size={25} />
      <h1 className= "profile-tab"  type='button' onClick={redirectProfile}>profile</h1>
    </nav>
    <div className= {`container-style ${bgColor}`}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} />

      </div>

      <ul className= "ul-container">
        {filteredBooks.map((book, index) => (
          <li key={index} className=  "book-list">
            <img className = 'bookImg' src = {book.img}/>
            <p className='text'>
            <strong className = {textColor}>{book.title}</strong> by {book.author} -{' '}
            {book.available ? 'Available' : 'Out of Stock'} 
            </p>
          </li>
        ))}
      </ul>
      
    </div>
    </div>
  );
}

export default HomePage;