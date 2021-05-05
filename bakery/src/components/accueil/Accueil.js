import React from "react";

import './Accueil.css'
import banniere from "../../boulangerie/banniere.jpg";
import Horaire from "./horaire";

import {Image} from 'react-bootstrap'
import pain1 from '../../boulangerie/pain1.jpg'
import pain2 from '../../boulangerie/pain2.jpg'
import pain3 from '../../boulangerie/pain3.jpg'

const Accueil = ({element}) => {
    return(

        <>
            <div id="title-row" className="row-wrapper">
                <div className="column-wrapper ">
                    <h1> Boulangerie Lombois de Braine l'Alleud</h1>
                </div>
            </div>
            <div className="row-wrapper row2">
                <div className={"column-wrapper w-50"}>
                    <p className={"text-center"}>Produits frais, fabriqués dans nos ateliers à Braine l'Alleud avec des œufs frais, du vrai beurre et sans huile de palme.</p>
                </div>
                <div className={"column-wrapper w-50"}>
                    <Image src={pain1} alt="pain1" fluid></Image>
                </div>
            </div>
            <div className="row-wrapper row3">
                <div className={"column-wrapper w-50"}>
                    <Image src={pain2} alt="pain2" fluid></Image>
                </div>
                <div className={"column-wrapper w-50"}>
                    <p className={"text-center"}>Tous nos produits sont fabriqués dans nos ateliers, situés sur la Drève Richelle à Waterloo.</p>
                </div>
            </div>
            <div className={"row-wrapper row3 mb-4"}>
                <div className={"column-wrapper w-50"}>

        <div>
            <h1 classname="h1"> Boulangerie Lonbois de Braine l'Alleud</h1>
                <img src={banniere} className="App-banniere" alt="banniere" />
                <div className='bloc'>
                    <span>Boulangie - </span>
                    <span>Pâtisserie - </span>
                    <span>Sandwicherie</span>
                </div>
                <p className="descriptif">Produits frais, fabriqués dans nos ateliers à Braine l'Alleud avec des œufs frais, du vrai beurre et sans huile de palme.
                    Tous nos produits sont fabriqués dans nos ateliers, situés sur la Drève Richelle à Waterloo.
                    Le pétrissage, la fermentation, la mise en forme et la cuisson complète des pains sont fait sur place.</p>
                </div>
                <div className={"column-wrapper w-50 h-50"}>
                    <Image src={pain3} alt="pain3" fluid></Image>
                </div>

            </div>
            <div className={"row-wrapper horraire py-4"}>
                <div className={"column-wrapper w-50"}>
                    <Horaire></Horaire>
                </div>
                <div className={"column-wrapper w-50"}>
                    info map ? position ?
                </div>
            </div>

            </div>
        </>
    )

}
export default Accueil
