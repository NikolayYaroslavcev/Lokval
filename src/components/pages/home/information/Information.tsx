import React from 'react';
import {InformationWrapper, InformationItems} from './inforamation-style';
import {StyledContainer} from "../../../layout/header/header-style";
import {InformationData} from "./InformationData";
import {InformationBlock} from "./InformationBlock";


export const Information = () => {
    return (
        <InformationWrapper>
            <StyledContainer>
                <InformationItems>
                    {InformationData.map((inf) => {
                        return (
                            <InformationBlock key={inf.id} imag={inf.img} alt={inf.alt} title={inf.title}
                                              about={inf.about}/>
                        )
                    })}
                </InformationItems>
            </StyledContainer>
        </InformationWrapper>
    );
};
