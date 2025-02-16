import React, { useRef } from 'react'
import navCSS from './../Components/Nav/Nav.module.css'

const Nav = () => {

  const menu = useRef();
  const MenHandler =()=> {
    menu.current.classList.toggle(navCSS.activeMenu);
  }
  return (
    <div className={navCSS.Nav_wrapper}>
        <div className={navCSS.logo}>
            <a href="#">ONEGO</a>
        </div>

        <ul ref={menu}> 
            <li><a href="#">Home</a></li>
            <li><a href="#">Transport</a></li>
            <li><a href="#">AI BOT</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Search</a></li>
        </ul>

        <div className={navCSS.nav_btns}>
            <div className={navCSS.search_wrapper}>
                <i className='ri-search-line'/>
                <input type='text' placeholder='Search Places'/>
            </div>

            <i className='ri-menu-2-line' onClick={MenHandler} id={navCSS.bars}/>
        </div>
    </div>
  )
}

export default Nav
