import React, {useState, useEffect} from 'react'

import user from '../assets/svg/user.svg'

export const PackageCardItem = ({ persons, price, discount, originalPrice, onClick }) => {

    const [personsArray, setPersonsArray] = useState([])

    useEffect(() => {
        let pa = []
        for (let i = 1; i <= persons; i++) {
            pa.push(<img src={user} className="package__card__item__persons__unit"/>)
        }
        setPersonsArray(pa)
    },[persons])

    return (
        <div onClick={onClick} className="package__card__item">
            <div className="package__card__item__col-left">
                <div className="package__card__item__persons__wrapper">
                    {personsArray}
                </div>
            </div>
            <div className="package__card__item__col-right">
                <p className="package__card__item__col-right__price">{price}</p>
                { discount ? (
                    <div className="package__card__item__col-right__discount-row">
                        <p className="package__card__item__col-right__discount-row__original-price">{originalPrice}</p>
                        <p className="package__card__item__col-right__discount-row__discount">{discount}</p>
                    </div>
                ) : null }

            </div>
        </div>
    )
}
