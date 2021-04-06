import React from "react";
import ReactPaginate from "react-paginate";
import Article from "../article/Article";

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
    afficherPanier = () => {
        const panier = localStorage.getItem('panier');
        console.log(panier);

        const listePanier = panier.map(panier => <React.Fragment>
            <div>
                <img className={"image"} src={`data:image/jpeg;base64,${panier.image}`} />
                <div>{panier.nom}</div>
                <div>Catégorie : {panier.catNom}</div>
                <div>{panier.prix.toFixed(2)}€</div>
            </div>
        </React.Fragment>);
        //this.setState({posts});
        console.log(this.state.posts)
    }

    render() {
        const panier = localStorage.getItem('panier');

        return (
            <div>
                <h1>Liste des Articles</h1>
                <div className='container'>
                    {this.state.postData}
                </div>
            </div>


        )
    }
}

export default Panier