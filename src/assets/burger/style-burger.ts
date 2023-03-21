import styled from 'styled-components';
import {PropsBurger} from './burger';

export const Burger = styled.button<PropsBurger>`
  display: none;
}

@media (max-width: 1109.98px) {
  display: block;
  position: relative;
  width: 30px;
  flex: 0 0 30px;
  height: 18px;
  cursor: pointer;
  z-index: 999;

  span,
  &::before,
  &::after {
    content: "";
    transition: all 0.3s ease 0s;
    left: 0;
    position: absolute;
    width: 100%;
    height: 2px;

    @media (max-width: 1109.98px) {
      background: #fff;
    }

  }

  &::before {
    top: ${({isOpenBurger}) => isOpenBurger ? 'calc(50% - 1px)' : '0px'};
    transform: ${({isOpenBurger}) => isOpenBurger && 'rotate(-45deg)'};
  }

  &::after {
    bottom: ${({isOpenBurger}) => isOpenBurger ? 'calc(50% - 1px)' : '0px'};
    transform: ${({isOpenBurger}) => isOpenBurger && 'rotate(45deg)'};
  }

  span {
    top: calc(50% - 1px);
    transform: ${({isOpenBurger}) => isOpenBurger && 'scale(0)'};
  }
}
`
