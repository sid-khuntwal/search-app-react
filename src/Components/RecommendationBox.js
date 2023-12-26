import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import RecommendationCard from './RecommendationCard';
import Suggestions from './Suggestions';
import RecommendationContext from './RecommendationContext';
import { useContext } from "react";
import "./RecommendationBox.css"

const RecommendationBox = () => {
    const [recommendation, setRecommendation] = useContext(RecommendationContext);
    return (
        <div className="recommend-container">
            <div className="top">
                {" "}
                <h3>Latest Trends</h3>
                <AiOutlineClose id="close" onClick={() => setRecommendation(false)} />
            </div>
            <div id="flexy">
                <RecommendationCard />
                <RecommendationCard />
                <RecommendationCard />
                <RecommendationCard />
                <RecommendationCard />
            </div>
            <Suggestions />
        </div>
    )
}

export default RecommendationBox