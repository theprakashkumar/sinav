import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/" className="nav__brand">
                Sinav
            </Link>
        </nav>
    );
};

export default Nav;
