import Header from "./Header";
import Searchbar from "./Searchbar";
import Trending from "./Trending";
import RecommendedHeader from "./RecommendedHeader";
import Data from "./Data/data.json";
import Entertainment from "./Entertainment";
import Heading from "./Heading";
import { useState, useEffect } from "react";


function App() {

  useEffect(() => {
  const storedData = JSON.parse(localStorage.getItem("Data"));
  storedData ? setJsonData(storedData) : setJsonData(Data);
  }, []); 

  const [hasSearched, setHasSearched] = useState(false);
  const [jsonData, setJsonData] = useState(Data);
  const [width, setWidth] = useState(window.innerWidth);
  const [input, setInput] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("Home");  
  const [resultsLength, setResultsLength] = useState("");


  const updateBookmarkStatus = (updatedInfo) => {
    const updatedData = jsonData.map((item) =>
      item.title === updatedInfo.title ? updatedInfo : item
    );
    setJsonData(updatedData);
  };

  const handleClickOnNavbar = (icon) => {
      setSelectedIcon(icon);
  };

  const getResultsLength = (data) => {
    setResultsLength(data)
    console.log(data)
  };

  const handleInput = (event) => {
    setInput(event.target.value)
  };

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(jsonData));
  }, [jsonData]);

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

  const trendingMovies = jsonData.filter(object => object.thumbnail.trending);
  
  return (
    <>
      <Header 
        handleClick={handleClickOnNavbar} 
        selectedIcon={selectedIcon}
      />
      <main>
        <Searchbar 
          handleInput={handleInput} 
          selectedIcon={selectedIcon}
        />
        <Heading 
          selectedIcon={selectedIcon} 
          input={input}
        />
        {selectedIcon === "Home" && !hasSearched ? (
          <>
        <Trending 
          trendingMovies={trendingMovies} 
          screenWidth={width} 
          updateBookmarkStatus={updateBookmarkStatus}
        />
        <RecommendedHeader/>
          </>
          ) : null}
        <Entertainment 
          data={jsonData} 
          screenWidth={width} 
          input={input} 
          selectedIcon={selectedIcon} 
          updateBookmarkStatus={updateBookmarkStatus}
          getResultsLength={getResultsLength}
        />
      </main>
    </>
    
  );
};

export default App;
