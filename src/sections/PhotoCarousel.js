import React, {useState} from 'react'
import {Hidden} from "@mui/material";
// import {Swiper, SwiperSlide} from 'swiper/react/swiper-react.js';
// import 'swiper/swiper-bundle.css';

import photo1 from '../assets/img/1.jpeg'
import photo2 from '../assets/img/2.jpeg'
import photo3 from '../assets/img/3.jpeg'
import photo4 from '../assets/img/4.jpeg'
import photo5 from '../assets/img/5.jpeg'
import photo6 from '../assets/img/6.jpeg'
import photo7 from '../assets/img/7.jpeg'
import photo8 from '../assets/img/8.jpeg'
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const PhotoCarousel = () => {


    return (
        <section className="photo-carousel">
            <Hidden mdDown>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    spaceBetween={30}
                    slidesPerView={3}
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

                </Swiper>
            </Hidden>
            <Hidden mdUp>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    spaceBetween={30}
                    slidesPerView={2}
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

                </Swiper>
            </Hidden>

        </section>
    )
}
