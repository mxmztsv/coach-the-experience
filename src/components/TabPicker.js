import React, {useState} from 'react'

export const TabPicker = ({onClick}) => {

    const [ActiveTab, setActiveTab] = useState(2)

    const clickHandler = (tabNum) => {
        setActiveTab(tabNum)
        onClick(tabNum)
    }

    return (
        <div className="tab-picker__wrapper">
            <div className="tab-picker">
                <button className={ActiveTab === 1 ? "tab-picker__btn_active" : "tab-picker__btn"} onClick={() => {
                    clickHandler(1)
                }}>3 DAYS
                </button>
                <button className={ActiveTab === 2 ? "tab-picker__btn_active" : "tab-picker__btn"} onClick={() => {
                    clickHandler(2)
                }}>5 DAYS
                </button>
            </div>
            <div className={ActiveTab === 1 ? "tab-picker__triangle_left" : "tab-picker__triangle_right"}/>
        </div>
    )
}
