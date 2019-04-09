import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'


class Teste extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }



    handleClick(){
        console.log("OI");
        alert("oioi");
    }

    render() {
        return (
            <Jumbotron>

                <h1>react->bootstrap</h1>
                <p>Este é um exemplo do Componente Jumbotron construído com o React-Boostrap!</p>
                <p><Button bsStyle="danger" onClick={this.handleClick} >Aprenda mais!</Button></p>

            </Jumbotron>
        );
    }
}

export default Teste;
