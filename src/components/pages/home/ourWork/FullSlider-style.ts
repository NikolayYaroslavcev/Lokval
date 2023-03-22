import styled from 'styled-components';

export const FullSliderWrapper = styled.section`

  .swiper_container {
    padding: 2rem 0;
    position: relative;
  }

  .swiper-3d {
    perspective: 764px;
  }

  .swiper-slide {
    width: 37rem;
    position: relative;
  }

  .swiper-slide-visible {
    opacity: 0.3;
  }

  .swiper-slide-prev, .swiper-slide-next {
    opacity: 0.8;
  }

  .swiper-slide-prev, .swiper-slide-next {
    transform: translateX(50%) scale(0.8);
  }

  .swiper-slide-active {
    opacity: 1;
  }


  @media (max-width: 500px) {
    .swiper_container {
      height: 47rem;
    }

    .swiper-slide {
      width: 28rem !important;
      height: 36rem !important;
    }

    .swiper-slide img {
      width: 28rem !important;
      height: 36rem !important;
    }
  }

  .swiper-slide img {
    width: 40.6rem;
    height: 25.6rem;
    object-fit: cover;
  }

  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    display: none;
  }

  @media (max-width: 425.98px) {
    height: 40rem;
  }

  .slider-controler {
    @media (min-width: 1024.98px) {
      position: relative;
      bottom: 22rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    display: none;
  }

  .slider-controler .swiper-button-next {
    left: 58% !important;
    transform: translateX(-58%) !important;
  }

  @media (max-width: 990px) {
    .slider-controler .swiper-button-next {
      left: 70% !important;
      transform: translateX(-70%) !important;
    }
  }

  @media (max-width: 450px) {
    .slider-controler .swiper-button-next {
      left: 80% !important;
      transform: translateX(-80%) !important;
    }
  }

  @media (max-width: 990px) {
    .slider-controler .swiper-button-prev {
      left: 30% !important;
      transform: translateX(-30%) !important;
    }
  }

  @media (max-width: 450px) {
    .slider-controler .swiper-button-prev {
      left: 20% !important;
      transform: translateX(-20%) !important;
    }
  }

  .slider-controler .slider-arrow {
    width: 3.5rem;
    height: 17.5rem;
    left: 42%;
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
  }

  .slider-controler .slider-arrow ion-icon {
    font-size: 2rem;
    color: #222224;
  }

  .slider-controler .slider-arrow::after {
    content: '';
  }
`
