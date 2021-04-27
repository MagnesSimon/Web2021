import React from "react";

import './Accueil.css'
import banniere from "../../boulangerie/banniere.jpg";
import Horaire from "./horaire";

const Accueil = ({element}) => {
    return(
        <div>
            <h1> Boulangie Lonbois de Braine l'Alleud</h1>
                <img src={banniere} className="App-banniere" alt="banniere" />
                <div className='bloc'>
                    <span>Boulangie - </span>
                    <span>Pâtisserie - </span>
                    <span>Sandwicherie</span>
                </div>
                <p className="descriptif">Produits frais, fabriqués dans nos ateliers à Braine l'Alleud avec des œufs frais, du vrai beurre et sans huile de palme.
                    Tous nos produits sont fabriqués dans nos ateliers, situés sur la Drève Richelle à Waterloo.
                    Le pétrissage, la fermentation, la mise en forme et la cuisson complète des pains sont fait sur place.
                    Concernant les pâtisseries, celle-ci sont aussi produites dans nos ateliers, avec des œufs frais, du vrai beurre et SANS HUILE DE PALME !<br>
                    </br><b>Retrouvez-nous à l'adresse suivante : Chaussée d'Ophain 45, 1420 Braine-l'Alleud</b>
                    </p>
            <body>
                <Horaire></Horaire>
            </body>
        </div>
    )
}

export default Accueil