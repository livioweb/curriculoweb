import React, { Component } from 'react';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Alert from 'react-bootstrap/Alert'
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Button from 'react-bootstrap/Button'

import Teste from './components/Teste'
import Todolist from './components/Todolist'

//import logo from './logo.svg';
import './App.css';

class App extends Component {



  render() {
    return (
        <div >

          <Teste />
          <Todolist />

        </div>



    );
  }
}

export default App;
