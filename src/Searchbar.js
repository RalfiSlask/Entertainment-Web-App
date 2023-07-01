import logoSearch from "./assets/icon-search.svg";
import { useState, useEffect } from "react";


const Searchbar = ( {handleInput, selectedIcon} ) => {
    const [placeholder, setPlaceholder] = useState("");

    useEffect(() => {
        if(selectedIcon === "Home") {
            setPlaceholder("Search for movies or TV series")
        } else if(selectedIcon === "Movies") {
            setPlaceholder("Search for movies")
        } else if(selectedIcon === "Series") {
            setPlaceholder("Search for TV series")
        } else if(selectedIcon === "Bookmark") {
            setPlaceholder("Search for bookmarked shows")
        }
    }, [selectedIcon]);

    
    return ( 
        <form>
            <img src={logoSearch} alt="search logo"/>
            <input onInput={handleInput} className="home--input" type="text" spellCheck="false" placeholder={placeholder}></input>
        </form>
     );
};
 
export default Searchbar;