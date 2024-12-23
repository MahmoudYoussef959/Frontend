import React, { useState } from 'react';
import './Header.css';
import logo from '../Assets/a-logo.png';
import cart_icon from '../Assets/cart.png';

const Header = () => {
    const [menu, setMenu] = useState("women");

    return (
        <div className="header">
            <ul className="header-menu">
                <li 
                    onClick={() => setMenu("women")}
                    data-testid={menu === "women" ? "active-category-link" : "category-link"}
                >
                    <p>Women</p>
                    {menu === "women" && <hr />}
                </li>
                <li 
                    onClick={() => setMenu("men")}
                    data-testid={menu === "men" ? "active-category-link" : "category-link"}
                >
                    <p>Men</p>
                    {menu === "men" && <hr />}
                </li>
                <li 
                    onClick={() => setMenu("kids")}
                    data-testid={menu === "kids" ? "active-category-link" : "category-link"}
                >
                    <p>Kids</p>
                    {menu === "kids" && <hr />}
                </li>
            </ul>
            <div className='header-logo'>
                <img src={logo} alt="Logo" />
            </div>
            <button className='cart-icon'>
                <img src={cart_icon} alt="cart icon" />
                <div className='cartCounter'>3</div>
            </button>
        </div>
    );
}

export default Header;
