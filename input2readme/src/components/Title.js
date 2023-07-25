import React, { useEffect, useState } from 'react'

const Title = (props) => {
    const [name, setName] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log(name);
    }
    useEffect(() => {
        console.log(name);
    }, [name]);
    return (
        <div className="form-group">
            <label htmlFor="name " className="form-label">Project name</label>
            <div className="form-input-group">
                <input type="text" className="form-text-input" id="name" name="name" defaultValue="Welcome to 🙋" readOnly/>
                <input type="text" className="form-text-input" id="name" name="name" placeholder='EX. Awesome Blogging Platform' onChange={handleNameChange}/>
            </div>                
        </div>
        
    )
}
export default Title;