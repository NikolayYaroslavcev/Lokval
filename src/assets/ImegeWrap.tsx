import {FC} from "react";
import { HeaderImage } from "../components/layout/header/header-style";


export type PropsImageDefault = {
    width: string,
    height: string,
    cursor: string
    borderRadius: string
    hover: boolean
}

export type PropsImg = PropsImageDefault;
export type PropsImageType = Partial<PropsImg>

export const ImageWrapper: FC<PropsImageType> = (props) => (
    <HeaderImage {...props}/>
);
