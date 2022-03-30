import React from 'react'
import {Hidden} from "@mui/material";

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import dots from '../assets/svg/scavenger-dots.svg'
import Container from "@mui/material/Container";

export const ScavengerHunt = () => {


    return (
        <section className="hunt">
            <Container>
                <h2 className="title">
                    Best Cryptocurrency Scavenger Hunt Ever!
                </h2>
                {/*<Hidden mdDown>*/}
                    <div className="hunt__cards__row">
                        {/*<div className="hunt__card_red">*/}
                        {/*    <div className="hunt__card__row">*/}
                        {/*        <p className="hunt__card__title">*/}
                        {/*            50%*/}
                        {/*        </p>*/}
                        {/*        <div className="hunt__card__img__wrapper">*/}
                        {/*            <img src={dots} className="hunt__card__img"/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <p className="hunt__card__text">*/}
                        {/*        go to social impact initiatives and charities*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        <div className="hunt__card_blue">
                            <div className="hunt__card__row">
                                <p className="hunt__card__title">
                                    40%
                                </p>
                                <div className="hunt__card__img__wrapper">
                                    <img src={dots} className="hunt__card__img"/>
                                </div>
                            </div>
                            <p className="hunt__card__text">
                                sponsor funds raised will go to the scavenger hunt
                            </p>
                        </div>
                        {/*<div className="hunt__card_green">*/}
                        {/*    <div className="hunt__card__row">*/}
                        {/*        <p className="hunt__card__title">*/}
                        {/*            10%*/}
                        {/*        </p>*/}
                        {/*        <div className="hunt__card__img__wrapper">*/}
                        {/*            <img src={dots} className="hunt__card__img"/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <p className="hunt__card__text">*/}
                        {/*        co-marketing work and branding*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                    </div>
                {/*</Hidden>*/}

                {/*<Hidden mdUp smDown>*/}
                {/*    <Swiper*/}
                {/*        spaceBetween={0}*/}
                {/*        slidesPerView={2.5}*/}
                {/*        // slidesPerView={'auto'}*/}
                {/*        loop={false}*/}
                {/*        centeredSlides={false}*/}
                {/*        // setWrapperSize={true}*/}
                {/*        grabCursor={true}*/}

                {/*    >*/}
                {/*        <SwiperSlide>*/}
                {/*            <div className="hunt__card_red">*/}
                {/*                <div className="hunt__card__row">*/}
                {/*                    <p className="hunt__card__title">*/}
                {/*                        50%*/}
                {/*                    </p>*/}
                {/*                    <div className="hunt__card__img__wrapper">*/}
                {/*                        <img src={dots} className="hunt__card__img"/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <p className="hunt__card__text">*/}
                {/*                    go to social impact initiatives and charities*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </SwiperSlide>*/}
                {/*        <SwiperSlide>*/}
                {/*            <div className="hunt__card_blue">*/}
                {/*                <div className="hunt__card__row">*/}
                {/*                    <p className="hunt__card__title">*/}
                {/*                        40%*/}
                {/*                    </p>*/}
                {/*                    <div className="hunt__card__img__wrapper">*/}
                {/*                        <img src={dots} className="hunt__card__img"/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <p className="hunt__card__text">*/}
                {/*                    sponsor funds raised will go to the scavenger hunt*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </SwiperSlide>*/}
                {/*        <SwiperSlide>*/}
                {/*            <div className="hunt__card_green">*/}
                {/*                <div className="hunt__card__row">*/}
                {/*                    <p className="hunt__card__title">*/}
                {/*                        10%*/}
                {/*                    </p>*/}
                {/*                    <div className="hunt__card__img__wrapper">*/}
                {/*                        <img src={dots} className="hunt__card__img"/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <p className="hunt__card__text">*/}
                {/*                    co-marketing work and branding*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </SwiperSlide>*/}
                {/*    </Swiper>*/}

                {/*</Hidden>*/}

                {/*<Hidden smUp>*/}
                {/*    <Swiper*/}
                {/*        spaceBetween={10}*/}
                {/*        slidesPerView={1.2}*/}
                {/*        // slidesPerView={'auto'}*/}
                {/*        loop={false}*/}
                {/*        centeredSlides={false}*/}
                {/*        // setWrapperSize={true}*/}
                {/*        grabCursor={true}*/}

                {/*    >*/}
                {/*        <SwiperSlide>*/}
                {/*            <div className="hunt__card_red">*/}
                {/*                <div className="hunt__card__row">*/}
                {/*                    <p className="hunt__card__title">*/}
                {/*                        50%*/}
                {/*                    </p>*/}
                {/*                    <div className="hunt__card__img__wrapper">*/}
                {/*                        <img src={dots} className="hunt__card__img"/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <p className="hunt__card__text">*/}
                {/*                    go to social impact initiatives and charities*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </SwiperSlide>*/}
                {/*        <SwiperSlide>*/}
                {/*            <div className="hunt__card_blue">*/}
                {/*                <div className="hunt__card__row">*/}
                {/*                    <p className="hunt__card__title">*/}
                {/*                        40%*/}
                {/*                    </p>*/}
                {/*                    <div className="hunt__card__img__wrapper">*/}
                {/*                        <img src={dots} className="hunt__card__img"/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <p className="hunt__card__text">*/}
                {/*                    sponsor funds raised will go to the scavenger hunt*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </SwiperSlide>*/}
                {/*        <SwiperSlide>*/}
                {/*            <div className="hunt__card_green">*/}
                {/*                <div className="hunt__card__row">*/}
                {/*                    <p className="hunt__card__title">*/}
                {/*                        10%*/}
                {/*                    </p>*/}
                {/*                    <div className="hunt__card__img__wrapper">*/}
                {/*                        <img src={dots} className="hunt__card__img"/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <p className="hunt__card__text">*/}
                {/*                    co-marketing work and branding*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </SwiperSlide>*/}
                {/*    </Swiper>*/}

                {/*</Hidden>*/}


                <div className="hunt__text__wrapper">
                    <p className="hunt__text">
                        Not only is this an incredible networking event – we will be also gamifying the experience with
                        what we expect to be the largest Crypto Scavenger Hunt. It will be a ton of fun but that's not
                        the best part!
                    </p>
                </div>
            </Container>
        </section>
    )
}
