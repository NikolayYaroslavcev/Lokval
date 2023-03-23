import React from 'react';
import {BackgroundContainer, FlexContainer} from "./background-style";
import {StyledContainer} from "../../../layout/header/header-style";

const flexStyle = {
    direction: "row",
    justify: "flex-end",
    align: "flex-end",
}

export const Background = () => {
    return (
        <BackgroundContainer>
            <StyledContainer style={{width:"100%"}}>
                <FlexContainer {...flexStyle} >
                    <h1>Надежное и долговечное благополучие</h1>
                </FlexContainer>
            </StyledContainer>
        </BackgroundContainer>
    );
};

