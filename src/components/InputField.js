import React, {useState} from 'react'

export const InputField = ({ value, onChange }) => {

    return (
        <input type="text" className="input-field" value={value} onChange={onChange}/>
    )
}
