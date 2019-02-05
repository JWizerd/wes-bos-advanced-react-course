import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

class Navigation extends React.Component {
    render() {
        return(
            <NavStyles>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/sell">
                    <a>Sell</a>
                </Link>
                <Link href="/items">
                    <a>Items</a>
                </Link>
                <Link href="/signup">
                    <a>Signup</a>
                </Link>
                <Link href="/orders">
                    <a>Orders</a>
                </Link>
                <Link href="/me">
                    <a>Account</a>
                </Link>
            </NavStyles>
        );
    }
}

export default Navigation;