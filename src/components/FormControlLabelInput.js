import React, {useRef, useState, useEffect} from 'react'
import FormControlLabel from "@mui/material/FormControlLabel";
import {Radio} from "@mui/material";

export const FormControlLabelInput = ({control, label}) => {

    const ref = useRef(null);
    const formControlLabelRef = useRef(null);

    const [other, setOther] = useState("")
    // const [disabled, setDisabled] = useState(ref.current && !ref.current.childNodes[0].checked)
    const [disabled, setDisabled] = useState(true)
    const [checked, setChecked] = useState(false)
    // const [radio, setRadio] = useState("")
    // let radio = null


    // control.props["onChange"] = () => {
    //     setDisabled(!disabled)
    // }
    // console.log('ctrl', ctrl)
    useEffect(() => {
        setDisabled(ref.current ? !ref.current.childNodes[0].checked : true)
    }, [])

    return (
        <div className="form-control-label-input">
            {/*<FormControlLabel value={other} control={control} label={label}/>*/}
            {/*<FormControlLabel value={other} control={<Radio onChange={() => {setDisabled(!disabled)}} checked={!disabled}/>} label={label}/>*/}
            <FormControlLabel ref={formControlLabelRef} value={other} control={<Radio ref={ref} onChange={() => {
                console.log("checked", ref.current.childNodes[0].checked)
                // setDisabled(!ref.current.childNodes[0].checked)
                // setChecked(!checked)
                // console.log('formControlLabelRef', formControlLabelRef.current)
                // console.log('ref', ref.current.childNodes[0])
                // setRadio(ref.current.childNodes[1])
                // radio = ref.current.childNodes[1]
                // console.log('ref2', ref.current.childNodes[2])
            }}/>} label={label}/>
            {/*<div className="input__wrapper">*/}
            <input disabled={ref.current ? !ref.current.childNodes[0].checked : true} className="input-field" value={other} onChange={(e) => {
            // <input disabled={(ref.current && !ref.current.childNodes[0].checked) || true} className="input-field" value={other} onChange={(e) => {
            // <input disabled={disabled} className="input-field" value={other} onChange={(e) => {
            //     e.preventDefault()
                setOther(e.target.value)
                // setOther((e) => {e.target.value})
                // ref.current.childNodes[0].checked = true
                ref.current.childNodes[0].click()
                // ref.current.childNodes[0].click()
                // ref.current.click()
                // formControlLabelRef.current.click()
                // ref.current.childNodes[1] = `<h1>hi</h1>`
                // setChecked(true)
            }}
            onBlur={(e) => {
                // setOther(e.target.value)
                // console.log(e.target.value)
                ref.current.childNodes[0].click()
            }}
            />

            {/*</div>*/}
        </div>
    )
}
