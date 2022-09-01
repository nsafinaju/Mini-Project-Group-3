import { Link } from "react-router-dom";
import "../Menu/Menu.css"


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };

function Menu()
{
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/" style={linkStyle}>Home</Link></li>
                    <li><Link to="/about" style={linkStyle}>About</Link></li>
                    <li><Link to="/blog" style={linkStyle}>Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Menu;