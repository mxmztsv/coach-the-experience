import React, {useState} from 'react'
import {Container} from "@mui/material";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import greenRoad from '../assets/img/GREEN ROAD.png'
import rereef from '../assets/img/rereef.png'
import wwf from '../assets/img/pngwing.png'
import treeNation from '../assets/img/tree-nation.png'
import cyber from '../assets/img/Cyber 1.png'


export const Charities = () => {


    return (
        <section className="charities">
            <Container>
                <h2 className="charities__title">Charities</h2>
            </Container>

            <Swiper
                spaceBetween={40}
                slidesPerView={3}
                // slidesPerView={'auto'}
                loop={false}
                centeredSlides={false}
                // setWrapperSize={true}
                grabCursor={true}

            >

                <SwiperSlide>
                    <div className="charities__card">
                        <div className="charities__card__title_row">
                            <img src={greenRoad} className="charities__card__img"/>
                            <p className="charities__card__title">GREEN ROAD</p>
                        </div>
                        <div className="charities__card__text">
                            Making waste valuable and creating real benefits with Dr. Pao's visions of Green Road in taking Thailand away from the plastic waste crisis.
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="charities__card">
                        <div className="charities__card__title_row">
                            <img src={rereef} className="charities__card__img"/>
                            <p className="charities__card__title">REREEF</p>
                        </div>
                        <div className="charities__card__text">
                            ReReef is an Environmental and Sustainability Enterprise based in Thailand with outreach in SE Asia.
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="charities__card">
                        <div className="charities__card__title_row">
                            <img src={wwf} className="charities__card__img"/>
                            <p className="charities__card__title">WWF</p>
                        </div>
                        <div className="charities__card__text">
                            Our mission is to conserve nature and reduce the most pressing threats to the diversity of life on Earth.
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="charities__card">
                        <div className="charities__card__title_row">
                            <img src={cyber} className="charities__card__img"/>
                            <p className="charities__card__title">HMONG CYBER</p>
                        </div>
                        <div className="charities__card__text">
                            Hmong communities to empower young generations by equipping them with the tools to achieve
                            their dreams.
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="charities__card">
                        <div className="charities__card__title_row">
                            <img src={treeNation} className="charities__card__img"/>
                            <p className="charities__card__title">TREE-NATION</p>
                        </div>
                        <div className="charities__card__text">
                            Tree-Nation gathers and coordinates reforestation efforts worldwide in a unique platform,
                            enabling every citizen, company and planter to take action.
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>
    )
}
