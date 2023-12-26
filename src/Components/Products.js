import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import ProductContext from './ProductContext'
import "./Products.css"

const Products = () => {
    const [productList, setProductList] = useContext(ProductContext);
    console.log(productList)
    return (
        <div id="prodList">
            {productList.length === 0 ? (
                <div id="no-result">
                    <h1>No Results</h1>
                </div>
            ) : (
                productList.map((data, index) => (
                    <ProductCard
                        key={index}
                        prodImg={data.prodImg}
                        prodName={data.prodName}
                        price={data.price}
                        customerNumber={data.customerNumber}
                    />
                ))
            )}
        </div>
    )
}

export default Products