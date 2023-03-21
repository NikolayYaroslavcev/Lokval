import styled from 'styled-components';
import {PropsMenu} from './menu';

export const MenuList = styled.ul<PropsMenu>`
  z-index: 5;
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
  @media (max-width: 1469.98px) {
    column-gap: 15px;
  }
  @media (max-width: 1168.98px) {
    justify-content: center;
  }
  @media (max-width: 1086.98px) {
    left: ${({isOpenBurger}) => isOpenBurger ? '0' : '-100%'};
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    row-gap: 20px;
    overflow: auto;
    height: 100%;
    position: fixed;
    top: 0;
    padding-top: 120px;
    background: #591214;
    width: 100%;
    transition: left 0.3s;
  }
`
