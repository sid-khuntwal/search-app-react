import './App.css';
import SearchBox from './Components/SearchBox';
import logo from "./Assets/logo.jpg";

function App() {
  return (
    <div className="App">
      <div id="zevi-icon">
        <img src={logo} alt="logo" width="86px" height="45px" />
      </div>
      <div className="search-box-container">
        <SearchBox
        />
      </div>
    </div>

  );
}

export default App;
