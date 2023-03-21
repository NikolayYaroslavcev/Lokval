import {FC} from 'react';
import {MenuList} from "./style-menu";

type PropsDefault = {
    disabled: boolean
}


type StyledMenu = {
    isOpenBurger: boolean
}


export type PropsButtonType = PropsDefault & StyledMenu;

export type PropsMenu = Partial<PropsButtonType>

export const MenuStyle: FC<PropsMenu> = (props) => (
    <MenuList {...props}/>
);
