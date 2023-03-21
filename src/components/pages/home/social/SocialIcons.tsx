import React, {FC} from 'react';
import {Link} from "react-router-dom";


type PropsType = {
    id: string,
    link: string,
    img: string,
    alt: string,
}

export const SocialIcons: FC<PropsType> = ({id, link, img, alt}) => {
    return (
        <li key={id}><Link to={link} key={id}><img src={img} alt={alt}/></Link></li>
    );
};

export default SocialIcons;