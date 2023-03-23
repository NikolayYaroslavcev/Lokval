import React from 'react';
import {StoneBackgroundBg} from './stoneProduct-style';
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


const stoneArray = [
    {
        title: 'Балясины',
        path: '/images/stone/akyshinskii-izvestnyak.png',
        descriptionOne: 'Балясина – невысокий фигурный столбик, поддерживающий перила ограждения балконов, лестниц. Несмотря на то, что балясины и перила несут декоративную функцию, прежде всего это безопасность и удобство.',
        descriptionTwo: 'Балясины из камня – это лучший вариант по прочности и долговечности. Мы изготавливаем балясины из натурального камня различных форм и размеров, а также и перила, являющиеся неотъемлемой частью балюстрады.',
        descriptionThree: 'Балясины из камня имеют ряд преимуществ как в архитектурном решении так и прочности всей конструкции. Мы можем изготовить балясины как классическом исполнении так и в комбинированном из двух камней.',
        descriptionFour: 'Балясины и перила из камня не требуют ухода, они долговечны, экологически безвредны, а возможность использования балясин на вашем участке широка: как ограждение, так и декор. Это делает балясины востребованным у дизайнеров.',
        descriptionFive: 'У нас вы можете приобрести балясины из различных камней и многообразию форм и размеров.',
        similarTitle: 'Похожие товары',
        similar: [
            {
                path: '/images/stone/productionOne.png',
                value: 'Пилястры',
                link: '/',
            },
            {
                path: '/images/stone/productionTwo.png',
                value: 'Мекигинская «Лапша»',
                link: '/',
            },
            {
                path: '/images/stone/productionThree.png',
                value: 'Кронштейны',
                link: '/',
            },
            {
                path: '/images/stone/productionFour.png',
                value: 'Наличники',
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

export const StoneProduct = () => {
    return (
        <MainWrapper>
            <StoneBackgroundBg>
                <StyledContainer style={{width:"100%"}}>
                    <FlexContainer {...flexStyle} >
                        <h1>Изделия из камня</h1>
                    </FlexContainer>
                </StyledContainer>
            </StoneBackgroundBg>
            <StyledContainer>
                {stoneArray.map((el, index) => {
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
                                        <BlockDescription>{el.descriptionFour}</BlockDescription>
                                        <BlockDescription>{el.descriptionFive}</BlockDescription>
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

