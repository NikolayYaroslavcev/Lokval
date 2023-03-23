import React, {FC} from 'react';
import {AboutColumnWrapper, AboutFlex} from "./AboutColumn-style";
import {StyledContainer} from "../../../layout/header/header-style";

type PropsType = {
    id: number
    bg_img: string
    justify: string
    align: any
    bg_text: string
}


export const AboutColumn: FC<PropsType> = ({id, bg_img, justify, align, bg_text}) => {
    return (
        <AboutColumnWrapper key={id} style={{backgroundImage: `url(${bg_img})`}}>
            <StyledContainer style={{width:"100%"}}>
                <AboutFlex style={{justifyContent: justify, textAlign: align}}>
                    {id === 1 ?<h1>{bg_text}</h1> :<p>{bg_text}</p>}
                </AboutFlex>
            </StyledContainer>
        </AboutColumnWrapper>
    );
};

