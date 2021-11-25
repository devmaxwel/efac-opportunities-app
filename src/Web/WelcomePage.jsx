import React from 'react';
import SignIn from '../Components/Authentication/SignIn';
import './Welcome.css'
import cover from '../Images/Background.JPG';



const WelcomePage =()=> {

    return (
        <div className="ul">
               <SignIn />
         
           <div className="cover">
               <div className="overlay">
               <img src={cover} alt="cover" />
               <div className="desc">
                   <h1>EFAC - CAREER DEVELOPMENT CENTRE</h1>
                   <h3>Unlocking Infinite Opportunities</h3>
                   <p>EFAC-KENYA is a non-profit organization that give schorlaship opportunities to bright needy students that are in the verge of cutting their education journey</p>
               </div>
               </div>

           </div>
        
        </div>   
    )
}

export default WelcomePage;
