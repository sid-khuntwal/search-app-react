import React from "react";
import { CiSearch } from "react-icons/ci";
import "./SearchBox.css";

const SearchBox = ({ recommendation, setSearchTerm }) => {

    return (
        <div className="input-box" onClick={recommendation}>
            <input placeholder="Search" onChange={(e) => {
                setSearchTerm(e.target.value);
            }}></input>
            <CiSearch id="search-icon" />
        </div>
    );
}

export default SearchBox