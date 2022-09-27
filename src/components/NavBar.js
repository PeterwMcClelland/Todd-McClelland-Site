import React from "react";

function NavBar() {

    return(
        <header>
        <nav className="navbar">
        <h1>Todd McClelland</h1>
        <ul className="navpages">
            <ol hraf="#about">
            About
            </ol>
            <ol>
            Projects
            </ol>
            <ol>
            Contact
            </ol>
        </ul>
        </nav>
        </header>
        
    );
}

export default NavBar;