import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className='mx-auto'>
            <Component {...pageProps} />
        </div>
    )

}

export default MyApp;