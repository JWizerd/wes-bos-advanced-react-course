import React from 'react';
import Link from 'next/link';

// stateless functional component 
const Sell = props => (
    <section>
        <h1>Sell</h1>
        <Link href="/">
            <a>Home!</a>
        </Link>
    </section>
);

export default Sell;