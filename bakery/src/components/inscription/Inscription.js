import React from "react";
import banniere from "../../boulangerie/banniere.jpg";

class Inscription extends React.Component {

    constructor (props){
        super(props)
        this.state = {
            nom : '',
            prenom : '',
            mail : '',
            confmail : '',
            tel : '',
            mdp : '',
            confmdp : ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
      const name = e.target.name
      this.setState({
          [name]: e.target.value
      })
    }

    render () {
        return <div>

            <h1>Veuillez remplir les informations ci-dessous</h1>
            <div>
                <label htmlFor="Nom">Nom *</label>
                <input type="texte" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange} /> 
            </div>
            <div>
                <label htmlFor="Prenom">Prenom *</label>
                <input type="texte" id="prenom" name="prenom" value={this.state.prenom} onChange={this.handleChange} />
            </div>
            <div>
                <label htmlFor="Mail">Mail *</label>
                <input type="texte" id="mail" name="mail" value={this.state.mail} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="ConfMail">Confirmer E-amil *</label>
                <input type="texte" id="confmail" name="confmail" value={this.state.confmail} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="Tem">Numéro de téléphone *</label>
                <input type="texte" id="tel" name="tel" value={this.state.tel} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="Mdp">Mot de passe *</label>
                <input type="password" id="mdp" name="mdp" value={this.state.mdp} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="ConfMdp">Confirmer mot de passe *</label>
                <input type="password" id="confmdp" name="confmdp" value={this.state.confmdp} onChange={this.handleChange}/>
            </div>
        </div>
    }
}

export default Inscription