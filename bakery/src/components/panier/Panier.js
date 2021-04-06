import React from "react";
import ReactPaginate from "react-paginate";
import Article from "../article/Article";

class Panier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            offset: 0,
            data: {},
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

    }

    render() {
        return (
            <div>
                <h1>Liste des Articles</h1>
                <div className='container'>
                    <button onClick={this.afficherPanier}>Afficher</button>
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