import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBarCO } from './components/navbar/NavigationBar';
import { NavigationBarNOCO } from './components/navbar/NavigationBar';
import React from "react";
import Accueil from "./components/accueil/Accueil";
import Article from "./components/article/Article";
import Inscription from "./components/inscription/Inscription";
import Connexion from "./components/connexion/Connexion";
import Contact from "./components/contact/Contact";
import Panier from "./components/panier/Panier";

function App() {
    if (localStorage.getItem('user')) {
        return (
            <React.Fragment>
                <Router>
                    <NavigationBarCO/> <Switch>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/Article" component={Article}/>
                    <Route path="/connexion" component={Connexion}/>
                    <Route path="/inscription" component={Inscription}/>
                    <Route path="/panier" component={Panier}/>
                    <Route component={Accueil}/>
                </Switch>
                </Router>
            </React.Fragment>
        );
    }else {
        return (
            <React.Fragment>
                <Router>
                    <NavigationBarNOCO/> <Switch>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/Article" component={Article}/>
                    <Route path="/connexion" component={Connexion}/>
                    <Route path="/inscription" component={Inscription}/>
                    <Route path="/panier" component={Panier}/>
                    <Route component={Accueil}/>
                </Switch>
                </Router>
            </React.Fragment>
        );

    }
}

export default App;
