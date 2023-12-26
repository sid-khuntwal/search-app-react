import React from 'react'
import { faker } from "@faker-js/faker";
import "./RecommendationCard.css"

const Suggestions = () => {
    return (
        <div>
            <h3>Popular Suggestions</h3>
            <p className="suggestions">{faker.commerce.productName()}</p>
            <p className="suggestions">{faker.commerce.productName()}</p>
            <p className="suggestions">{faker.commerce.productName()}</p>
            <p className="suggestions">{faker.commerce.productName()}</p>
            <p className="suggestions">{faker.commerce.productName()}</p>
        </div>
    )
}

export default Suggestions