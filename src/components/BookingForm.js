import React from 'react'
import Container from "@mui/material/Container";
import {FormField} from "./FormField";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import {Controller, useForm} from 'react-hook-form';
import {Radio, RadioGroup} from "@mui/material";
import {FormControlLabelInput} from "./FormControlLabelInput";

import warning from '../assets/svg/warning-2 1.svg'
import {Footer} from "../sections/Footer";
import {submitForm} from "../controllers/FormController";
import {useNavigate} from "react-router-dom";


// TODO: loader

export const BookingForm = () => {

    let navigate = useNavigate()

    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        defaultValues: {
            "Jet Ski Island Tour": false,
            "Scuba Diving": false,
            "Island Tour on Catamaran": false,
            "Island Tour on Yacht": false,
            "Snorkling": false,
            "Helicopter Tour": false,
            "Parasailing": false,
            "Elephant Sanctuary": false,
            "ATVing": false,
            "Zip Lining": false,
            "Thai Cooking Class": false,
            "Thai Massage": false,
            "Temple Visits": false,
            "Muay Thai Gym Workout": false,
            "Shooting Range": false,
            "Paintball": false,
            "Sight-seeing": false,
            "Water Skiing / Tubing": false,
            "Chill day at the resort": false,
            // "1. Jet Ski Island Tour": false,
            // "2. Scuba Diving": false,
            // "3. Island Tour on Catamaran": false,
            // "4. Island Tour on Yacht": false,
            // "5. Snorkling": false,
            // "6. Helicopter Tour": false,
            // "7. Parasailing": false,
            // "8. Elephant Sanctuary": false,
            // "9. ATVing": false,
            // "10. Zip Lining": false,
            // "11. Thai Cooking Class": false,
            // "12. Thai Massage": false,
            // "13. Temple Visits": false,
            // "14. Muay Thai Gym Workout": false,
            // "15. Shooting Range": false,
            // "16. Paintball": false,
            // "17. Sight-seeing": false,
            // "18. Water Skiing / Tubing": false,
            // "19. Chill day at the resort": false,
            "Is a CLUB member": "Yes",
            "Require a quiet room": "Yes",
            "T-Shirt size": "XL",
            "Is interested in sponsoring the event": "No",
            // "Is agree to the terms and conditions": "Yes",
            "Room Type": "Deluxe - 3 nights - $6000/1 Person - $11,000/2 people",
            "Other activity in the Crypto Space": "",
            "Venture Capital Fund": false,
            "Project Team / Advisor": false,
            "Influencer": false,
            "Marketing/PR": false,
            "Market Maker": false,
            "Crypto Investor": false,
            "Exchange": false,
            "Sponsorship value": "Not Interested",
            "Interest in Jet Ski Island Tour": "Moderately interested",
            "Interest in Scuba Diving": "Moderately interested",
            "Interest in Island Tour on Catamaran": "Moderately interested",
            "Interest in Island Tour on Yacht": "Moderately interested",
            "Interest in Snorkling": "Moderately interested",
            "Interest in Helicopter": "Moderately interested",
            "Interest in Parasailing": "Moderately interested",
            "Interest in Elephant Sanctuary": "Moderately interested",
            "Interest in ATVing": "Moderately interested",
            "Interest in Ziplining": "Moderately interested",
            "Interest in Thai Cooking Class": "Moderately interested",
            "Interest in Thai Massage": "Moderately interested",
            "Interest in Temple Visits": "Moderately interested",
            "Interest in Muay Thai Gym Workout": "Moderately interested",
            "Interest in Shooting Range": "Moderately interested",
            "Interest in Paintball": "Moderately interested",
            "Interest in Sight-seeing": "Moderately interested",
            "Interest in Water-skiing/Tubing": "Moderately interested",
            "Interest in Chill day at the resort": "Moderately interested",
            "Payment method": "USDT/USDC - ON BSC",
            "numberOfPeopleInTheRoom": "",
            "agreement": false,
        }
    })
    const onSubmit = async (data) => {
        console.log(data)
        let success
        try {
            success = await submitForm(data)
        } catch (e) {
            navigate('/error')
        }
        if (success === "Success") {
            navigate('/thank-you')
        }

    }

    return (
        <section className="booking-form__wrapper">
            <Container disableGutters>
                <div className="booking-form">
                    <div className="booking-form__container">
                        <div className="booking-form__title__wrapper">
                            <h1 className="booking-form__title">Coach K Conference Experience</h1>
                        </div>
                        <div className="booking-form__subtitle__wrapper">
                            <p className="booking-form__subtitle">
                                Welcome to the Coach K Conference Experience:
                            </p>
                            <p className="booking-form__subtitle">
                                Come join some of the brightest minds in the cryptocurrency and blockchain ecosystem in
                                this once-in-a-lifetime networking event
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="booking-form__form">

                            <FormField title={"E-mail"} required>
                                <input className="input-field" {...register("email", {required: true})}/>
                                {errors.email && <p className="form-field__error">Email is required.</p>}
                            </FormField>

                            <FormField title={"What is your Full Name? (used for bookings)"} required>
                                <input className="input-field" {...register("name", {required: true})}/>
                                {errors.name && <p className="form-field__error">Name is required.</p>}
                            </FormField>

                            <FormField title={"What is your Telegram account name? (@ included)"} required>
                                <input className="input-field" {...register("telegram", {required: true})}/>
                                {errors.telegram && <p className="form-field__error">Telegram account is required.</p>}
                            </FormField>

                            <FormField title={"Are you a CLUB member?"} required>
                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field}>
                                            <FormControlLabel value="Yes" control={<Radio/>} label="Yes"/>
                                            <FormControlLabel value="No" control={<Radio/>} label="No"/>
                                        </RadioGroup>
                                    )}
                                    name="Is a CLUB member"
                                    control={control}
                                />
                            </FormField>

                            <FormField
                                title={"If you answered yes above, please provide your wallet address that has the CLUB NFT. (put N/A if not applicable)"}
                                required>
                                <input className="input-field" {...register("wallet", {required: true})}/>
                                {errors.wallet && <p className="form-field__error">Wallet address is required.</p>}
                            </FormField>

                            <FormField title={"How many people are you coming with? (Type 0 if you are coming alone)"}
                                       required>
                                <input className="input-field" {...register("people", {required: true})}/>
                                {errors.people && <p className="form-field__error">This field is required.</p>}
                            </FormField>

                            <FormField
                                title={"If you’re not coming alone, what are the names and emails of the other guests? (put N/A if not applicable)"}
                                required>
                                <input className="input-field" {...register("guests", {required: true})}/>
                                {errors.guests && <p className="form-field__error">This field is required.</p>}
                            </FormField>



                            <FormField title={"Do you require a room that is quiet at night?"} required>
                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field}>
                                            <FormControlLabel value="Yes" control={<Radio/>} label="Yes"/>
                                            <FormControlLabel value="No" control={<Radio/>} label="No"/>
                                        </RadioGroup>
                                    )}
                                    name="Require a quiet room"
                                    control={control}
                                />
                            </FormField>

                            <div className="booking-form__info">
                                <p className="booking-form__info__text">
                                    The next part is important to do our best to tailor your experience. Please leave as
                                    much detail as you can and tell us what you really can’t miss!
                                </p>
                            </div>

                            <FormField title={"Please Select All of the Activities You are Interested in:"} required>
                                <FormGroup>
                                    <Controller
                                        name="Jet Ski Island Tour"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Jet Ski Island Tour"/>}
                                    />
                                    <Controller
                                        name="Scuba Diving"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Scuba Diving"/>}
                                    />
                                    <Controller
                                        name="Island Tour on Catamaran"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Island Tour on Catamaran"/>}
                                    />
                                    <Controller
                                        name="Island Tour on Yacht"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Island Tour on Yacht"/>}
                                    />
                                    <Controller
                                        name="Snorkling"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Snorkling"/>}
                                    />
                                    <Controller
                                        name="Helicopter Tour"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Helicopter Tour"/>}
                                    />
                                    <Controller
                                        name="Parasailing"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Parasailing"/>}
                                    />
                                    <Controller
                                        name="Elephant Sanctuary"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Elephant Sanctuary"/>}
                                    />
                                    <Controller
                                        name="ATVing"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="ATVing"/>}
                                    />
                                    <Controller
                                        name="Zip Lining"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Zip Lining"/>}
                                    />
                                    <Controller
                                        name="Thai Cooking Class"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Thai Cooking Class"/>}
                                    />
                                    <Controller
                                        name="Thai Massage"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Thai Massage"/>}
                                    />
                                    <Controller
                                        name="Temple Visits"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Temple Visits"/>}
                                    />
                                    <Controller
                                        name="Muay Thai Gym Workout"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Muay Thai Gym Workout"/>}
                                    />
                                    <Controller
                                        name="Shooting Range"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Shooting Range"/>}
                                    />
                                    <Controller
                                        name="Paintball"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Paintball"/>}
                                    />
                                    <Controller
                                        name="Sight-seeing"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Sight-seeing"/>}
                                    />
                                    <Controller
                                        name="Water Skiing / Tubing"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Water Skiing / Tubing"/>}
                                    />
                                    <Controller
                                        name="Chill day at the resort"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Chill day at the resort"/>}
                                    />
                                </FormGroup>
                            </FormField>

                            <FormField
                                title={"How interested are you in participating in each activity? (Very Important)"}
                                required grey={true}>

                                <table className="booking-form__table">
                                    <tbody>
                                    <tr>
                                        <td width="117px">

                                        </td>
                                        <td>
                                            <div className="booking-form__table__column__title__wrapper">
                                                <p className="booking-form__table__column__title">
                                                    Not at all
                                                    interested
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="booking-form__table__column__title__wrapper">
                                                <p className="booking-form__table__column__title">
                                                    Slightly interested
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="booking-form__table__column__title__wrapper">
                                                <p className="booking-form__table__column__title">
                                                    Moderately interested
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="booking-form__table__column__title__wrapper">
                                                <p className="booking-form__table__column__title">
                                                    Very interested
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="booking-form__table__column__title__wrapper">
                                                <p className="booking-form__table__column__title">
                                                    Extremely interested
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>

                                </table>

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Jet Ski Island Tour
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Jet Ski Island Tour"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Scuba Diving
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Scuba Diving"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Island Tour on Catamaran
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Island Tour on Catamaran"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Island Tour on Yacht
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Island Tour on Yacht"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Snorkling
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Snorkling"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Helicopter
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Helicopter"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Parasailing
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Parasailing"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Elephant Sanctuary
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Elephant Sanctuary"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                ATVing
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in ATVing"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Ziplining
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Ziplining"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Thai Cooking Class
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Thai Cooking Class"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Thai Massage
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Thai Massage"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Temple Visits
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Temple Visits"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Muay Thai Gym Workout
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Muay Thai Gym Workout"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Shooting Range
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Shooting Range"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Paintball
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Paintball"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Sight-seeing
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Sight-seeing"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Water-skiing/Tubing
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Water-skiing/Tubing"
                                    control={control}
                                />

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="117px">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                Chill day at the resort
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="Not at all interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Slightly interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Moderately interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Very interested"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="Extremely interested"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Interest in Chill day at the resort"
                                    control={control}
                                />

                                <div className="booking-form__table__warning">
                                    <img src={warning} className="booking-form__table__warning__img"/>
                                    <p className="booking-form__table__warning__text">
                                        Choose an answer for each line.
                                    </p>
                                </div>

                            </FormField>

                            <FormField title={"Based on the above tell us your top 8 activities:"} required>
                                <input className="input-field" {...register("topActivities", {required: true})}/>
                                {errors.topActivities && <p className="form-field__error">This field is required.</p>}
                            </FormField>

                            <FormField
                                title={"Which room type do you wish to reserve? (We will try our best to accommodate your requests, but there is limited space)"}
                                required>
                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field}>
                                            <FormControlLabel
                                                value="Deluxe - 3 nights - $6000/1 Person - $11,000/2 people"
                                                control={<Radio/>}
                                                label="Deluxe - 3 nights - $6000/1 Person - $11,000/2 people"/>
                                            <FormControlLabel
                                                value="Junior/1 Bedroom Suite - 3 nights - $7000/1 person - $13000/2 people"
                                                control={<Radio/>}
                                                label="Junior/1 Bedroom Suite - 3 nights - $7000/1 person - $13000/2 people"/>
                                            <FormControlLabel
                                                value="Deluxe - 5 nights - $10000/1 person - $18,000/2 people"
                                                control={<Radio/>}
                                                label="Deluxe - 5 nights - $10000/1 person - $18,000/2 people"/>
                                            <FormControlLabel
                                                value="Junior/1 Bedroom Suite - 5 nights - $12,000/1 person - $20,000/2 people"
                                                control={<Radio/>}
                                                label="Junior/1 Bedroom Suite - 5 nights - $12,000/1 person - $20,000/2 people"/>
                                            <FormControlLabel
                                                value="2 Bedroom Suite - $15,000/Person - $25,000/2 people - $32,000/3 people - $40,000/4 people"
                                                control={<Radio/>}
                                                label="2 Bedroom Suite - $15,000/Person - $25,000/2 people - $32,000/3 people - $40,000/4 people"/>
                                            <FormControlLabelInput control={<Radio/>} label="other"/>
                                        </RadioGroup>
                                    )}
                                    name="Room Type"
                                    control={control}
                                />
                            </FormField>

                            <FormField title={"How many people will be sleeping in your room?"} required>
                                <input
                                    className="input-field" {...register("numberOfPeopleInTheRoom", {required: true})}/>
                                {errors.numberOfPeopleInTheRoom &&
                                    <p className="form-field__error">This field is required.</p>}
                            </FormField>

                            <FormField title={"What size T-Shirt do you wear? (US Nike Sizes)"} required>
                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field}>
                                            <FormControlLabel value="XS" control={<Radio/>} label="XS"/>
                                            <FormControlLabel value="M" control={<Radio/>} label="M"/>
                                            <FormControlLabel value="L" control={<Radio/>} label="L"/>
                                            <FormControlLabel value="XL" control={<Radio/>} label="XL"/>
                                            <FormControlLabel value="XXL" control={<Radio/>} label="XXL"/>
                                            <FormControlLabel value="XXXL" control={<Radio/>} label="XXXL"/>
                                        </RadioGroup>
                                    )}
                                    name="T-Shirt size"
                                    control={control}
                                />
                            </FormField>

                            <FormField title={"If you have friends with you, what size do they wear?"} required>
                                <input className="input-field" {...register("friendsSizes", {required: true})}/>
                                {errors.friendsSizes && <p className="form-field__error">This field is required.</p>}
                            </FormField>

                            <FormField title={"Please make your payment on BSC or ETH in USDT/USDC to the following address. (It will be $10,000 for most unless you have confirmed a suite) Double-check to make sure!"} required grey>
                                <table className="booking-form__table">
                                    <tbody>
                                    <tr>
                                        <td width="70%">

                                        </td>
                                        <td>
                                            <div className="booking-form__table__column__title__wrapper">
                                                <p className="booking-form__table__column__title">
                                                    USDT/USDC - ON BSC
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="booking-form__table__column__title__wrapper">
                                                <p className="booking-form__table__column__title">
                                                    USDT/USDC - ON ETH
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>

                                </table>

                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field} row>
                                            <table className="booking-form__table">
                                                <tbody>
                                                <tr className="booking-form__table__row">
                                                    <th width="70%">
                                                        <div className="booking-form__table__row__title__wrapper">
                                                            <p className="booking-form__table__row__title">
                                                                0x904b14174286cedd8086bba62e0de2c5a466ede3
                                                            </p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Radio value="USDT/USDC - ON BSC"/>
                                                    </td>
                                                    <td>
                                                        <Radio value="USDT/USDC - ON ETH"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </RadioGroup>

                                    )}
                                    name="Payment method"
                                    control={control}
                                />
                            </FormField>

                            <FormField title={"USDT/USDC Amount Sent (ETH/BSC)"} required>
                                <input className="input-field" {...register("USDTOrUSDCAmountSent", {required: true})}/>
                                {errors.USDTOrUSDCAmountSent &&
                                    <p className="form-field__error">This field is required.</p>}
                            </FormField>

                            <FormField title={"Please post you TXID Here"} required>
                                <input className="input-field" {...register("TXID", {required: true})}/>
                                {errors.TXID && <p className="form-field__error">This field is required.</p>}
                            </FormField>

                            <FormField
                                title={"What Ethereum address do you want your NFT invitation(s) to be sent to? (if more than one person put each address unless you want them all sent to the same person)"}
                                required>
                                <input className="input-field" {...register("ethAddressToNFT", {required: true})}/>
                                {errors.ethAddressToNFT && <p className="form-field__error">This field is required.</p>}
                            </FormField>

                            <FormField
                                title={"What do you do in the Crypto Space? (select all that apply)"}
                                required>
                                <FormGroup>
                                    <Controller
                                        name="Venture Capital Fund"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Venture Capital Fund"/>}
                                    />
                                    <Controller
                                        name="Project Team / Advisor"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Project Team / Advisor"/>}
                                    />
                                    <Controller
                                        name="Influencer"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Influencer"/>}
                                    />
                                    <Controller
                                        name="Marketing/PR"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Marketing/PR"/>}
                                    />
                                    <Controller
                                        name="Market Maker"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Market Maker"/>}
                                    />
                                    <Controller
                                        name="Crypto Investor"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Crypto Investor"/>}
                                    />
                                    <Controller
                                        name="Exchange"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Exchange"/>}
                                    />
                                    <Controller
                                        name="Other"
                                        control={control}
                                        rules={{required: false}}
                                        // render={({ field }) => <Checkbox {...field} />}
                                        render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                               label="Other"/>}
                                    />
                                    <input
                                        className="input-field" {...register("Other activity in the Crypto Space", {required: false})}/>
                                </FormGroup>
                            </FormField>

                            <FormField title={"If you are with a project or company, which one?"} required>
                                <input className="input-field" {...register("project", {required: true})}/>
                                {errors.project && <p className="form-field__error">This field is required.</p>}
                            </FormField>

                            <FormField
                                title={"Are you part of a project that would like to sponsor the event? Remember 50% of sponsored funds go to our 5 selected charities! If so, please indicate which project you are affiliated with and below which package you would be open for!"}>
                                <input className="input-field" {...register("sponsorship", {required: false})}/>
                                {/*{errors.sponsorship && <p className="form-field__error">This field is required.</p>}*/}
                            </FormField>

                            <div className="booking-form__info">
                                <div className="booking-form__info__title__wrapper">
                                    <p className="booking-form__info__title">
                                        FOR EVENT SPONSORS ANSWER BELOW
                                    </p>
                                </div>

                                <p className="booking-form__info__text">
                                    For Sponsors, 50% of the proceeds will be going towards a social impact program with
                                    local charities in Thailand, 40% towards the scavenger hunt prize and 10% being used
                                    for Film, Banners, Advertising/Marketing and co-sponsored merchandise, PR about
                                    sponsoring and giving to charities, and even sails on the catamarans and banners on
                                    the yachts! Nearly everything at the event will be filmed. Our Sponsors will also
                                    have an exclusive VIP celebrity experience which is sure to create buzz around the
                                    projects.
                                </p>
                            </div>

                            <FormField title={"Are you interested in sponsoring the event?"} required>
                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field}>
                                            <FormControlLabel value="Yes" control={<Radio/>} label="Yes"/>
                                            <FormControlLabel value="No" control={<Radio/>} label="No"/>
                                        </RadioGroup>
                                    )}
                                    name="Is interested in sponsoring the event"
                                    control={control}
                                />
                            </FormField>

                            <FormField
                                title={"If interested let us know where to contact you to discuss in more detail (Email, WhatsApp, Telegram)"}>
                                <input className="input-field" {...register("contacts", {required: false})}/>
                                {/*{errors.sponsorship && <p className="form-field__error">This field is required.</p>}*/}
                            </FormField>

                            <FormField
                                title={"If yes, you would like to sponsor how much:"}>
                                <Controller
                                    render={({field}) => (
                                        <RadioGroup {...field}>
                                            <FormControlLabel value="$10000" control={<Radio/>} label="$10000"/>
                                            <FormControlLabel value="$25000" control={<Radio/>} label="$25000"/>
                                            <FormControlLabel value="$50000" control={<Radio/>} label="$50000"/>
                                            <FormControlLabel value="Not Interested" control={<Radio/>}
                                                              label="Not Interested"/>
                                            <FormControlLabelInput control={<Radio/>} label="Other"/>
                                        </RadioGroup>
                                    )}
                                    name="Sponsorship value"
                                    control={control}
                                />
                            </FormField>

                            <FormField
                                title={"Would you want us to accommodate you showing up 1 day earlier or staying for more nights at the hotel after the event? If yes, let us know and we will do our best to accommodate your requests. "}
                                required>
                                <input
                                    className="input-field" {...register("additionalAccommodation", {required: true})}/>
                                {errors.additionalAccommodation &&
                                    <p className="form-field__error">This field is required.</p>}
                            </FormField>

                            <div className="booking-form__info">
                                <div className="booking-form__info__title__wrapper">
                                    <p className="booking-form__info__title">
                                        Conference Terms/Services/Waiver form
                                    </p>
                                    <a href="https://docsend.com/view/q63m4993avun6a7q"
                                       className="booking-form__info__link">
                                        https://docsend.com/view/q63m4993avun6a7q
                                    </a>
                                </div>
                                <p className="booking-form__info__text">
                                    Please go to the link provided above and read through the terms and conditions.
                                </p>
                            </div>

                            <FormField title={"I agree to the terms and conditions set forth in the waiver form above "}
                                       required>
                                {/*<Controller*/}
                                {/*    render={({field}) => (*/}
                                {/*        <RadioGroup {...field}>*/}
                                {/*            <FormControlLabel value="Yes" control={<Radio/>} label="Yes"/>*/}
                                {/*            <FormControlLabel value="No" control={<Radio/>} label="No"/>*/}
                                {/*        </RadioGroup>*/}
                                {/*    )}*/}
                                {/*    name="Is agree to the terms and conditions"*/}
                                {/*    control={control}*/}
                                {/*/>*/}
                                <Controller
                                    name="agreement"
                                    control={control}
                                    rules={{required: true}}
                                    // render={({ field }) => <Checkbox {...field} />}
                                    render={({field}) => <FormControlLabel control={<Checkbox {...field} />}
                                                                           label="Yes I agree"/>}
                                />
                                {errors.agreement &&
                                    <p className="form-field__error">Agreement is required.</p>}
                            </FormField>

                            <div className="booking-form__info">
                                <p className="booking-form__info__text">
                                    Please check your email as we will be communicating more details as the event gets
                                    closer.
                                </p>
                            </div>

                            <div className="booking-form__btn__wrapper">
                                <button className="book-btn" type="submit">Send</button>
                            </div>

                        </form>


                    </div>
                </div>
            </Container>
            {/*<Footer/>*/}
        </section>
    )
}
