import React, {useState} from 'react'

import merchBlue from '../assets/svg/merch blue.svg'
import merchOrange from '../assets/svg/merch orange.svg'
import merchGreen from '../assets/svg/merch green.svg'

export const Sponsors = () => {


    return (
        <section className="sponsors">
            <h2 className="title">Sponsors</h2>
            <div className="activities__header__subtitle__wrapper">
                <p className="activities__header__subtitle">
                    Sponsor our event and donate to charities
                    Join our list of sponsors and use crypto to do good for the world! All our sponsors are donating 50% of the funds to charities
                </p>
            </div>
            <p className="sponsors__merch__title">Merch</p>
            <div className="activities__header__subtitle__wrapper">
                <p className="activities__header__subtitle">
                    co-branded merch
                </p>
            </div>
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
        </section>
    )
}
