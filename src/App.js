import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <Router>

      <Navbar />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/login">
          <LogIn />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
