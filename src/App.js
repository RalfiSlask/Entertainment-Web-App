import Header from "./Header";
import Searchbar from "./Searchbar";
import Trending from "./Trending";
import RecommendedHeader from "./RecommendedHeader";
import Data from "./Data/data.json";
import Entertainment from "./Entertainment";
import Heading from "./Heading";
import { useState, useEffect } from "react";


function App() {
  const [hasSearched, setHasSearched] = useState(false);
  const [jsonData, setJsonData] = useState(Data);
  const [width, setWidth] = useState(window.innerWidth);
  const [input, setInput] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("Home");
  
    
  const handleClickOnNavbar = (icon) => {
      setSelectedIcon(icon);
  };

  const handleInput = (event) => {
    setInput(event.target.value)
  };

  useEffect(() => {
    input !== "" ? setHasSearched(true) : setHasSearched(false);
  })

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const trendingMovies = Data.filter(object => object.thumbnail.trending);
  
  return (
    <>
      <Header handleClick={handleClickOnNavbar} selectedIcon={selectedIcon}/>
      <main>
        <Searchbar handleInput={handleInput} selectedIcon={selectedIcon}/>
        <Heading selectedIcon={selectedIcon} input={input}/>
        {selectedIcon === "Home" && !hasSearched ? <Trending trendingMovies={trendingMovies} screenWidth={width}/> : null}
        {selectedIcon === "Home" && !hasSearched ? <RecommendedHeader/> : null}
        <Entertainment data={Data} screenWidth={width} input={input} selectedIcon={selectedIcon}/>
      </main>
    </>
    
  );
};

export default App;
