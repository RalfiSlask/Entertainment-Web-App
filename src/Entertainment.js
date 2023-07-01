import EntertainmentContainer from "./EntertainmentContainer";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";

const Entertainment = ( {data, screenWidth, input, selectedIcon} ) => {
    const [imageSize, setImageSize] = useState("small");
    const [Data, setData] = useState(data);


    const changeEntertainmentDependingOnCategory = () => {
        if(selectedIcon === "Home") {
            setData(data.filter(object => !object.thumbnail.trending));
        } else if(selectedIcon === "Movies") {
            setData(data.filter(object => object.category === "Movie"))
        } else if(selectedIcon === "Series") {
            setData(data.filter(object => object.category === "TV Series"))
        } else if(selectedIcon === "Bookmark") {
            setData(data.filter(object => object.isBookmarked === true))
        }
    };


    useEffect(() => {
        if(input) {
            setData((prev) => prev.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase())));
        } else {
            changeEntertainmentDependingOnCategory();
        }
        
    }, [input, data, selectedIcon])
    

    useEffect(() => {
        if(screenWidth < 772) {
            setImageSize("small")
        } else if(screenWidth < 1200) {
            setImageSize("medium")
        } else {
            setImageSize("large")
        }
    }, [screenWidth]);

    return ( 
        <section className="entertainment--section">
            {Data.map(movie => {
            const unique_id = uuid();
            const small_id = unique_id.slice(0,8)
            return <EntertainmentContainer key={small_id} movieInfo={movie} imageSize={imageSize}/>})}
        </section>
     );
}
 
export default Entertainment;