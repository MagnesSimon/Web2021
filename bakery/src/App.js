import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/navbar/NavigationBar';
import React from "react";
import {About} from "./components/navbar/About";
import {NoMatch} from "./components/navbar/NoMatch";
import banniere from './boulangerie/banniere.jpg'
import Home from "./components/home/Home";

function App() {
  return (
      <React.Fragment>
          <Router>
              <NavigationBar />              <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route component={NoMatch} />
          </Switch>

          </Router>
      </React.Fragment>
  );
}

export default App;
