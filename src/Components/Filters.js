import React, { useContext, useEffect, useState } from "react";
import "./Filter.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ProductContext from "./ProductContext";
const Filter = ({ data }) => {
    const [productList, setProductList] = useContext(ProductContext);
    const [checkedList, setCheckedList] = useState([]);
    function handleClick(e, i) {
        if (e.target.checked) {
            let newBox = e.target.value;
            setCheckedList([...checkedList, newBox]);
        } else {
            let List = checkedList.filter((res) => {
                return res !== e.target.value;
            });
            setCheckedList(List);
        }
    }
    useEffect(() => {
        if (!checkedList.includes("H&M") && checkedList.includes("Mango")) {
            const newList = data.filter((res) => {
                return res.brand === "Mango";
            });
            setProductList(newList);
        }
        if (checkedList.includes("H&M") && !checkedList.includes("Mango")) {
            const newList = data.filter((res) => {
                return res.brand === "H&M";
            });
            setProductList(newList);
        }
        if (!checkedList.includes("H&M") && !checkedList.includes("Mango")) {
            setProductList(data);
        }
        if (checkedList.includes("500") && !checkedList.includes("1000")) {
            const newList = data.filter((res) => {
                return parseInt(res.price.slice(3, res.price.length)) <= 500;
            });
            setProductList(newList);
        }
        if (checkedList.includes("1000") && !checkedList.includes("500")) {
            const newList = data.filter((res) => {
                return parseInt(res.price.slice(3, res.price.length)) >= 1000;
            });
            setProductList(newList);
        }
        if (checkedList.includes("1000") && checkedList.includes("500")) {
            const newList = data.filter((res) => {
                const price = parseInt(res.price.slice(3, res.price.length));
                return price > 1000 || price < 500;
            });
            setProductList(newList);
        }
        if (
            checkedList.includes("1000") &&
            checkedList.includes("500") &&
            checkedList.includes("Mango") &&
            !checkedList.includes("H&M")
        ) {
            const newList = data.filter((res) => {
                const price = parseInt(res.price.slice(3, res.price.length));
                return (price > 1000 || price < 500) && res.brand === "Mango";
            });
            setProductList(newList);
        }
        if (
            checkedList.includes("1000") &&
            checkedList.includes("500") &&
            !checkedList.includes("Mango") &&
            checkedList.includes("H&M")
        ) {
            const newList = data.filter((res) => {
                const price = parseInt(res.price.slice(3, res.price.length));
                return (price > 1000 || price < 500) && res.brand === "H&M";
            });
            setProductList(newList);
        }
        if (
            !checkedList.includes("1000") &&
            !checkedList.includes("500") &&
            checkedList.includes("H&M") &&
            checkedList.includes("Mango")
        ) {
            setProductList(data);
        }
        if (
            !checkedList.includes("1000") &&
            !checkedList.includes("500") &&
            !checkedList.includes("H&M") &&
            checkedList.includes("Mango")
        ) {
            const newList = data.filter((res) => {
                return res.brand === "Mango";
            });
            setProductList(newList);
        }
        if (
            !checkedList.includes("1000") &&
            !checkedList.includes("500") &&
            checkedList.includes("H&M") &&
            !checkedList.includes("Mango")
        ) {
            const newList = data.filter((res) => {
                return res.brand === "H&M";
            });
            setProductList(newList);
        }
        if (
            checkedList.includes("5") &&
            !checkedList.includes("4") &&
            !checkedList.includes("3") &&
            !checkedList.includes("2") &&
            !checkedList.includes("1")
        ) {
            const newList = productList.filter((res) => {
                return res.star === 5;
            });
            setProductList(newList);
        }
        if (
            !checkedList.includes("5") &&
            (checkedList.includes("4") ||
                checkedList.includes("3") ||
                checkedList.includes("2") ||
                checkedList.includes("1"))
        ) {
            const newList = productList.filter((res) => {
                return res.star < 5;
            });
            setProductList(newList);
        } else if (checkedList.length === 0) {
            setProductList(data);
        }
    }, [checkedList]);

    return (
        <div className="filter-container">
            <h2 id="title">Search Results</h2>
            <br></br>
            <div className="brand">
                <h3>BRAND</h3>
                <div className="flexy">
                    <input
                        key={1}
                        value={"Mango"}
                        onClick={(e) => handleClick(e, 1)}
                        className="check-box"
                        type="checkbox"
                    />
                    <label>Levis</label>
                </div>
                <div className="flexy">
                    <input
                        key={2}
                        value={"H&M"}
                        onClick={(e) => handleClick(e, 2)}
                        className="check-box"
                        type="checkbox"
                    />
                    <label>Max</label>
                </div>
            </div>
            <br />
            <hr />
            <div className="price-range">
                <h3>PRICE RANGE</h3>
                <div className="flexy">
                    <input
                        key={3}
                        value={"500"}
                        onClick={(e) => handleClick(e, 3)}
                        className="check-box"
                        type="checkbox"
                    />
                    <label>Under 500</label>
                </div>
                <div className="flexy">
                    <input
                        key={4}
                        value={"1000"}
                        onClick={(e) => handleClick(e, 4)}
                        className="check-box"
                        type="checkbox"
                    />
                    <label>1000 To 3000</label>
                </div>
            </div>
            <br />
            <hr />
            <div className="ratings">
                <h3>RATINGS</h3>
                <div className="flexy">
                    <input
                        key={5}
                        value={"5"}
                        onClick={(e) => handleClick(e, 5)}
                        className="check-box"
                        type="checkbox"
                    />
                    <label>
                        <AiFillStar className="yellow" />
                        <AiFillStar className="yellow" />
                        <AiFillStar className="yellow" />
                        <AiFillStar className="yellow" />
                        <AiFillStar className="yellow" />
                    </label>
                </div>
                <div className="flexy">
                    <input
                        key={6}
                        value={"4"}
                        onClick={(e) => handleClick(e, 6)}
                        className="check-box"
                        type="checkbox"
                    />
                    <label>
                        <AiFillStar className="yellow" />
                        <AiFillStar className="yellow" />
                        <AiFillStar className="yellow" />
                        <AiFillStar className="yellow" />
                        <AiOutlineStar />
                    </label>
                </div>
                <div className="flexy">
                    <input
                        key={7}
                        value={"3"}
                        onClick={(e) => handleClick(e, 7)}
                        className="check-box"
                        type="checkbox"
                    />
                    <label>
                        <AiFillStar className="yellow" />
                        <AiFillStar className="yellow" />
                        <AiFillStar className="yellow" />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </label>
                </div>
                <div className="flexy">
                    <input
                        key={8}
                        value={"2"}
                        onClick={(e) => handleClick(e, 8)}
                        className="check-box"
                        type="checkbox"
                    />
                    <label>
                        <AiFillStar className="yellow" />
                        <AiFillStar className="yellow" />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </label>
                </div>
                <div className="flexy">
                    <input
                        key={9}
                        value={"1"}
                        onClick={(e) => handleClick(e, 9)}
                        className="check-box"
                        type="checkbox"
                    />
                    <label>
                        <AiFillStar className="yellow" />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Filter;
