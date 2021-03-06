import React from "react";
import axios from "axios";
import "./Article.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../global.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ReactPaginate from 'react-paginate';
import Panier from "../panier/Panier";
import {NavigationBarCO, NavigationBarNOCO} from "../navbar/NavigationBar";

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage : false,
            posts: [],
            offset: 0,
            data: [],
            perPage: 9,
            currentPage: 0,
            categorie: "",
            filter:[],
            value: "Tout",
            panier : [],
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }

    onChangeValue(e) {
        this.setState(
            {value: e.target.value}
        )
        this.componentDidMount()
      }

    recevoirArticle = (article) => {
        if( ! localStorage.getItem('user')){
            toast("Vous n'êtes pas connecté");
        }
        else {
            //localStorage.removeItem('panier');
            if (localStorage.getItem('panier')){
                this.panierJSON = localStorage.getItem('panier');
                this.state.panier = JSON.parse(this.panierJSON);
            }else{
                this.state.panier = [];
            }
            this.state.panier.push(article);
            localStorage.setItem('panier', JSON.stringify(this.state.panier));
            // Message de validation
            toast('Articles ajouté dans le panier !');


            return (
                <ul>
                    <h3>Mon Panier</h3>
                    <Panier monPanier={this.state.panier}/>
                </ul>
            )
        }
    }

    //retourne les donnéees en liste pour la pagination
    componentDidMount() {
        axios.get(window.url + `/articles`)
        .then(res => {
            let filter;
            if(this.state.value == 'Tout'){
                filter = res.data
            }
            else{
                filter = res.data.filter( x => x.catNom == this.state.value)
            }
            const posts = filter.map(obj => 
                ({ id: obj.art_id, nom: obj.art_nom, prix: obj.prix, catNom: obj.catNom, image: obj.image })
                );
            const slice = posts.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map(pd => <React.Fragment>
                <div>
                    <img className={"image"} src={`data:image/jpeg;base64,${pd.image}`} />
                    <div>{pd.nom}</div>
                    <div>Catégorie : {pd.catNom}</div>
                    <div>{pd.prix.toFixed(2)}€</div>
                    <div>
                        {this.state.showMessage && <p>Article ajouté avec succès</p>}
                        <button className='btn btn-info' onClick={() => this.recevoirArticle(pd)}>
                            Ajouter au panier</button>
                    </div>
                </div>
            </React.Fragment>)


            this.setState({
                pageCount: Math.ceil(posts.length / this.state.perPage),
                
                postData
            })
            this.setState({ posts });
            this.setState({filter});
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
                <ToastContainer />
                <h1>Liste des Articles</h1>
                <div onChange={this.onChangeValue}>
                <input type="radio" value="Tout" name='categorie'/> Tout
        <input type="radio" value="viennoiserie" name='categorie'/> Viennoiserie
        <input type="radio" value="pain" name='categorie'/> Pain
        <input type="radio" value="pâtisserie" name='categorie'/> Pâtisserie
      </div>
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
