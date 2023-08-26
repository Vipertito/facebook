import React from 'react';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import Loginpage from './Loginpage/Loginpage';
import HeaderArea from './HeaderArea/HeaderArea';
// import { Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact={true} component={Loginpage}/>
        <Route path='/HeaderArea' component={HeaderArea}/>
      </Switch>
    </div>
  );
}

export default App;
