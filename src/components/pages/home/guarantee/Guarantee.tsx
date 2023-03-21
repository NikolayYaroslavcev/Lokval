import React from 'react';
import {GuaranteeBlock} from "./GuaranteeBlock";
import {GuaranteeData} from "./GuaranteeData";
import {GuaranteeBlockItems, GuaranteeContainer, GuaranteeTitle, GuaranteeWrapper} from "./guarantee-style";
import {StyledContainer} from "../../../layout/header/header-style";


export const Guarantee = () => {
    return (
        <GuaranteeWrapper>
            <StyledContainer>
                <GuaranteeContainer>
                    <GuaranteeTitle>
                        Выбирая нас, мы гарантируем:
                    </GuaranteeTitle>
                    <GuaranteeBlockItems>
                        {GuaranteeData.map((el) => {
                            return (
                                <GuaranteeBlock key={el.id} title={el.title} about={el.about}/>
                            )
                        })}
                    </GuaranteeBlockItems>
                </GuaranteeContainer>
            </StyledContainer>
        </GuaranteeWrapper>
    );
};

