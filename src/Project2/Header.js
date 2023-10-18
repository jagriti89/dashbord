
import React from 'react'
import { BsSearch, BsJustify } from 'react-icons/bs'
import { FaHandSpock } from "react-icons/fa";

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <span>hello Jagriti <FaHandSpock />
        </span>
      </div>
      <div className='header-right'>
        <input type="text"></input>
        <BsSearch className='icon' />

        {/*             
            <BsPersonCircle className='icon'/> */}
      </div>
    </header>
  )
}

export default Header