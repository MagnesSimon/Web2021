import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/navbar/NavigationBar';
import React from "react";
import {About} from "./components/navbar/About";
import Home from "./components/home/Home";

function App() {
  return (
      <React.Fragment>
          <Router>
              <NavigationBar />              <Switch>
              <Route path="/about" component={About} />
              <Route component={Home} />
          </Switch>

          </Router>
      </React.Fragment>
  );
}

export default App;
