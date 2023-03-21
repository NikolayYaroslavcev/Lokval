import {Dialog, Menu} from '@headlessui/react';
import React, {useState} from 'react';
import {Burger} from '../../../assets/burger/style-burger';
import {MenuList} from '../../../assets/menu/style-menu';
import {ButtonClose, DialogBlock, DialogButton, ModalWrap, PopupWrap} from '../../../assets/modal/style-modal';

import logo from '../../../assets/img/modal/logo.png'

import {
    Button,
    HeaderImage,
    HeaderStyle,
    HeaderWrapper,
    MenuItem,
    StyledContainer,
} from './header-style';
import {ImageWrapper} from '../../../assets/ImegeWrap';
import {Link} from 'react-router-dom';


export const Header = () => {
    const [openBurger, setOpenBurger] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const onClickBurger = () => {
        setOpenBurger(!openBurger)
    }

    const onClickModal = () => {
        setOpenModal(true)
    }
    const onClickModalWindow = () => {
        setOpenModal(false)
    }

    return (
        <HeaderStyle>
            <StyledContainer>
                <HeaderWrapper>
                    <Link to="/">
                        <HeaderImage width="300px" height="92px" borderRadius="0">
                            <img src={logo}
                                 alt="Logo"/>
                        </HeaderImage>
                    </Link>
                    <Menu>
                        <MenuList isOpenBurger={openBurger}>
                            <MenuItem><Link to="/"></Link></MenuItem>
                            <MenuItem><Link to="/about">О компании</Link></MenuItem>
                            <MenuItem><Link to="/сategories">Категории</Link></MenuItem>
                            <MenuItem><Link to="/type">Преимущества</Link></MenuItem>
                            <MenuItem><Link to="/catalog">Каталог товаров</Link></MenuItem>
                            <div>
                                <Button onClick={onClickModal} type={'button'}>Заказать звонок</Button>
                            </div>
                        </MenuList>
                    </Menu>
                    <Dialog open={openModal} onClose={onClickModalWindow}>
                        <ModalWrap>
                            <PopupWrap>
                                <ButtonClose onClick={onClickModalWindow}>X</ButtonClose>
                                <Dialog.Panel>
                                    <DialogBlock>
                                        <div>Заказать звонок</div>
                                        <p>Оставьте заявку и наш специалист свяжется с вами в ближайшее время!</p>
                                        <input type="tel" placeholder={'+375('}/>
                                    </DialogBlock>
                                </Dialog.Panel>
                                <DialogButton>Заказать</DialogButton>
                            </PopupWrap>
                        </ModalWrap>
                    </Dialog>
                    <Burger isOpenBurger={openBurger} onClick={onClickBurger}><span/></Burger>
                </HeaderWrapper>
            </StyledContainer>
        </HeaderStyle>
    )
};
