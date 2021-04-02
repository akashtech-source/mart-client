import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Order from './components/Odrer/Order';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Checkout from './components/CheckOut/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
    <p>Name: {loggedInUser.name}</p>
    <Router>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/order">
          <Order></Order>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/deals">
          <Admin></Admin>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/checkout/:id">
          <Checkout></Checkout>
        </PrivateRoute>
        
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
