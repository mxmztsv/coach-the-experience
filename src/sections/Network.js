import React from 'react'
import {Hidden} from "@mui/material";

import photo1 from '../assets/img/slider_network/Brad Eqifi.jpeg'
import photo2 from '../assets/img/slider_network/Chris Token events.jpeg'
import photo3 from '../assets/img/slider_network/Cyrus Shopx.jpeg'
import photo4 from '../assets/img/slider_network/Graham FreeWay.jpeg'
import photo5 from '../assets/img/slider_network/James Finxflo.jpeg'
import photo6 from '../assets/img/slider_network/Julian Ixswap.jpeg'
import photo7 from '../assets/img/slider_network/Mathew Avarta.jpeg'
import photo8 from '../assets/img/slider_network/Saeed Sheesha Finance .jpeg'
import photo9 from '../assets/img/slider_network/Simon Elumia.jpeg'
import photo10 from '../assets/img/slider_network/Tim Yield App.jpeg'
// Import Swiper React components
import {A11y, Navigation, Pagination, Scrollbar} from 'swiper';


import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Network = () => {


    return (
        <section className="network">
            <h2 className="title">Your Network Is Your Net Worth!</h2>
            <div className="activities__header__subtitle__wrapper">
                <p className="activities__header__subtitle">
                    The goal is to make memories and relationships that last a lifetime. From beach parties, to poker
                    nights, chilled conversations to comedy nights, we want to create connections and experiences that
                    will leave you saying <span className='network__text_accent'>EPIC!</span>
                </p>
            </div>
            <Hidden mdDown>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={1.5}
                    loop={true}
                    centeredSlides={true}
                    setWrapperSize={true}
                    grabCursor={true}
                >
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo1} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo2} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo3} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo4} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo5} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo6} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo7} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo8} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo9} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo10} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </Hidden>
            <Hidden mdUp>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    spaceBetween={10}
                    slidesPerView={1.2}
                    // slidesPerView={'auto'}
                    loop={true}
                    centeredSlides={true}
                    setWrapperSize={true}
                    grabCursor={true}
                >
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo1} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo2} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo3} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo4} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo5} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo6} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo7} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo8} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo9} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo-carousel__item">
                            <img src={photo10} className="photo-carousel__item__img"/>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </Hidden>
        </section>
    )
}
