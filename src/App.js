import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Orders from "./component/Orders/Orders";
import Admin from "./component/Admin/Admin";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import { createContext, useState } from "react";
import Login from "./component/Login/Login";
import CheckOut from "./component/CheckOut/CheckOut";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div>
       <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <Route path="/login">
          <Login />
          </Route>
          <PrivateRoute path="/checkOut/:_id">
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
