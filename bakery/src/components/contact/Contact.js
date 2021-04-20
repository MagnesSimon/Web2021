import React from "react";
import axios from "axios";
export class Contact extends React.Component{

    constructor(props) {
      super(props)

      this.state = {
        showMessage: false
      }
    }


    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url:"http://62.210.130.145:3001/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response)=>{
            alert("message envoyé !")
        })
    }


    
    onButtonClickHandler = () => {

        this.setState({showMessage: true});

        setTimeout(() => {
            this.setState({showMessage: false});
        }, 2000);
    
       }

    
     

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <>
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <input type="text"placeholder={'Pseudo'} className={'border- bg-- border-none pl-2'} id="name" />
                        </div>
                        <div className="form-group">
                            <input type="email"placeholder={'Mail'} className={'border- bg-- border-none pl-2'} id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder={'Message'}className={'border- bg-- border-none pl-2'} rows="5" id="message"/>
                        </div>
                        <button type="submit" className={'border- bg color ml-3 shd-- border-none mt-3 p-1'}>Submit</button>
                    </form>

                    <div className="App">
     {this.state.showMessage && <p>Hi</p>}
      <button onClick={this.onButtonClickHandler}>Enter</button>
    </div>
            </>

        );
    }
}

export default Contact