import React from "react";

function NavBar() {

    return(
        <header>
        <nav className="navbar">
        <h1 className="title">Todd McClelland
        <p className="subtitle">Director Of Photography</p>
        </h1>
        <ul className="navpages">

            <ol><a href="#projects">Projects</a></ol>
            <ol><a href="#about">About</a></ol>
            <ol><a href="#contact">Contact</a></ol>

        </ul>
        </nav>
        </header>
        
    );
}

export default NavBar;