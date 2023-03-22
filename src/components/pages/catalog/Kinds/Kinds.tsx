import React from 'react';
import {
    KindsBlockWrap,
    KindsCart,
    KindsCartAbout,
    KindsCartBlock,
    KindsCartSubTitle,
    KindsCartTitle,
    KindsWrapper
} from "./kinds-style";
import {StyledContainer} from "../../../layout/header/header-style";
import {Link} from "react-router-dom";


const kindsArray = [
    {
        title: "Виды натурального камня",
        linksList: [
            {
                path: '/images/kinds/kind/rukelsky.png',
                value: "Рукельский ракушечник",
                link: "/type",
            },
            {
                path: '/images/kinds/kind/mekiginsky.png',
                value: "Мекигинский доломит",
                link: "/type",
            },
            {
                path: '/images/kinds/kind/levashinsky.png',
                value: "Левашинский известняк",
                link: "/type",
            },
            {
                path: '/images/kinds/kind/kayaken.png',
                value: "Каякенский ракушечник",
                link: "/type",
            },
            {
                path: '/images/kinds/kind/derbensky.png',
                value: "Дербенский ракушечник",
                link: "/type",
            },
            {
                path: '/images/kinds/kind/akushinsky.png',
                value: "Акушинский известняк",
                link: "/type",
            },
            {
                path: '/images/kinds/kind/frikian.png',
                value: "Фрикский ракушечник",
                link: "/type",
            },
            {
                path: '/images/kinds/kind/gelinbatan.png',
                value: "Гелинбатанский ракушечник",
                link: "/type",
            },
        ],

    },
    {
        title: "Изделия из натурального камня",
        linksList: [
            {
                path: '/images/kinds/products/pilasters.png',
                value: "Пилястры",
                link: "/stone",
            },
            {
                path: '/images/kinds/products/mekiginsky.png',
                value: "Мекигинская «Лапша»",
                link: "/stone",
            },
            {
                path: '/images/kinds/products/brackets.png',
                value: "Кронштейны",
                link: "/stone",
            },
            {
                path: '/images/kinds/products/platbands.png',
                value: "Наличники",
                link: "/stone",
            },
            {
                path: '/images/kinds/products/cornices.png',
                value: "Карнизы",
                link: "/stone",
            },
            {
                path: '/images/kinds/products/tile.png',
                value: "Плитка",
                link: "/stone",
            },
            {
                path: '/images/kinds/products/balusters.png',
                value: "Балясины",
                link: "/stone",
            },
            {
                path: '/images/kinds/products/columns.png',
                value: "Колоны",
                link: "/stone",
            },
        ],
    },
    {

        title: "Отделка натуральным камнем",
        linksList: [
            {
                path: '/images/kinds/finishing/interior.png',
                value: "Отделка интерьера",
                link: "/",
            },
            {
                path: '/images/kinds/finishing/plinth.png',
                value: "Отделка цоколя",
                link: "/",
            },
            {
                path: '/images/kinds/finishing/fences.png',
                value: "Отделка заборов",
                link: "/",
            },
            {
                path: '/images/kinds/finishing/fireplaces.png',
                value: "Отделка каминов",
                link: "/",
            },
            {
                path: '/images/kinds/finishing/facade.png',
                value: "Отделка фасада",
                link: "/",
            },
            {
                path: '/images/kinds/finishing/barbecues.png',
                value: "Отделка беседок и барбекю",
                link: "/",
            },
            {
                path: '/images/kinds/finishing/walls.png',
                value: "Отделка подпорных стен",
                link: "/",
            },
        ],
    }
]


export const Kinds = () => {
    return (
        <KindsWrapper>
            <StyledContainer>
                {kindsArray.map((el, index) => {
                    return (
                        <KindsBlockWrap key={index}>
                            <KindsCartTitle>{el.title}</KindsCartTitle>
                            <KindsCartAbout>
                                {el.linksList.map((link, j) => {
                                    return (
                                        <Link key={j} to={link.link}>
                                            <KindsCartBlock>
                                                <KindsCart style={{backgroundImage: `url(${link.path})`}}/>
                                                <KindsCartSubTitle>{link.value}</KindsCartSubTitle>
                                            </KindsCartBlock>
                                        </Link>
                                    )
                                })}
                            </KindsCartAbout>
                        </KindsBlockWrap>
                    )
                })}
            </StyledContainer>
        </KindsWrapper>
    );
};

