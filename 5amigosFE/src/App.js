import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import './App.css';


function App() {
  return (
    <Router>
        
      <Switch>
        

       <Route path={"/"}>
          <Home/>
        </Route>

      
        <Route exact path={["/", "/signup"]}>
          <Signup/>
        </Route>


      </Switch>
      
        
    </Router>
  );
}

export default App;
