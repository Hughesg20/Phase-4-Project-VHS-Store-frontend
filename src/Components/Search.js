import React from "react";

function Search({ }) {
    return (
        <div className="ui search">
            <div className="ui icon input">
                <input
                    className="prompt"
                    onChange
                    placeholder="Search for a Character"
                />
                <i className="search icon" />
            </div>
        </div>
    );
}


export default Search;