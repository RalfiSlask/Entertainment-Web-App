import logoCompany from "./assets/logo.svg";
import logoAvatar from "./assets/image-avatar.png";
import { ReactComponent as IconHome } from "./assets/icon-nav-home.svg";
import { ReactComponent as IconMovies } from "./assets/icon-nav-movies.svg";
import { ReactComponent as IconSeries } from "./assets/icon-nav-tv-series.svg";
import { ReactComponent as IconBookmarked } from "./assets/icon-nav-bookmark.svg";
import { useState } from "react";

const Header = ( {handleClick, selectedIcon} ) => {

    return ( 
        <header>
            <div className="header--container">
                <img src={logoCompany} alt="company logo" className="company--logo"/>
                <div className="navbar">
                    <IconHome className="nav--icon" onClick={() => handleClick("Home")} style={{fill: `${selectedIcon === "Home" ? "white" : "#5A698F"}`}}/>
                    <IconMovies className="nav--icon" onClick={() => handleClick("Movies")} style={{fill: `${selectedIcon === "Movies" ? "white" : "#5A698F"}`}}/>
                    <IconSeries className="nav--icon" onClick={() => handleClick("Series")} style={{fill: `${selectedIcon === "Series" ? "white" : "#5A698F"}`}}/>
                    <IconBookmarked className="nav--icon" onClick={() => handleClick("Bookmark")} style={{fill: `${selectedIcon === "Bookmark" ? "white" : "#5A698F"}`}}/>
                </div>
                <img src={logoAvatar} alt="avatar" className="avatar"/>
            </div>
        </header>
     );
}
 
export default Header;