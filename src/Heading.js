
import { useState, useEffect } from "react";

const Heading = ( {selectedIcon, input} ) => {
    const [heading, setHeading] = useState("Trending")

    const changeHeadingDependingOnPressedIcon = () => {
        if(selectedIcon === "Home") {
            setHeading("Trending");
        } else if(selectedIcon === "Movies") {
            setHeading("Movies")
        } else if(selectedIcon === "Series") {
            setHeading("TV series")
        } else if(selectedIcon === "Bookmark") {
            setHeading("Bookmarked Movies")
        }
    };

    useEffect(() => {
        if(input) {
            setHeading(`Found 2 results for ${input}`)
        } else {
            changeHeadingDependingOnPressedIcon();
        }
    }, [input, selectedIcon])
    
    return ( 
        <>
            <h1 className="result--header">{heading}</h1>
            <div className="result--container"></div>
        </>
     );
}
 
export default Heading;