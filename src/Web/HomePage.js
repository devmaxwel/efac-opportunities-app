import React,{useState} from 'react'
import './Home.css'
import {Link} from 'react'

function HomePage() {
    const [responsive, setResponsive]=useState(false);
    return (
        <div>
                <header>
                <nav>
                    <img src="" alt="" />
                    <ul className={responsive? "nav-links-mobile" : "nav-links"}
                        onClick={() => setResponsive(false)}>

                        <Link to='/home'   className="home"><li>Home</li></Link>
                        <Link to='/home' className="about"><li>About</li></Link>
                        <Link to='/home' className="announcement"><li>Announcements</li></Link>
                        <div className="actions">
                        <Link to='/' className="trending"><button>SignOut</button></Link>
                        </div>
                    </ul>

                    <div className="mobile-menu-icon" onClick ={() => setResponsive(!responsive)}>
                    {responsive ? <i class="fas fa-times"></i>
                    : <i class="fas fa-bars"></i>}
                    </div>
                </nav>
            </header>

            <body>

            </body>
    </div>
    )
}

export default HomePage;

