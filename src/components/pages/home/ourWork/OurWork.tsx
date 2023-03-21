import React from 'react';
import {OurWorkTitle, OurWorkWrapper} from './ourWork-style';
import {FullSlider} from './FullSlider';


export const OurWork = () => {
    return (
        <OurWorkWrapper>
            <OurWorkTitle>
                Наши работы
            </OurWorkTitle>
            <FullSlider/>
        </OurWorkWrapper>
    );
};

