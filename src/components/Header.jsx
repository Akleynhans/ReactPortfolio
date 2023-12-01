import React from 'react';
import Nav from "./NavBar";

function Header() {
    return (
        <div className='headerContainer'>

            <div>
                <h1 id='mainName' >
                    AMY KLEYNHANS
                </h1>
            </div>
            <Nav />
        </div>
    )
}

export default Header;