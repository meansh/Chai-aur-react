import React from "react"
import "./Footer.scss"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l12 s12 center-align">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and coloumns here to organize rows</p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="grey-text text-lighten-4 right">More Links</div>
            </div>
        </footer>
    )
}

export default Footer