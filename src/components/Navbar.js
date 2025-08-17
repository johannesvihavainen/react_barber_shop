import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
            <h1>Texas Barber Shop</h1>
            <ul>
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/services" className="nav-link">Services</Link></li>
                <li><Link to="/about-us" className="nav-link">About Us</Link></li>
                <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
            </ul>
        </nav>
    )
}