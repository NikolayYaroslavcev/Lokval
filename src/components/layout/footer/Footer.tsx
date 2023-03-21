import React from 'react';
import {
    FooterBlock,
    FooterWrapper,
    LocationBlock,
    SocialBlock,
    SocialFooterBlock,
    SocialFooterContact,
    StonesBlock
} from "./footer-style";
import {Link} from "react-router-dom";
import {StyledContainer} from "../header/header-style";
import location from '../../../assets/img/modal/footerIcons/location.svg'
import tell from '../../../assets/img/modal/footerIcons/tell.svg'
import SocialIcons from "../../pages/home/social/SocialIcons";
import {SocialData} from "../../pages/home/social/SocialData";
import row from '../../../assets/img/modal/footerIcons/row.svg'


const linksList = [
    {
        value: "Виды камня",
        link: "/"
    },
    {
        value: "Отделка камнем",
        link: "/"
    },
    {
        value: "Изделия из камня",
        link: "/"
    },
]


export const Footer = () => {
    return (
        <FooterWrapper>
            <StyledContainer>
                <FooterBlock>
                    <StonesBlock>
                        <ul>
                            {linksList.map((link, i) => (
                                <li key={i}><Link to={link.link} key={i}>{link.value}</Link></li>
                            ))}
                        </ul>
                    </StonesBlock>
                    <LocationBlock>
                        <div>
                            <img src={location} alt="location"/>
                            <p>Республика Беларусь, г. Столбцы</p>
                        </div>
                        <div>
                            <img src={tell} alt="tell"/>
                            <a href="tel:+375296960995">+375(29)636-09-95</a>
                            <a href="tel:+375298603118">+375(29)860-31-18</a>
                        </div>
                    </LocationBlock>
                    <SocialBlock>
                        <SocialFooterBlock>
                            {SocialData.map((el) => {
                                return (
                                    <SocialIcons key={el.id} id={el.id} link={el.link} img={el.img} alt={el.alt}/>
                                )
                            })}
                        </SocialFooterBlock>
                        <SocialFooterContact>
                            <img src={row} alt="row"/>
                            <a href="mailto:info@lokval.by" target="_blank" rel="noreferrer">info@lokval.by</a>
                        </SocialFooterContact>
                    </SocialBlock>
                </FooterBlock>
            </StyledContainer>
        </FooterWrapper>
    );
};
