import React from 'react'
import './Home.css'
function HomePage({handleLogOut}) {
 
    return (
        <div>
    
       <h1>Welcome Succesfull Login</h1>
       <button onClick={handleLogOut}>SignOut</button>
    </div>
    )
}

export default HomePage;

