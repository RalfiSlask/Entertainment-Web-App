
import { useState, useEffect } from "react";

const Heading = ( {selectedIcon, input, resultsLength} ) => {
    const [heading, setHeading] = useState("Trending")

    const changeHeadingDependingOnPressedIcon = () => {
        if(selectedIcon === "Home") {
            setHeading("Trending");
        } else if(selectedIcon === "Movies") {
            setHeading("Movies")
        } else if(selectedIcon === "Series") {
            setHeading("TV series")
        } else if(selectedIcon === "Bookmark") {
            setHeading("")
        }
    };

    useEffect(() => {
        if(input) {
            setHeading(`Found ${resultsLength} results for ${input}`)
        } else {
            changeHeadingDependingOnPressedIcon();
        }
    }, [input, selectedIcon, resultsLength])
    
    return ( 
        <>
            <h1 className="result--header">{heading}</h1>
        </>
     );
}
 
export default Heading;