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
]

export const Services = () => {
    return (
        <ServicesWrapper>
            <StyledContainer>
                <ServicesGrid>
                    {array.map((el, index) => {
                        return (
                            <ServicesItem key={index} style={{backgroundImage: `url(${el.path})`}}>
                                <span></span>
                                <div className="item__overlay">
                                    <h3 id="person1" aria-hidden="true">{el.title}</h3>
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
