import React, { useEffect, useState } from 'react'

const Subtitle = (props) => {
    const [subtitle, setSubtitle] = useState('');
    const handleChange = (e) => {
        setSubtitle(e.target.value);
        console.log(subtitle);
    }
    useEffect(() => {
        console.log(subtitle);
    }, [subtitle]);
    return (
        <div className="form-group">
            <label htmlFor="subtitle " className="form-label">{props.heading}</label>
            <div className="form-input-group">
                <input type="text" className="form-text-input subtitle" id="subtitle " name="subtitle " placeholder={props.title} onChange={handleChange}/>
            </div>                
        </div>
    )
}
export default Subtitle;