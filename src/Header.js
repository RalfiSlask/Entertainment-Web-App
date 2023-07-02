import logoCompany from "./assets/logo.svg";
import logoAvatar from "./assets/image-avatar.png";
import { ReactComponent as IconHome } from "./assets/icon-nav-home.svg";
import { ReactComponent as IconMovies } from "./assets/icon-nav-movies.svg";
import { ReactComponent as IconSeries } from "./assets/icon-nav-tv-series.svg";
import { ReactComponent as IconBookmarked } from "./assets/icon-nav-bookmark.svg";

const Header = ( {handleClick, selectedIcon} ) => {

    return ( 
        <header>
            <div className="header--container">
                <img src={logoCompany} alt="company logo" className="company--logo"/>
                <div className="navbar">
                    <IconHome className={`nav--icon ${selectedIcon === "Home" ? "active" : null}`} 
                        onClick={() => handleClick("Home")} 
                        data-name="Home"
                    />
                    <IconMovies className={`nav--icon ${selectedIcon === "Movies" ? "active" : null}`} 
                        onClick={() => handleClick("Movies")} 
                        data-name="Movies"
                    />
                    <IconSeries className={`nav--icon ${selectedIcon === "Series" ? "active" : null}`} 
                        onClick={() => handleClick("Series")} 
                        data-name="Series"
                    />
                    <IconBookmarked className={`nav--icon ${selectedIcon === "Bookmark" ? "active" : null}`} 
                        onClick={() => handleClick("Bookmark")} 
                        data-name="Bookmark"
                    />
                </div>
                <img src={logoAvatar} alt="avatar" className="avatar"/>
            </div>
        </header>
     );
}
 
export default Header;