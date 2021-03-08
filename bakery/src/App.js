import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/navbar/NavigationBar';
import React from "react";
import Accueil from "./components/accueil/Accueil";
import Commande from "./components/commande/Commande";
import Inscription from "./components/inscription/Inscription";
import Connexion from "./components/connexion/Connexion";
import Contact from "./components/contact/Contact";

function App() {
  return (
      <React.Fragment>
          <Router>
              <NavigationBar />              <Switch>
              <Route path="/contact" component={Contact} />
              <Route path="/commande" component={Commande} />
              <Route path="/connexion" component={Connexion} />
              <Route path="/inscription" component={Inscription} />
              <Route component={Accueil} />
          </Switch>

          </Router>
      </React.Fragment>
  );
}

export default App;
