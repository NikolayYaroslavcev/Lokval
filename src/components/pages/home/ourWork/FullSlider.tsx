import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCoverflow, Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import slider_image_1 from '../../../../assets/img/modal/slider/kamin1.png';
import slider_image_2 from '../../../../assets/img/modal/slider/kamin2.png';
import slider_image_3 from '../../../../assets/img/modal/slider/kamin3.png';
import slider_image_4 from '../../../../assets/img/modal/slider/kamin4.png';
import slider_image_5 from '../../../../assets/img/modal/slider/kamin5.png';
import left_arrow from '../../../../assets/img/modal/slider/left-arrow.svg';
import right_arrow from '../../../../assets/img/modal/slider/right-arrow.svg';
import {FullSliderWrapper} from './FullSlider-style';

export const FullSlider = () => {
    return (
        <FullSliderWrapper>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slider_image_1} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider_image_2} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider_image_3} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider_image_4} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider_image_5} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider_image_1} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider_image_2} alt="slide_image"/>
                </SwiperSlide>
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <img src={left_arrow} alt="left_arrow"/>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <img src={right_arrow} alt="right_arrow"/>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </FullSliderWrapper>
    );
};

