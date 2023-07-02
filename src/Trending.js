import TrendingMovie from "./TrendingMovie";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";

const Trending = ( {trendingMovies, screenWidth, updateBookmarkStatus} ) => {
    const [isImageLarge, setisImageLarge] = useState(false)

    useEffect(() => {
        screenWidth < 772 ? setisImageLarge(false) : setisImageLarge(true);
    }, [screenWidth])

    return ( 
        <>
            <div className="trending--container">
                {trendingMovies.map(movie => {
                const unique_id = uuid();
                const small_id = unique_id.slice(0,8)
                return <TrendingMovie 
                    key={small_id} 
                    info={movie} 
                    isImageLarge={isImageLarge}
                    updateBookmarkStatus={updateBookmarkStatus}
                    />
                })};
            </div>
        </>
     );
}
 
export default Trending;