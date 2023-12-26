import React from 'react'
import { faker } from "@faker-js/faker";
import "./RecommendationCard.css"

const RecommendationCard = () => {
    const val = faker.commerce.productName();
    return (
        <div className="card">
            <img
                id="image"
                src={faker.image.urlPicsumPhotos({
                    category: "human",
                    width: "165",
                    height: "223",
                })}
                alt="clothes"
                width="165px"
                height="223px"
            />
            <p>{val}</p>
        </div>
    )
}

export default RecommendationCard