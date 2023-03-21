import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Viber} from '../../../../assets/img/modal/icons/viber.svg'
import {ReactComponent as Telegram} from '../../../../assets/img/modal/icons/telegram.svg'
import {ReactComponent as Instagram} from '../../../../assets/img/modal/icons/instagram.svg'
import {ReactComponent as Whatsapp} from '../../../../assets/img/modal/icons/whatsapp.svg'
import {SocialIconsWrapper} from './socialIcons-style';


export const SocialIcons = () => {
    return (
        <SocialIconsWrapper>
            <li><Link to={'https://www.viber.com/ru/'}><Viber className="icons"/></Link></li>
            <li><Link to={'https://web.telegram.org/k/'}><Telegram className="icons"/></Link></li>
            <li><Link to={'https://www.instagram.com/'}><Instagram className="icons"/></Link></li>
            <li><Link to={'https://www.whatsapp.com/?lang=ru'}><Whatsapp className="icons"/></Link></li>
        </SocialIconsWrapper>
    );
};

// export default SocialIcons;
//
//
//
// import React, {FC} from 'react';
// import {Link} from "react-router-dom";
//
//
// type PropsType = {
//     id: string,
//     link: string,
//     img: any,
//     alt: string,
// }
//
// export const SocialIcons: FC<PropsType> = ({id, link, img, alt}) => {
//     return (
//         <li key={id}><Link to={link} key={id}><img src={img} alt={alt}/></Link></li>
//     );
// };
//
// export default SocialIcons;
