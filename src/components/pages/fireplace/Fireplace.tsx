import React from 'react';
import {StyledContainer} from '../../layout/header/header-style';
import {FlexContainer} from '../home/background/background-style';
import {MainWrapper} from '../home/main-style';
import {
    BlockContent,
    BlockDescription,
    BlockImg,
    TypeBlock,
    TypeContainer, TypeSimilar,
    TypeTitle
} from '../types/type-style';
import {KindsCart, KindsCartAbout, KindsCartBlock, KindsCartSubTitle} from '../catalog/Kinds/kinds-style';
import {Link} from 'react-router-dom';
import {FireplaceBackgroundBg} from './fireplace-style';


const fireplaceArray = [
    {
        title: 'Отделка интерьера',
        path: '/images/stone/akyshinskii-izvestnyak.png',
        descriptionOne: 'Натуральный камень – один из самых красивых, практичных и экологичных отделочных материалов, используемых в интерьере. Его прочность и долговечность неоспоримы.',
        descriptionTwo: '    Цвет и фактура натурального камня способна задать настроение всему интерьеру. Отделка камнем в интерьере - известный приём дизайнеров. Эффектный внешний вид, благородство фактуры, широкая палитра цвета и практичность делают дикий и распиленный камень популярным материалом для облицовки стен. Правильно подобранный натуральный камень будет служить десятилетиями и никогда не потеряет своей привлекательности.',
        descriptionThree: '    У нас есть возможность удовлетворить потребности в камне для интерьера. Мы будем рады помочь вам.',
        similarTitle: 'Похожие товары',
        similar: [
            {
                path: '/images/fireplace/productionOne.png',
                value: 'Отделка фасадов',
                link: '/',
            },
            {
                path: '/images/fireplace/productionTwo.png',
                value: 'Отделка цоколя',
                link: '/',
            },
            {
                path: '/images/fireplace/productionThree.png',
                value: 'Отделка заборов',
                link: '/',
            },
            {
                path: '/images/fireplace/productionFour.png',
                value: 'Отделка каминов',
                link: '/',
            },
        ]
    }
]
const flexStyle = {
    direction: 'row',
    justify: 'flex-end',
    align: 'flex-end',
}

export const Fireplace = () => {
    return (
        <MainWrapper>
            <FireplaceBackgroundBg>
                <StyledContainer style={{width:"100%"}}>
                    <FlexContainer {...flexStyle} >
                        <h1>Отделка камнем</h1>
                    </FlexContainer>
                </StyledContainer>
            </FireplaceBackgroundBg>
            <StyledContainer>
                {fireplaceArray.map((el, index) => {
                    return (
                        <div key={index}>
                            <TypeContainer>
                                <TypeTitle>{el.title}</TypeTitle>
                                <TypeBlock>
                                    <BlockImg style={{backgroundImage: `url(${el.path})`}}/>
                                    <BlockContent>
                                        <BlockDescription>{el.descriptionOne}</BlockDescription>
                                        <BlockDescription>{el.descriptionTwo}</BlockDescription>
                                        <BlockDescription>{el.descriptionThree}</BlockDescription>
                                    </BlockContent>
                                </TypeBlock>
                            </TypeContainer>
                            <TypeSimilar>{el.similarTitle}</TypeSimilar>
                            <KindsCartAbout>
                                {el.similar.map((sim, s) => {
                                    return (
                                        <Link key={s} to={sim.link}>
                                            <KindsCartBlock>
                                                <KindsCart style={{backgroundImage: `url(${sim.path})`}}/>
                                                <KindsCartSubTitle>{sim.value}</KindsCartSubTitle>
                                            </KindsCartBlock>
                                        </Link>
                                    )
                                })}
                            </KindsCartAbout>
                        </div>


                    )
                })}
            </StyledContainer>
        </MainWrapper>
    );
};

