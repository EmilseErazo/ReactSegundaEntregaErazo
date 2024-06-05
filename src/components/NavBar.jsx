import { Link } from "react-router-dom";
import Products from "./Products";

const NavBar = () => {
    return (
        <nav className="nav-container">
            <ul className="nav-items">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/products">
                        Productos
                    </Link>
                </li>
                <li>
                    <Link to="/products">
                        Carrito
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;