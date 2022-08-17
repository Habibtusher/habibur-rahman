import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllProject from './Components/Home/AllProject/AllProject';
import Blog from './Components/Home/Blog/Blog';
import Contacts from './Components/Home/Contacts/Contacts';
import Resume from './Components/Home/Resume/Resume';

function App() {
  return (
    <div style={{backgroundColor:"#C0C0C0"}}>
    <Router>
        <Switch>
          <Route path="#project">
          <Home></Home>
          </Route>
          <Route path="#blog">
          <Home></Home>
          </Route>
          <Route path="/resume">
         <Resume></Resume>
          </Route>
          
          <Route path="/">
           <Home></Home>
          </Route>
        </Switch>
    </Router></div>
  );
}

export default App;
