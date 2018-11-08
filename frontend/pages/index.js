import React from 'react';
import Link from 'next/link';

// stateless functional component 
const Home = props => (
    <section>
        <h1>Home</h1>
        <Link href="sell">
            <a>Sell!</a>
        </Link>
    </section>
);

export default Home;