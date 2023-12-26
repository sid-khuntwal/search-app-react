import React from "react";
import { CiSearch } from "react-icons/ci";
import "./SearchBox.css";

const SearchBox = () => {

    return (
        <div className="input-box" >
            <input placeholder="Search" ></input>
            <CiSearch id="search-icon" />
        </div>
    );
}

export default SearchBox