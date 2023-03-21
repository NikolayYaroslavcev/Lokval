import React, {FC} from 'react';
import {AboutColumn} from "./AboutColumn/AboutColumn";
import {AboutText} from "./AboutText/AboutText";



type PropsType = {
    id:number,
    bg_img: string,
    bg_text: string,
    justify: string
    align:string
    big_text:string
}

export const AboutBlock: FC<PropsType> = ({id,bg_img, bg_text, justify,align,big_text}) => {
    return (
        <>
            <AboutColumn id={id} bg_img={bg_img} justify={justify} align={align} bg_text={bg_text}/>
            <AboutText id={id} big_text={big_text}/>
        </>
    );
};

