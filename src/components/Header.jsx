import React from "react";
import './../App.css'
import ReactLogo from './reddit-logo.svg';
function Header() {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className='nav'>
                        <div className="logo">
                            <img src={ReactLogo} alt="logo" width="120" />
                        </div>
                        <div className="search">
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="btn">
                            <button className="btn1">Log In</button>
                            <button className="btn2">Sign Up</button>
                        </div>
                    </div>
                </div>
            </header>
            <section className="header2">

            </section>
        </div>
    );

}

export default Header;