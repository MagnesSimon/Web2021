import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

class Panier extends React.Component{
    constructor() {
        super();
        this.state = {
            post: [],
            offset: 0,
            data: [],
            perPage: 6,
            currentPage: 0
        }
        this.handlePageClick = this
            .handlePageClick.bind(this);
    }

    //retourne les donnéees en liste pour la pagination
    componentDidMount() {
        function ajouterAuPanier(article) {
            return function () {
                console.log("ajout " + article);
            };
        }

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
                        <button className={"ajoutAuPanier"} onClick={ajouterAuPanier(pd.id)}>ajout</button>
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

    render() {
        return(
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