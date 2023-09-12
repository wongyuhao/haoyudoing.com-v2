import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Analytics } from '@vercel/analytics/react';

import Layout from '../components/layout'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div>
        <Layout>
            <Component {...pageProps} />
            <Analytics/>
        </Layout>
      </div>)

}
