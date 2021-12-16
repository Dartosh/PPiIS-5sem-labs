import React from 'react';
import { Link } from 'react-router-dom';
import AuthControl from "../authorization/AuthControl";

const Header: React.FC = () => (
    <header>
        <h1>
            <Link to='/'>PUBLIC LIBRARY</Link>
        </h1>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Bestsellers</Link>
                </li>
                <li>
                    <Link to='/OldButGold'>Old but gold</Link>
                </li>
                <li>
                    <Link to='/New'>New</Link>
                </li>
                <li>
                    <Link to='/TopRate'>Top rated</Link>
                </li>
            </ul>
        </nav>
        <AuthControl />
    </header>
)

export default Header;