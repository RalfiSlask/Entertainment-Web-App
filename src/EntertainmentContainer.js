import { ReactComponent as LogoBookmarkEmpty } from "./assets/icon-bookmark-empty.svg";
import { ReactComponent as LogoBookmarkFull }from "./assets/icon-bookmark-full.svg";
import { ReactComponent as LogoMovie } from "./assets/icon-nav-movies.svg";
import { useState } from "react";

const EntertainmentContainer = ( {info, imageSize, updateBookmarkStatus} ) => {
    const [isLogoBookmarked, setIsLogoBookmarked] = useState(info.isBookmarked);

    const handleClickOnBookmark = (info) => {
        const updatedInfo = { ...info, isBookmarked: !isLogoBookmarked};
        setIsLogoBookmarked(!isLogoBookmarked) 
        updateBookmarkStatus(updatedInfo)
    };

    let {category, isBookmarked, rating, thumbnail, title, year} = info;
    const imageSources = thumbnail.regular;
    let imageClass = imageSize;
    let imagePath; 

    if(imageSize === "small") {
        imagePath = imageSources.small;
    } else if(imageSize === "medium") {
        imagePath = imageSources.medium;
    } else if(imageSize === "large") {
        imagePath = imageSources.large;
    };

    return ( 
        <div className="entertainment--container">
        <img className={`imageEnt ${imageClass}`} alt="entertainment" src={require(`${imagePath}`)}/>
        <div className="entertainment--wrapper">
            <div className="entertainment--panel">
                <p>{year}</p>
                <div className="dot--container">
                    <p className="dot">.</p>
                </div>
                <LogoMovie className="logo--movie"/>
                <p>{category}</p>
                <div className="dot--container">
                    <p className="dot">.</p>
                </div>
                <p>{rating}</p>
            </div>
            <h2>{title}</h2>
        </div>
        <div className="bookmark--logo" onClick={() => {handleClickOnBookmark(info)}}>
            {isBookmarked ? <LogoBookmarkFull className="bookmark--full"/> : <LogoBookmarkEmpty className="bookmark--empty"/>}
        </div>
    </div>
     );
}
 
export default EntertainmentContainer;