import React from "react";
import axios from "axios";


class Commande extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    async getDataAxios(){
        const response =
            await axios.get("http://localhost:3001/articles")
        console.log(response.data)
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/articles`)
            .then(res => {
                const posts = res.data.map(obj => ({nom: obj.art_nom, prix: obj.prix, image: obj.image}));
                this.setState({ posts });
            });
    }

    render(){
        return(
            <header className="header-commande">
                <h1>Page de commande</h1>
                <button onClick={this.getDataAxios}>click me</button>
                <ul>
                    {this.state.posts.map(function(post, index){
                            return (
                                <div key={index}>
                                    <p>{post.nom}</p>
                                    <p>{post.prix} €</p>
                                    <img src={`data:image/jpeg;base64,${post.image}`} />
                                </div>
                            )
                        }
                    )}
                </ul>
            </header>
        )
    }
}

export default Commande