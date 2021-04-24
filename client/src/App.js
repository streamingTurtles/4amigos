import React from "react";
// import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeSignUp from "./components/HomeSignUp"
import BlogNoteAdd from "./components/BlogNoteAdd"
import BlogNotesAll from "./components/BlogNotesAll"
// import Resources from "./components/Resources";


// import './App.css';


function App() {
  // const [registerUsername, setRegisterUsername] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [loginUsername, setLoginUsername] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  // const register = () => {};
  // const login = () => {};
  // const getUser = () => {};

  return (      
    
    <Router>
      
      <NavBar ></NavBar>
        {/* <div><h4>-- TOP --</h4></div>
        <div className="App">
          <h1>Register</h1>
          <input placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
          <input placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
        </div> */}
          <Route path = "/" exact>
              <HomeSignUp/>
          </Route>

          <Route path = "/homesignup">
              <HomeSignUp/>
          </Route>

          <Route path = "/blognoteadd">
            <BlogNoteAdd/>
          </Route>

        
          <Route path = "/blognotesall">
            <BlogNotesAll/>
          </Route>     
        {/* <div><h4>-- BOTTOM --</h4></div> */}
    </Router>


    







  );
}

export default App;
 






// function App() {
//   return (
    
//     <div>
    
//     <Router>
//       <NavBar/>
        
//       <Switch>
        

//        <Route path={"/"}>
//           <Home/>
//         </Route>

//         <Route exact path={["/", "/signup"]}>
//           <Signup/>
//         </Route>

      
//         <Route exact path={["/", "/signup"]}>
//           <Signup/>
//         </Route>


//       </Switch>
      
        
//     </Router>
//     <h1>Build out App here</h1>
//     </div>
//   );
// }

// export default App;