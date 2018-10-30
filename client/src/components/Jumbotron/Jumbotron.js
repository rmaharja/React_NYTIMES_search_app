import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 200, clear: "both", paddingTop: 70, textAlign: "center", background:"#336699" }}
    className="jumbotron-fluid"
  >
     <h1>NY Times Article Search</h1>
     <h4> Search for articles and annotate below</h4>
     {children}
  </div>
);

export default Jumbotron;
