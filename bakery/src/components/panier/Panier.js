import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Article from "../article/Article";

class Panier extends React.Component{

    constructor() {
        super();
        this.state = {
            panier : [],
        }

    }

    recevoirArticle = article => {
        this.state.panier.push(article);
        this.setState({panier: this.state.panier})
        console.log("ajout de " + article);
    }


    render() {
        return(
            <div>
                <h1>Mon panier</h1>
            </div>
        )
    }
}

export default Panier