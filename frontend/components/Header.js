import React from 'react';
import Navigation from './Navigation';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="bar">
                    <h1>Header</h1>
                    <Navigation/>
                </div>
            </header>
        );
    }
}

export default Header;