import React from "react";

import './Home.css'
import banniere from "../../boulangerie/banniere.jpg";

const Home = ({element}) => {
    return(
        <header className="App-header">
            <img src={banniere} className="App-banniere" alt="banniere" />
            <h1 className="nomBoulangerie">Boulangerie Lonbois</h1>
            <p>futur paragraphe</p>
        </header>
    )
}

export default Home