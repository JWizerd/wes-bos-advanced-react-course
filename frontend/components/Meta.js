import Head from 'next/head';

// stateless functional component
const Meta = () => (
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="stylehseet" type="text/css"
        href="/static/nprogress.css" />
        <title>Sick Fits</title>
    </Head>
)

export default Meta;