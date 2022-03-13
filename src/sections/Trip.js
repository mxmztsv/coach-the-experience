import React from 'react'
import {Container} from "@mui/material";
import Grid from '@mui/material/Grid';

export const Trip = () => {

    return (
        <section className="trip" id="trip-itinerary">
            <Container>
                <h2 className="title">Trip Itinerary</h2>
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
                                                    <p className="trip__day__time">10AM</p>
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
                                                    <p className="trip__day__time">3 - 5:30PM</p>
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
                                                    <p className="trip__day__time">5:30PM</p>
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
                                                    <p className="trip__day__time">6PM</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="trip__day__event__wrapper">
                                                    <p className="trip__day__event">Sunset dinner - BBQ on beach - Welcome orientation</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign='top'>
                                            <td>
                                                <div className="trip__day__time__wrapper">
                                                    <p className="trip__day__time">8PM</p>
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
                                                    <p className="trip__day__time">10PM</p>
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
                                                        <p className="trip__day__time_yellow">6AM</p>
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
                                                        <p className="trip__day__time_yellow">7:30 - 10AM</p>
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
                                                        <p className="trip__day__time_yellow">10AM - 5PM</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Extreme activities or Cultural or Island Hopping/snorkeling</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">6 - 8PM</p>
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
                                                        <p className="trip__day__time_yellow">8PM - 1AM</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Music, drinks and vibes on the beach - cultural dancers, fire show, fire lanterns</p>
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
                                                    <p className="trip__day__time">10AM</p>
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
                                                    <p className="trip__day__time">3 - 5:30PM</p>
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
                                                    <p className="trip__day__time">5:30PM</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="trip__day__event__wrapper">
                                                    <p className="trip__day__event">ATVing, helicopter tour, ziplining, chill activities</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign='top'>
                                            <td>
                                                <div className="trip__day__time__wrapper">
                                                    <p className="trip__day__time">6PM</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="trip__day__event__wrapper">
                                                    <p className="trip__day__event">Cultural dinner, taste of the local flavors, comedy show</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign='top'>
                                            <td>
                                                <div className="trip__day__time__wrapper">
                                                    <p className="trip__day__time">8PM</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="trip__day__event__wrapper">
                                                    <p className="trip__day__event">Pool party with international DJs</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign='top'>
                                            <td>
                                                <div className="trip__day__time__wrapper">
                                                    <p className="trip__day__time">●</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="trip__day__event__wrapper">
                                                    <p className="trip__day__event">Beach fire show and fireworks</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign='top'>
                                            <td>
                                                <div className="trip__day__time__wrapper">
                                                    <p className="trip__day__time">●</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="trip__day__event__wrapper">
                                                    <p className="trip__day__event">Finish Music at 4am</p>
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
                                                        <p className="trip__day__time_yellow">8 - 10AM</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Breakfast and or chill / sleep in time</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">10AM - 12PM</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Brunch at the resort (3rd clue to scavenger hunt)</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">1PM - 6PM</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Extreme activities or Cultural Activity or Chill at the resort get a massage
                                                            or Catamaran Island Tour</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">7 - 9PM</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Big international BBQ</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr valign='top'>
                                                <td>
                                                    <div className="trip__day__time__wrapper">
                                                        <p className="trip__day__time_yellow">9:30PM - 1AM</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Poker night, cigars and fine wine or Chill beach party, karaoke, magician</p>
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
                                                    <p className="trip__day__time">●</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="trip__day__event__wrapper">
                                                    <p className="trip__day__event">BTC PARTY WEN MOON (4th and final clue to scavenger hunt)</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign='top'>
                                            <td>
                                                <div className="trip__day__time__wrapper">
                                                    <p className="trip__day__time">6AM</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="trip__day__event__wrapper">
                                                    <p className="trip__day__event">Sunrise beach yoga and massage</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign='top'>
                                            <td>
                                                <div className="trip__day__time__wrapper">
                                                    <p className="trip__day__time">8 - 10AM</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="trip__day__event__wrapper">
                                                    <p className="trip__day__event">Breakfast - chill</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign='top'>
                                            <td>
                                                <div className="trip__day__time__wrapper">
                                                    <p className="trip__day__time">10AM - 5PM</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="trip__day__event__wrapper">
                                                    <p className="trip__day__event">Cultural, island tour with snorkeling and lunch (yachts) or Trip at the beach with sensory music therapy, massage, reintroduction to taste, beach activities and swimming</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign='top'>
                                            <td>
                                                <div className="trip__day__time__wrapper">
                                                    <p className="trip__day__time">6PM</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="trip__day__event__wrapper">
                                                    <p className="trip__day__event">Sunset Dinner and announcement of the winner of the scavenger hunt</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign='top'>
                                            <td>
                                                <div className="trip__day__time__wrapper">
                                                    <p className="trip__day__time">9PM</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="trip__day__event__wrapper">
                                                    <p className="trip__day__event">Until Sunrise - Massive beach party with International DJs</p>
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
                                                        <p className="trip__day__time_yellow">9 - 11AM</p>
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

                                                </td>
                                                <td>
                                                    <div className="trip__day__event__wrapper">
                                                        <p className="trip__day__event">Checkout and say goodbye to all your new friends</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </Grid>


                            <Grid item sm={4} xs={12}>
                                <div className="trip__day__title">
                                    <p className="trip__day__title__text">Day</p>
                                    <p className="trip__day__title__number">6</p>
                                </div>
                            </Grid>

                        </Grid>
                    </div>


                </div>
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
