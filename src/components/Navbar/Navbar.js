import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    // Simulates dynamic loading (like loadImages in Android code)
    useEffect(() => {
        const loadCategories = async () => {
            // Simulate an API call or fetching categories
            const fetchedCategories = [
                { id: 1, name: "T-Shirts", path: "/" },
                { id: 2, name: "Jeans", path: "/jeans" },
                { id: 3, name: "Jackets", path: "/jacket" },
            ];
            setCategories(fetchedCategories);
        };
        loadCategories();
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <button className="menu-btn" onClick={toggleMenu}>
                    <FaBars size={22} />
                    Menu
                </button>

                {/* Dynamic Dropdown */}
                {menuOpen && (
                    <div className="dropdown">
                        {categories.map((category) => (
                            <Link key={category.id} to={category.path} onClick={() => setMenuOpen(false)}>
                                {category.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <div className="navbar-center">
                <h1 className="logo">WardrobeWizard</h1>
                <input className="search" type="text" placeholder="Search for clothes..." />
            </div>

            <div className="navbar-right">
                <Link to="/wishlist" className="icon-link">
                    <FaHeart size={22} />
                </Link>
                <Link to="/cart" className="icon-link">
                    <FaShoppingCart size={22} />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
