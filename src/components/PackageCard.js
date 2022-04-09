import React, {useState} from 'react'

import goldDots from '../assets/svg/gold_package_dots.svg'

export const PackageCard = (props, { type, text, child }) => {

    const getTitleByType = (type) => {
      switch (type) {
          case "vip":
              return "VIP\n" +
                  "Package"
          case "gold":
              return "Gold\n" +
                  "Package"
          case "platinum":
              return "Platinum\n" +
                  "Package"
      }
    }

    const getCardClassNameByType = (type) => {
        switch (type) {
            case "vip":
                return "package__card_vip"
            case "gold":
                return "package__card_gold"
            case "platinum":
                return "package__card_platinum"
        }
    }

    const getTextClassNameByType = (type) => {
        switch (type) {
            case "vip":
                return "package__card__text_vip"
            case "gold":
                return "package__card__text_gold"
            case "platinum":
                return "package__card__text_platinum"
        }
    }

    return (
        <div className={getCardClassNameByType(props.type)}>
            <div className="package__card__title__row">
                <div className="package__card__title__wrapper">
                    <p className={props.type === "vip" ? "package__card__title_white" : "package__card__title_black"}>
                        {getTitleByType(props.type)}
                    </p>
                </div>
                <div className="package__card__dots__wrapper">
                    <img className="package__card__dots" src={goldDots}/>
                </div>
            </div>
            <div className="package__card__text__wrapper">
                <p className={getTextClassNameByType(props.type)}>{props.text}</p>
            </div>
            {props.children}
        </div>
    )
}
