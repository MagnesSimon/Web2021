import React from "react";
import axios from "axios";
import "./Article.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ReactBootStrap from 'react-bootstrap'

import ReactPaginate from 'react-paginate';
import Panier from "../panier/Panier";

const panier = [];

class Article extends React.Component {
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

    recevoirArticle = (article) => {
        console.log(article);
        panier.push(article);
        console.log(panier);
        //const panier = article.data.map(obj => ({ id: obj.art_id, nom: obj.art_nom, prix: obj.prix, catNom: obj.catNom, image: obj.image }));
        //this.setState({panier: this.state.panier})
        //console.log(this.state.panier)
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
                        <button className={"ajoutAuPanier"} onClick={() => this.recevoirArticle(pd)}>
                            panier</button>
                    </div>
                </React.Fragment>)


                this.setState({
                    pageCount: Math.ceil(posts.length / this.state.perPage),
                   
                    postData
                })
                this.setState({ posts });
                console.log(this.state.posts)
                console.log(this.state.postData)
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

    renderTableData() {

        return this.state.posts.map((post, index) => {
            return (
                <div className='grid-item' key={index}>
                    <img className={"image"} src={`data:image/jpeg;base64,${post.image}`} />
                    <div>{post.nom}</div>
                    <div>Catégorie : {post.catNom}</div>
                    <div>{post.prix.toFixed(2)}€</div>
                </div>
                

            )
        })
    }

    render() {
        return (
            <div>
                <h1>Liste des Articles</h1>
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

export default Article