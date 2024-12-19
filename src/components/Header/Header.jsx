import React, { useState } from 'react';
import './Header.css';
import logo from '../Assets/a-logo.png';
import cart_icon from '../Assets/cart.png';

const Header = () => {
    const [menu, setMenu] = useState("women");

    return (
        <div className="header">
            <ul className="header-menu">
                <li onClick={() => setMenu("women")}>
                    <p>Women</p>
                    {menu === "women" && <hr />}
                </li>
                <li onClick={() => setMenu("men")}>
                    <p>Men</p>
                    {menu === "men" && <hr />}
                </li>
                <li onClick={() => setMenu("kids")}>
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