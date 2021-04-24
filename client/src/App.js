import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeSignUp from "./components/HomeSignUp"
import BlogNoteAdd from "./components/BlogNoteAdd"
import BlogNotesAll from "./components/BlogNotesAll"
import Resources from "./components/Resources"
import Setting from "./components/Settings"

// import './App.css';


function App(props) {
  const [bg, setFile] = useState('../public/default.png');
  function onChange(event) {
    var bgurl=URL.createObjectURL(event.target.files[0])
    setFile(bgurl);
  }

  return (
    
    
    
    <Router>
      <NavBar ></NavBar>
        <div id="container" style={{backgroundSize:"contain", backgroundImage:`url(`+bg+`)`}}>
        <Setting onChange={onChange}></Setting>

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

       
          </div>
      
        
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