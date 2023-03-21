import {FC} from 'react';
import {Burger} from './style-burger';

type PropsDefault = {
    disabled: boolean
}


type StyledButton = {
    isOpenBurger: boolean
}


export type PropsButtonType = PropsDefault & StyledButton;

export type PropsBurger = Partial<PropsButtonType>

export const BurgerStyle: FC<PropsBurger> = (props) => (
    <Burger {...props} />
);
