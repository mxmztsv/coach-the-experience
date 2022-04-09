import React, {useState} from 'react'

export const FormField = (props, { title, required = false, grey = false }) => {

    return (
        <div className={props.grey ? "form-field_grey" : "form-field"}>
            <div className="form-field__title__row">
                <p className="form-field__title__text">{props.title}</p>
                { props.required && <p className="form-field__title__asterisk">*</p> }
            </div>
            {props.children}
        </div>
    )
}
