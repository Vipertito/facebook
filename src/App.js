import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Loginpage from "./templates/Loginpage/Loginpage";
import HeaderArea from "./templates/HeaderArea/HeaderArea";
// import { Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Loginpage} />
        <Route path="/home" component={HeaderArea} />
      </Switch>
    </div>
  );
}

export default App;
