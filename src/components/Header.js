import React from 'react'
import "./Header.css"

export default function Header() {
    return (
        <div className="container">
            <header className="header">
                <div className="logo">
                    <img className="logo-img" src="https://images-na.ssl-images-amazon.com/images/I/51f0mqq4NzL._AC_SY400_.jpg" />
                </div>
                <div className="navigation-links">
                    <ul className="links">
                        <li className="links-list">
                            <a href="#"> Home</a>
                        </li>
                        <li className="links-list">
                            <a href="#">About</a>
                        </li>
                        <li className="links-list">
                            <a href="#">Gallery</a>
                        </li>
                        <li className="links-list">
                            <a href="#">Portfolio</a>
                        </li>
                        <li className="links-list">
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}