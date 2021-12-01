import React,{useState} from 'react'
import './Home.css'
import logo from '../Images/efac.jpeg'
function HomePage({handleLogOut}) {

    const [responsive, setResponsive] = useState(false)
 
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt='logo' />
                </div>
                <ul className={responsive ? "nav-links-mobile": "nav-links"}>
                    <li className="home">Home</li>
                    <li className="about">About</li>
                    <li className="trending">Trending</li>
                    <li className="buttons"></li>
                    <div className="actions">
                     <li >Create Post</li>
                     <li onClick={handleLogOut}>Log Out</li>
                    </div>
  
                </ul>
                <div className="mobile-menu-icon" onClick={() => setResponsive(!responsive)}>
                    {responsive ? <i class="fas fa-times"></i> : 
                     <i class="fas fa-bars"></i>}
                </div>
            </nav>
    
       <h1>Welcome Succesfull Login</h1>
      
    </header>
    )
}

export default HomePage;

