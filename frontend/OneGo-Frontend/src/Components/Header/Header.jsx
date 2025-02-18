import React from "react";
 import headerCSS from './../Header/Header.module.css'

function Header() {
    return (
        <div className={'${headerCSS.header_wrapper} section '}>
            <div className={headerCSS.imageContainer}>
            <h2>Explore The World , One Unforgattable Journey</h2>
        </div>
        </div>
    )
}


export default Header