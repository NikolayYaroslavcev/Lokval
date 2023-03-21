import React from 'react';
import {MainWrapper} from "../home/main-style";
import {CatalogBackground} from "./CatalogBackground/CatalogBackground";
import {Kinds} from "./Kinds/Kinds";
export const Catalog = () => {
    return (
        <MainWrapper>
            <CatalogBackground/>
            <Kinds/>
        </MainWrapper>
    );
};


