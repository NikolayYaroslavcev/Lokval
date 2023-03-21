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

// <InformationBlockItem>
//     <img src="/images/informationIcons/workers.svg" alt="workers"/>
//     <div>
//         <h2>15</h2>
//         <p>профессионеальных работников</p>
//     </div>
// </InformationBlockItem>
// <InformationBlockItem>
//     <img src="/images/informationIcons/handshake.svg" alt="handshake"/>
//     <div>
//         <h2>273</h2>
//         <p>благодарных клиентов</p>
//     </div>
// </InformationBlockItem>
// <InformationBlockItem>
//     <img src="/images/informationIcons/projects.svg" alt="projects"/>
//     <div>
//         <h2>350</h2>
//         <p>успешных проектов</p>
//     </div>
// </InformationBlockItem>