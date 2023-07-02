import EntertainmentContainer from "./EntertainmentContainer";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";

const Entertainment = ( {data, screenWidth, input, selectedIcon, updateBookmarkStatus} ) => {
    const [imageSize, setImageSize] = useState("small");
    const [Data, setData] = useState(data);
    const [BookmarkedMovies, setBookmarkedMovies] = useState(data);
    const [BookmarkedTvSeries, setBookmarkedTvSeries] = useState(data);

    const changeEntertainmentDependingOnCategory = () => {
        if(selectedIcon === "Home") {
            setData(data.filter(object => !object.thumbnail.trending));
        } else if(selectedIcon === "Movies") {
            setData(data.filter(object => object.category === "Movie"))
        } else if(selectedIcon === "Series") {
            setData(data.filter(object => object.category === "TV Series"))
        } else if(selectedIcon === "Bookmark") {
            setBookmarkedMovies(data.filter(object => object.category === "Movie" && object.isBookmarked === true));
            setBookmarkedTvSeries(data.filter(object => object.category === "TV Series" && object.isBookmarked === true));
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
            <>
            {selectedIcon === "Bookmark" ? 
            <section className="bookmarked--section">
                <h1 className="bookmarked--heading">Bookmarked Movies</h1>
                <div className="bookmarked--container">
                 
                    {BookmarkedMovies.map(movie => {
                        const unique_id = uuid();
                        const small_id = unique_id.slice(0,8)
                        return <EntertainmentContainer 
                            key={small_id} 
                            info={movie} 
                            imageSize={imageSize}
                            updateBookmarkStatus={updateBookmarkStatus}
                        />
                    })}
                </div>
                <h1 className="bookmarked--heading">Bookmarked TV Series</h1>
                <div className="bookmarked--container">
                    {BookmarkedTvSeries.map(series => {
                        const unique_id = uuid();
                        const small_id = unique_id.slice(0,8)
                        return <EntertainmentContainer 
                            key={small_id} 
                            info={series} 
                            imageSize={imageSize}
                            updateBookmarkStatus={updateBookmarkStatus}
                        />
                        })}
                </div>
            </section>
            : 
            <section className="entertainment--section">
                {Data.map(entertainment => {
                const unique_id = uuid();
                const small_id = unique_id.slice(0,8)
                return <EntertainmentContainer 
                    key={small_id} 
                    info={entertainment} 
                    imageSize={imageSize}
                    updateBookmarkStatus={updateBookmarkStatus}
                    />
                    })} 
            </section>
            }
            </>
            
     );
}
 
export default Entertainment;