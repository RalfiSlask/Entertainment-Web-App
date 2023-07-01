import { ReactComponent as LogoBookmarkEmpty } from "./assets/icon-bookmark-empty.svg";
import { ReactComponent as LogoBookmarkFull }from "./assets/icon-bookmark-full.svg";
import { ReactComponent as LogoMovie } from "./assets/icon-nav-movies.svg";

const TrendingMovie = ( {movieInfo, isImageLarge} ) => {

    const {category, isBookmarked, rating, thumbnail, title, year} = movieInfo;
    const imageSources = thumbnail.trending;
   
    return ( 
        <div className="trending--movie">
            <img className={`image ${isImageLarge ? "image--large" : "image--small"}`} src={isImageLarge ? require(`${imageSources.large}`) : require(`${imageSources.small}`) } alt="trending movie"/>
            <div className="info--container">
                <div className="info--panel">
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
            <div className="bookmark--logo">
                {isBookmarked ? <LogoBookmarkFull /> : <LogoBookmarkEmpty className="bookmark--empty"/>}
            </div>
        </div>
     );
}
 
export default TrendingMovie;