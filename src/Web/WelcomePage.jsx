import React,{useState} from 'react'
import './Welcome.css'


const WelcomePage =()=> {
    const [login, setLogin] = useState(false);

    return (
        <div>
          <div className="wrapper">
              <div className="logo">
                  <img src="" alt="" />
                 <div className="actions">
                     <button><i class="fas fa-lock"></i> SignIn</button>
                     <div className="desc">
                <h2>EFAC - Career Development Centre</h2><br />
                <h3>Unlocking Infinite Opportunities</h3><br />
                <p>Education For All Children is a non-profit organization that offers bright needy students eight-year schorlaship to futher their Secondary and University Studies. The Career Centre post job opportunities for this young talents through this platform</p>

                
            </div> 
                     
                 </div>
        

              </div>
          
                
          </div>
            

       </div>
       
    )
}

export default WelcomePage;
