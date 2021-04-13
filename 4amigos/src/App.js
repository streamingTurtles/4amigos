import{
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import './App.css';

function App() {
  return (
    <BrowserRouter>
  <Switch>
   
    <Route path="/signup">
      <Signup/>
    </Route>
    <Route path="/">
      <Home/>
    </Route>
  </Switch>
   
    </BrowserRouter>
  );
}

export default App;
