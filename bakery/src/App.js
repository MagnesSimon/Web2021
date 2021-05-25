import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {NavigationBarCO, NavigationBarCOAD} from './components/navbar/NavigationBar';
import { NavigationBarNOCO } from './components/navbar/NavigationBar';
import React from "react";
import Accueil from "./components/accueil/Accueil";
import Article from "./components/article/Article";
import Inscription from "./components/inscription/Inscription";
import Connexion from "./components/connexion/Connexion";
import Contact from "./components/contact/Contact";
import Panier from "./components/panier/Panier";
import Admin from "./components/admin/Admin";
import Gdpr from "./components/gdpr/Gdpr";

function App() {
    if (localStorage.getItem('user') && localStorage.getItem('admin') == 0 ) {
        return (
            <React.Fragment>
                <Router>
                    <NavigationBarCO/> <Switch>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/Article" component={Article}/>
                    <Route path="/connexion" component={Connexion}/>
                    <Route path="/inscription" component={Inscription}/>
                    <Route path="/panier" component={Panier}/>
                    <Route path="/gdpr" component={Gdpr}/>
                    <Route component={Accueil}/>
                </Switch>
                </Router>
            </React.Fragment>
        );
    }else if (localStorage.getItem('user') && localStorage.getItem('admin') == 1 ){
        return (
            <React.Fragment>
                <Router>
                    <NavigationBarCOAD/> <Switch>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/Article" component={Article}/>
                    <Route path="/connexion" component={Connexion}/>
                    <Route path="/inscription" component={Inscription}/>
                    <Route path="/panier" component={Panier}/>
                    <Route path="/gdpr" component={Gdpr}/>
                    <Route path="/admin" component={Admin}/>
                    <Route component={Accueil}/>
                </Switch>
                </Router>
            </React.Fragment>
        );
    }
    else {
        return (
            <React.Fragment>
                <Router>
                    <NavigationBarNOCO/> <Switch>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/Article" component={Article}/>
                    <Route path="/connexion" component={Connexion}/>
                    <Route path="/inscription" component={Inscription}/>
                    <Route path="/gdpr" component={Gdpr}/>
                    <Route path="/panier" component={Panier}/>
                    <Route component={Accueil}/>
                </Switch>
                </Router>
            </React.Fragment>
        );

    }
}

export default App;
