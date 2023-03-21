import React from 'react';
import {WriteTitle, WriteWrapper} from "./write-style";
import {StyledContainer} from "../../../layout/header/header-style";
import {WriteForm} from "./Form/WriteForm";

export const Write = () => {
    return (
        <WriteWrapper>
            <StyledContainer>
                <WriteTitle>
                    Остались вопросы? Напишите нам!
                </WriteTitle>
                <WriteForm/>
            </StyledContainer>
        </WriteWrapper>
    );
};
