import React, {FC} from 'react';
import {InformationBlockItem} from "./informationBlock-style";




type PropsType = {
    imag:string,
    alt:string,
    title: string,
    about: string
}

export const InformationBlock:FC<PropsType> = ({imag,alt,title,about}) => {
    return (
        <InformationBlockItem>
            <img src={imag} alt={alt}/>
            <div>
                <h2>{title}</h2>
                <p>{about}</p>
            </div>
        </InformationBlockItem>
    );
};

