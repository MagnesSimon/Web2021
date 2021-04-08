import React from "react";
import ReactPaginate from "react-paginate";
import Article from "../article/Article";
import ArticlesListe from "./ArticlesListe";
import {forEach} from "react-bootstrap/ElementChildren";

let panier = [];

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
    panierJSON;

    componentDidMount() {
        this.panierJSON = localStorage.getItem('panier');
        panier = JSON.parse(this.panierJSON);

        const posts = panier.map(obj => ({ id: obj.art_id, nom: obj.art_nom, prix: obj.prix, catNom: obj.catNom, image: obj.image }));
        const slice = posts.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(pd => <React.Fragment>
            <div>
                <img className={"image"} src={`data:image/jpeg;base64,${pd.image}`} />
                <div>{pd.nom}</div>
                <div>Catégorie : {pd.catNom}</div>
                <div>{pd.prix.toFixed(2)}€</div>
            </div>
        </React.Fragment>)


        this.setState({
            pageCount: Math.ceil(posts.length / this.state.perPage),

            postData
        })
        this.setState({ posts });
        console.log("posts",this.state.posts)
        console.log("postData",this.state.postData)
    }

    render() {
        return (
            <div>
                <h1>Mon panier</h1>
                <div className='container'>
                    {this.state.postData}
                </div>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        )
    }
}

export default Panier