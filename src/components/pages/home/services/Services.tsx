import React from 'react';
import {
    ServicesGrid, ServicesItem,
    ServicesWrapper
} from './services-style';
import {StyledContainer} from '../../../layout/header/header-style';
import {Link} from 'react-router-dom';

const array = [
    {
        path: '/images/kinds.png',
        title: 'Виды камня',
        linksList: [
            {
                value: 'Акушинский известняк',
                link: '/'
            },
            {
                value: 'Гелинбатанский ракушечник',
                link: '/'
            },
            {
                value: 'Дербенский ракушечник',
                link: '/'
            },
            {
                value: 'Каякенский ракушечник',
                link: '/'
            },
            {
                value: 'Левашинский известняк',
                link: '/'
            },
            {
                value: 'Мекигинский доломит',
                link: '/'
            },
            {
                value: 'Рукельский ракушечник',
                link: '/'
            },
            {
                value: 'Чиринский известняк',
                link: '/'
            },
            {
                value: 'Фрикский ракушечник',
                link: '/'
            },
        ]
    },
    {
        path: '/images/finishing.png',
        title: 'Отделка камнем',
        linksList: [
            {
                value: 'Акушинский известняк',
                link: '/'
            },
            {
                value: 'Гелинбатанский ракушечник',
                link: '/'
            },
            {
                value: 'Дербенский ракушечник',
                link: '/'
            },
            {
                value: 'Каякенский ракушечник',
                link: '/'
            },
            {
                value: 'Левашинский известняк',
                link: '/'
            },
            {
                value: 'Мекигинский доломит',
                link: '/'
            },
            {
                value: 'Рукельский ракушечник',
                link: '/'
            },
            {
                value: 'Чиринский известняк',
                link: '/'
            },
            {
                value: 'Фрикский ракушечник',
                link: '/'
            },
        ]
    },
    {
        path: '/images/products.png',
        title: 'Изделия из камня',
        linksList: [
            {
                value: 'Акушинский известняк',
                link: '/stone'
            },
            {
                value: 'Гелинбатанский ракушечник',
                link: '/stone'
            },
            {
                value: 'Дербенский ракушечник',
                link: '/stone'
            },
            {
                value: 'Каякенский ракушечник',
                link: '/stone'
            },
            {
                value: 'Левашинский известняк',
                link: '/stone'
            },
            {
                value: 'Мекигинский доломит',
                link: '/stone'
            },
            {
                value: 'Рукельский ракушечник',
                link: '/stone'
            },
            {
                value: 'Чиринский известняк',
                link: '/stone'
            },
            {
                value: 'Фрикский ракушечник',
                link: '/stone'
            },
        ]
    },
]

export const Services = () => {
    return (
        <ServicesWrapper>
            <StyledContainer>
                <ServicesGrid>
                    {array.map((el, index) => {
                        return (
                            <ServicesItem key={index} style={{backgroundImage: `url(${el.path})`}}>
                                <span><Link to={"/stone"}></Link></span>
                                <div className="item__overlay">
                                    <h3>{el.title}</h3>
                                    <ul className="item__body">
                                        {el.linksList.map((link, j) => (
                                            <li key={j}><Link to={link.link} key={j}>{link.value}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </ServicesItem>
                        )
                    })}

                </ServicesGrid>
            </StyledContainer>
        </ServicesWrapper>
    );
};
