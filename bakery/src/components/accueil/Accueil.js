import React from "react";

import './Accueil.css'
import banniere from "../../boulangerie/banniere.jpg";

const Accueil = ({element}) => {
    return(
        <header className="App-header">
            <img src={banniere} className="App-banniere" alt="banniere" />
            <h1 className="nomBoulangerie">Boulangerie Lonbois</h1>
            <p className="b-p-s">Boulangerie - Pâtisserie - Sandwicherie</p>
            <p className="descriptif">Produits frais, fabriqués dans nos ateliers à Braine l'alleud avec des œufs frais, du vrai beurre et sans huile de palme.
                Tous nos produits sont fabriqués dans nos ateliers, situés sur la Drève Richelle à Waterloo.
                Le pétrissage, la fermentation, la mise en forme et la cuisson complète des pains sont fait sur place.
                Concernant les pâtisseries, celle-ci sont aussi produites dans nos ateliers, avec des œufs frais, du vrai beurre et SANS HUILE DE PALME !</p>
        </header>
    )
}

export default Accueil