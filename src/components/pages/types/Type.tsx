import React from 'react';
import {MainWrapper} from '../home/main-style';
import {
    BlockAdv, BlockChar,
    BlockContent,
    BlockDescription,
    BlockImg, BlockSub, TypeAbout, TypeBackgroundBg,
    TypeBlock,
    TypeContainer, TypeSimilar, TypeTitle,
} from './type-style';
import {StyledContainer} from '../../layout/header/header-style';
import {FullSlider} from '../home/ourWork/FullSlider';
import {KindsCart, KindsCartAbout, KindsCartBlock, KindsCartSubTitle} from '../catalog/Kinds/kinds-style';
import {Link} from 'react-router-dom';
import {FlexContainer} from '../home/background/background-style';


const typeArray = [
    {
        title: 'Акушинский известняк',
        path: '/images/type/imagArray/akushinsky.png',
        description: 'Акушинский известняк относится к горным породам осадочного происхождения.Добывается в горном карьере буровым многопильным способами. Является карбонатом кальция (СаСОЗ), отличается плотной однородной структурой. По цвету встречается Светлый светло-жёлтый так и бледно-серого цвета.',
        subTitle: 'Преимущества:',
        advantages: [
            {
                adOne: 'Достаточно прочный камень устойчив к механическим воздействиям.',
                adTwo: 'Повышенная адгезивность.',
                adThree: 'Не выделяет вредных веществ, что даёт возможность применения на фасадах домов, в интерьере.',
                adFour: 'Прекрасно поддаётся обработке и шлифовке.',
            }
        ],
        charTitle: 'Характеристики:',
        characteristics: [
            {
                chOne: 'Плотность 2600 кг/м3.',
                chTwo: 'Марка М 25.',
                chThree: 'Твёрдость по шкале Мооса 3.',
            }
        ],
        about: 'Выбрать для фасада акушинский известняк - это значит отдать предпочтения солидности, долговечности и красоте. Но это далеко не единственное достоинство известняка. Экологичность, простота обработки, оптимальный вес. Акушинский известняк хороший камень для облицовки фасадов его плотная структура без природных раковин и всевозможными прожилинами придаёт фасаду интересный облик на который не надоест смотреть.Также известняк используется и в интерьерном решении. Изделия из акушинского известняка разнообразны- от плитки разного формата, элементов декора и до колонн делают его более привлекательным. Используется для облицовки фасадов и других строений. Акушинский известняк востребованный камень, к тому же материал доступен по цене что делает его особенно привлекательным для заказчиков.',
        slider: [
            {
                sliderOne: '../../../../assets/img/modal/slider/kamin1.png',
                sliderTwo: '../../../../assets/img/modal/slider/kamin2.png',
                sliderThree: '../../../../assets/img/modal/slider/kamin3.png',
                sliderFour: '../../../../assets/img/modal/slider/kamin4.png',
                sliderFive: '../../../../assets/img/modal/slider/kamin5.png',
            }
        ],
        similarTitle: 'Похожие товары',
        similar: [
            {
                path: '/images/kinds/kind/derbensky.png',
                value: 'Рукельский ракушечник',
                link: '/',
            },
            {
                path: '/images/kinds/kind/mekiginsky.png',
                value: 'Мекигинский доломит',
                link: '/',
            },
            {
                path: '/images/kinds/kind/levashinsky.png',
                value: 'Левашинский известняк',
                link: '/',
            },
            {
                path: '/images/kinds/kind/kayaken.png',
                value: 'Каякенский ракушечник',
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

export const Type = () => {
        return (
            <MainWrapper>
                <TypeBackgroundBg>
                    <StyledContainer>
                        <FlexContainer {...flexStyle} >
                            <h1>Виды камня</h1>
                        </FlexContainer>
                    </StyledContainer>
                </TypeBackgroundBg>
                <StyledContainer>
                    {typeArray.map((el, index) => {
                        return (
                            <TypeContainer key={index}>
                                <TypeTitle>{el.title}</TypeTitle>
                                <TypeBlock>
                                    <BlockImg style={{backgroundImage: `url(${el.path})`}}/>
                                    <BlockContent>
                                        <BlockDescription>{el.description}</BlockDescription>
                                        <BlockSub>{el.subTitle}</BlockSub>
                                        {el.advantages.map((adv, j) => {
                                            return (
                                                <BlockAdv key={j}>
                                                    <li><a href="#">{adv.adOne}</a></li>
                                                    <li><a href="#">{adv.adTwo}</a></li>
                                                    <li><a href="#">{adv.adThree}</a></li>
                                                    <li><a href="#">{adv.adFour}</a></li>
                                                </BlockAdv>
                                            )
                                        })}
                                        <BlockSub>{el.charTitle}</BlockSub>
                                        {el.characteristics.map((char, c) => {
                                            return (
                                                <BlockChar key={c}>
                                                    <li><a href="#">{char.chOne}</a></li>
                                                    <li><a href="#">{char.chTwo}</a></li>
                                                    <li><a href="#">{char.chThree}</a></li>
                                                </BlockChar>
                                            )
                                        })}
                                    </BlockContent>
                                </TypeBlock>
                                <TypeAbout>{el.about}</TypeAbout>
                            </TypeContainer>
                        )
                    })}
                </StyledContainer>
                <FullSlider/>
                <StyledContainer>
                    {
                        typeArray.map((el, index) => {
                            return (
                                <div key={index}>
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
                        })
                    }


                </StyledContainer>
            </MainWrapper>
        )
            ;
    }
;

