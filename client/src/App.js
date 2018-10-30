import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Search from "./components/Search";
import Results from "./components/Results";
 

class App extends Component {
  render() {
    return (
      <Container>
        <Jumbotron></Jumbotron>
        <Search></Search>
        <br></br>
        <Results></Results>
        </Container>
    );
  }
}

export default App;
