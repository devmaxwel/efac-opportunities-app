import {Switch, Route} from 'react-router-dom'
import HomePage from './Web/HomePage.js';
import WelcomePage from './Web/WelcomePage.jsx';


function App() {
  return (
    <div>
    
        <Switch>
            <Route path='/' exact>
                <WelcomePage />
            </Route>

              <Route path='/home'>
                  <HomePage  />

                  </Route>

             

    
       </Switch>
       
    </div>
  );
}

export default App;
