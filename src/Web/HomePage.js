import React from 'react'
import './Home.css'
import logo from '../Images/efac.jpeg'
function HomePage({handleLogOut}) {
 
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt='logo' />
                </div>
                <ul className="nav-links">
                    <li className="home">Home</li>
                    <li className="about">About</li>
                    <li className="trending">Trending</li>
                    <li className="buttons"></li>
                    <div className="actions">
                     <li >Create Post</li>
                     <li onClick={handleLogOut}>Log Out</li>
                    </div>
  
                </ul>
            </nav>
    
       <h1>Welcome Succesfull Login</h1>
      
    </header>
    )
}

export default HomePage;

