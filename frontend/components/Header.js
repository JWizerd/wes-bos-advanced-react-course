import React from 'react';
import Navigation from './Navigation';
import Meta from './Meta';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Meta />
                <div className="bar">
                    <div className="bar">
                        <a href="">Sick Fits</a>
                    </div>
                    <div className="sub-bar">
                        <p>Search</p>
                    </div>
                    <div>Cart</div>
                </div>
                <Navigation />
            </header>
        );
    }
}

export default Header;