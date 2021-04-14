import React from "react";
import banniere from "../../boulangerie/banniere.jpg";
import axios from "axios";
import "./Inscription.css";
import  { Redirect } from 'react-router-dom';

class Inscription extends React.Component {

    constructor (props){
        super(props)
        this.state = {
            nom : '',
            prenom : '',
            mail : '',
            tel : '',
            mdp : '',
            confmdp : '',
            mailValide : false,
            mdpValide : false,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
      const name = e.target.name
      this.setState({
          [name]: e.target.value
      })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        this.validationemail();
        this.confmdp();
        console.log(this.state)
        if(this.state.mailValide == true && this.state.mdpValide == true){
                console.log(this.state.mailValide,this.state.mdpValide)
                axios.post('http://62.210.130.145:3001/user', this.state)
                .then(response => {
                    console.log(response)
                    alert("Votre inscription est validée.")
                    this.props.history.push('/connexion')
                })
                .catch(error => {
                    alert("Mail deja existant")
                })
        }
        console.log(this.state.mailValide,this.state.mdpValide)
        
    }

    validationemail = () => {
        let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/ ;
        if (expressionReguliere.test(this.state.mail)){	
            console.log("Adresse mail valide.");
            this.state.mailValide = true
        }
        else{
            alert("Adresse Mail invalide.")
            this.state.mailValide = false
        }
    }

    confmdp = () => {
        if(this.state.mdp == this.state.confmdp){
            this.state.mdpValide = true
        }
        else{
            alert("Mauvaise confirmation de mot de passe.")
        }
    }

    
    render () {
        return <form onSubmit={this.submitHandler}>
            <div>
                <h2>Veuillez remplir les informations ci-dessous</h2>
                <div>
                    <label htmlFor="Nom">Nom :</label>
                    <input type="texte" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange} required/> 
                </div>
                <div>
                    <label htmlFor="Prenom">Prenom :</label>
                    <input type="texte" id="prenom" name="prenom" value={this.state.prenom} onChange={this.handleChange} required/>
                </div>
                <div>
                    <label htmlFor="Mail">Mail :</label>
                    <input type="texte" id="mail" name="mail" value={this.state.mail} onChange={this.handleChange} required/>
                </div>
                <div>
                    <label htmlFor="Tem">Numéro de téléphone :</label>
                    <input type="texte" id="tel" name="tel" value={this.state.tel} onChange={this.handleChange }required/>
                </div>
                <div>
                    <label htmlFor="Mdp">Mot de passe :</label>
                    <input type="password" id="mdp" name="mdp" value={this.state.mdp} onChange={this.handleChange} required/>
                </div>
                <div>
                    <label htmlFor="ConfMdp">Confirmer mot de passe :</label>
                    <input type="password" id="confmdp" name="confmdp" value={this.state.confmdp} onChange={this.handleChange} required/>
                </div>
                <div className="confirmer"> 
                    <button type="submit" id='sub' name='sub' >S'inscrire</button>
                </div>
            </div>
        </form>
    }
}

export default Inscription