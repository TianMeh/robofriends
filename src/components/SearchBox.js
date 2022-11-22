import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div>
            <input
                className="pa3 ma3 ba b--green bg-lightest-blue"
                type="text" 
                placeholder="Find a robot"
                onChange={searchChange}>
            </input>
        </div>
    )
}

export default SearchBox