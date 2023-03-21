import React, {FC} from 'react';
import { GuaranteeBlockWrapper } from './guaranteeBlock-style';

type PropsType = {
    title: string,
    about: string
}

export const GuaranteeBlock:FC<PropsType> = ({title,about}) => {
    return (
        <GuaranteeBlockWrapper>
            <h2>{title}</h2>
            <p>{about}</p>
        </GuaranteeBlockWrapper>
    );
};

