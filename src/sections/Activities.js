import React from 'react'
import Container from '@mui/material/Container';
import {Hidden} from "@mui/material";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import helicopter from '../assets/img/helicopter.jpg'
import diver from '../assets/img/diver.jpg'
import culture from '../assets/img/culture.jpg'
import atv from '../assets/svg/atv.svg'
import zip from '../assets/svg/zip.svg'
import paintball from '../assets/svg/paintball.svg'
import heli from '../assets/svg/helicopter.svg'
import shoot from '../assets/svg/shoot.svg'
import lotus from '../assets/svg/lotus.svg'
import scuba from '../assets/svg/scuba-diving 1.svg'
import jet from '../assets/svg/jet-ski 1.svg'
import ski from '../assets/svg/water-ski 1.svg'
import parasailing from '../assets/svg/parasailing 1.svg'
import snorkeling from '../assets/svg/snorkeling 1.svg'
import catamaran from '../assets/svg/catamaran 1.svg'
import boat from '../assets/svg/boat 1.svg'
import lotus_blue from '../assets/svg/lotus_blue.svg'
import elephant from '../assets/svg/elephant 1.svg'
import pot from '../assets/svg/cooking-pot 1.svg'
import temple from '../assets/svg/pagoda 1.svg'
import massage from '../assets/svg/body-massage 1.svg'
import lotus_yellow from '../assets/svg/lotus-flower 1.svg'
import fighter from '../assets/svg/fighter 1.svg'


export const Activities = () => {


    return (
        <section className="activities">
            <div className="activities__header">
                <Hidden mdDown>
                    <Container>
                        <div className="activities__header__title__wrapper" id="activities">
                            <h2 className="title">Activities</h2>
                            <div className="activities__header__subtitle__wrapper">
                                <p className="activities__header__subtitle">
                                    The Coach K Experience is a once in a lifetime networking event, with some of the
                                    brightest
                                    minds in the Cryptocurrency and Blockchain ecosystem.
                                    We mix networking, experiences, and team building to create lasting relationships
                                    with:
                                </p>
                            </div>
                        </div>
                    </Container>
                </Hidden>
                <Hidden mdUp>
                    <Container disableGutters>
                        <div className="activities__header__title__wrapper" id="activities">
                            <h2 className="title">Activities</h2>
                            <div className="activities__header__subtitle__wrapper">
                                <p className="activities__header__subtitle">
                                    The Coach K Experience is a once in a lifetime networking event, with some of the
                                    brightest
                                    minds in the Cryptocurrency and Blockchain ecosystem.
                                    We mix networking, experiences, and team building to create lasting relationships
                                    with:
                                </p>
                            </div>
                        </div>
                    </Container>
                </Hidden>
            </div>
            <Hidden smDown>
                <Container>
                    <div className="activities__cards__row">
                        <div className="activities__card">
                            <img src={helicopter} className="activities__card__img"/>
                            <div className="activities__card__content_brown">
                                <p className="activities__card__content__title_brown">LAND</p>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_brown">
                                        <img src={atv} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">ATVing</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_brown">
                                        <img src={zip} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Zip Lining</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_brown">
                                        <img src={paintball} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Paintball</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_brown">
                                        <img src={heli} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Helicopter Tour</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_brown">
                                        <img src={shoot} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Shooting Range</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_brown">
                                        <img src={lotus} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Chill activities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="activities__card">
                            <img src={diver} className="activities__card__img"/>
                            <div className="activities__card__content_blue">
                                <p className="activities__card__content__title_blue">WATER</p>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={scuba} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Scuba Diving</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={jet} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Jet Ski Tour</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={ski} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Water Skiing</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={parasailing} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Parasailing</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={snorkeling} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Snorkeling</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={catamaran} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Catamaran Tour</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={boat} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Yacht Tour</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={lotus_blue} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Chill activities</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="activities__card">
                            <img src={culture} className="activities__card__img"/>
                            <div className="activities__card__content_yellow">
                                <p className="activities__card__content__title_yellow">CULTURE</p>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_yellow">
                                        <img src={elephant} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Elephant Sanctuary</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_yellow">
                                        <img src={pot} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Thai Cooking Class</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_yellow">
                                        <img src={temple} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Temple Visits</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_yellow">
                                        <img src={massage} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Thai Massage</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_yellow">
                                        <img src={lotus_yellow} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Chill activities</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_yellow">
                                        <img src={fighter} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Muay Thai</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </Container>
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
                        <div className="activities__card">
                            <img src={helicopter} className="activities__card__img"/>
                            <div className="activities__card__content_brown">
                                <p className="activities__card__content__title_brown">LAND</p>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_brown">
                                        <img src={atv} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">ATVing</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_brown">
                                        <img src={zip} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Zip Lining</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_brown">
                                        <img src={paintball} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Paintball</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_brown">
                                        <img src={heli} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Helicopter Tour</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_brown">
                                        <img src={shoot} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Shooting Range</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_brown">
                                        <img src={lotus} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Chill activities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="activities__card">
                            <img src={diver} className="activities__card__img"/>
                            <div className="activities__card__content_blue">
                                <p className="activities__card__content__title_blue">WATER</p>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={scuba} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Scuba Diving</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={jet} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Jet Ski Tour</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={ski} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Water Skiing</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={parasailing} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Parasailing</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={snorkeling} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Snorkeling</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={catamaran} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Catamaran Tour</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={boat} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Yacht Tour</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_blue">
                                        <img src={lotus_blue} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Chill activities</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="activities__card">
                            <img src={culture} className="activities__card__img"/>
                            <div className="activities__card__content_yellow">
                                <p className="activities__card__content__title_yellow">CULTURE</p>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_yellow">
                                        <img src={elephant} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Elephant Sanctuary</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_yellow">
                                        <img src={pot} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Thai Cooking Class</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_yellow">
                                        <img src={temple} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Temple Visits</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_yellow">
                                        <img src={massage} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Thai Massage</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_yellow">
                                        <img src={lotus_yellow} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Chill activities</p>
                                    </div>
                                </div>
                                <div className="activities__card__content__item__wrapper">
                                    <div className="activities__card__content__item_yellow">
                                        <img src={fighter} className="activities__card__content__item__img"/>
                                        <p className="activities__card__content__item__text">Muay Thai</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Hidden>

        </section>
    )
}
