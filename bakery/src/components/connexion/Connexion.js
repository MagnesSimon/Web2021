import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Connexion extends React.Component{

    constructor (props){
        super(props)
        this.state = {
            posts : [],
            mail : '',
            mdp : '',
            connecté : false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }


    seConnecter = () =>{
        axios.get('http://62.210.130.145:3001/user')
        .then(res =>{
            const posts = res.data.map(obj => ({id : obj.id, nom : obj.nom, prenom: obj.prenom , mail : obj.mail,tel : obj.tel, mdp : obj.mdp}))
            console.log(posts)
            posts.find((post)=>{
                if(this.state.mail == post.mail && this.state.mdp == post.mdp){
                    this.state.connecté = true
                    if(window.confirm("Connexion...")){
                       window.open("http://localhost:3000/")
                    }
                    
                }
            })
            if(this.state.connecté === false){
                alert("Mauvaise adresse Email/mauvais mot de passe.")
            }
        })
        .catch(error => {
            console.log(error)
        })
    }


    render (){
        return <div>
                <h2>Se connecter</h2>
                <div>
                    <label htmlFor="Mail">E-mail :</label>
                    <input type="texte" id="mail" name="mail" value={this.state.mail} onChange={this.handleChange} required/>
                </div>
                <div>
                    <label htmlFor="Mdp">Mot de passe :</label>
                    <input type="password" id="mdp" name="mdp" value={this.state.mdp} onChange={this.handleChange} required/>
                </div>
                <div>
                    <button id="connection" name="connection" onClick={this.seConnecter}>Se connecter</button>
                </div>
            </div>
    }
}

export default Connexion