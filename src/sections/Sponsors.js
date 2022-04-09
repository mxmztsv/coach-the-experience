import React, {useState} from 'react'
import {Hidden} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'

import merchBlue from '../assets/svg/merch blue.svg'
import merchOrange from '../assets/svg/merch orange.svg'
import merchGreen from '../assets/svg/merch green.svg'
import dots from "../assets/svg/scavenger-dots.svg";
import {InfoCard} from "./InfoCard";

export const Sponsors = () => {


    return (
        <section className="sponsors" id="sponsors">
            <h2 className="title">Sponsors</h2>
            <div className="activities__header__subtitle__wrapper">
                <p className="activities__header__subtitle">
                    Sponsor our event and donate to charities
                    Join our list of sponsors and use crypto to do good for the world! All our sponsors are donating 50% of the funds to charities
                </p>
            </div>
            <InfoCard/>
            {/*<div className="hunt__cards__row">*/}
            {/*    <div className="hunt__card_green">*/}
            {/*        <div className="hunt__card__row">*/}
            {/*            <p className="hunt__card__title">*/}
            {/*                50%*/}
            {/*            </p>*/}
            {/*            <div className="hunt__card__img__wrapper">*/}
            {/*                <img src={dots} className="hunt__card__img"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <p className="hunt__card__text">*/}
            {/*            find raised will go to charities*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <p className="sponsors__merch__title">Merch</p>
            <div className="activities__header__subtitle__wrapper">
                <p className="activities__header__subtitle">
                    co-branded merch
                </p>
            </div>
            <Hidden smDown>
                <div className="sponsors__cards__row">
                    <div className="sponsors__card">
                        <p className="sponsors__card__price_blue">
                            $10k
                        </p>
                        <img src={merchBlue} className="sponsors__card__img"/>
                        <div className="sponsors__card__items__row">
                            <p className="sponsors__card__items__row__item_blue">Pen</p>
                            <p className="sponsors__card__items__row__item_blue">Shirts</p>
                            <p className="sponsors__card__items__row__item_blue">Stickers</p>
                        </div>
                    </div>
                    <div className="sponsors__card">
                        <p className="sponsors__card__price_orange">
                            $25k
                        </p>
                        <img src={merchOrange} className="sponsors__card__img"/>
                        <div className="sponsors__card__items__row">
                            <p className="sponsors__card__items__row__item_orange">Bag</p>
                            <p className="sponsors__card__items__row__item_orange">Battery Pack</p>
                        </div>
                        <div className="sponsors__card__items__row">
                            <p className="sponsors__card__items__row__item_orange">Water bottles</p>
                            <p className="sponsors__card__items__row__item_orange">Notebooks</p>
                        </div>
                    </div>
                    <div className="sponsors__card">
                        <p className="sponsors__card__price_green">
                            $50k
                        </p>
                        <img src={merchGreen} className="sponsors__card__img"/>
                        <div className="sponsors__card__items__row">
                            <p className="sponsors__card__items__row__item_green">Speakers</p>
                            <p className="sponsors__card__items__row__item_green">Shirts</p>
                            <p className="sponsors__card__items__row__item_green">Hats</p>
                        </div>
                        <div className="sponsors__card__items__row">
                            <p className="sponsors__card__items__row__item_green">Phone Cases</p>
                        </div>
                    </div>
                </div>
            </Hidden>
            <Hidden smUp>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.2}
                    // slidesPerView={'auto'}
                    loop={false}
                    centeredSlides={true}
                    // setWrapperSize={true}
                    grabCursor={true}

                >
                    <SwiperSlide>
                        <div className="sponsors__card">
                            <p className="sponsors__card__price_blue">
                                $10k
                            </p>
                            <img src={merchBlue} className="sponsors__card__img"/>
                            <div className="sponsors__card__items__row">
                                <p className="sponsors__card__items__row__item_blue">Pen</p>
                                <p className="sponsors__card__items__row__item_blue">Shirts</p>
                                <p className="sponsors__card__items__row__item_blue">Stickers</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sponsors__card">
                            <p className="sponsors__card__price_orange">
                                $25k
                            </p>
                            <img src={merchOrange} className="sponsors__card__img"/>
                            <div className="sponsors__card__items__row">
                                <p className="sponsors__card__items__row__item_orange">Bag</p>
                                <p className="sponsors__card__items__row__item_orange">Battery Pack</p>
                            </div>
                            <div className="sponsors__card__items__row">
                                <p className="sponsors__card__items__row__item_orange">Water bottles</p>
                                <p className="sponsors__card__items__row__item_orange">Notebooks</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sponsors__card">
                            <p className="sponsors__card__price_green">
                                $50k
                            </p>
                            <img src={merchGreen} className="sponsors__card__img"/>
                            <div className="sponsors__card__items__row">
                                <p className="sponsors__card__items__row__item_green">Speakers</p>
                                <p className="sponsors__card__items__row__item_green">Shirts</p>
                                <p className="sponsors__card__items__row__item_green">Hats</p>
                            </div>
                            <div className="sponsors__card__items__row">
                                <p className="sponsors__card__items__row__item_green">Phone Cases</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Hidden>

        </section>
    )
}
