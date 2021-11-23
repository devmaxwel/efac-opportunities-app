import '../Navigation/Navigation.css';
import React from 'react'
import {Link} from 'react-dom'

function Navigation() {
    return (
        <header>
            <nav>
                <img src="" alt="" />
                <ul>
                    <Link to='/'  ><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/news'><li>Announcements</li></Link>
                    <Link to='/trends'><li>Trending</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
