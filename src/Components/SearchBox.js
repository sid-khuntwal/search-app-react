import React from "react";
import { CiSearch } from "react-icons/ci";
import "./SearchBox.css";

const SearchBox = ({ recommendation, shope, setSearchTerm }) => {
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            shope();
        }
    };
    return (
        <div className="input-box" onClick={recommendation}>
            <input
                placeholder="Search"
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
                onKeyDown={(e) => handleKeyDown(e)}
            ></input>
            <CiSearch id="search-icon" onClick={shope} />
        </div>
    );
};

export default SearchBox;
