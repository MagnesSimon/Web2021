import React from "react";
import ReactPaginate from "react-paginate";
import Article from "../article/Article";
import ArticlesListe from "./ArticlesListe";
import {forEach} from "react-bootstrap/ElementChildren";
import axios from "axios";
import {toast} from "react-toastify";


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
            panier: [],
            user:[],
            artId: [],
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
        const temp = localStorage.getItem('panier')
        if ( temp === null){
            window.alert("Votre panier est vide");
        }else{
            //Recupération de l'id User
            this.userJSON = localStorage.getItem('user');
            this.state.user = JSON.parse(this.userJSON);
            const idUser= this.state.user.id;

            // Recupération des id articles
            this.panierJSON = localStorage.getItem('panier');
            this.state.panier = JSON.parse(this.panierJSON);
            for(let i=0; i<this.state.panier.length;i++){
                this.state.artId.push(this.state.panier[i].id);
            }

            // Envoi vers la db
            for(let i=0;i<this.state.artId.length;i++){
                const aEnvoyer = {
                    cli_id: idUser,
                    art_id: this.state.artId[i],
                }
                //axios.post(window.url + '/commande', aEnvoyer);
                console.log(aEnvoyer);
            }
            // Reset du panier
            this.state.artId = [];
            this.state.posts = [];
            localStorage.setItem('panier', JSON.stringify(this.state.posts));

            this.componentDidMount();

            window.alert("Félicitation votre commande est validée")
        }
    }

    retirerPanier = (id, prix) => {
        console.log("prix article ",prix);
        this.state.posts.splice(id, 1);
        localStorage.removeItem('panier');
        localStorage.setItem('panier', JSON.stringify(this.state.posts));
        this.panierJSON = localStorage.getItem('panier');
        this.state.posts = JSON.parse(this.panierJSON);
        //prixTotal -= prix;

        this.componentDidMount();
    }

    componentDidMount() {
        prixTotal =0;
        this.panierJSON = localStorage.getItem('panier');
        this.state.panier = JSON.parse(this.panierJSON);
        //console.log("panier 3", this.state.panier);
        let i =0;
        try {
            const posts = this.state.panier.map(obj => ({
                panierId: i++,
                id: obj.id,
                nom: obj.nom,
                prix: obj.prix,
                catNom: obj.catNom,
                image: obj.image
            }));
            const slice = posts.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map(pd => <React.Fragment>
                {this.calculerPrixTotal(pd.prix)}
                <div>
                    <img className={"image"} src={`data:image/jpeg;base64,${pd.image}`} />
                    <div>{pd.nom}</div>
                    <div>{pd.prix.toFixed(2)}€</div>
                    <button className={"btn btn-info"} onClick={() => this.retirerPanier(pd.panierId, pd.prix)}>Retirer du panier</button>
                </div>
            </React.Fragment>)


            this.setState({
                pageCount: Math.ceil(posts.length / this.state.perPage),

                postData
            })
            this.setState({ posts });
            console.log("total", prixTotal);
        } catch (error) {
            console.log("panier vide");
        }
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
                    <button className="btn btn-info" onClick={this.LancerCommande}>Lancer la commande</button>
                </div>

            </div>
        )
    }
}

export default Panier