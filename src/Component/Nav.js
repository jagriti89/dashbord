import React from 'react';
import '../App.css'
function Nav(){
    return(
        <div className='navbar'>
            <div className="navimglogo">
                <img className='img' src="../image.jpg" alt="contactLogo"></img>
            </div>
            <div className='contactlink'>
                <ul>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </ul>
                </div>

        </div>
    )
}
export default Nav;