import React from "react";
import ReactPaginate from "react-paginate";
import Article from "../article/Article";
import ArticlesListe from "./ArticlesListe";
import {forEach} from "react-bootstrap/ElementChildren";

let panier = [];
let prixTotal = 0;
let arrayId = [];

class Panier extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            offset: 0,
            data: [],
            perPage: 6,
            currentPage: 0,
        }
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.componentDidMount()
        });

    };

    calculerPrixTotal = (prix) =>{
        prixTotal += prix;
    }

    LancerCommande = () => {
        console.log("A faire");
    }
    retirerPanier = (id) => {
        console.log("panier: ", panier);
        panier.splice(id -1, 1);
        localStorage.clear();
        localStorage.setItem('panier', JSON.stringify(panier));
        this.panierJSON = localStorage.getItem('panier');
        panier = JSON.parse(this.panierJSON);
        console.log("panier 2: ", panier);
    }

    ajouterArrayId = (id) => {
        arrayId.push(id - 1);
    }


    componentDidMount() {
        this.panierJSON = localStorage.getItem('panier');
        panier = JSON.parse(this.panierJSON);
        console.log("panier", panier);

        const posts = panier.map(obj => ({ id: obj.id, nom: obj.nom, prix: obj.prix, catNom: obj.catNom, image: obj.image }));
        const slice = posts.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(pd => <React.Fragment>
            {this.calculerPrixTotal(pd.prix)}
            {this.ajouterArrayId(pd.id)}
            <div>
                <img className={"image"} src={`data:image/jpeg;base64,${pd.image}`} />
                <div>{pd.nom}</div>
                <div>{pd.prix.toFixed(2)}€</div>
                <button onClick={() => this.retirerPanier(pd.id)}>Retirer du panier</button>
            </div>
        </React.Fragment>)


        this.setState({
            pageCount: Math.ceil(posts.length / this.state.perPage),

            postData
        })
        this.setState({ posts });
        console.log("total", prixTotal);
    }

    render() {
        return (
            <div>
                <h1>Mon panier</h1>
                <div className='container'>
                    {this.state.postData}
                </div>
                <div className="Total">
                    Total à payer: {prixTotal.toFixed(2)}
                </div>
                <div>
                    <button className="lancerCommande" onClick={this.LancerCommande}>Lancer la commande</button>
                </div>

            </div>
        )
    }
}

export default Panier