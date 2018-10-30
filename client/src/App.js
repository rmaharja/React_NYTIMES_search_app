import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Search from "./components/Search";

class App extends Component {
    render() {
        return (
            <Container>
                <Jumbotron></Jumbotron>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Search}></Route>
                        <Route component={Search}></Route>
                    </Switch>
                </Router>
            </Container>
        );
    }
}

export default App;
