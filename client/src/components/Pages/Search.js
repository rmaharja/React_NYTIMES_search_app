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
                        <input type="text" className="form-control" id="search-term" placeholder="Search Term" 
                        onChange={props.handleInputChange}/>
                    </div>

                    {/* <div className="form-group">
                        <input type="text" className="form-control" id="number-records" placeholder="Number of Articles"
                        onChange={props.handleInputChange}/>
                    </div> */}

                    <div className="form-group">
                        <input type="text" className="form-control" id="year-initial" placeholder="Start Year" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="year-end" placeholder="End Year"
                        onChange={props.handleInputChange} />
                    </div>

                    <button type="submit" className="btn btn-primary" id="submit-search" onClick={props.handleSubmit}>
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
