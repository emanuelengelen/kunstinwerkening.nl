import React from 'react';
import '../styles/main.scss';

import Header from 'components/organisms/Header/Header';

const _App = ({ Component, pageProps }) => {
    return (
        <main>
            <Header />

            <Component {...pageProps} />
        </main>
    );
};

export default _App;
