import {Switch, Route} from 'react-router-dom';
import SignIn from './Components/Authentication/SignIn';





function App() {
  return (
        <Switch>
            <Route path='/' exac={true}>
               <SignIn />
            </Route>
     
       </Switch>
       
  );
}

export default App;
