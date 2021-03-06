import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import LogIn from './Pages/LogIn/LogIn';
import { createContext, useState } from 'react';
import PrivateRoute from './Pages/LogIn/PrivateRoute';
import CreatePost from './components/CreatePost/CreatePost';
import Dashboard from './Pages/Dashboard';
import PostDetails from './Pages/PostDetails';

export const UserContext = createContext()


function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>

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

          <PrivateRoute path="/post/:postId">
            <PostDetails />
          </PrivateRoute>

          <PrivateRoute path="/createBlog">
            <CreatePost />
          </PrivateRoute>

          <PrivateRoute path="/dashboard/managePost">
            <Dashboard />
          </PrivateRoute>

          <Route path="*">
            <Home />
          </Route>

        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
