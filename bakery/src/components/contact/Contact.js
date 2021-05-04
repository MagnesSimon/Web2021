import React from "react";
import axios from "axios";
import '../../global.js'
import { Form, Button } from 'react-bootstrap';
export class Contact extends React.Component{

    constructor(props) {
      super(props)
    }


    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url: window.url + "/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response)=>{
            alert("message envoyé !")
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <>

                <div className={'row-wrapper'}>
                    <div className="column-wrapper contact">
                        <h1>Contactez-nous !</h1>
                        <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nom et prénom</Form.Label>
                                <Form.Control type="text" required />

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Adresse mail</Form.Label>
                                <Form.Control type="email" aria-describedby="emailHelp" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Label>Voter message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Envoyer le message
                            </Button>
                        </Form>
                        {/* <form >
                        <div className="form-group">
                        <Form.Control type="text" placeholder="Nom et prénom" className={'border- bg-- border-none pl-2 w-100'} id="name" required/>
                        </div>
                        <div className="form-group">
                        <Form.Control type="email" placeholder="Mail" className={'border- bg-- border-none pl-2'} id="name" aria-describedby="emailHelp" required/>
                        </div>
                        <div className="form-group">
                        <Form.Control type="text" placeholder="Message" className={'border- bg-- border-none pl-2'} id="name" required/>
                        </div>
                        <Button variant="primary" type="submit" className={'border- bg color ml-3 shd-- border-none mt-3 p-1'}>Envoyer</Button>
                    </form> */}
                    </div>
                </div>
            </>

        );
    }
}

export default Contact
