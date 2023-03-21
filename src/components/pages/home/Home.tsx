import React from 'react';
import {MainWrapper} from './main-style';
import {Social} from "./social/Social";
import {Background} from "./background/Background";
import {OurWork} from "./ourWork/OurWork";
import {Guarantee} from "./guarantee/Guarantee";
import {Information} from "./information/Information";
import {Services} from "./services/Services";
import {Write} from "./write/Write";




export const Home = () => {
    return (
        <MainWrapper>
            <Background/>
            <Social/>
            <Services/>
            <Guarantee/>
            <Information/>
            <OurWork/>
            <Write/>
        </MainWrapper>
    );
};
