import React from "react";

import './Accueil.css'
import banniere from "../../boulangerie/banniere.jpg";

const Accueil = ({element}) => {
    return(
        <header className="App-header">
            <img src={banniere} className="App-banniere" alt="banniere" />
            <h1 className="nomBoulangerie">Boulangerie Lonbois</h1>
            <p>futur paragraphe</p>
        </header>
    )
}

export default Accueil