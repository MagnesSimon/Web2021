import React from "react";
import './Gdpr.css'

const Gdpr = ({element}) => {
    return(
        <div className='column-wrapper'>
            <h1>Règles de confidentialité</h1>
            
            <span className='align'>Les informations recueillies sur le site (nom, prénom, téléphone, email) font l’objet d’un traitement
             informatique destiné à Boulangerie Lombois. Ces informations ne seront ni cédées ni vendues à une tierce personne.
</span>
<span className='align'>
Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004,
 vous bénéficiez d’un droit d’accès et de rectification aux informations qui vous concernent, que 
 vous pouvez exercer en vous adressant à notre service client par email :
 boulangerielombois.contact@gmail.com
 </span>
        </div>
       
    )
}

export default Gdpr