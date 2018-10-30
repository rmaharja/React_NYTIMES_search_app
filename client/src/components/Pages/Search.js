import React from "react";

const Search = (props) => (
    <div className="container-fluid">
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3>
                    <i className="fa fa-search"></i>
                    Search Below
                </h3>
            </div>
            {/* Start Form */}
            <div className="panel-body">
                <form id="form-body">
                    <div className="form-group">
                        <label for="search">Search Term:</label>
                        <input type="text" className="form-control" id="search-term" 
                        onChange={props.handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <label for="number-records">Number of Articles:</label>
                        <input type="text" className="form-control" id="number-records" 
                        onChange={props.handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <label for="year-initial">Start Year :
                        </label>
                        <input type="text" className="form-control" id="year-initial" />
                    </div>

                    <div className="form-group">
                        <label for="year-end">End Year :</label>
                        <input type="text" className="form-control" id="year-end"
                        onChange={props.handleInputChange} />
                    </div>

                    <button type="submit" className="btn btn-primary" id="submit-search">
                        <i className="fa fa-search"></i>
                        Search
                        </button>

                </form>
            </div>
        </div>
        <br></br>
    </div>
    
)

export default Search;
