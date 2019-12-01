import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const HeaderComponent = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                <Link className="link header__title_link" to='/'>Zoopla</Link>
                <Link className="link header__title_link" to='/add'>Add new</Link>
            </h1>
        </header>
    );
};

export default HeaderComponent;
