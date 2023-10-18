import React from 'react';
import 
{BsHeptagon, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsClipboardFill, BsFillPatchCheckFill, BsChatDotsFill}
 from 'react-icons/bs'

function Sidemenu({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsHeptagon  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="./Productsell.js">
                    <BsFillArchiveFill className='icon'/> Product
                </a>
            </li>
            
            <li className='sidebar-list-item'>
                <a href="./Header">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="./Header">
                    <BsClipboardFill className='icon'/> Income
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="./Header">
                    <BsFillPatchCheckFill className='icon'/> Promote
                </a>
            </li>
           
            <li className='sidebar-list-item'>
                <a href="./Header">
                    <BsChatDotsFill className='icon'/> Helps
                </a>
            </li>
           
        </ul>
    </aside>
  )
}

export default Sidemenu;