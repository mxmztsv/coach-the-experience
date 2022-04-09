import React from 'react'
import {Container} from "@mui/material";
import Grid from '@mui/material/Grid';
import {Hidden} from "@mui/material";

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// Import Swiper style
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'

export const Trip = () => {

    return (
        <section className="trip" id="trip-itinerary">
            <Container>
                <h2 className="title">Trip Itinerary</h2>
                <Hidden mdDown>
                    <div className="trip__wrapper">

                        <div className="trip__day">
                            <Grid container>
                                <Grid item sm={4} xs={12}>
                                    <div className="trip__day__title">
                                        <p className="trip__day__title__text">Day</p>
                                        <p className="trip__day__title__number">1</p>
                                    </div>
                                </Grid>
                                <Grid item sm={8} xs={2}>
                                    <div className="trip__day__table__wrapper">
                                        <table>
                                            <tr valign='top'>
                                                <td width="15%">
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">10:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Welcome to the event</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">15:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Cocktail party / meet and greet</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">17:30</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Welcome message from CoachK</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">18:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Sunset BBQ on the Beach</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">20:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Team building activities</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">22:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Chill beach night with fire show and live band, Karaoke</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                        <div className="trip__day">
                            <Grid container>
                                <Grid item sm={8} xs={2}>
                                    <div className="trip__day__table__wrapper">
                                        <table>
                                            <tr valign='top'>
                                                <td width="20%">
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">6:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Sunrise beach yoga</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">7:30</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Breakfast (1st clue to scavenger hunt)</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">10:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Activities</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">18:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Sunset BBQ on the beach with chill music</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">20:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Music, Drinks, Beach Vibes, Cultural Dancers, Fire Show & Fire Lantern
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </Grid>


                                <Grid item sm={4} xs={12}>
                                    <div className="trip__day__title">
                                        <p className="trip__day__title__text">Day</p>
                                        <p className="trip__day__title__number">2</p>
                                    </div>
                                </Grid>

                            </Grid>
                        </div>

                        <div className="trip__day">
                            <Grid container>
                                <Grid item sm={4} xs={12}>
                                    <div className="trip__day__title">
                                        <p className="trip__day__title__text">Day</p>
                                        <p className="trip__day__title__number">3</p>
                                    </div>
                                </Grid>
                                <Grid item sm={8} xs={2}>
                                    <div className="trip__day__table__wrapper">
                                        <table>
                                            <tr valign='top'>
                                                <td width="15%">
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">6:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Sunrise beach yoga</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">7:30</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Breakfast (2nd clue to scavenger hunt)</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">10:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Activities</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">18:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Cultural Dinner with Local Flavours</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">22:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Beach Party Night with International DJs & Fireworks</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                        <div className="trip__day">
                            <Grid container>
                                <Grid item sm={8} xs={2}>
                                    <div className="trip__day__table__wrapper">
                                        <table>
                                            <tr valign='top'>
                                                <td width="20%">
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">7:30</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Breakfast or chill / sleep in time</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">10:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Brunch</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">12:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Activities</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">19:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Big International BBQ</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">21:30</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Poker Night with Cigars, Wine or
                                                            Chill Beach Party with Karaoke and Magician</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </Grid>


                                <Grid item sm={4} xs={12}>
                                    <div className="trip__day__title">
                                        <p className="trip__day__title__text">Day</p>
                                        <p className="trip__day__title__number">4</p>
                                    </div>
                                </Grid>

                            </Grid>
                        </div>

                        <div className="trip__day">
                            <Grid container>
                                <Grid item sm={4} xs={12}>
                                    <div className="trip__day__title">
                                        <p className="trip__day__title__text">Day</p>
                                        <p className="trip__day__title__number">5</p>
                                    </div>
                                </Grid>
                                <Grid item sm={8} xs={2}>
                                    <div className="trip__day__table__wrapper">
                                        <table>
                                            <tr valign='top'>
                                                <td width="15%">
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">06:30</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Sunrise Beach Yoga</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">7:30</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Breakfast</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">10:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Activities</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">18:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Cultural Dinner with Taste of Local Flavours</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time">22:00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Beach Party with International DJs Fire Show & Fireworks</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>


                    </div>
                </Hidden>

                <Hidden mdUp>

                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1.2}
                        // slidesPerView={'auto'}
                        loop={false}
                        centeredSlides={false}
                        // setWrapperSize={true}
                        grabCursor={true}

                    >
                        <SwiperSlide>
                            <div className="trip__day">
                                <Grid container>
                                    <Grid item md={4} xs={12}>
                                        <div className="trip__day__title">
                                            <p className="trip__day__title__text">Day</p>
                                            <p className="trip__day__title__number">1</p>
                                        </div>
                                    </Grid>
                                    <Grid item md={8} xs={12}>
                                        <div className="trip__day__table__wrapper">
                                            <table>
                                                <tr valign='top'>
                                                    <td width="15%">
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">10:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Welcome to the event</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">15:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Cocktail party / meet and greet</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">17:30</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Welcome message from CoachK</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">18:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Sunset BBQ on the Beach</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">20:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Team building activities</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">22:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Chill beach night with fire show and live band, Karaoke</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="trip__day">
                                <Grid container>
                                    <Grid item md={4} xs={12}>
                                        <div className="trip__day__title">
                                            <p className="trip__day__title__text">Day</p>
                                            <p className="trip__day__title__number">2</p>
                                        </div>
                                    </Grid>
                                    <Grid item md={8} xs={12}>
                                        <div className="trip__day__table__wrapper">
                                            <table>
                                                <tr valign='top'>
                                                    <td width="20%">
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time_yellow">6:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Sunrise beach yoga</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time_yellow">7:30</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Breakfast (1st clue to scavenger hunt)</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time_yellow">10:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Activities</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time_yellow">18:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Sunset BBQ on the beach with chill music</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time_yellow">20:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Music, Drinks, Beach Vibes, Cultural Dancers, Fire Show & Fire Lantern
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </Grid>

                                </Grid>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="trip__day">
                                <Grid container>
                                    <Grid item md={4} xs={12}>
                                        <div className="trip__day__title">
                                            <p className="trip__day__title__text">Day</p>
                                            <p className="trip__day__title__number">3</p>
                                        </div>
                                    </Grid>
                                    <Grid item md={8} xs={12}>
                                        <div className="trip__day__table__wrapper">
                                            <table>
                                                <tr valign='top'>
                                                    <td width="15%">
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">6:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Sunrise beach yoga</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">7:30</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Breakfast (2nd clue to scavenger hunt)</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">10:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Activities</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">18:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Cultural Dinner with Local Flavours</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">22:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Beach Party Night with International DJs & Fireworks</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="trip__day">
                                <Grid container>
                                    <Grid item md={4} xs={12}>
                                        <div className="trip__day__title">
                                            <p className="trip__day__title__text">Day</p>
                                            <p className="trip__day__title__number">4</p>
                                        </div>
                                    </Grid>
                                    <Grid item md={8} xs={12}>
                                        <div className="trip__day__table__wrapper">
                                            <table>
                                                <tr valign='top'>
                                                    <td width="20%">
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time_yellow">7:30</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Breakfast or chill / sleep in time</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time_yellow">10:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Brunch</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time_yellow">12:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Activities</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time_yellow">19:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Big International BBQ</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time_yellow">21:30</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Poker Night with Cigars, Wine or
                                                                Chill Beach Party with Karaoke and Magician</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </Grid>

                                </Grid>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="trip__day">
                                <Grid container>
                                    <Grid item md={4} xs={12}>
                                        <div className="trip__day__title">
                                            <p className="trip__day__title__text">Day</p>
                                            <p className="trip__day__title__number">5</p>
                                        </div>
                                    </Grid>
                                    <Grid item md={8} xs={12}>
                                        <div className="trip__day__table__wrapper">
                                            <table>
                                                <tr valign='top'>
                                                    <td width="15%">
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">06:30</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Sunrise Beach Yoga</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">7:30</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Breakfast</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">10:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Activities</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">18:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Cultural Dinner with Taste of Local Flavours</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr valign='top'>
                                                    <td>
                                                        <div className="trip__day__time__wrapper">
                                                            <p className="trip__day__time">22:00</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="trip__day__event__wrapper">
                                                            <p className="trip__day__event">Beach Party with International DJs Fire Show & Fireworks</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </Hidden>

                {/*<div className="trip__wrapper">*/}

                {/*    <div className="trip__day">*/}
                {/*        <Grid container>*/}
                {/*            <Grid item sm={3} xs={12}>*/}
                {/*                <div className="trip__day__title">*/}
                {/*                    <p className="trip__day__title__text">Day</p>*/}
                {/*                    <p className="trip__day__title__number">1</p>*/}
                {/*                </div>*/}
                {/*            </Grid>*/}
                {/*            <Grid item sm={2} xs={2}>*/}
                {/*                /!*<div className="trip__day__col">*!/*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">10AM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">3PM - 5:30PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">5:30PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">6PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">8PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">10PM</p>*/}
                {/*                    </div>*/}
                {/*                /!*</div>*!/*/}
                {/*            </Grid>*/}
                {/*            <Grid item sm={7} xs={10}>*/}
                {/*                /!*<div className="trip__day__col">*!/*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Welcome to the event</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Cocktail party / meet and greet</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Welcome message from CoachK</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Sunset dinner - BBQ on beach - Welcome orientation</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Team building activities</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Chill beach night with fire show and live band, Karaoke</p>*/}
                {/*                    </div>*/}
                {/*                /!*</div>*!/*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </div>*/}

                {/*    <div className="trip__day">*/}
                {/*        <Grid container>*/}
                {/*            /!*<div className="trip__day__col">*!/*/}
                {/*                <Grid item sm={2} xs={2}>*/}
                {/*                    /!*<div className="trip__day__col">*!/*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time_yellow">6AM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time_yellow">7:30 - 10AM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time_yellow">10AM - 5PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time_yellow">6 - 8PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time_yellow">8PM - 1AM</p>*/}
                {/*                    </div>*/}
                {/*                    /!*</div>*!/*/}
                {/*                </Grid>*/}
                {/*                <Grid item sm={7} xs={10}>*/}
                {/*                    /!*<div className="trip__day__col">*!/*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Sunrise beach yoga</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Breakfast (1st clue to scavenger hunt)</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Extreme activities or Cultural or Island Hopping/snorkeling</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Sunset BBQ on the beach with chill music</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Music, drinks and vibes on the beach - cultural dancers, fire show, fire lanterns</p>*/}
                {/*                    </div>*/}
                {/*                    /!*</div>*!/*/}
                {/*                </Grid>*/}
                {/*            /!*</div>*!/*/}

                {/*            <Grid item sm={3} xs={12}>*/}
                {/*                <div className="trip__day__title">*/}
                {/*                    <p className="trip__day__title__text">Day</p>*/}
                {/*                    <p className="trip__day__title__number">2</p>*/}
                {/*                </div>*/}
                {/*            </Grid>*/}

                {/*        </Grid>*/}
                {/*    </div>*/}

                {/*    <div className="trip__day">*/}
                {/*        <Grid container>*/}
                {/*            <Grid item sm={3} xs={12}>*/}
                {/*                <div className="trip__day__title">*/}
                {/*                    <p className="trip__day__title__text">Day</p>*/}
                {/*                    <p className="trip__day__title__number">3</p>*/}
                {/*                </div>*/}
                {/*            </Grid>*/}
                {/*            <Grid item sm={2} xs={2}>*/}
                {/*                /!*<div className="trip__day__col">*!/*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">10AM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">3PM - 5:30PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">5:30PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">6PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">8PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">●</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">●</p>*/}
                {/*                    </div>*/}
                {/*                /!*</div>*!/*/}
                {/*            </Grid>*/}
                {/*            <Grid item sm={7} xs={10}>*/}
                {/*                /!*<div className="trip__day__col">*!/*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Sunrise beach yoga</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Breakfast (2nd clue to scavenger hunt)</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">ATVing, helicopter tour, ziplining, chill activities</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Cultural dinner, taste of the local flavors, comedy show</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Pool party with international DJs</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Beach fire show and fireworks</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Finish Music at 4am</p>*/}
                {/*                    </div>*/}
                {/*                /!*</div>*!/*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </div>*/}

                {/*    <div className="trip__day">*/}
                {/*        <Grid container>*/}
                {/*                <Grid item sm={8} xs={2}>*/}
                {/*                    <div className="trip__day__table__wrapper">*/}
                {/*                        <table>*/}
                {/*                            <tr valign='top'>*/}
                {/*                                <td>*/}
                {/*                                    <div className="trip__day__time__wrapper">*/}
                {/*                                        <p className="trip__day__time_yellow">8 - 10AM</p>*/}
                {/*                                    </div>*/}
                {/*                                </td>*/}
                {/*                                <td>*/}
                {/*                                    <div className="trip__day__event__wrapper">*/}
                {/*                                        <p className="trip__day__event">Breakfast and or chill / sleep in time</p>*/}
                {/*                                    </div>*/}
                {/*                                </td>*/}
                {/*                            </tr>*/}
                {/*                            <tr valign='top'>*/}
                {/*                                <td width="25%">*/}
                {/*                                    <div className="trip__day__time__wrapper">*/}
                {/*                                        <p className="trip__day__time_yellow">10AM - 12PM</p>*/}
                {/*                                    </div>*/}
                {/*                                </td>*/}
                {/*                                <td>*/}
                {/*                                    <div className="trip__day__event__wrapper">*/}
                {/*                                        <p className="trip__day__event">Brunch at the resort (3rd clue to scavenger hunt)</p>*/}
                {/*                                    </div>*/}
                {/*                                </td>*/}
                {/*                            </tr>*/}
                {/*                            <tr valign='top'>*/}
                {/*                                <td>*/}
                {/*                                    <div className="trip__day__time__wrapper">*/}
                {/*                                        <p className="trip__day__time_yellow">1PM - 6PM</p>*/}
                {/*                                    </div>*/}
                {/*                                </td>*/}
                {/*                                <td>*/}
                {/*                                    <div className="trip__day__event__wrapper">*/}
                {/*                                        <p className="trip__day__event">Extreme activities or Cultural Activity or Chill at the resort get a massage*/}
                {/*                                            or Catamaran Island Tour</p>*/}
                {/*                                    </div>*/}
                {/*                                </td>*/}
                {/*                            </tr>*/}
                {/*                            <tr valign='top'>*/}
                {/*                                <td>*/}
                {/*                                    <div className="trip__day__time__wrapper">*/}
                {/*                                        <p className="trip__day__time_yellow">7 - 9PM</p>*/}
                {/*                                    </div>*/}
                {/*                                </td>*/}
                {/*                                <td>*/}
                {/*                                    <div className="trip__day__event__wrapper">*/}
                {/*                                        <p className="trip__day__event">Big international BBQ</p>*/}
                {/*                                    </div>*/}
                {/*                                </td>*/}
                {/*                            </tr>*/}
                {/*                            <tr valign='top'>*/}
                {/*                                <td>*/}
                {/*                                    <div className="trip__day__time__wrapper">*/}
                {/*                                        <p className="trip__day__time_yellow">9:30PM - 1AM</p>*/}
                {/*                                    </div>*/}
                {/*                                </td>*/}
                {/*                                <td>*/}
                {/*                                    <div className="trip__day__event__wrapper">*/}
                {/*                                        <p className="trip__day__event">Poker night, cigars and fine wine or Chill beach party, karaoke, magician</p>*/}
                {/*                                    </div>*/}
                {/*                                </td>*/}
                {/*                            </tr>*/}
                {/*                        </table>*/}
                {/*                    </div>*/}
                {/*                    /!*<div className="trip__day__time__wrapper">*!/*/}
                {/*                    /!*    <p className="trip__day__time_yellow">8 - 10AM</p>*!/*/}
                {/*                    /!*</div>*!/*/}
                {/*                    /!*<div className="trip__day__time__wrapper">*!/*/}
                {/*                    /!*    <p className="trip__day__time_yellow">10AM - 12PM</p>*!/*/}
                {/*                    /!*</div>*!/*/}
                {/*                    /!*<div className="trip__day__time__wrapper">*!/*/}
                {/*                    /!*    <p className="trip__day__time_yellow">1 - 6PM</p>*!/*/}
                {/*                    /!*</div>*!/*/}
                {/*                    /!*<div className="trip__day__time__wrapper">*!/*/}
                {/*                    /!*    <p className="trip__day__time_yellow">7 - 9PM</p>*!/*/}
                {/*                    /!*</div>*!/*/}
                {/*                    /!*<div className="trip__day__time__wrapper">*!/*/}
                {/*                    /!*    <p className="trip__day__time_yellow">9:30PM - 1AM</p>*!/*/}
                {/*                    /!*</div>*!/*/}
                {/*                </Grid>*/}
                {/*                /!*<Grid item sm={7} xs={10}>*!/*/}
                {/*                /!*    <div className="trip__day__event__wrapper">*!/*/}
                {/*                /!*        <p className="trip__day__event">Breakfast and or chill / sleep in time</p>*!/*/}
                {/*                /!*    </div>*!/*/}
                {/*                /!*    <div className="trip__day__event__wrapper">*!/*/}
                {/*                /!*        <p className="trip__day__event">Brunch at the resort (3rd clue to scavenger hunt)</p>*!/*/}
                {/*                /!*    </div>*!/*/}
                {/*                /!*    <div className="trip__day__event__wrapper">*!/*/}
                {/*                /!*        <p className="trip__day__event">Extreme activities or Cultural Activity or Chill at the resort get a massage*!/*/}
                {/*                /!*            or Catamaran Island Tour</p>*!/*/}
                {/*                /!*    </div>*!/*/}
                {/*                /!*    <div className="trip__day__event__wrapper">*!/*/}
                {/*                /!*        <p className="trip__day__event">Big international BBQ</p>*!/*/}
                {/*                /!*    </div>*!/*/}
                {/*                /!*    <div className="trip__day__event__wrapper">*!/*/}
                {/*                /!*        <p className="trip__day__event">Poker night, cigars and fine wine or Chill beach party, karaoke, magician</p>*!/*/}
                {/*                /!*    </div>*!/*/}
                {/*                /!*</Grid>*!/*/}

                {/*            <Grid item sm={4} xs={12}>*/}
                {/*                <div className="trip__day__title">*/}
                {/*                    <p className="trip__day__title__text">Day</p>*/}
                {/*                    <p className="trip__day__title__number">4</p>*/}
                {/*                </div>*/}
                {/*            </Grid>*/}

                {/*        </Grid>*/}
                {/*    </div>*/}

                {/*    <div className="trip__day">*/}
                {/*        <Grid container>*/}
                {/*            <Grid item sm={3} xs={12}>*/}
                {/*                <div className="trip__day__title">*/}
                {/*                    <p className="trip__day__title__text">Day</p>*/}
                {/*                    <p className="trip__day__title__number">1</p>*/}
                {/*                </div>*/}
                {/*            </Grid>*/}
                {/*            <Grid item sm={2} xs={2}>*/}
                {/*                /!*<div className="trip__day__col">*!/*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">10AM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">3PM - 5:30PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">5:30PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">6PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">8PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time">10PM</p>*/}
                {/*                    </div>*/}
                {/*                /!*</div>*!/*/}
                {/*            </Grid>*/}
                {/*            <Grid item sm={7} xs={10}>*/}
                {/*                /!*<div className="trip__day__col">*!/*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Welcome to the event</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Cocktail party / meet and greet</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Welcome message from CoachK</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Sunset dinner - BBQ on beach - Welcome orientation</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Team building activities</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Chill beach night with fire show and live band, Karaoke</p>*/}
                {/*                    </div>*/}
                {/*                /!*</div>*!/*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </div>*/}

                {/*    <div className="trip__day">*/}
                {/*        <Grid container>*/}
                {/*            /!*<div className="trip__day__col">*!/*/}
                {/*                <Grid item sm={2} xs={2}>*/}
                {/*                    /!*<div className="trip__day__col">*!/*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time_yellow">6AM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time_yellow">7:30 - 10AM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time_yellow">10AM - 5PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time_yellow">6 - 8PM</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__time__wrapper">*/}
                {/*                        <p className="trip__day__time_yellow">8PM - 1AM</p>*/}
                {/*                    </div>*/}
                {/*                    /!*</div>*!/*/}
                {/*                </Grid>*/}
                {/*                <Grid item sm={7} xs={10}>*/}
                {/*                    /!*<div className="trip__day__col">*!/*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Sunrise beach yoga</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Breakfast (1st clue to scavenger hunt)</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Extreme activities or Cultural or Island Hopping/snorkeling</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Sunset BBQ on the beach with chill music</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="trip__day__event__wrapper">*/}
                {/*                        <p className="trip__day__event">Music, drinks and vibes on the beach - cultural dancers, fire show, fire lanterns</p>*/}
                {/*                    </div>*/}
                {/*                    /!*</div>*!/*/}
                {/*                </Grid>*/}
                {/*            /!*</div>*!/*/}

                {/*            <Grid item sm={3} xs={12}>*/}
                {/*                <div className="trip__day__title">*/}
                {/*                    <p className="trip__day__title__text">Day</p>*/}
                {/*                    <p className="trip__day__title__number">2</p>*/}
                {/*                </div>*/}
                {/*            </Grid>*/}

                {/*        </Grid>*/}
                {/*    </div>*/}

                {/*</div>*/}
            </Container>
        </section>
    )
}
