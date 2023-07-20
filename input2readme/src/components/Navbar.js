import React from 'react'
import { AiOutlineStar,AiOutlineFork } from 'react-icons/ai';
import '../styles/style.css'
const Navbar = () => {
    return (    
        <>
        <nav>
            <p className="logo">
                Input2Readme
            </p>
            <ul className="nav-links">
                <li>
                    <AiOutlineStar className="icon"/>
                    <p>Star this repository</p>
                </li>
                <li>
                    <AiOutlineFork className="icon"/>
                    <p>Fork this repository</p>
                </li>
            </ul>
        </nav>
        </>
    );
}
export default Navbar;