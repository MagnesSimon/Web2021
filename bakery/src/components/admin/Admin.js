import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../global.js'
import Select from 'react-select';


class Admin extends React.Component {
    state = {
        articles: []
      }

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        axios.get(window.url + `/articles`)
        .then(res => {
            console.log(res.data)
            const articles = res.data.map(a => 
                <option value={a.art_id}>{a.art_nom}</option>
                )
            this.setState({articles: articles})
            })   
        }

        handleClick(){
            var value = document.getElementById('select').value
            axios.delete(window.url + '/articles/' + value)
            .then(res => {
                console.log(res.data)
            })
            alert('articles supprimé')
        };

      render() {
        return (
            <div>
        <label >Articles</label>
        <select id='select'>
            {this.state.articles}
        </select>
        <button onClick={this.handleClick}>Supprimer</button>
      </div>
        )
      }
}

export default Admin
