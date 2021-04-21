import React from "react";
import axios from "axios";
import "./Article.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import ReactPaginate from 'react-paginate';
import Panier from "../panier/Panier";

const panier = [];

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage : false,
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

    recevoirArticle = (article) => {
        localStorage.clear();
        panier.push(article);
        localStorage.setItem('panier',JSON.stringify(panier));
        // Message de validation
        this.setState({showMessage : true});
        setTimeout(() => {
            this.setState({showMessage: false});
        },2000);


        return(
            <ul>
                <h3>Mon Panier</h3>
                <Panier monPanier={panier}/>
            </ul>
        )
    }
    onButtonClickHandler =() => {

    }

    //retourne les donnéees en liste pour la pagination
    componentDidMount() {
        axios.get(`http://62.210.130.145:3001/articles`)
            .then(res => {
                const posts = res.data.map(obj => ({ id: obj.art_id, nom: obj.art_nom, prix: obj.prix, catNom: obj.catNom, image: obj.image }));
                const slice = posts.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => <React.Fragment>
                    <div>
                        <img className={"image"} src={`data:image/jpeg;base64,${pd.image}`} />
                        <div>{pd.nom}</div>
                        <div>Catégorie : {pd.catNom}</div>
                        <div>{pd.prix.toFixed(2)}€</div>
                        <div>
                            {this.state.showMessage && <p>Article ajouté avec succès</p>}
                            <button className={"ajoutAuPanier"} onClick={() => this.recevoirArticle(pd)}>
                                Ajouter au panier</button>
                        </div>
                    </div>
                </React.Fragment>)


                this.setState({
                    pageCount: Math.ceil(posts.length / this.state.perPage),
                   
                    postData
                })
                this.setState({ posts });
                console.log("posts",this.state.posts)
                console.log("postData",this.state.postData)
            });
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

    render() {
        return (
            <div>
                <h1>Liste des Articles</h1>
                <div className='container'>
                {this.state.postData}
                {this.state.showMessage && <p>Article ajouté avec succès</p>}
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

export default Article
