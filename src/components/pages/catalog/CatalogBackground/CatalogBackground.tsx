import React from 'react';
import {CatalogBackgroundFlex, CatalogBackgroundWrapper} from "./CatalogBackground-style";
import {StyledContainer} from "../../../layout/header/header-style";

export const CatalogBackground = () => {
    return (
        <CatalogBackgroundWrapper>
            <StyledContainer style={{width:"100%"}}>
                <CatalogBackgroundFlex>
                    <h1>Каталог товаров</h1>
                </CatalogBackgroundFlex>
            </StyledContainer>
        </CatalogBackgroundWrapper>
    );
};

