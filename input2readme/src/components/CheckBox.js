import React from 'react'

const CheckBox = (props) => {
    return (
        <>
        <div className="check-group">
            <div className="left">
                <input type="checkbox" className="form-control" id={props.variable} name={props.variable}  readOnly  />
                <label htmlFor={props.variable} className="form-label check">{props.heading}</label>
            </div>
            <div className="right">
                <div className="install-guide">
                    <p>{props.subhead}</p>
                    <input type="text" className="form-checkbox-input" id="guide" name="guide " placeholder={props.placeholder} required/>
                </div>
            </div>                  
        </div>
        </>
    )
}
export default CheckBox;