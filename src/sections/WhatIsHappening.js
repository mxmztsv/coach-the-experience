import React, {useState} from 'react'

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import cpc from '../assets/svg/cpc.svg'
import add from '../assets/svg/add.svg'
import puzzle from '../assets/svg/puzzle.svg'
import bag from '../assets/svg/bag.svg'
import schema from '../assets/svg/schema.svg'
import cart from '../assets/svg/cart.svg'


export const WhatIsHappening = () => {


    return (
        <section className="wis">
            <h2 className="title">What Is Happening ?</h2>
            <div className="wis__text__wrapper">
                <p className="wis__text">
                    The Coach K Experience is a once in a lifetime networking event, with some of the brightest minds in the Cryptocurrency and Blockchain ecosystem.
                    We mix networking, experiences, and team building to create lasting relationships with:
                </p>
            </div>
            <div className="wis__swiper__wrapper">
            <Swiper
                spaceBetween={15}
                slidesPerView={5}
                // slidesPerView={'auto'}
                loop={true}
                centeredSlides={true}
                // setWrapperSize={true}
                grabCursor={true}

            >
                <SwiperSlide>
                    <div className="wis__card">
                        <img src={schema} className="wis__card__img"/>
                        <p className="wis__card__text">Projects</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wis__card">
                        <img src={cart} className="wis__card__img"/>
                        <p className="wis__card__text">Market Makers</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wis__card">
                        <img src={cpc} className="wis__card__img"/>
                        <p className="wis__card__text">Entrepreneurs</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wis__card">
                        <img src={add} className="wis__card__img"/>
                        <p className="wis__card__text">Influencers & Marketing</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wis__card">
                        <img src={puzzle} className="wis__card__img"/>
                        <p className="wis__card__text">Teams</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wis__card">
                        <img src={bag} className="wis__card__img"/>
                        <p className="wis__card__text">Venture Capital Funds</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
            <div className="wis__text__wrapper">
                <p className="wis__text">
                    This is the ultimate networking experience giving the opportunity of true connections with other leaders in the space all while having the time of your life.
                </p>
            </div>
            <p className="wis__greeting">
                Welcome To The Coach K Experience!
            </p>
        </section>
    )
}
