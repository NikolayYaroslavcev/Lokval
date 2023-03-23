import React, {FC} from 'react';
import {AboutTextBlock, AboutTextWrapper} from "./AboutText-style";
import {StyledContainer} from "../../../layout/header/header-style";


type PropsType = {
    id:number
    big_text:string
}
export const AboutText:FC<PropsType> = ({id,big_text}) => {
    return (
        <AboutTextWrapper>
            <StyledContainer style={{width:"100%"}}>
                <AboutTextBlock>{big_text}</AboutTextBlock>
            </StyledContainer>
        </AboutTextWrapper>
    );
};

