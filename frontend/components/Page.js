import React from 'react';
import Header from './Header';
import styled, { ThemeProvider,  injectGlobal } from 'styled-components';

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3a3a3a',
    lightgrey: '#e1e1e1',
    offwhite: '#ededed',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0,0,0,0.09)'
};

injectGlobal`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2')
        format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
        font-family: 'radnika_next';
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
    a {
        text-decoration: none;
        color: ${theme.black}
    }
`;

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.red};
`;

const Inner = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2em;
`;

class Page extends React.Component {
    render() {
        return(
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Inner>
                        <Header/>
                        {this.props.children}
                    </Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;