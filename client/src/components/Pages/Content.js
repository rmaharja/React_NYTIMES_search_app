import React, {Component} from "react";
import Search from "./Search";
import Results from "./Results";
import Saved from "./Saved";

class Content extends Component {

  state = {
    articleName: "",
    // articleNumber: "",
    startYear: "",
    endYear: ""
  }
  handleInputChange = (event) => {

    //Destructuring: getting name & values from event.target (More Dry than getting input for each input change individually)
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
    console.log(value);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted...");
    this.setState({
      articleName: this.state.articleName,
      // articleNumber: this.state.articleNumber,
      startYear: this.state.startYear,
      endYear: this.state.endYear
    })
  }


  render () {
    return (
      <div>
      <Search
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      ></Search>
      <Results></Results>
      <Saved></Saved>
      </div>
    )
  }
  
}

export default Content;