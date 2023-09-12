import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}: any) => (
    <div>
        <Header/>
        <main className={'w-fit mx-auto max-w-8xl'}>
            {children}
        </main>
        <Footer/>
    </div>
)

export default Layout