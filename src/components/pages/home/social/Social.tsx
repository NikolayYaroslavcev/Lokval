import React from 'react';
import {SocialWrapper, SocialMedia, NumberBlock, SocialMediaBlock} from './social-style';
import telephone from '../../../../assets/img/modal/icons/telephone.svg'
import {StyledContainer} from '../../../layout/header/header-style';
import {SocialIcons} from './SocialIcons';


export const Social = () => {
    return (
        <StyledContainer>
            <SocialWrapper>
                <SocialMedia>
                    <NumberBlock>
                        <img src={telephone} alt="telephone"/>
                        <div>
                            <a href="tel:+375296360995">+375(29)636-09-95</a>
                            <a href="tel:+375298603118">+375(29)860-31-18</a>
                        </div>
                    </NumberBlock>
                </SocialMedia>
                <SocialMedia>
                    <SocialMediaBlock>
                        <SocialIcons/>
                        <a href="mailto:info@lokval.by" target="_blank" rel="noreferrer">info@lokval.by</a>
                    </SocialMediaBlock>
                </SocialMedia>
            </SocialWrapper>
        </StyledContainer>
    );
};
