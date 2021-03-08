import React from "react";
import './Accueil.css'

const Horaire = ({element}) => {
    return(
        <div className="tableau-horaire">
            <table className="horaire-ouverture">
                <thead><b>Horaire d'ouverture</b></thead>
                    <tr>
                        <td>Lundi</td>
                        <td>06:00 - 18:00</td>
                    </tr>
                    <tr>
                        <td className="ligne-impaire">Mardi</td>
                        <td className="ligne-impaire">06:00 - 18:00</td>
                    </tr>
                    <tr>
                        <td>Mercredi</td>
                        <td>06:00 - 18:00</td>
                    </tr>
                    <tr>
                        <td className="ligne-impaire">Jeudi</td>
                        <td className="ligne-impaire">06:00 - 18:00</td>
                    </tr>
                    <tr>
                        <td>Vendredi</td>
                        <td>06:00 - 18:00</td>
                    </tr>
                    <tr>
                        <td className="ligne-impaire">Samedi</td>
                        <td className="ligne-impaire">06:00 - 18:00</td>
                    </tr>
                    <tr>
                        <td>Dimanche</td>
                        <td>06:00 - 18:00</td>
                    </tr>
            </table>
        </div>
    )
}

export default Horaire