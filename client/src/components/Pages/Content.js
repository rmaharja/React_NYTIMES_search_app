import React, {Component} from "react";
import Search from "./Search";
import Results from "./Results";
import Saved from "./Saved";

class Content extends Component {

  render () {
    return (
      <div>
      <Search></Search>
      <Results></Results>
      <Saved></Saved>
      </div>
    )
  }
  
}

export default Content;