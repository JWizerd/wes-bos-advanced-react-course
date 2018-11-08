import React from 'react';
import Link from 'next/link';

class Navigation extends React.Component {
    render() {
        return(
            <section>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="sell">
                    <a>Sell</a>
                </Link>
            </section>
        );
    }
}

export default Navigation;