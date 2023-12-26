import './App.css';
import { useState } from "react";
import SearchBox from './Components/SearchBox';
import logo from "./Assets/logo.jpg";
import RecommendationContext from './Components/RecommendationContext';
import RecommendationBox from './Components/RecommendationBox';
import fakerData from './Assets/FakerData';

function App() {
  const [recommendation, setRecommendation] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleRecommendation = () => {
    setRecommendation(true);
  };
  return (
    <div className="App">
      <div id="zevi-icon">
        <img src={logo} alt="logo" width="86px" height="45px" />
      </div>
      <div className="search-box-container">
        <SearchBox
          recommendation={handleRecommendation}

          setSearchTerm={setSearchTerm}
        />
      </div>
      <RecommendationContext.Provider
        value={[recommendation, setRecommendation]}
      >
        {recommendation ? (
          <div id="box">
            <RecommendationBox />
          </div>
        ) : (
          <div></div>
        )}
      </RecommendationContext.Provider>
    </div>

  );
}

export default App;
