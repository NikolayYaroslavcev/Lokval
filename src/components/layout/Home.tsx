import React from 'react';
import {Header} from './header/Header';
import {StyleWrapper} from './style-layout';
import {Footer} from "./footer/Footer";
import {Outlet} from 'react-router-dom';


export const Layout = () => {
    return (
        <StyleWrapper>
            <Header/>
            <Outlet/>
            {/*<Main/>*/}
            <Footer/>
        </StyleWrapper>
    );
};

