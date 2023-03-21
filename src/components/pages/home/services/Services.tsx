import React from 'react';
import {
    Block, NavBlock,
    ServicesCart, ServicesFlex,
    ServicesWrapper
} from "./services-style";
import {StyledContainer} from "../../../layout/header/header-style";
import {Link} from "react-router-dom";

const array =[
    {
        path:'/images/kinds.png',
        title:'Виды камня',
        linksList:[
            {
                value:"Акушинский известняк",
                link:"/"
            },
            {
                value:"Гелинбатанский ракушечник",
                link:"/"
            },
            {
                value:"Дербенский ракушечник",
                link:"/"
            },
            {
                value:"Каякенский ракушечник",
                link:"/"
            },
            {
                value:"Левашинский известняк",
                link:"/"
            },
            {
                value:"Мекигинский доломит",
                link:"/"
            },
            {
                value:"Рукельский ракушечник",
                link:"/"
            },
            {
                value:"Чиринский известняк",
                link:"/"
            },
            {
                value:"Фрикский ракушечник",
                link:"/"
            },
            ]
    },
    {
        path:'/images/finishing.png',
        title:'Отделка камнем',
        linksList:[
            {
                value:"Акушинский известняк",
                link:"/"
            },
            {
                value:"Гелинбатанский ракушечник",
                link:"/"
            },
            {
                value:"Дербенский ракушечник",
                link:"/"
            },
            {
                value:"Каякенский ракушечник",
                link:"/"
            },
            {
                value:"Левашинский известняк",
                link:"/"
            },
            {
                value:"Мекигинский доломит",
                link:"/"
            },
            {
                value:"Рукельский ракушечник",
                link:"/"
            },
            {
                value:"Чиринский известняк",
                link:"/"
            },
            {
                value:"Фрикский ракушечник",
                link:"/"
            },
        ]
    },
    {
        path:'/images/products.png',
        title:'Изделия из камня',
        linksList:[
            {
                value:"Акушинский известняк",
                link:"/"
            },
            {
                value:"Гелинбатанский ракушечник",
                link:"/"
            },
            {
                value:"Дербенский ракушечник",
                link:"/"
            },
            {
                value:"Каякенский ракушечник",
                link:"/"
            },
            {
                value:"Левашинский известняк",
                link:"/"
            },
            {
                value:"Мекигинский доломит",
                link:"/"
            },
            {
                value:"Рукельский ракушечник",
                link:"/"
            },
            {
                value:"Чиринский известняк",
                link:"/"
            },
            {
                value:"Фрикский ракушечник",
                link:"/"
            },
        ]
    },
]

export const Services = () => {
    return (
        <ServicesWrapper>
            <StyledContainer>
                <ServicesFlex>
                    {array.map((el,index)=> {
                        return(
                            <ServicesCart key={index} style={{backgroundImage: `url(${el.path})`}} >
                                <Block>
                                    <h3>{el.title}</h3>
                                    <NavBlock>
                                        <ul>
                                            {el.linksList.map((link, j) => (
                                                <li key={j}><Link to={link.link} key={j}>{link.value}</Link></li>
                                            ))}
                                        </ul>
                                    </NavBlock>
                                </Block>
                            </ServicesCart>
                        )
                    })}
                </ServicesFlex>
            </StyledContainer>
        </ServicesWrapper>

    );
};


// import React from 'react';
// import {FinishingBlock, KindsBlock, ProductsBlock, ServicesBlocks, ServicesWrapper} from "./services-style";
// import {StyledContainer} from "../../../layout/header/header-style";
//
//
// export const Services = () => {
//     return (
//         <ServicesWrapper>
//             <StyledContainer>
//                 <ServicesBlocks>
//                     <div>
//                         <KindsBlock><h3>Виды камня</h3></KindsBlock>
//                     </div>
//                     <div>
//                         <FinishingBlock><h3>Отделка камнем</h3></FinishingBlock>
//                     </div>
//                     <div>
//                         <ProductsBlock><h3>Изделия из камня</h3></ProductsBlock>
//                     </div>
//                 </ServicesBlocks>
//             </StyledContainer>
//         </ServicesWrapper>
//
//     );
// };

