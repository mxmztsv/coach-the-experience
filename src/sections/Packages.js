import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Hidden} from "@mui/material";
import {TabPicker} from "../components/TabPicker";
import {PackageCard} from "../components/PackageCard";
import {PackageCardItem} from "../components/PackageCardItem";
import {TicketsCounter} from "../components/TicketsCounter";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ring from '../assets/svg/ring.svg'
import car from '../assets/svg/car.svg'
import cocktail from '../assets/svg/cocktail.svg'
import party from '../assets/svg/party.svg'
import kayak from '../assets/svg/kayak.svg'

export const Packages = () => {

    const [tab, setTab] = useState(2)

    return (
        <section className="packages" id="packages">
            <TabPicker onClick={setTab}/>
            {/*<div className="packages__bg">*/}
                <Container disableGutters>
            { tab === 1 ? (
                <div className="packages__tab">
                    <Hidden smDown>
                    <div className="packages__tab__cards-row">
                    <PackageCard type="gold" text="75 Guest Rooms (Run of House)">
                        <PackageCardItem persons={1} price="$6,000" discount="-20%" originalPrice="$4,800"/>
                        <PackageCardItem persons={2} price="$11,000" discount="-20%" originalPrice="$8,800"/>
                    </PackageCard>
                    <PackageCard type="platinum" text="40 Junior Suite in limited supply">
                        <PackageCardItem persons={1} price="$7,500" discount="-20%" originalPrice="$6,000"/>
                        <PackageCardItem persons={2} price="$12,500" discount="-20%" originalPrice="$10,000"/>
                    </PackageCard>
                    </div>
                    </Hidden>
                    <Hidden smUp>
                        <div className="swiper__wrapper">
                            <Swiper
                                spaceBetween={5}
                                slidesPerView={1.3}
                                // slidesPerView={'auto'}
                                loop={false}
                                centeredSlides={false}
                                // setWrapperSize={true}
                                grabCursor={true}

                            >
                                <SwiperSlide>
                                    <PackageCard type="gold" text="75 Guest Rooms (Run of House)">
                                        <PackageCardItem persons={1} price="$6,000" discount="-20%" originalPrice="$4,800"/>
                                        <PackageCardItem persons={2} price="$11,000" discount="-20%" originalPrice="$8,800"/>
                                    </PackageCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <PackageCard type="platinum" text="40 Junior Suite in limited supply">
                                        <PackageCardItem persons={1} price="$7,500" discount="-20%" originalPrice="$6,000"/>
                                        <PackageCardItem persons={2} price="$12,500" discount="-20%" originalPrice="$10,000"/>
                                    </PackageCard>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                    </Hidden>
                </div>
            ) : (
                <div className="packages__tab">
                    <Hidden smDown>
                    <div className="packages__tab__cards-row">
                        <PackageCard type="gold" text="75 Guest Rooms (Run of House)">
                            <PackageCardItem persons={1} price="$8,000" discount="-20%" originalPrice="$10,000"/>
                            <PackageCardItem persons={2} price="$14,400" discount="-20%" originalPrice="$18,000"/>
                        </PackageCard>
                        <PackageCard type="platinum" text="40 Junior Suite">
                            <PackageCardItem persons={1} price="$9,600" discount="-20%" originalPrice="$12,000"/>
                            <PackageCardItem persons={2} price="$16,000" discount="-20%" originalPrice="$20,000"/>
                        </PackageCard>
                        <PackageCard type="platinum" text="One bedroom suite in limited supply">
                            <PackageCardItem persons={1} price="$9,600" discount="-20%" originalPrice="$12,000"/>
                            <PackageCardItem persons={2} price="$16,000" discount="-20%" originalPrice="$20,000"/>
                        </PackageCard>
                        <PackageCard type="vip" text="10 Two Bedroom Suite in limited supply">
                            <PackageCardItem persons={1} price="$12,000" discount="-20%" originalPrice="$15,000"/>
                            <PackageCardItem persons={2} price="$20,000" discount="-20%" originalPrice="$25,000"/>
                            <PackageCardItem persons={3} price="$25,600" discount="-20%" originalPrice="$32,000"/>
                            <PackageCardItem persons={4} price="$32,000" discount="-20%" originalPrice="$40,000"/>
                        </PackageCard>
                    </div>
                    </Hidden>

                    <Hidden smUp>
                        <div className="swiper__wrapper">
                            <Swiper
                                spaceBetween={5}
                                slidesPerView={1.3}
                                // slidesPerView={'auto'}
                                loop={false}
                                centeredSlides={false}
                                // setWrapperSize={true}
                                grabCursor={true}

                            >
                                <SwiperSlide>
                                    <PackageCard type="gold" text="75 Guest Rooms (Run of House)">
                                        <PackageCardItem persons={1} price="$8,000" discount="-20%" originalPrice="$10,000"/>
                                        <PackageCardItem persons={2} price="$14,400" discount="-20%" originalPrice="$18,000"/>
                                    </PackageCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <PackageCard type="platinum" text="40 Junior Suite">
                                        <PackageCardItem persons={1} price="$9,600" discount="-20%" originalPrice="$12,000"/>
                                        <PackageCardItem persons={2} price="$16,000" discount="-20%" originalPrice="$20,000"/>
                                    </PackageCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <PackageCard type="platinum" text="One bedroom suite in limited supply">
                                        <PackageCardItem persons={1} price="$9,600" discount="-20%" originalPrice="$12,000"/>
                                        <PackageCardItem persons={2} price="$16,000" discount="-20%" originalPrice="$20,000"/>
                                    </PackageCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <PackageCard type="vip" text="10 Two Bedroom Suite in limited supply">
                                        <PackageCardItem persons={1} price="$12,000" discount="-20%" originalPrice="$15,000"/>
                                        <PackageCardItem persons={2} price="$20,000" discount="-20%" originalPrice="$25,000"/>
                                        <PackageCardItem persons={3} price="$25,600" discount="-20%" originalPrice="$32,000"/>
                                        <PackageCardItem persons={4} price="$32,000" discount="-20%" originalPrice="$40,000"/>
                                    </PackageCard>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                    </Hidden>

                </div>
            )}
            </Container>
            <TicketsCounter number={47}/>
            <Container>
                <h2 className="title">INCLUDES</h2>
                <Grid container columns={10}>
                    <Grid item md={2} xs={5}>
                        <div className="includes__row__item">
                            <img src={ring} className="includes__row__item__icon"/>
                            <p className="includes__row__item__text">
                                Hotel room + room service
                            </p>
                        </div>
                    </Grid>
                    <Grid item md={2} xs={5}>
                        <div className="includes__row__item">
                            <img src={cocktail} className="includes__row__item__icon"/>
                            <p className="includes__row__item__text">
                                All inclusive Food & Beverages including alcohol
                            </p>
                        </div>
                    </Grid>
                    <Grid item md={2} xs={5}>
                        <div className="includes__row__item">
                            <img src={kayak} className="includes__row__item__icon"/>
                            <p className="includes__row__item__text">
                                All Activities
                            </p>
                        </div>
                    </Grid>
                    <Grid item md={2} xs={5}>
                        <div className="includes__row__item">
                            <img src={party} className="includes__row__item__icon"/>
                            <p className="includes__row__item__text">
                                All Entertainment
                            </p>
                        </div>
                    </Grid>
                    <Grid item md={2} xs={10}>
                        <div className="includes__row__item">
                            <img src={car} className="includes__row__item__icon"/>
                            <p className="includes__row__item__text">
                                Transportation
                            </p>
                        </div>
                    </Grid>
                </Grid>

            </Container>
            <p className="discount-info">
                Club Members = 20% discount off face value
            </p>
            {/*</div>*/}

        </section>
    )
}
