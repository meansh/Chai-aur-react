import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">
                            <i className="material-icons">cloud</i>Movie
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/">
                                    <i className="material-icons">home</i>
                                </Link>
                            </li>

                            <li>
                                <Link to="/">
                                    <i className="material-icons">person</i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

