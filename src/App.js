import {Switch, Route} from 'react-router-dom'
import WelcomePage from './Web/WelcomePage.jsx';

function App() {
  return (
    <div>
       <Switch>
            <Route path='/' exact>
                <WelcomePage />
            </Route>

            <Route>

            </Route>
       </Switch>
    </div>
  );
}

export default App;
