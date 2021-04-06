import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Article from "../article/Article";

class Panier extends React.Component {
    constructor(props) {
        super(props);
        //this.recevoirArticle = this.recevoirArticle.bind(this);
        this.state = {
            posts: [],
            offset: 0,
            data: {},
            perPage: 6,
            currentPage: 0,
            panier: [],
        }
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
/*
    recevoirArticle(article){
        console.log(this.article);
        const panier = article.data.map(obj => ({ id: obj.art_id, nom: obj.art_nom, prix: obj.prix, catNom: obj.catNom, image: obj.image }));
        this.setState({panier: this.state.panier})
        console.log(this.state.panier)
    }
 */

    //retourne les donnéees en liste pour la pagination
    componentDidMount() {
        fetch(`http://62.210.130.145:3001/articles`)
            .then(response => response.json())
            .then(article => {
                const data = article
                this.setState({data})
                console.log("data: " + this.state.data);
            })
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

export default Panier