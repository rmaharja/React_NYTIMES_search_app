import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Content from "./components/Pages/Content";

class App extends Component {
    render() {
        return (
            <Container>
                <Jumbotron></Jumbotron>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Content}></Route>
                        <Route component={Content}></Route>
                    </Switch>
                </Router>
            </Container>
        );
    }
}

export default App;
