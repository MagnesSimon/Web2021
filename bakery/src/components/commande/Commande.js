import React from "react";
import axios from "axios";
import "./Commande.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ReactBootStrap from 'react-bootstrap'


class Commande extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/articles`)
            .then(res => {
                const posts = res.data.map(obj => ({ nom: obj.art_nom, prix: obj.prix, catNom: obj.catNom, image: obj.image }));
                this.setState({ posts });
            });
    }

    renderTableData() {
        return this.state.posts.map((post, index) => {
            return (
                <tr key={index}>
                    <td><img className={"image"} src={`data:image/jpeg;base64,${post.image}`} /></td>
                    <td>{post.nom}</td>
                    <td>{post.prix.toFixed(2)} €</td>
                    <td>{post.catNom}</td>
                    <td><ReactBootStrap.Button variant={'primary'}>Commander</ReactBootStrap.Button></td>
                </tr>

            )
        })
    }

    render() {
        return (
            <header className="header-commande">
                <h1>Page de commande</h1>
                <div>
                    <ReactBootStrap.Table bordered hover>
                        <thead>
                            <tr>
                                <td>image</td>
                                <td>nom</td>
                                <td>prix</td>
                                <td>catégorie</td>
                                <td>commander</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </ReactBootStrap.Table>
                </div>
            </header>
        )
    }
}

export default Commande