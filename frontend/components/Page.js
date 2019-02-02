import React from 'react';
import Header from './Header';

class Page extends React.Component {
    render() {
        return(
            <section>
                <Header/>
                {this.props.children}
            </section>
        );
    }
}

export default Page;