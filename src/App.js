import './App.css';
import { useState } from "react";
import SearchBox from './Components/SearchBox';
import logo from "./Assets/logo.jpg";
import RecommendationContext from './Components/RecommendationContext';
import RecommendationBox from './Components/RecommendationBox';
import fakerData from './Assets/FakerData';
import ShopContext from './Components/ShopContext';
import ProductsDisplay from './Components/ProductsDisplay';

function App() {
  const [recommendation, setRecommendation] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [shop, setShop] = useState(false);
  const handleRecommendation = () => {
    setRecommendation(true);
  };
  const handleShop = () => {
    if (searchTerm !== "") {
      if (!shop) setShop(true);
    } else alert("Enter something in the search box");
  };
  return (

    <>
      {shop ? (
        <ShopContext.Provider value={[shop, setShop]}>
          <ProductsDisplay data={fakerData} shope={handleShop} setSearchTerm={setSearchTerm} />
        </ShopContext.Provider>
      ) : (
        <div className="App">
          <div id="zevi-icon">
            <img src={logo} alt="logo" width="86px" height="45px" />
          </div>
          <div className="search-box-container">
            <SearchBox
              recommendation={handleRecommendation}
              shope={handleShop}
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
      )}
    </>




  );
}

export default App;
