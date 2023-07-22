import React, { useState } from 'react'

const CheckBox = (props) => {
    const [checked, setChecked] = useState(false);
    const [guide, setGuide] = useState('');

    const handleCheck = (e) => {
        setChecked(!checked);
    }
    const handleGuide = (e) => {
        setGuide(e.target.value);
        console.log(guide);
    }
    const handleAdd = (e) => {
        e.preventDefault();
        const rightElement = document.querySelector(`.right.${props.variable}`);
        const installGuide = document.createElement('div');
        installGuide.classList.add('install-guide');
        const input=document.createElement('input');
        input.type='text';
        input.className='form-checkbox-input';
        input.id='guide';
        input.name='guide';
        input.onClick=handleGuide;
        input.placeholder=props.placeholder;
        input.value=guide;
        input.style.display='flex';
        installGuide.appendChild(input);
        rightElement.appendChild(installGuide);
        const removeBtn=document.createElement('button');
        removeBtn.className='removebtn';
        removeBtn.innerHTML='❌';
        removeBtn.classList.add('removebtn');
        installGuide.appendChild(removeBtn);
        removeBtn.addEventListener('click',()=>{
            installGuide.remove();
        })
    }
    return (
        <>
        <div className="check-group">
            <div className="left">
                <input type="checkbox" className="form-control" id={props.variable} name={props.variable}  readOnly onChange={handleCheck} />
                <label htmlFor={props.variable} className="form-label check">{props.heading}</label>
            </div>
            <div className={`right ${props.variable}`}>
                <div className="install-guide">
                    <p>{props.subhead}</p>
                </div>
            </div>     
            
            <button  className="addbtn"  onClick={handleAdd}>Add</button>       
        </div>   
        </>
    )
}
export default CheckBox;