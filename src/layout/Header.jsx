import { Link } from "react-router-dom";
import { CustomLink } from "./CustomLink.jsx";


function Header() {
    return (
        <nav className="teal lighten-2">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">React Commerce</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                </ul>
            </div>
        </nav>
    )
}


export { Header }