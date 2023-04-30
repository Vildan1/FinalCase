import React from 'react';
import Search from "../Search/Search";
import "./Header.css";
import coverImg from "../../images/bgheader.jpg";
const Header = () => {
  return (

        <header className='header'>
            <div className='header-content flex flex-c text-center text-white'>
                <div className='header-img'>
                <img src={coverImg} className='header-coverImg'></img><br />
                </div>
                <Search />
            </div>
        </header>

  )
}

export default Header